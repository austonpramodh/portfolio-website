import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography, Avatar, List, ListItem, useMediaQuery, Theme } from "@material-ui/core";
import { Phone as PhoneIcon, Email as EmailIcon, MapMarker as MapMarkerIcon } from "mdi-material-ui";
import profilePic from "../../Assets/profilePic.jpg";
import ContactLinks from "../../Components/ContactLinks";
import Styles from "./index.Styles";

const Home: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
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
                <ContactLinks />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Home);
