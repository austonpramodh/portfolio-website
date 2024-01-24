// pages/api/revalidate.js
// https://prismic.io/blog/nextjs-sites-on-demand-isr
import * as prismicH from "@prismicio/helpers";
import { NextApiHandler } from "next";

// Import your app's Link Resolver (if your app uses one)
import { linkResolver, createClient } from "../../prismicio";

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
const handler: NextApiHandler = async (req, res) => {
    // Check for secret to confirm this is a valid request
    if (req.body.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
        return res.status(401).json({ message: "Invalid token" });
    }

    // test-trigger
    if (req.body.type === "test-trigger") {
        return res.json({ message: "Test trigger received" });
    }

    if (req.body.type === "api-update" && req.body.documents.length > 0) {
        // If you have a `createClient()` function defined elsewhere in
        // your app, use that instead
        const client = createClient();

        // Get a list of URLs for any new, updated, or deleted documents
        const documents = await client.getAllByIDs(req.body.documents);
        console.log(JSON.stringify(documents));

        const nonPageDocuments = documents.filter((doc) => doc.type !== "page");
        const pageDocuments = documents.filter((doc) => doc.type === "page");
        const urls: string[] = [];
        // if there are non page documents, then revalidate all pages including the page documents
        if (nonPageDocuments.length > 0) {
            // fetch all pages uids
            const pages = await client.getAllByType("page");
            for (const page of pages) {
                const url = prismicH.asLink(page, linkResolver);
                if (url) {
                    urls.push(url);
                }
            }

            // add static pages
            const staticPages = ["/", "/resume"];
            urls.push(...staticPages);
        }

        // add specific page documents if there are no non page documents since we don't want to revalidate all pages
        if (nonPageDocuments.length === 0 && pageDocuments.length > 0) {
            // Otherwise, only revalidate the URLs for the page documents
            for (const doc of pageDocuments) {
                const url = prismicH.asLink(doc, linkResolver);
                if (url) {
                    urls.push(url);
                }
            }
        }

        try {
            // Revalidate the URLs for those documents

            console.log("revalidating urls: ", urls.join(","));
            await Promise.all(urls.map(async (url) => await res.revalidate(url!)));

            return res.json({ revalidated: true });
        } catch (err) {
            // If there was an error, Next.js will continue to show
            // the last successfully generated page
            return res.status(500).send("Error revalidating");
        }
    }

    // If the request's body is unknown, tell the requester
    return res.status(400).json({ message: "Invalid body" });
};

export default handler;
