import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import MahaCards from "../../Components/MahaCards";
import Styles from "./index.Styles";
import StaticExperiencesData, { StaticWorkExperience } from "../../Utils/StaticDataHooks/Experiences";
import { ExperienceCard } from "../../Constants/ContentInterface";

const ExperienceMapFunction = (experience: StaticWorkExperience): ExperienceCard => ({
    name: experience.header,
    highlightedName: experience.highlighted_header,
    highlightedSubText: experience.highlighted_description,
    listHeader: experience.list_header,
    listItems: experience.list?.split(";"),
    description: experience.description,
});

const Experiences: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const data = StaticExperiencesData();

    const mutatedWorkExperienceData = data.work_experiences.map(ExperienceMapFunction);
    const mutatedProjectsData = data.projects.map(ExperienceMapFunction);
    const mutatedEducationData = data.education.map(ExperienceMapFunction);

    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.sections}>
                <Typography className={classes.header} variant="h2">
                    Work Experiences
                </Typography>
                <MahaCards
                    keyHeader="experiences"
                    paperClass={classes.educationCards}
                    Cards={mutatedWorkExperienceData}
                />
                <Typography className={classes.header} variant="h2">
                    Education
                </Typography>
                <MahaCards keyHeader="eduCards" paperClass={classes.educationCards} Cards={mutatedEducationData} />
            </div>
            <div className={classes.sections}>
                <Typography className={classes.header} variant="h2">
                    Projects
                </Typography>
                <MahaCards
                    keyHeader="projectCards"
                    paperClass={classes.educationCards}
                    Cards={mutatedProjectsData}
                    headerVariant="h4"
                />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Experiences);
