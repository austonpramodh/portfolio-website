import { Handler, APIGatewayEvent } from "aws-lambda";
import { allowOnlyPostReq } from "./utils/allowOnlyPostReq";
import ErrorResponseModel from "./classes/errorResponse";
import ErrorCodesMessages from "./utils/ErrorCodesMessages";
import sendEmail from "./utils/sendEmail";
import UserEmailParams from "./emailParams/user";
import HostEmailParams from "./emailParams/host";
import validateBody from "./utils/validateBody";

interface HandlerResponse {
    statusCode: number;
    body: string;
    headers: { [key: string]: string };
}

export interface IRequestBody {
    //To:
    email: string;
    message: string;
    name: string;
}

const handler: Handler = async (event: APIGatewayEvent) => {
    try {
        //Allow only POST requests
        allowOnlyPostReq(event);
        const rawBody = event.body;

        const body = JSON.parse(rawBody || "{}") as IRequestBody;

        await validateBody(body);

        await sendEmail(HostEmailParams({ email: body.email, name: body.name, message: body.message }));
        await sendEmail(UserEmailParams({ email: body.email, name: body.name }));

        const response: HandlerResponse = {
            body: JSON.stringify({ success: true, message: "Notifications sent successfully" }),
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
        };
        return response;
    } catch (error) {
        if (error instanceof ErrorResponseModel) {
            const { code, message, statusCode, ...restError } = error;
            const response: HandlerResponse = {
                body: JSON.stringify({
                    errCode: code,
                    message: message,
                    ...restError,
                }),
                statusCode: statusCode,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            return response;
        } else {
            const { unknownError } = ErrorCodesMessages;

            const response: HandlerResponse = {
                body: JSON.stringify({
                    errCode: unknownError.code,
                    message: unknownError.message,
                    error:
                        error instanceof Error
                            ? { name: error.name, message: error.message, stack: error.stack }
                            : error,
                }),
                statusCode: unknownError.statusCode,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            return response;
        }
    }
};

export { handler };
