import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Skill } from "../../Constants/ContentInterface";
import AnimatedProgressBar from "../../Animations/ProgressBar";
import Styles from "./index.Styles";

interface IProps {
    Skills: Skill[];
}
const TechnicalSkills: React.FC<IProps & WithStyles<typeof Styles>> = ({ classes, Skills }) => {
    return (
        <Fragment>
            <Typography variant="h2">Technical Skills</Typography>
            <div className={classes.eachSkills}>
                {Skills.map(skill => (
                    <Fragment key={skill.name}>
                        <div className={classes.skill}>
                            <div className={classes.info}>
                                <Typography variant={"h6"}>{skill.name}</Typography>
                                <Typography className={classes.percentage}>{skill.percentage}%</Typography>
                            </div>
                            <AnimatedProgressBar value={skill.percentage} classes={{ root: classes.progressBar }} />
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
};

export default withStyles(Styles)(TechnicalSkills);
