import { graphql, useStaticQuery } from "gatsby";

export interface StaticContactMeLink {
    image: {
        localFile: {
            absolutePath: string;
            relativePath: string;
        };
    };
    title: string;
    link_name: string;
    link: {
        url: string;
    };
}

interface StaticData {
    prismicHomepage: {
        data: {
            footer_text: string;
            contact_me_links: StaticContactMeLink[];
        };
    };
}

const StaticContactMeLinksData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    footer_text
                    contact_me_links {
                        image {
                            localFile {
                                relativePath
                                absolutePath
                            }
                        }
                        title
                        link_name
                        link {
                            url
                            link_type
                        }
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticContactMeLinksData;
