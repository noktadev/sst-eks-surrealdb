/// <reference path="./.sst/platform/config.d.ts" />

import { SSTConfig } from "sst";
import { EksStack } from "./src/EksStack";

export default {
  config(_input) {
    return {
      name: "sst-eks-surrealdb",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(EksStack);
  },
} satisfies SSTConfig;

// Add SurrealDB resource
app.addResource("SurrealDB", {
  type: "Custom",
  properties: {
    URL: process.env.SURREALDB_URL,
    USER: process.env.SURREALDB_USER,
    PASS: process.env.SURREALDB_PASS,
    NS: process.env.SURREALDB_NS,
    DB: process.env.SURREALDB_DB,
  },
});

// Add Hono service
app.addService("HonoService", {
  type: "Function",
  handler: "examples/hono-service/index.handler",
  environment: {
    SURREALDB_URL: process.env.SURREALDB_URL,
    SURREALDB_USER: process.env.SURREALDB_USER,
    SURREALDB_PASS: process.env.SURREALDB_PASS,
    SURREALDB_NS: process.env.SURREALDB_NS,
    SURREALDB_DB: process.env.SURREALDB_DB,
  },
});
