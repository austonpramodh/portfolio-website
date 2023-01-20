import React from "react";
import { ThemeProvider } from "@mui/styles";

import "./layout.css";
// import SEO from "../../Seo";
import { LightTheme, DarkTheme } from "../../theme";
import { CssBaseline } from "@mui/material";
// import LightModeSwitcher from "../../LightModeSwitcher";

const isDarkModeStorageKey = "isDarkMode";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    setDarkMode(localStorage.getItem(isDarkModeStorageKey) === "true");
  }, []);
  // const onClickModeSwitch = () => {
  //   const nextMode = !isDarkMode;
  //   localStorage.setItem(isDarkModeStorageKey, String(nextMode));
  //   setDarkMode(nextMode);
  // };

  return (
    <>
      {/* <SEO /> */}
      <CssBaseline />
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {/* <LightModeSwitcher
          onClick={() => onClickModeSwitch()}
          isDarkMode={isDarkMode}
        /> */}
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
