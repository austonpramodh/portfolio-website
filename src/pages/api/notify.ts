import type { NextApiRequest, NextApiResponse } from "next";
import { allowOnlyPostReq } from "../../api-utils/utils/allowOnlyPostReq";
import ErrorResponseModel from "../../api-utils/classes/errorResponse";
import ErrorCodesMessages from "../../api-utils/utils/ErrorCodesMessages";
import sendEmail from "../../api-utils/utils/sendEmail";
import UserEmailParams from "../../api-utils/emailParams/user";
import HostEmailParams from "../../api-utils/emailParams/host";

interface IRequestBody {
  //To:
  email: string;
  message: string;
  name: string;
}

async function notify(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    //Allow only POST requests
    allowOnlyPostReq(request);

    //Form the request Body
    const body = (await request.body) as IRequestBody;
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

    response.json({
      success: true,
      message: "Notifications sent successfully",
    });
    return;
  } catch (error) {
    if (error instanceof ErrorResponseModel) {
      if (error.statusText != undefined)
        response.statusMessage = error.statusText;
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

export default notify;
