/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";

import StaticSEOData from "../../Utils/StaticDataHooks/SEO";

function SEO() {
    const data = StaticSEOData();
    const keywords = data.seo_keywords?.map(e => e.keyword).join(", ") || "";

    return (
        <Helmet
            link={[{ ref: "canonical", href: data.page_domain.url }]}
            htmlAttributes={{
                lang: "en-US",
            }}
            title={data.page_title}
            // titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: data.page_description,
                },
                {
                    property: `og:title`,
                    content: data.page_title,
                },
                {
                    property: `og:description`,
                    content: data.page_description,
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
                    content: data.page_description,
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
                    content: data.page_description,
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
            ]}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

export default SEO;
