import { graphql, useStaticQuery } from "gatsby";
import { FixedObject } from "gatsby-image";

interface StaticData {
    prismicHomepage: {
        data: {
            page_author: string;
            page_description: string;
            page_title: string;
            page_domain: { url: string; link_type: string };
            seo_keywords: { keyword: string }[];
            profile_picture: {
                alt: string;
                localFile: {
                    childImageSharp: {
                        fixed: FixedObject;
                    };
                };
            };
        };
    };
}

const StaticSEOData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    page_title
                    page_author
                    page_domain {
                        url
                        link_type
                    }
                    page_description
                    seo_keywords {
                        keyword
                    }
                    profile_picture {
                        alt
                        localFile {
                            childImageSharp {
                                fixed(height: 300, width: 300) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticSEOData;
