const custom = {
  esbuild: {
    bundle: true,
    minify: false,
    sourcemap: true,
    exclude: ["aws-sdk"],
    target: "node18",
    define: { "require.resolve": undefined },
    platform: "node",
    concurrency: 10,
  },
  parameters: {
    API_KEYS: "${ssm:/cursos/api-keys}",
  },
  cognitoConfig: {
    local: {
      arn: undefined,
    },
    deploy: {
      arn: "arn:aws:cognito-idp:us-east-1:726848287115:userpool/us-east-1_lIIaUkAAp",
    },
  },
  apiKeys: [
    {
      name: "security-aws-cognito-api-gateway-api-key",
      value: "${self:custom.parameters.API_KEYS.${self:service}}",
      description: "Chave de api de teste do curso",
      usagePlan: {
        name: "security-aws-cognito-api-gateway-usage-plan",
        description: "usage plan for API_KEY",
        throttle: {
          burstLimit: 10,
          rateLimit: 5,
        },
      },
    },
  ],
};

export default custom;
