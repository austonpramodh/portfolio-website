import * as prismicNext from "@prismicio/next";
import { NextApiHandler } from "next";

import { createClient, linkResolver } from "../../prismicio";

const handler: NextApiHandler = async (req, res) => {
    console.log("Preview mode requested");

    const client = createClient({ req });

    prismicNext.setPreviewData({ req, res });

    await prismicNext.redirectToPreviewURL({ req, res, client, linkResolver });

    console.log("Preview mode enabled");
};

export default handler;
