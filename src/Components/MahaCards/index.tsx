import React from "react";
import { WithStyles } from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import MahaPaper from "../MahaPaper";
import { ExperienceCard } from "../../Constants/ContentInterface";
import Styles from "./index.Styles";
import SvgLoader from "../SvgLoader";

interface MahaCard extends ExperienceCard {
    IconPath?: string;
    IconColor?: string; //Color in hex code like #9774fa
    highlightedName?: string;
    highlightedSubText?: string;
    description?: string;
    listItems?: string[];
}

interface IProps {
    Cards: MahaCard[];
    paperClass?: string;
    keyHeader: string;
    headerVariant?:
        | "button"
        | "caption"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "inherit"
        | "overline"
        | "subtitle1"
        | "subtitle2"
        | "body1"
        | "body2"
        | "srOnly"
        | undefined;
}

const MahaCards: React.FC<IProps & WithStyles<typeof Styles>> = ({
    classes,
    Cards,
    paperClass,
    keyHeader,
    headerVariant,
}) => {
    return (
        <React.Fragment>
            {Cards.map(
                (
                    {
                        IconPath,
                        name,
                        description,
                        IconColor,
                        highlightedName,
                        highlightedSubText,
                        listItems,
                        listHeader,
                    },
                    index,
                ) => (
                    <React.Fragment key={`${keyHeader}${index}`}>
                        <MahaPaper className={`${paperClass}`}>
                            {IconPath && (
                                <SvgLoader path={IconPath} className={classes.icon} style={{ color: IconColor }} />
                            )}
                            {/* {IconPath && <Icon className={classes.icon} style={{ color: IconColor }} />} */}
                            <div className={classes.headersSection}>
                                <Typography
                                    className={classes.header}
                                    variant={headerVariant ? headerVariant : highlightedName ? "h4" : "h3"}
                                >
                                    {name}&nbsp;<span className={classes.highlightedHeader}>{highlightedName}</span>
                                </Typography>
                            </div>
                            {highlightedSubText && (
                                <Typography color={"primary"} className={classes.subHeader}>
                                    {highlightedSubText}
                                </Typography>
                            )}
                            {description && <Typography className={classes.description}>{description}</Typography>}
                            {listItems && listItems.length > 0 && listHeader && (
                                <Typography className={classes.listHeader}>{listHeader + " :"}</Typography>
                            )}
                            {listItems && (
                                <ul className={classes.list}>
                                    {listItems.map(listItem => (
                                        <li className={classes.listItem} key={listItem}>
                                            <ListItemText>{listItem}</ListItemText>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </MahaPaper>
                    </React.Fragment>
                ),
            )}
        </React.Fragment>
    );
};

export default withStyles(Styles)(MahaCards);
