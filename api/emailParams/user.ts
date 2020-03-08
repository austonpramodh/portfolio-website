import { SendEmailRequest } from "aws-sdk/clients/ses";
import UserEmailTemplate from "../templates/user";
import Theme from "../../src/Theme";
import BasicInfo from "../../src/Constants/BasicInfo";

interface IUserEmailParams {
    name: string;
    email: string;
}

const senderName = BasicInfo.name;
const domain = process.env.DOMAIN || "auston.dev";
const senderEmail = process.env.SENDER_EMAIL || `notification@${domain}`;
const replyToAddress = `${senderName} <${BasicInfo.email}>`;

const userEmailTemplateHtml = UserEmailTemplate({
    domain,
    senderName,
    themeColor: Theme.palette.primary.main,
});

const UserEmailParams = ({ name, email }: IUserEmailParams): SendEmailRequest => {
    const destination = `${name} <${email}>`;
    const source = `${senderName} <${senderEmail}>`;
    return {
        Source: source,
        Destination: { ToAddresses: [destination] },
        ReplyToAddresses: [replyToAddress],
        Message: {
            Body: { Html: { Data: userEmailTemplateHtml, Charset: "UTF-8" } },
            Subject: { Data: "Thank you for contacting.", Charset: "UTF-8" },
        },
    };
};

export default UserEmailParams;
