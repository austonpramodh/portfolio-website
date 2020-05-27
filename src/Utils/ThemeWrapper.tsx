import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const ThemeWrapper = (theme: Theme) => (Component: React.ComponentType): React.SFC => ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component>{children}</Component>
        </ThemeProvider>
    );
};
