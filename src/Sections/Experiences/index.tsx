import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import MahaCards from "../../Components/MahaCards";
import { ExperiencesSection } from "../../Constants/Content";
import Styles from "./index.Styles";

const Experiences: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <Typography className={classes.header} variant="h2">
                Education
            </Typography>
            <MahaCards paperClass={classes.educationCards} Cards={ExperiencesSection.education} />
        </div>
    );
};

export default withStyles(Styles)(Experiences);
