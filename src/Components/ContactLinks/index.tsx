import React, { Fragment } from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { List, ListItem } from "@material-ui/core";
import Styles from "./index.Styles";
import StaticLinksData from "../../Utils/StaticDataHooks/Links";
import SVGLoader from "../SvgLoader";

const ContactsLink: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const linksData = StaticLinksData();
    return (
        <Fragment>
            <List className={classes.linksList}>
                {linksData.links.map(({ icon, link, name }) => {
                    return (
                        <ListItem className={classes.linksListItem} key={name}>
                            <a title={name} href={link.url} className={classes.LinksListItemIcon}>
                                <SVGLoader path={icon.localFile.relativePath} />
                            </a>
                        </ListItem>
                    );
                })}
            </List>
        </Fragment>
    );
};

export default withStyles(Styles)(ContactsLink);
