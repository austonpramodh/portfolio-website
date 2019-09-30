import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Styles from "./App.Styles";
import Home from "./Sections/Home";
import AboutMe from "./Sections/AboutMe";

const App: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={classes.container}>
            <CssBaseline />
            <Home />
            <AboutMe />
        </div>
    );
};

export default withStyles(Styles)(App);
