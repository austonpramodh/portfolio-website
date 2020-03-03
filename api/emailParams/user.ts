import { SendEmailRequest } from "aws-sdk/clients/ses";
import UserEmailTemplate from "../templates/user";

interface IUserEmailParams {
    name: string;
    email: string;
}

const senderName = process.env.SENDER_NAME || "Auston Pramodh Barboza";
const senderEmail = process.env.SENDER_EMAIL || "notification@auston.dev";

const userEmailTemplateHtml = UserEmailTemplate({
    domain: process.env.DOMAIN || "auston.dev",
    senderName,
    themeColor: process.env.THEME_COLOR || "#e91e63",
});

const UserEmailParams = ({ name, email }: IUserEmailParams): SendEmailRequest => {
    return {
        Source: `${senderName} <${senderEmail}>`,
        Destination: { ToAddresses: [`${name} <${email}>`] },
        ReplyToAddresses: [`${senderName} <${process.env.REPLY_TO_EMAIL}>`],
        Message: {
            Body: { Html: { Data: userEmailTemplateHtml, Charset: "UTF-8" } },
            Subject: { Data: "Thank you for contacting.", Charset: "UTF-8" },
        },
    };
};

export default UserEmailParams;
