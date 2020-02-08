import React from "react";
import { WithStyles } from "@material-ui/styles/withStyles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { withStyles, useMediaQuery, Theme } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Tilt from "react-tilt";
import { useTheme } from "@material-ui/styles";
import MahaPaper from "../MahaPaper";
import Styles from "./index.Styles";

interface MahaCard {
    Icon?: (props: SvgIconProps) => JSX.Element;
    IconColor?: string; //Color in hex code like #9774fa
    name: string;
    highlightedName?: string;
    highlightedSubText?: string;
    description?: string;
    listItems?: string[];
}

interface IProps {
    Cards: MahaCard[];
    paperClass?: string;
    listHeader?: string;
    keyHeader: string;
}

const MahaCards: React.FC<IProps & WithStyles<typeof Styles>> = ({
    classes,
    Cards,
    paperClass,
    listHeader,
    keyHeader,
}) => {
    const theme: Theme = useTheme();
    const isMobileScreen = !useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <React.Fragment>
            {Cards.map(
                ({ Icon, name, description, IconColor, highlightedName, highlightedSubText, listItems }, index) => {
                    const MahaCard = (
                        <MahaPaper className={paperClass}>
                            {Icon && <Icon className={classes.icon} style={{ color: IconColor }} />}
                            <div className={classes.headersSection}>
                                <Typography className={classes.header} variant={highlightedName ? "h4" : "h3"}>
                                    {name}&nbsp;<span className={classes.highlightedHeader}>{highlightedName}</span>
                                </Typography>
                            </div>
                            {highlightedSubText && (
                                <Typography color={"primary"} className={classes.subHeader}>
                                    {highlightedSubText}
                                </Typography>
                            )}
                            {description && <Typography className={classes.description}>{description}</Typography>}
                            {listHeader && <Typography className={classes.listHeader}>{listHeader + " :"}</Typography>}
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
                    );

                    return isMobileScreen ? (
                        <React.Fragment key={`${keyHeader}${index}`}>{MahaCard}</React.Fragment>
                    ) : (
                        <Tilt options={{ max: 25, scale: 1, reset: true, reverse: true }} key={`${keyHeader}${index}`}>
                            {MahaCard}
                        </Tilt>
                    );
                },
            )}
        </React.Fragment>
    );
};

export default withStyles(Styles)(MahaCards);
