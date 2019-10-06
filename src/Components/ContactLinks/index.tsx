import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { List, ListItem } from "@material-ui/core";
import {
    GithubBox as GithubBoxIcon,
    Gitlab as GitlabIcon,
    // Phone as PhoneIcon,
    // Email as EmailIcon,
    // MapMarker as MapMarkerIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon,
} from "mdi-material-ui";
import Links from "../../Constants/Links";
import Styles from "./index.Styles";

const ContactsLink: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <Fragment>
            <List className={classes.linksList}>
                <ListItem className={classes.linksListItem}>
                    <a href={Links.github} className={classes.LinksListItemIcon}>
                        <GithubBoxIcon />
                    </a>
                </ListItem>
                <ListItem className={classes.linksListItem}>
                    <a href={Links.gitlab} className={classes.LinksListItemIcon}>
                        <GitlabIcon />
                    </a>
                </ListItem>
                <ListItem className={classes.linksListItem}>
                    <a href={Links.facebook} className={classes.LinksListItemIcon}>
                        <FacebookIcon />
                    </a>
                </ListItem>
                <ListItem className={classes.linksListItem}>
                    <a href={Links.linkedIn} className={classes.LinksListItemIcon}>
                        <LinkedinIcon />
                    </a>
                </ListItem>
            </List>
        </Fragment>
    );
};

export default withStyles(Styles)(ContactsLink);
