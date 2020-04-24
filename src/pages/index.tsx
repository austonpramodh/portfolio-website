import React from "react";
import { CssBaseline } from "@material-ui/core";
import { withStyles, WithStyles, ThemeProvider, createStyles } from "@material-ui/styles";
import Layout from "../Components/Layout";
// import Image from "../Components/Image";
import SEO from "../Components/Seo";
import Sections from "../Sections";
import CustomTheme from "../Theme";
import NavBar from "../Components/NavBar";

const Styles = () =>
    createStyles({
        container: {
            height: "100vh",
        },
        sectionContainer: {
            display: "flex",
        },
        "@global": {
            html: {
                scrollBehavior: "smooth", // required for smooth scrolling between link tags from navbar
            },
        },
    });

const IndexPage: React.SFC<WithStyles<typeof Styles>> = ({ classes }) => (
    <Layout>
        <SEO title="Home" />
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
    </Layout>
);

export default withStyles(Styles)(IndexPage);
