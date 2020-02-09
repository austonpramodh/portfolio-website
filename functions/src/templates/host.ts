import { SES } from "aws-sdk";

export interface IHostNotificationTemplate {
    sourceAddress: string;
    replyToAddress: string;
    toAddress: string;
    toName: string;
    message: string;
    sourceName: string;
}

const templateHtml = (message: string) => `IT IS <strong>Working</strong>! Person tried contacting you!  ${message}`;

type HostNotificationTemplate = (params: IHostNotificationTemplate) => SES.SendEmailRequest;

const HostNotificationTemplate: HostNotificationTemplate = ({
    replyToAddress,
    toAddress,
    message,
    sourceAddress,
    sourceName,
}) => ({
    Source: `${sourceName} <${sourceAddress}>`,
    ReturnPath: replyToAddress,
    Destination: { ToAddresses: [toAddress] },
    ReplyToAddresses: [`${sourceName} <${replyToAddress}>`],
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: templateHtml(message),
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: `New request from ${sourceName}`,
        },
    },
});

export default HostNotificationTemplate;
