import middy from "@middy/core";
import validatorMiddleware from "@middy/validator";
import { APIGatewayProxyResult } from "aws-lambda";
import { transpileSchema } from "@middy/validator/transpile";
import { routeJSONResponse } from "@libs/routeResponse";

import { ICreate, createSchema } from "./schema";
import { ApiSecutiryCognitoFactory } from "@src/clients";
import { Event } from "@src/libs/api-gateway";
import { randomUUID } from "crypto";

const createHandler = async (
  event: Event<ICreate, void, void>
): Promise<APIGatewayProxyResult> => {
  try {
    const { body } = event;
    const { create } = ApiSecutiryCognitoFactory;
    const createBody = { ...body, SK: randomUUID() };
    const created = await create(createBody);
    const response = routeJSONResponse({ ...created });
    return response;
  } catch (error) {
    const body = JSON.stringify(error instanceof Error ? error.message : error);
    const response = routeJSONResponse({ body }, 500);
    return response;
  }
};

const CreateHandler = middy()
  .use(validatorMiddleware({ eventSchema: transpileSchema(createSchema) }))
  .handler(createHandler);

export { CreateHandler };
