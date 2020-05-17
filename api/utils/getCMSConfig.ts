/* eslint-disable @typescript-eslint/camelcase */
import Prismic from "prismic-javascript";

const PrismicConfig = {
    apiEndpoint: `https://${process.env.PRISMIC_REPOSITORY_NAME}.prismic.io/api/v2`,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
};

interface PrismicData {
    api_sender_name: string;
    api_sender_email_domain: string;
    api_reply_to_address: string;
    api_sender_email_address: string;
}

const getCMSConfig = async (): Promise<PrismicData> => {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { accessToken: PrismicConfig.accessToken });
    const data: PrismicData = (await api.query("", {})).results[0].data;
    return {
        api_sender_name: data.api_sender_name,
        api_sender_email_domain: data.api_sender_email_domain,
        api_reply_to_address: data.api_reply_to_address,
        api_sender_email_address: data.api_sender_email_address,
    };
};

export default getCMSConfig();
