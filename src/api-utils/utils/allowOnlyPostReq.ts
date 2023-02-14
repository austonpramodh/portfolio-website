import type { NextApiRequest } from "next";
import ErrorResponseModel from "../classes/errorResponse";
import ErrorCodesMessages from "./ErrorCodesMessages";

export const allowOnlyPostReq = (request: NextApiRequest): void => {
  if (request && request.method && request.method.toLowerCase() != "post") {
    const { invalidRequestMethod } = ErrorCodesMessages;
    throw new ErrorResponseModel({
      code: invalidRequestMethod.code,
      message: invalidRequestMethod.message,
      statusCode: invalidRequestMethod.statusCode,
    });
  }
};
