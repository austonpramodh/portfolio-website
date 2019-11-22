import React from "react";
import { withStyles, WithStyles, ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Styles from "./App.Styles";
import Sections from "./Sections";
import NavBar from "./Components/NavBar";
import CustomTheme from "./Theme";
import cleanPageLoading from "./Utils/cleanPageLoading";

const App: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    cleanPageLoading();
    return (
        <ThemeProvider theme={CustomTheme}>
            <div className={classes.container}>
                <CssBaseline />
                <NavBar Sections={Sections} />
                {Sections.map(({ id, Component }) => (
                    <section key={id} id={id} className={classes.sectionContainer}>
                        <Component />
                    </section>
                ))}
            </div>
        </ThemeProvider>
    );
};

export default withStyles(Styles)(App);
