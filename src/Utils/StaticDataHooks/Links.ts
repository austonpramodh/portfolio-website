import { graphql, useStaticQuery } from "gatsby";

interface StaticData {
    prismicHomepage: {
        data: {
            links: [
                {
                    icon: {
                        localFile: {
                            absolutePath: string;
                            relativePath: string;
                        };
                    };
                    name: string;
                    link: {
                        url: string;
                    };
                },
            ];
        };
    };
}

const StaticLinksData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    links {
                        icon {
                            localFile {
                                absolutePath
                                relativePath
                            }
                        }
                        link {
                            url
                        }
                        name
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticLinksData;
