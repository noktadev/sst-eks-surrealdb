import { Stack } from "sst/constructs";
import * as eks from "aws-cdk-lib/aws-eks";
import * as ec2 from "aws-cdk-lib/aws-ec2";

export class EksStack extends Stack {
  constructor(scope: any, id: string, props?: any) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, "SurrealDBVPC", {
      maxAzs: 3,
      natGateways: 1,
    });

    // Create EKS Cluster
    const cluster = new eks.Cluster(this, "SurrealDBCluster", {
      vpc,
      version: eks.KubernetesVersion.V1_27,
      defaultCapacity: 2,
      defaultCapacityInstance: ec2.InstanceType.of(
        ec2.InstanceClass.M5,
        ec2.InstanceSize.LARGE
      ),
    });

    // Add TiKV node group
    cluster.addNodegroupCapacity("TiKVNodeGroup", {
      instanceTypes: [
        ec2.InstanceType.of(ec2.InstanceClass.R5B, ec2.InstanceSize.XLARGE2),
      ],
      minSize: 3,
      maxSize: 3,
      desiredSize: 3,
      labels: {
        "dedicated": "tikv",
      },
      taints: [
        {
          key: "dedicated",
          value: "tikv",
          effect: eks.TaintEffect.NO_SCHEDULE,
        },
      ],
    });

    // Add PD node group
    cluster.addNodegroupCapacity("PDNodeGroup", {
      instanceTypes: [
        ec2.InstanceType.of(ec2.InstanceClass.C5, ec2.InstanceSize.XLARGE),
      ],
      minSize: 3,
      maxSize: 3,
      desiredSize: 3,
      labels: {
        "dedicated": "pd",
      },
      taints: [
        {
          key: "dedicated",
          value: "pd",
          effect: eks.TaintEffect.NO_SCHEDULE,
        },
      ],
    });

    // Add TiDB node group
    cluster.addNodegroupCapacity("TiDBNodeGroup", {
      instanceTypes: [
        ec2.InstanceType.of(ec2.InstanceClass.C5, ec2.InstanceSize.XLARGE2),
      ],
      minSize: 2,
      maxSize: 2,
      desiredSize: 2,
      labels: {
        "dedicated": "tidb",
      },
      taints: [
        {
          key: "dedicated",
          value: "tidb",
          effect: eks.TaintEffect.NO_SCHEDULE,
        },
      ],
    });
  }
} 