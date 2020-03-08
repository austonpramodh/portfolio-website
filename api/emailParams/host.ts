import { SendEmailRequest } from "aws-sdk/clients/ses";
import HostEmailTemplate from "../templates/host";
import Theme from "../../src/Theme";
import BasicInfo from "../../src/Constants/BasicInfo";

interface IHostEmailParams {
    name: string;
    email: string;
    message: string;
}

const senderName = BasicInfo.name;
const domain = process.env.DOMAIN || "auston.dev";
const senderEmail = process.env.SENDER_EMAIL || `notification@${domain}`;

const HostEmailParams = ({ name, email, message }: IHostEmailParams): SendEmailRequest => {
    const hostEmailTemplateHtml = HostEmailTemplate({
        domain,
        themeColor: Theme.palette.primary.main,
        contact: email,
        message,
        name,
    });
    return {
        Source: `${senderName} <${senderEmail}>`,
        Destination: { ToAddresses: [`${senderName} <${BasicInfo.email}>`] },
        ReplyToAddresses: [`${name} <${email}>`],
        Message: {
            Body: { Html: { Data: hostEmailTemplateHtml, Charset: "UTF-8" } },
            Subject: { Data: "Someone just tried contacting you.", Charset: "UTF-8" },
        },
    };
};

export default HostEmailParams;
