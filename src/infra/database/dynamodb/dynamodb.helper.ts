import { getCredentials } from "@src/infra/credentials/aws";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { aws } from "dynamoose";

const isLocal = process?.env?.IS_OFFLINE;

if (isLocal) {
  const creds = getCredentials("rogerfelipensk");
  aws.ddb.set(
    new DynamoDB({
      region: "us-east-1",
      credentials: creds,
    })
  );
}
