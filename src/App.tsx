import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Styles from "./App.Styles";
import Home from "./Sections/Home";

const App: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={classes.container}>
            <CssBaseline />
            <Home />
        </div>
    );
};

export default withStyles(Styles)(App);
