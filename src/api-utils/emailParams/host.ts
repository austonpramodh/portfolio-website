import { SendEmailRequest } from "aws-sdk/clients/ses";
import HostEmailTemplate from "../templates/host";
import { DarkTheme as Theme } from "../../theme"; //TODO: Move Theme to CMS
import getCMSConfig from "../utils/getCMSConfig";

interface IHostEmailParams {
    name: string;
    email: string;
    message: string;
}

const HostEmailParams = async ({ name, email, message }: IHostEmailParams): Promise<SendEmailRequest> => {
    const configData = await getCMSConfig();
    const domain = configData.api_sender_email_domain;
    const senderEmail = configData.api_sender_email_address;
    const senderName = configData.api_sender_name;
    const senderReplyToAddress = configData.api_reply_to_address;
    const hostEmailTemplateHtml = HostEmailTemplate({
        domain,
        themeColor: Theme.palette.primary.main,
        contact: email,
        message,
        name,
        senderName,
    });

    return {
        Source: `${senderName} <${senderEmail}>`,
        Destination: { ToAddresses: [`${senderName} <${senderReplyToAddress}>`] },
        ReplyToAddresses: [`${name} <${email}>`],
        Message: {
            Body: { Html: { Data: hostEmailTemplateHtml, Charset: "UTF-8" } },
            Subject: { Data: "Someone just tried contacting you.", Charset: "UTF-8" },
        },
    };
};

export default HostEmailParams;
