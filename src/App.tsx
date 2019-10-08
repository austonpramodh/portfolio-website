import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Styles from "./App.Styles";
import Home from "./Sections/Home";
import AboutMe from "./Sections/AboutMe";
import Service from "./Sections/Service";
import Skills from "./Sections/Skills";
import Experiences from "./Sections/Experiences";
import Contact from "./Sections/Contact";

const App: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={classes.container}>
            <CssBaseline />
            <Home />
            <AboutMe />
            <Service />
            <Skills />
            <Experiences />
            <Contact />
        </div>
    );
};

export default withStyles(Styles)(App);
