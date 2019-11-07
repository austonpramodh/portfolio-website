import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { List, ListItem } from "@material-ui/core";
import { HomeSection } from "../../Constants/Content";
import Styles from "./index.Styles";

const ContactsLink: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <Fragment>
            <List className={classes.linksList}>
                {HomeSection.socialLinks.map(eachSocialLink => {
                    const { Icon, link, name } = eachSocialLink;
                    return (
                        <ListItem className={classes.linksListItem} key={name}>
                            <a title={name} href={link} className={classes.LinksListItemIcon}>
                                <Icon />
                            </a>
                        </ListItem>
                    );
                })}
            </List>
        </Fragment>
    );
};

export default withStyles(Styles)(ContactsLink);
