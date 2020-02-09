import { SES } from "aws-sdk";

export interface IUserNotificationTemplate {
    sourceEmail: string;
    sourceName: string;
    replyToAddress: string;
    toName: string;
    toAddress: string;
    message: string;
}

const templateHtml = (sourceName: string, message: string) => `Thank you for contacting <strong>${sourceName}</strong>
<br/>
Your Message: ${message}
`;

type UserNotificationTemplate = (params: IUserNotificationTemplate) => SES.SendEmailRequest;

const UserNotificationTemplate: UserNotificationTemplate = ({
    sourceEmail,
    toAddress,
    replyToAddress,
    sourceName,
    message,
}) => ({
    Source: `${sourceName} <${sourceEmail}>`,
    ReturnPath: replyToAddress,
    Destination: { ToAddresses: [toAddress] },
    ReplyToAddresses: [`${sourceName} <${replyToAddress}>`],
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: templateHtml(sourceName, message),
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: `Thank you for contacting ${sourceName}!`,
        },
    },
});

export default UserNotificationTemplate;
