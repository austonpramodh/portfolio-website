import React from "react";
import { NoSsr } from "@material-ui/core";
import Layout from "../Components/Layouts/MainPage";
import Sections from "../Sections";
import NavBar from "../Components/NavBar";
import CanvasBackground from "../Components/CanvasBackground";
import SEO from "../Components/Seo";
import InnerLayout from "../Components/Layouts/MainPage/InnerLayout";
import { PageProps } from "gatsby";

const IndexPage: React.SFC<PageProps> = () => {
    return (
        <Layout>
            <SEO />
            <InnerLayout>
                <NoSsr>
                    <CanvasBackground />
                </NoSsr>
                <NavBar Sections={Sections} />
                {Sections.map(({ id, Component }) => {
                    return (
                        <section key={id} id={id} style={{ display: "flex" }}>
                            <Component />
                        </section>
                    );
                })}
            </InnerLayout>
        </Layout>
    );
};

export default IndexPage;
