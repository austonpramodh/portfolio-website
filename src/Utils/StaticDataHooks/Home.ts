import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

interface StaticData {
    prismicHomepage: {
        data: {
            first_name: string;
            job_role: string;
            last_name: string;
            middle_name: string;
            profile_picture: {
                alt: string;
                fluid: FluidObject;
            };
            main_links: [
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

const StaticHomeData = () =>
    (
        useStaticQuery(graphql`
            {
                prismicHomepage(data: { about_me_description: {} }) {
                    data {
                        first_name
                        job_role
                        last_name
                        middle_name
                        profile_picture {
                            fluid(maxWidth: 300) {
                                ...GatsbyImgixFluid
                            }
                            alt
                        }
                        main_links {
                            icon {
                                url
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

export default StaticHomeData;
