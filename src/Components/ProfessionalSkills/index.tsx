import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Skill } from "../../Constants/ContentInterface";
import AnimatedCirculatProgress from "../../Animations/CircularProgress";
import Styles from "./index.Styles";

interface IProps {
    Skills: Skill[];
}

const ProfessionalSkills: React.FC<IProps & WithStyles<typeof Styles>> = ({ classes, Skills }) => {
    return (
        <Fragment>
            <Typography variant="h2">Professional Skills</Typography>
            <div className={classes.eachSkills}>
                {Skills.map(skill => (
                    <Fragment key={skill.name}>
                        <div className={classes.skill}>
                            <div className={classes.progressContainer}>
                                <AnimatedCirculatProgress
                                    size={75}
                                    variant="static"
                                    value={skill.percentage}
                                    className={classes.progress}
                                />
                                <Typography className={classes.progressPercentage}>{skill.percentage}%</Typography>
                            </div>
                            <Typography>{skill.name}</Typography>
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
};

export default withStyles(Styles)(ProfessionalSkills);
