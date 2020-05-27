/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import Header from "../Header";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import "./layout.css";
import SEO from "../../Seo";
import { MainPageLightTheme, MainPageDarkTheme } from "../../../Themes";
import { CssBaseline } from "@material-ui/core";
import LightModeSwitcher from "../../LightModeSwitcher";

const Layout: React.SFC = ({ children }) => {
    const [isDarkMode, setDarkMode] = React.useState(false);
    return (
        <>
            <SEO />
            <CssBaseline />
            <ThemeProvider theme={isDarkMode ? MainPageDarkTheme : MainPageLightTheme}>
                <LightModeSwitcher onClick={() => setDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
                {children}
            </ThemeProvider>
        </>
    );
};

export default Layout;
