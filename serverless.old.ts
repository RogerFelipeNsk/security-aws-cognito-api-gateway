import type { AWS } from "@serverless/typescript";

import custom from "./serverless.config/custom";
import constructs from "./serverless.config/constructs";

import main from "@functions/main";

interface AWSExtended extends AWS {
  constructs: any;
}

const serverlessConfiguration: AWSExtended = {
  service: "security-aws-cognito-api-gateway",
  frameworkVersion: "3",
  //useDotenv: true,
  plugins: [
    "serverless-dotenv-plugin",
    "serverless-esbuild",
    "serverless-lift",
    "serverless-add-api-key",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    profile: "rogerfelipensk",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  custom,
  constructs,
  // import the function via paths
  functions: { main },
  package: {
    individually: true,
    patterns: [
      "!node_modules/**",
      "!test/**",
      "!src/**/*.spec.ts",
      "!src/**/*.spec.js",
    ],
  },
};

module.exports = serverlessConfiguration;
