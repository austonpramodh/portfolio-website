import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import TechnicalSkills from "../../Components/TechnicalSkills";
import ProfessionalSkills from "../../Components/ProfessionalSkills";
import Styles from "./index.Styles";
import StaticSkillsData from "../../Utils/StaticDataHooks/Skills";

const staticDataSkillsMapper = ({ name, value }: { name: string; value: number }) => ({
    name,
    percentage: value,
});

const Skills: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const data = StaticSkillsData();

    const mutatedTechnicalSkillsData = data.technical_skills.map(staticDataSkillsMapper);
    const mutatedProfessionalSkillsData = data.professional_skills.map(staticDataSkillsMapper);

    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.technicalSkillsContainer}>
                <TechnicalSkills Skills={mutatedTechnicalSkillsData} />
            </div>
            <div className={classes.professionalSkillsContainer}>
                <ProfessionalSkills Skills={mutatedProfessionalSkillsData} />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Skills);
