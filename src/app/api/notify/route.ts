import type { NextRequest } from "next/server";
import ErrorResponseModel from "../../../api-utils/classes/errorResponse";
import HostEmailParams from "../../../api-utils/emailParams/host";
import UserEmailParams from "../../../api-utils/emailParams/user";
import { allowOnlyPostReq } from "../../../api-utils/utils/allowOnlyPostReq";
import ErrorCodesMessages from "../../../api-utils/utils/ErrorCodesMessages";
import sendEmail from "../../../api-utils/utils/sendEmail";

interface IRequestBody {
    //To:
    email: string;
    message: string;
    name: string;
}

export async function POST(request: NextRequest): Promise<Response> {
    try {
        //Allow only POST requests
        allowOnlyPostReq(request);

        //Form the request Body
        const body = (await request.json()) as IRequestBody;
        //send mails using templates
        //send an email to the host about being contacted
        await sendEmail(
            await HostEmailParams({
                email: body.email,
                name: body.name,
                message: body.message,
            })
        );
        //send an email to the user for about the confirmation
        await sendEmail(
            await UserEmailParams({ email: body.email, name: body.name })
        );

        return Response.json({
            success: true,
            message: "Notifications sent successfully",
        });
    } catch (error) {
        console.log(error);
        if (error instanceof ErrorResponseModel) {
            return Response.json(
                {
                    errCode: error.code,
                    message: error.message,
                },
                {
                    statusText:
                        error.statusText != undefined
                            ? error.statusText
                            : undefined,
                }
            );
        } else {
            const { unknownError } = ErrorCodesMessages;
            return Response.json(
                {
                    errCode: unknownError.code,
                    message: unknownError.message,
                    error,
                },
                {
                    status: unknownError.statusCode,
                }
            );
        }
    }
}
