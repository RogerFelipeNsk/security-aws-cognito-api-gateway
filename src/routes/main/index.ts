import middy from "@middy/core";
import httpRouterHandler from "@middy/http-router";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { CreateHandler } from "./create.handler";
import { UpdateHandler } from "./update.handler";
import httpJsonBodyParser from "@middy/http-json-body-parser";

const IS_OFFLINE = process.env.IS_OFFLINE;
const routes = [
  {
    method: "POST" as const,
    path: "/",
    handler: CreateHandler,
  },
  {
    method: "PUT" as const,
    path: "/",
    handler: UpdateHandler,
  },
];

const handler = middy()
  .before(async (request: any) => {
    try {
      if (!IS_OFFLINE) {
        const {
          event: {
            requestContext: {
              authorizer: { claims },
            },
          },
        } = request;
        const groups = claims?.["cognito:groups"]?.split(",");
        if (!groups) throw new Error("Unauthorized");
        const validate =
          groups.includes("UserGroup") && groups.includes("Private");
        if (!validate) {
          throw new Error("Unauthorized");
        }
        console.log("REQUEST BEFORE AUTH: ", groups, validate);
      }
    } catch (error) {
      console.log("ERROR AUTH MIDDLEWARE BEFORE MIDDY: ", error);
      request.response = {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized" }),
      };
      return request.response;
    }
  })
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .handler(httpRouterHandler(routes));

export { handler };
