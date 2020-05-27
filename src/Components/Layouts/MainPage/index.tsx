/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import Header from "../Header";
import React from "react";
import { WithStyles, withStyles, ThemeProvider } from "@material-ui/styles";

import Styles from "./index.styles";

import "./layout.css";
import SEO from "../../Seo";
import { MainPageLightTheme } from "../../../Themes";
import { CssBaseline } from "@material-ui/core";

const Layout: React.SFC<WithStyles<typeof Styles>> = ({ children }) => {
    return (
        <>
            <SEO />
            <CssBaseline />
            <ThemeProvider theme={MainPageLightTheme}>{children}</ThemeProvider>
        </>
    );
};

export default withStyles(Styles)(Layout);
