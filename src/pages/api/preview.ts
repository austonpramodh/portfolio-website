import * as prismicNext from "@prismicio/next";
import { NextApiHandler } from "next";

import { createClient, linkResolver } from "../../prismicio";

const handler: NextApiHandler = async (req, res) => {
    const client = createClient({ req });

    prismicNext.setPreviewData({ req, res });

    await prismicNext.redirectToPreviewURL({ req, res, client, linkResolver });
};

export default handler;
