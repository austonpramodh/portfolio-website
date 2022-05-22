import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const ThemeWrapper =
    (theme: Theme) =>
    (Component: React.ComponentType): React.FunctionComponent =>
    // eslint-disable-next-line react/display-name
    ({ children }) => {
        return (
            <ThemeProvider theme={theme}>
                <Component>{children}</Component>
            </ThemeProvider>
        );
    };
