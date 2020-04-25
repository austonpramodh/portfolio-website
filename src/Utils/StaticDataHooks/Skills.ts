import { graphql, useStaticQuery } from "gatsby";

interface StaticData {
    prismicHomepage: {
        data: {
            technical_skills: {
                name: string;
                value: number;
            }[];
            professional_skills: {
                name: string;
                value: number;
            }[];
        };
    };
}

const StaticSkillsData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    technical_skills {
                        name
                        value
                    }
                    professional_skills {
                        name
                        value
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticSkillsData;
