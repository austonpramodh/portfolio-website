import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Styles from "./App.Styles";
import Sections from "./Sections";
import NavBar from "./Components/NavBar";

const App: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <div className={classes.container}>
            <CssBaseline />
            <NavBar Sections={Sections} />
            {Sections.map(({ id, Component }) => (
                <section key={id} id={id}>
                    <Component />
                </section>
            ))}
        </div>
    );
};

export default withStyles(Styles)(App);
