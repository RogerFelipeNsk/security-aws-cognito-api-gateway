import { createSchema, updateSchema } from "./schema";
import { handlerPath } from "@libs/handler-resolver";
const isLocal = process.env.IS_OFFLINE;
interface IHandler {
  handler: string;
  events: any;
  environment?: { [key: string]: string };
}

let handler: IHandler = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "/",
        request: {
          schemas: {
            "application/json": createSchema,
          },
        },
        authorizer: "${self:custom.cognitoConfig.${sls:stage}.arn}",
        private: true,
      },
    },
    {
      http: {
        method: "put",
        path: "/",
        request: {
          schemas: {
            "application/json": updateSchema,
          },
        },
        authorizer: "${self:custom.cognitoConfig.${sls:stage}.arn}",
        private: true,
      },
    },
  ],
};

if (!!isLocal) {
  handler.environment = {
    TABLE_NAME: "${construct:genericTable.tableName}",
    TABLE_STREAM_ARN: "${construct:genericTable.tableStreamArn}",
  };
}
console.log(JSON.stringify(handler));
export default handler;
