/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import Header from "../Header";
import React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";

import Styles from "./index.styles";

import "./layout.css";
import { BlogLightTheme } from "../../../Themes";
import { CssBaseline } from "@material-ui/core";
import { ThemeWrapper } from "../../../Utils/ThemeWrapper";

const Layout: React.SFC<WithStyles<typeof Styles>> = ({ children, classes }) => {
    return (
        <>
            <CssBaseline />
            <div className={classes.container}>{children}</div>
        </>
    );
};

const LayoutWithStyles = withStyles(Styles)(Layout);

export default ThemeWrapper(BlogLightTheme)(LayoutWithStyles);
