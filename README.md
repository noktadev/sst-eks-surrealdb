# SST/Pulumi SurrealDB on TiKV Challenge

## 🏆 Challenge Overview

This repository hosts an open challenge to create a successful deployment script
for SurrealDB on TiKV using SST (Serverless Stack) or Pulumi. The first person
to complete this challenge with a working solution will be awarded $100.

## 🎯 Challenge Requirements

1. Create a deployment script using either SST or Pulumi that successfully
   deploys SurrealDB on TiKV cluster
2. Provide successful deployment logs
3. Demonstrate a simple connection to a Hono service
4. Include clear documentation

## 📋 Prerequisites

- AWS Account with appropriate permissions
- AWS CLI configured
- Node.js and pnpm installed
- Basic understanding of Kubernetes and AWS EKS
- Knowledge of SST or Pulumi

## 🚀 Getting Started

1. Fork this repository
2. Create a new branch for your solution
3. Implement your deployment script
4. Test the deployment
5. Create a pull request with:
   - Your deployment script
   - Successful deployment logs
   - Documentation
   - A simple Hono service example that connects to SurrealDB

## 📝 Documentation Requirements

Your solution should include:

1. Step-by-step setup instructions
2. Required environment variables
3. Infrastructure architecture diagram
4. Deployment process
5. Testing instructions
6. Troubleshooting guide

## 🔍 Reference

The official SurrealDB deployment guide for Amazon EKS can be found here:
[SurrealDB Amazon EKS Deployment Guide](https://surrealdb.com/docs/surrealdb/deployment/amazon)

## 🏗️ Project Structure

```
.
├── README.md
├── package.json
├── src/
│   └── (your deployment code)
├── examples/
│   └── (your Hono service example)
└── docs/
    └── (your documentation)
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-solution`)
3. Commit your changes (`git commit -m 'Add amazing solution'`)
4. Push to the branch (`git push origin feature/amazing-solution`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## 💰 Reward

The first person to successfully complete this challenge with a working solution
will be awarded $100. The solution must:

- Successfully deploy SurrealDB on TiKV
- Include working deployment logs
- Demonstrate a simple Hono service connection
- Provide clear documentation

## ⚠️ Important Notes

- Make sure to follow AWS best practices for security
- Include proper error handling in your deployment scripts
- Document any assumptions or limitations
- Include cleanup instructions for the deployed resources

## 🆘 Need Help?

Feel free to open an issue if you have any questions or need clarification about
the challenge requirements.
