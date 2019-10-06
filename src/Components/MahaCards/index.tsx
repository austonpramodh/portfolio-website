import React from "react";
import { WithStyles } from "@material-ui/styles/withStyles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Styles from "./index.Styles";

interface MahaCard {
    Icon?: (props: SvgIconProps) => JSX.Element;
    IconColor?: string; //Color in hex code like #9774fa
    name: string;
    highlightedName?: string;
    highlightedSubText?: string;
    description: string;
}

interface IProps {
    Cards: MahaCard[];
    paperClass?: string;
}

const MahaCards: React.FC<IProps & WithStyles<typeof Styles>> = ({ classes, Cards, paperClass }) => {
    return (
        <React.Fragment>
            {Cards.map(({ Icon, name, description, IconColor, highlightedName, highlightedSubText }, index) => (
                <Paper key={`service${index}`} className={`${classes.paper} ${paperClass}`}>
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
                    <Typography className={classes.description}>{description}</Typography>
                </Paper>
            ))}
        </React.Fragment>
    );
};

export default withStyles(Styles)(MahaCards);
