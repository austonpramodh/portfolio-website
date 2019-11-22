import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { Typography, Avatar, List, ListItem, useMediaQuery, Theme } from "@material-ui/core";
import Image from "material-ui-image";
import ContactLinks from "../../Components/ContactLinks";
import { HomeSection } from "../../Constants/Content";
import Styles from "./index.Styles";

const Home: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

    return (
        <div className={`${classes.container} ${classes.containerMediaQueries}`}>
            <div className={classes.avatarBorder}>
                <Avatar className={classes.avatar}>
                    <Image src={HomeSection.profilePicture} style={{ background: "transparent", width: "100%" }} />
                </Avatar>
            </div>
            <div>
                <Typography className={classes.promo}>{"Hello I'm"}</Typography>
                <Typography variant="h2" className={classes.name}>
                    {HomeSection.name}
                </Typography>
                <Typography variant="h4">{HomeSection.position}</Typography>
                <List>
                    {HomeSection.contactsList.map(eachContact => {
                        const { Icon, content, link, mobileOnlyClickable } = eachContact;
                        return (
                            <ListItem
                                key={content}
                                className={
                                    link
                                        ? mobileOnlyClickable
                                            ? isMobile
                                                ? classes.listItem
                                                : ""
                                            : classes.listItem
                                        : " "
                                }
                            >
                                <a href={mobileOnlyClickable ? (isMobile ? link : undefined) : link}>
                                    <Icon className={classes.listItemIcon} /> {content}
                                </a>
                            </ListItem>
                        );
                    })}
                </List>
                <ContactLinks />
            </div>
        </div>
    );
};

export default withStyles(Styles)(Home);
