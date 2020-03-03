import { NowRequest, NowResponse } from "@now/node";
import { allowOnlyPostReq } from "./utils/allowOnlyPostReq";
import ErrorResponseModel from "./classes/errorResponse";
import ErrorCodesMessages from "./utils/ErrorCodesMessages";
import sendEmail from "./utils/sendEmail";
import UserEmailParams from "./emailParams/user";
import HostEmailParams from "./emailParams/host";

interface IRequestBody {
    //To:
    email: string;
    message: string;
    name: string;
}

export default async function(request: NowRequest, response: NowResponse): Promise<void> {
    try {
        //Allow only POST requests
        allowOnlyPostReq(request);

        //Form the request Body
        const body = (await request.body) as IRequestBody;
        //send mails using templates
        //send an email to the host about being contacted
        await sendEmail(HostEmailParams({ email: body.email, name: body.name, message: body.message }));
        //send an email to the user for about the confirmation
        await sendEmail(UserEmailParams({ email: body.email, name: body.name }));

        response.json({ success: true, message: "Notifications sent successfully" });
        return;
    } catch (error) {
        if (error instanceof ErrorResponseModel) {
            if (error.statusText != undefined) response.statusMessage = error.statusText;
            response.status(error.statusCode).json({
                errCode: error.code,
                message: error.message,
            });
            return;
        } else {
            const { unknownError } = ErrorCodesMessages;

            response.status(unknownError.statusCode).json({
                errCode: unknownError.code,
                message: unknownError.message,
                error,
            });
            return;
        }
    }
}
