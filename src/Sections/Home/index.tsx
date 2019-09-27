import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography, Avatar, List, ListItem, useMediaQuery, Theme } from "@material-ui/core";
import {
    GithubBox as GithubBoxIcon,
    Gitlab as GitlabIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    MapMarker as MapMarkerIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon,
} from "mdi-material-ui";
import profilePic from "../../Assets/profilePic.jpg";
import Links from "../../Constants/Links";
import Styles from "./index.Styles";

const Home: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

    return (
        <div className={classes.container}>
            <div className={classes.avatarBorder}>
                <Avatar className={classes.avatar} src={profilePic}></Avatar>
            </div>
            <div>
                <Typography className={classes.promo}>{"Hello I'm"}</Typography>
                <Typography variant="h2" className={classes.name}>
                    Auston Barboza
                </Typography>
                <Typography variant="h4">Software Engineer</Typography>
                <List>
                    <ListItem className={classes.listItem}>
                        <a href="mailto:austonpramodh@gmail.com">
                            <EmailIcon className={classes.listItemIcon} /> austonpramodh@gmail.com
                        </a>
                    </ListItem>
                    <ListItem className={isMobile ? classes.listItem : ""}>
                        {isMobile ? (
                            <a href="callto:+918095600003">
                                <PhoneIcon className={classes.listItemIcon} /> {"+91 8095600003"}
                            </a>
                        ) : (
                            <Fragment>
                                <PhoneIcon className={classes.listItemIcon} /> {"+91 8095600003"}
                            </Fragment>
                        )}
                    </ListItem>
                    <ListItem>
                        <MapMarkerIcon className={classes.listItemIcon} /> {"Navalur, Chennai, India"}
                    </ListItem>
                </List>
                <List className={classes.linksList}>
                    <ListItem>
                        <a href={Links.github} className={classes.LinksListItemIcon}>
                            <GithubBoxIcon />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href={Links.gitlab} className={classes.LinksListItemIcon}>
                            <GitlabIcon />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href={Links.facebook} className={classes.LinksListItemIcon}>
                            <FacebookIcon />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href={Links.linkedIn} className={classes.LinksListItemIcon}>
                            <LinkedinIcon />
                        </a>
                    </ListItem>
                </List>
            </div>
        </div>
    );
};

export default withStyles(Styles)(Home);
