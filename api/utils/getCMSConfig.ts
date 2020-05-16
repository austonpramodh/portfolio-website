import Prismic from "prismic-javascript";

const PrismicConfig = {
    apiEndpoint: `https://${process.env.PRISMIC_REPOSITORY_NAME}.prismic.io/api/v2`,

    // -- Access token if the Master is not open
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,

    // -- Links resolution rules
    // This function will be used to generate links to Prismic.io documents
    // As your project grows, you should update this function according to your routes
    // linkResolver(doc, ctx) {
    //     if (doc.type === "test") return `/page/${doc.uid}`;
    //     return "/";
    // },
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
    return data;
};

export default getCMSConfig();
