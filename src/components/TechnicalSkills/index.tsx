import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import AnimatedProgressBar from "../../animations/ProgressBar";
import Styles from "./index.Styles";

export interface Skill {
    name: string;
    percentage: number;
}

interface IProps {
    skills: Skill[];
}

const TechnicalSkills: React.FC<IProps & WithStyles<typeof Styles>> = ({ classes, skills }) => {
    return (
        <Fragment>
            <Typography variant="h4">Technical Skills</Typography>
            <div className={classes.eachSkills}>
                {skills.map((skill) => (
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
