import React from "react";
import Head from "next/head";
import { useStaticDataContext } from "../StaticDataContext";
import * as prismicH from "@prismicio/helpers";

interface SeoProps {
  title?: string;
  lang?: string;
  meta?: (
    | { name: string; content: string }
    | { property: string; content: string }
  )[];
  description?: string;
}

const SEO: React.FunctionComponent<SeoProps> = ({
  description = "",
  meta = [],
  title,
}) => {
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
  let pageTitle =
    seoData?.page_title && title
      ? `${title} | ${seoData?.page_title}`
      : seoData?.page_title;

  if (!pageTitle) pageTitle = "Page Title required!";

  let faviconUrl = prismicH.asImageSrc(seoData?.favicon);

  if (!faviconUrl) {
    console.error("Plese set the Favicon on Prismic, Using default for now!");
    faviconUrl = "/favicon.ico";
  }

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
            name: "og:image",
            content: profile_picture,
          },
          {
            name: "og:url",
            content: domain,
          },
          {
            name: "og:site_name",
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
            content: profile_picture,
          },
        ]
          .concat(meta)
          .map((eachMeta, i) => (
            <meta key={`meta-${i}`} {...eachMeta} />
          ))}
      </Head>
    </>
  );
};

export default SEO;
