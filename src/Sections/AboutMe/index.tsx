import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Image from "material-ui-image";
import { Download as DownloadIcon } from "mdi-material-ui";
import AboutMeImage from "../../Assets/ab-img.png";

import { AboutMeSection } from "../../Constants/Content";
import Styles from "./index.Styles";

const AboutMe: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const { skills } = AboutMeSection;
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.imageContainer}>
                <Image style={{ background: "transparent" }} src={AboutMeImage} aspectRatio={16 / 9} />
            </div>
            <div className={classes.contentContainer}>
                <Typography className={classes.texts} variant="h2">
                    About Me
                </Typography>
                <Typography className={classes.texts}>
                    Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in web site design &
                    building and customization. Also I am good at
                </Typography>

                <ul className={classes.skillList}>
                    {skills.map(skill => (
                        <li key={skill} className={classes.skillListItem}>
                            <span> {skill}</span>
                        </li>
                    ))}
                </ul>
                <a href={AboutMeSection.cvDownloadurl} className={classes.cvDownloadButton}>
                    <Typography className={classes.cvDownloadText}>Download CV</Typography>
                    <DownloadIcon className={classes.downloadIcon} />
                </a>
            </div>
        </div>
    );
};

export default withStyles(Styles)(AboutMe);
