import { SendEmailRequest } from "aws-sdk/clients/ses";
import UserEmailTemplate from "../templates/user";
import { DarkTheme as Theme } from "../../theme"; //TODO: MOve to CMS
import getCMSConfig from "../utils/getCMSConfig";

interface IUserEmailParams {
  name: string;
  email: string;
}

// const senderName = BasicInfo.name;

const UserEmailParams = async ({
  name,
  email,
}: IUserEmailParams): Promise<SendEmailRequest> => {
  const configData = await getCMSConfig();
  const senderName = configData.api_sender_name;
  const senderEmail = configData.api_sender_email_address;
  const replyToAddress = `${senderName} <${configData.api_reply_to_address}>`;
  const domain = configData.api_sender_email_domain;

  const userEmailTemplateHtml = UserEmailTemplate({
    domain,
    senderName: senderName,
    themeColor: Theme.palette.primary.main,
  });

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
