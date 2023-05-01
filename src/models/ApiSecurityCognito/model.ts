import { model } from "dynamoose";
import { ApiSecutiryCognitoSchema } from "./schemas";
import { IModel } from "./types";

const tableName = process.env.TABLE_NAME;

if (!tableName) {
  throw "Cannot find TABLE_NAME environment variable.";
}

const ApiSecutiryCognitoModel = model<IModel>(
  tableName,
  ApiSecutiryCognitoSchema,
  {
    throughput: "ON_DEMAND",
    waitForActive: {
      enabled: false,
    },
    create: false,
  }
);

export { ApiSecutiryCognitoModel };
