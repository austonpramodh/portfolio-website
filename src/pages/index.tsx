import React from "react";
import { NoSsr } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/styles";
import Layout from "../Components/Layouts/MainPage";
import Sections from "../Sections";
import NavBar from "../Components/NavBar";
import CanvasBackground from "../Components/CanvasBackground";
import SEO from "../Components/Seo";

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
            <div className={classes.container}>
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
        </Layout>
    );
};

export default withStyles(Styles)(IndexPage);
