import { createClient } from "../../prismicio";

const client = createClient();

interface PrismicData {
  api_sender_name: string;
  api_sender_email_domain: string;
  api_reply_to_address: string;
  api_sender_email_address: string;
}

const getCMSConfig = async (): Promise<PrismicData> => {
  const data = (await client.getSingle("api_config")).data;
  if (
    data.api_sender_name === null ||
    data.api_sender_email_domain === null ||
    data.api_reply_to_address === null ||
    data.api_sender_email_address === null
  ) {
    throw new Error("API Config Empty");
  }
  return {
    api_sender_name: data.api_sender_name,
    api_sender_email_domain: data.api_sender_email_domain,
    api_reply_to_address: data.api_reply_to_address,
    api_sender_email_address: data.api_sender_email_address,
  };
};

export default getCMSConfig;
