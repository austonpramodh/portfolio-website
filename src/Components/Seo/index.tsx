/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";

import StaticSEOData from "../../Utils/StaticDataHooks/SEO";

interface SeoProps {
    title?: string;
    lang?: string;
    meta?: ({ name: string; content: string } | { property: string; content: string })[];
    description?: string;
}

const SEO: React.SFC<SeoProps> = ({ description = "", meta = [], lang = "en-US", title }) => {
    const data = StaticSEOData();
    const keywords = data.seo_keywords?.map(e => e.keyword).join(", ") || "";
    const pageDescription = description || data.page_description;

    return (
        <Helmet
            link={[{ ref: "canonical", href: data.page_domain.url }]}
            htmlAttributes={{
                lang: lang,
            }}
            title={title || data.page_title}
            // titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: pageDescription,
                },
                {
                    property: `og:title`,
                    content: data.page_title,
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
                    name: "og:image",
                    content: data.profile_picture.localFile.childImageSharp.fixed.src,
                },
                {
                    name: "og:url",
                    content: data.page_domain.url,
                },
                {
                    name: "og:site_name",
                    content: data.page_title,
                },
                {
                    name: `twitter:card`,
                    content: pageDescription,
                },
                {
                    name: `twitter:creator`,
                    content: data.page_author,
                },
                {
                    name: `twitter:title`,
                    content: data.page_title,
                },
                {
                    name: `twitter:description`,
                    content: pageDescription,
                },
                {
                    name: "twitter:image:alt",
                    content: data.profile_picture.alt,
                },
                {
                    name: "keywords",
                    content: keywords,
                },
                {
                    name: "image",
                    content: data.profile_picture.localFile.childImageSharp.fixed.src,
                },
            ].concat(meta)}
        />
    );
};

export default SEO;
