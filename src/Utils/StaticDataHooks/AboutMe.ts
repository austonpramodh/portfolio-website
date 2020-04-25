import { graphql, useStaticQuery } from "gatsby";

interface StaticData {
    prismicHomepage: {
        data: {
            about_me_header: string;
            about_me_description: string;
            about_me_skills: { skill: string }[];

            about_me_media: {
                __typename: string;
                url: string;
            };
            resume: {
                __typename: string;
                url: string;
            };
        };
    };
}

const StaticAboutMeData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    about_me_header
                    about_me_description
                    about_me_skills {
                        skill
                    }
                    about_me_media {
                        url
                    }
                    resume {
                        link_type
                        url
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticAboutMeData;
