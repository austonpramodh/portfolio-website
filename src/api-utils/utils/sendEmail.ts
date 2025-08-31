import {
    SendEmailCommand,
    SendEmailCommandInput,
    SendEmailResponse,
    SESClient,
    SESClientConfig,
} from "@aws-sdk/client-ses";

const SESConfig: SESClientConfig = {
    apiVersion: "2010-12-01",
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SES_ACCESS_KEY!,
    },
};

const client = new SESClient(SESConfig);

export const sendEmail = (
    mailOptions: SendEmailCommandInput
): Promise<SendEmailResponse> => {
    return client.send(new SendEmailCommand(mailOptions));
};

export default sendEmail;
