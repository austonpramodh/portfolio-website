import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";

// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import { ParsedUrlQuery } from "querystring";
import { Content } from "@prismicio/client";
import Layout from "../components/PageLayout";
import StaticDataContext, { StaticDataContextType } from "../components/StaticDataContext";
import NavBar from "../components/NavBar";
import ScrollSpy from "react-ui-scrollspy";
import SEO from "../components/Seo";

type PageProps = {
    page: Content.AllDocumentTypes;
    //   defaultSEOData: SeoMetadataDocument;
    staticDataContext: StaticDataContextType;
};

const Page: NextPage<PageProps> = ({ page, staticDataContext }) => {
    return (
        <StaticDataContext.Provider value={staticDataContext}>
            <Layout>
                {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
                <SEO />
                <NavBar
                    sections={[
                        {
                            link: "/#home",
                            label: "Home",
                            id: "home",
                        },
                        {
                            link: "/#about-me",
                            label: "About Me",
                            id: "about-me",
                        },
                        {
                            link: "/#services",
                            label: "Services",
                            id: "services",
                        },
                        {
                            link: "/#skills",
                            label: "Skills",
                            id: "skills",
                        },
                        {
                            link: "/#experiences",
                            label: "Experiences",
                            id: "experiences",
                        },
                        {
                            link: "/#contact-me",
                            label: "Contact Me",
                            id: "contact-me",
                        },
                    ]}
                />
                <ScrollSpy offsetBottom={200} offsetTop={100} useBoxMethod updateHistoryStack={false}>
                    {page.type === "page" && (
                        <SliceZone
                            slices={page.data.slices}
                            components={components}
                            context={{
                                test: true,
                            }}
                        />
                    )}
                </ScrollSpy>

                {/* <Footer /> */}
            </Layout>
        </StaticDataContext.Provider>
    );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async ({ params, previewData }) => {
    const client = createClient({ previewData });

    const uid = params?.pagePath?.[params.pagePath.length - 1] || "home";
    const page = await client.getByUID("page", uid);

    let externalLinksDoc: Content.ExternalLinksDocument | null = null;
    let seoDataDoc: Content.SeoDataDocument | null = null;

    try {
        externalLinksDoc = await client.getSingle("external_links");
        seoDataDoc = await client.getSingle("seo_data");
    } catch (error) {
        // No external links document found
        console.log("error", error);
    }

    return {
        props: {
            page,
            staticDataContext: {
                externalLinksData: externalLinksDoc?.data || null,
                seoData: seoDataDoc?.data || null,
            },
        },
    };
};

interface Params extends ParsedUrlQuery {
    locale?: string | undefined;
}

// TODO: add typings for this
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const client = createClient();

    const pages = await client.getAllByType("page");

    return {
        paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
        fallback: false,
    };
};
