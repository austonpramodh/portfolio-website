import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { Paper as MaterialPaper, PaperProps as MaterialPaperProps, Hidden } from "@mui/material";
import Tilt from "react-tilt";
import Styles from "./index.Styles";
import clsx from "clsx";

type Props = {
    className?: string;
    children: JSX.Element;
    overrideDefaultPaperClasses?: boolean;
} & MaterialPaperProps;

const MahaPaper: React.FC<Props & WithStyles<typeof Styles>> = ({
    classes,
    className,
    children,
    overrideDefaultPaperClasses,
    ...restProps
}) => {
    const paper = (
        <MaterialPaper {...restProps} className={clsx(!overrideDefaultPaperClasses && classes.paper, className)}>
            {children}
        </MaterialPaper>
    );

    return (
        <>
            <Hidden implementation="css" mdUp>
                {paper}
            </Hidden>

            <Hidden implementation="css" mdDown>
                <Tilt options={{ max: 25, scale: 1, reset: true, reverse: true }}>{paper}</Tilt>
            </Hidden>
        </>
    );
};

export default withStyles(Styles)(MahaPaper);
