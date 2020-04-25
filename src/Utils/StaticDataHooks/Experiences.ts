import { graphql, useStaticQuery } from "gatsby";

export interface StaticWorkExperience {
    header: string;
    highlighted_description: string;
    highlighted_header: string;
    list: string;
    list_header: string;
    description: string;
}
interface StaticData {
    prismicHomepage: {
        data: {
            work_experiences: StaticWorkExperience[];
            projects: StaticWorkExperience[];
            education: StaticWorkExperience[];
        };
    };
}

const StaticExperiencesData = () =>
    (useStaticQuery(graphql`
        {
            prismicHomepage {
                data {
                    work_experiences {
                        header
                        highlighted_description
                        highlighted_header
                        list
                        list_header
                        description
                    }
                    projects {
                        header
                        highlighted_description
                        highlighted_header
                        list
                        list_header
                        description
                    }
                    education {
                        header
                        highlighted_description
                        highlighted_header
                        list
                        list_header
                        description
                    }
                }
            }
        }
    `) as StaticData).prismicHomepage.data;

export default StaticExperiencesData;
