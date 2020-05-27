import Styles from "./index.Styles";
import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Download as DownloadIcon } from "mdi-material-ui";

import AboutMeAnimation from "../../Animations/AboutMe";
import StaticAboutMeData from "../../Utils/StaticDataHooks/AboutMe";

const AboutMe: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const data = StaticAboutMeData();

    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.imageContainer}>
                <AboutMeAnimation animationDataUrl={data.about_me_media.url} />
            </div>
            <div className={classes.contentContainer}>
                <Typography color="textPrimary" className={classes.texts} variant="h2">
                    {data.about_me_header}
                </Typography>
                <Typography color="textPrimary" className={classes.texts}>
                    {data.about_me_description}
                </Typography>

                <ul className={classes.skillList}>
                    {data.about_me_skills.map(({ skill }) => (
                        <li key={skill} className={classes.skillListItem}>
                            <Typography component="span" color="textPrimary" variant="caption">
                                {skill}
                            </Typography>
                        </li>
                    ))}
                </ul>
                <a href={data.resume.url} className={classes.cvDownloadButton}>
                    <Typography color="textPrimary" className={classes.cvDownloadText}>
                        Download CV
                    </Typography>
                    <DownloadIcon className={classes.downloadIcon} />
                </a>
            </div>
        </div>
    );
};

export default withStyles(Styles)(AboutMe);
