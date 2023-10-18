import { exitPreview } from "@prismicio/next";
import { NextApiHandler } from "next";

export const handler: NextApiHandler = (req, res) => {
    return exitPreview({ req, res });
};
