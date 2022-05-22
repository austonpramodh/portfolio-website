import { graphql, useStaticQuery } from "gatsby";

interface StaticData {
    prismicHomepage: {
        data: {
            links: [
                {
                    icon: {
                        url: string;
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
    (
        useStaticQuery(graphql`
            {
                prismicHomepage {
                    data {
                        links {
                            icon {
                                url
                                gatsbyImageData
                            }
                            link {
                                url
                            }
                            name
                        }
                    }
                }
            }
        `) as StaticData
    ).prismicHomepage.data;

export default StaticLinksData;
