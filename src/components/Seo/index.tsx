import React, { useEffect } from "react";
import Head from "next/head";
import { useStaticDataContext } from "../StaticDataContext";
import * as prismicH from "@prismicio/helpers";
import queryString from "query-string";

interface SeoProps {
    title?: string;
    lang?: string;
    meta?: ({ name: string; content: string } | { property: string; content: string })[];
    description?: string;
}

const SEO: React.FunctionComponent<SeoProps> = ({ description = "", meta = [], title }) => {
    const { seoData } = useStaticDataContext();

    const keywords =
        seoData?.keywords
            .filter((keyword) => keyword.keyword)
            .map((keywordObj) => keywordObj.keyword)
            .join(",") || "";
    const pageDescription = description || seoData?.description || "";
    const domain = prismicH.asLink(seoData?.domain) || "https://auston.dev";

    const profile_picture = prismicH.asImageSrc(seoData?.image) || "";
    const profile_picture_alt = seoData?.image.alt || "Image Alt required!";
    const pageAuthor = seoData?.page_author || "Page Author Required!";
    //   Page Title
    let pageTitle = seoData?.page_title && title ? `${title} | ${seoData?.page_title}` : seoData?.page_title;

    if (!pageTitle) pageTitle = "Page Title required!";

    let faviconUrl = prismicH.asImageSrc(seoData?.favicon);

    if (!faviconUrl) {
        console.error("Plese set the Favicon on Prismic, Using default for now!");
        faviconUrl = "/favicon.ico";
    }

    useEffect(() => {
        const parsedUrl = queryString.parseUrl(profile_picture);
        // Add the mask and mask-bg query params to the image url
        parsedUrl.query.mask = "ellipse";
        parsedUrl.query["mask-bg"] = "696969";
        console.log(
            queryString.stringifyUrl({
                url: parsedUrl.url,
                query: parsedUrl.query,
            })
        );
    }, []);

    const multiplier = 4;
    const metaDataProfilePicture = queryString.stringifyUrl({
        url: profile_picture,
        query: {
            mask: "ellipse",
            "mask-bg": "696969",
            h: Math.round(128 * multiplier),
            w: Math.round(128 * multiplier),
            "pad-left": Math.round(8 * multiplier),
            "pad-right": Math.round(8 * multiplier),
            "pad-top": Math.round(8 * multiplier),
            "pad-bottom": Math.round(8 * multiplier),
        },
    });

    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-string-refs */}
                <link ref="canonical" href={domain} />
                <link rel="icon" type="image/x-icon" href={faviconUrl} />
                <title>{pageTitle}</title>
                {[
                    {
                        name: `description`,
                        content: pageDescription,
                    },
                    {
                        property: `og:title`,
                        content: pageTitle,
                    },
                    {
                        property: `og:description`,
                        content: pageDescription,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        property: "og:image",
                        content: metaDataProfilePicture,
                    },
                    {
                        property: "og:url",
                        content: domain,
                    },
                    {
                        property: "og:site_name",
                        content: pageTitle,
                    },
                    {
                        name: `twitter:card`,
                        content: pageDescription,
                    },
                    {
                        name: `twitter:creator`,
                        content: pageAuthor,
                    },
                    {
                        name: `twitter:title`,
                        content: pageTitle,
                    },
                    {
                        name: `twitter:description`,
                        content: pageDescription,
                    },
                    {
                        name: "twitter:image:alt",
                        content: profile_picture_alt,
                    },
                    {
                        name: "keywords",
                        content: keywords,
                    },
                    {
                        name: "image",
                        content: metaDataProfilePicture,
                    },
                ]
                    .concat(meta)
                    .map((eachMeta, i) => (
                        <meta key={`meta-${i}`} {...eachMeta} />
                    ))}
                {/* <meta property="og:image:width" content={`${Math.round(128 * multiplier)}`} />
                <meta property="og:image:height" content={`${Math.round(128 * multiplier)}`} /> */}
            </Head>
        </>
    );
};

export default SEO;
