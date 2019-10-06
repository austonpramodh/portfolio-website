import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import MahaCards from "../../Components/MahaCards";
import { ExperiencesSection } from "../../Constants/Content";
import Styles from "./index.Styles";

const Experiences: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.sections}>
                <Typography className={classes.header} variant="h2">
                    Education
                </Typography>
                <MahaCards paperClass={classes.educationCards} Cards={ExperiencesSection.education} />
            </div>
            <div className={classes.sections}>
                <Typography className={classes.header} variant="h2">
                    Work Experiences
                </Typography>
                <MahaCards
                    paperClass={classes.educationCards}
                    listHeader={ExperiencesSection.workExperiences.listHeader}
                    Cards={ExperiencesSection.workExperiences.listItems}
                />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Experiences);
