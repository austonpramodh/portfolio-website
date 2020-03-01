import React from "react";
import { WithStyles } from "@material-ui/styles/withStyles";
import MaterialPaper from "@material-ui/core/Paper";
import { withStyles, useMediaQuery, useTheme, Theme } from "@material-ui/core";
import Tilt from "react-tilt";
import Styles from "./index.Styles";

interface IProps {
    className?: string;
}

const MahaPaper: React.FC<IProps & WithStyles<typeof Styles>> = ({ classes, className, children }) => {
    const theme: Theme = useTheme();
    const isMobileScreen = !useMediaQuery(theme.breakpoints.up("sm"));
    const paper = <MaterialPaper className={`${classes.paper} ${className}`}>{children}</MaterialPaper>;
    return isMobileScreen ? (
        <React.Fragment>{paper}</React.Fragment>
    ) : (
        <Tilt options={{ max: 25, scale: 1, reset: true, reverse: true }}>{paper}</Tilt>
    );
};

export default withStyles(Styles)(MahaPaper);
