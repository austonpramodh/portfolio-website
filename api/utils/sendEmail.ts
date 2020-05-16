import AWS, { AWSError } from "aws-sdk";
import { PromiseResult } from "aws-sdk/lib/request";
import { SendEmailResponse } from "aws-sdk/clients/ses";

const SESConfig: AWS.SES.ClientConfiguration = {
    apiVersion: "2010-12-01",
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_ACCESS_KEY,
    region: "us-east-1",
};

const mailer = new AWS.SES(SESConfig);

const sendEmail = (mailOptions: AWS.SES.SendEmailRequest): Promise<PromiseResult<SendEmailResponse, AWSError>> => {
    // console.log(mailOptions);
    return mailer.sendEmail(mailOptions).promise();
};

export default sendEmail;
