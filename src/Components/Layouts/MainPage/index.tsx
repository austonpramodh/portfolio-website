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

const isDarkModeStorageKey = "isDarkMode";
const Layout: React.FunctionComponent = ({ children }) => {
    const [isDarkMode, setDarkMode] = React.useState(false);
    React.useEffect(() => {
        setDarkMode(localStorage.getItem(isDarkModeStorageKey) === "true");
    }, []);
    const onClickModeSwitch = () => {
        const nextMode = !isDarkMode;
        localStorage.setItem(isDarkModeStorageKey, String(nextMode));
        setDarkMode(nextMode);
    };

    return (
        <>
            <SEO />
            <CssBaseline />
            <ThemeProvider theme={isDarkMode ? MainPageDarkTheme : MainPageLightTheme}>
                <LightModeSwitcher onClick={() => onClickModeSwitch()} isDarkMode={isDarkMode} />
                {children}
            </ThemeProvider>
        </>
    );
};

export default Layout;
