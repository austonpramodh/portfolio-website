import { graphql, useStaticQuery } from "gatsby";

interface StaticData {
    prismicHomepage: {
        data: {
            what_i_do_header: string;
            what_i_do_items: {
                description: string;
                header: string;
                image: {
                    url: string;
                };
            }[];
        };
    };
}

const StaticWhatIDoData = () =>
    (
        useStaticQuery(graphql`
            {
                prismicHomepage {
                    data {
                        what_i_do_header
                        what_i_do_items {
                            description
                            header
                            image {
                                url
                            }
                        }
                    }
                }
            }
        `) as StaticData
    ).prismicHomepage.data;

export default StaticWhatIDoData;
