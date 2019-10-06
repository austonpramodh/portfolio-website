import React from "react";
import { WithStyles } from "@material-ui/styles/withStyles";
import MaterialPaper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
import Styles from "./index.Styles";

interface IProps {
    className?: string;
}

const MahaPaper: React.FC<IProps & WithStyles<typeof Styles>> = ({ classes, className, children }) => {
    return <MaterialPaper className={`${classes.paper} ${className}`}>{children}</MaterialPaper>;
};

export default withStyles(Styles)(MahaPaper);
