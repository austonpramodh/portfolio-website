import { SendEmailRequest } from "aws-sdk/clients/ses";
import HostEmailTemplate from "../templates/host";

interface IHostEmailParams {
    name: string;
    email: string;
    message: string;
}

const senderName = process.env.SENDER_NAME || "Auston Pramodh Barboza";
const senderEmail = process.env.SENDER_EMAIL || "notification@auston.dev";

const HostEmailParams = ({ name, email, message }: IHostEmailParams): SendEmailRequest => {
    const hostEmailTemplateHtml = HostEmailTemplate({
        domain: process.env.DOMAIN || "auston.dev",
        themeColor: process.env.THEME_COLOR || "#e91e63",
        contact: email,
        message,
        name,
    });
    return {
        Source: `${senderName} <${senderEmail}>`,
        Destination: { ToAddresses: [`${senderName} <${process.env.REPLY_TO_EMAIL}>`] },
        ReplyToAddresses: [`${name} <${email}>`],
        Message: {
            Body: { Html: { Data: hostEmailTemplateHtml, Charset: "UTF-8" } },
            Subject: { Data: "Someone just tried contacting you.", Charset: "UTF-8" },
        },
    };
};

export default HostEmailParams;
