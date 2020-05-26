import React from "react";
import { CssBaseline, NoSsr } from "@material-ui/core";
import { withStyles, WithStyles, ThemeProvider, createStyles } from "@material-ui/styles";
import Layout from "../Components/Layout";
// import Image from "../Components/Image";
import SEO from "../Components/Seo";
import Sections from "../Sections";
import CustomTheme from "../Theme";
import NavBar from "../Components/NavBar";
import CanvasBackground from "../Components/CanvasBackground";

const Styles = () =>
    createStyles({
        container: {
            minHeight: "100vh",
            background:
                "url(https://transitive-bullshit.github.io/react-starfield-animation/static/media/stars.492b41ed.jpg)",
            backgroundAttachment: "fixed",
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

const IndexPage: React.SFC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <Layout>
            <SEO />
            <ThemeProvider theme={CustomTheme}>
                <div className={classes.container}>
                    <CssBaseline />
                    <NoSsr>
                        <CanvasBackground />
                    </NoSsr>
                    <NavBar Sections={Sections} />
                    {Sections.map(({ id, Component }) => {
                        return (
                            <section key={id} id={id} className={classes.sectionContainer}>
                                <Component />
                            </section>
                        );
                    })}
                </div>
            </ThemeProvider>
        </Layout>
    );
};

export default withStyles(Styles)(IndexPage);
