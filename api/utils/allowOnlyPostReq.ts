// import { NowRequest } from "@now/node";
import { APIGatewayEvent } from "aws-lambda";
import ErrorResponseModel from "../classes/errorResponse";
import ErrorCodesMessages from "./ErrorCodesMessages";

export const allowOnlyPostReq = (request: APIGatewayEvent): void => {
    if (request && request.httpMethod && request.httpMethod.toLowerCase() != "post") {
        const { invalidRequestMethod } = ErrorCodesMessages;
        throw new ErrorResponseModel({
            code: invalidRequestMethod.code,
            message: invalidRequestMethod.message,
            statusCode: invalidRequestMethod.statusCode,
        });
    }
};
