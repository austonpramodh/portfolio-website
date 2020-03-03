import { NowRequest } from "@now/node";
import ErrorResponseModel from "../classes/errorResponse";
import ErrorCodesMessages from "./ErrorCodesMessages";

export const allowOnlyPostReq = (request: NowRequest): void => {
    if (request && request.method && request.method.toLowerCase() != "post") {
        const { invalidRequestMethod } = ErrorCodesMessages;
        throw new ErrorResponseModel({
            code: invalidRequestMethod.code,
            message: invalidRequestMethod.message,
            statusCode: invalidRequestMethod.statusCode,
        });
    }
};
