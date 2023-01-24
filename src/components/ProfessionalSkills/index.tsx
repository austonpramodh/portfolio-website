import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import AnimatedCirculatProgress from "../../animations/CircularProgress";
import Styles from "./index.Styles";

export interface Skill {
  name: string;
  percentage: number;
}

interface IProps {
  Skills: Skill[];
}

const ProfessionalSkills: React.FC<IProps & WithStyles<typeof Styles>> = ({
  classes,
  Skills,
}) => {
  return (
    <Fragment>
      <Typography variant="h4">Professional Skills</Typography>
      <div className={classes.eachSkills}>
        {Skills.map((skill) => (
          <Fragment key={skill.name}>
            <div className={classes.skill}>
              <div className={classes.progressContainer}>
                <AnimatedCirculatProgress
                  size={75}
                  variant="determinate"
                  value={skill.percentage}
                  className={classes.progress}
                />
                <Typography className={classes.progressPercentage}>
                  {skill.percentage}%
                </Typography>
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
