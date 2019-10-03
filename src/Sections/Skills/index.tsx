import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { SkillsSection } from "../../Constants/Content";
import TechnicalSkills from "../../Components/TechnicalSkills";
import ProfessionalSkills from "../../Components/ProfessionalSkills";
import Styles from "./index.Styles";

const Skills: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.technicalSkillsContainer}>
                <TechnicalSkills Skills={SkillsSection.technicalSkills} />
            </div>
            <div className={classes.professionalSkillsContainer}>
                <ProfessionalSkills Skills={SkillsSection.professionalSkills} />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Skills);
