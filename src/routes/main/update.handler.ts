import middy from "@middy/core";
import validatorMiddleware from "@middy/validator";
import { transpileSchema } from "@middy/validator/transpile";
import { IUpdate, updateSchema } from "./schema";
import { APIGatewayProxyResult } from "aws-lambda";
import { routeJSONResponse } from "@libs/routeResponse";
import { Event } from "@src/libs/api-gateway";
import { ApiSecutiryCognitoFactory } from "@src/clients";

const updateHandler = async (
  event: Event<IUpdate, void, void>
): Promise<APIGatewayProxyResult> => {
  try {
    const { body } = event;
    const { update } = ApiSecutiryCognitoFactory;
    const updated = await update(body);
    const response = routeJSONResponse({ ...updated });
    return response;
  } catch (error) {
    const body = JSON.stringify(error instanceof Error ? error.message : error);
    const response = routeJSONResponse({ body }, 500);
    return response;
  }
};

const UpdateHandler = middy()
  .use(validatorMiddleware({ eventSchema: transpileSchema(updateSchema) }))
  .handler(updateHandler);

export { UpdateHandler };
