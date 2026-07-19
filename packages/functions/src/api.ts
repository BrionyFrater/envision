import { Example } from "@envision/core/example";
import type { Handler } from "aws-lambda";
import { Resource } from "sst";

export const handler: Handler = async (_event) => ({
  body: `${Example.hello()} Linked to ${Resource.MyBucket.name}.`,
  statusCode: 200,
});
