import { AboutMeSection } from "../../Constants/Content";
import AboutMeImage from "../../Components/AboutMeImage";
import Styles from "./index.Styles";
import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Download as DownloadIcon } from "mdi-material-ui";

// import AboutMeAnimation from "../../Animations/AboutMe";

const AboutMe: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const { skills } = AboutMeSection;
    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.imageContainer}>
                {/* <AboutMeAnimation /> */}
                <AboutMeImage />
            </div>
            <div className={classes.contentContainer}>
                <Typography className={classes.texts} variant="h2">
                    About Me
                </Typography>
                <Typography className={classes.texts}>{AboutMeSection.description}</Typography>

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
