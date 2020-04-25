import { graphql, useStaticQuery } from "gatsby";

interface StaticData {
    prismicHomepage: {
        data: {
            what_i_do_header: string;
            what_i_do_items: {
                description: string;
                header: string;
                image: {
                    localFile: {
                        absolutePath: string;
                        relativePath: string;
                    };
                };
            }[];
        };
    };
}

const StaticWhatIDoData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    what_i_do_header
                    what_i_do_items {
                        description
                        header
                        image {
                            localFile {
                                relativePath
                                absolutePath
                            }
                        }
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticWhatIDoData;
