import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { NextPage, GetStaticProps } from "next";
import { Content } from "@prismicio/client";
import Layout from "../components/PageLayout";
import StaticDataContext, { StaticDataContextType } from "../components/StaticDataContext";
import SEO from "../components/Seo";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import {
    Box,
    GlobalStyles,
    Hidden,
    LinearProgress,
    Link,
    Pagination,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

type PageProps = {
    staticDataContext: StaticDataContextType;
};

const Resume: NextPage<PageProps> = ({ staticDataContext }) => {
    const link = staticDataContext.resumeData?.resume_doc
        ? prismicH.asLink(staticDataContext.resumeData?.resume_doc)
        : "";

    // const link = "https://files.testfile.org/PDF/200MB-TESTFILE.ORG.pdf";

    const router = useRouter();

    const [numPages, setNumPages] = useState<null | number>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loadProgress, setLoadProgress] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        // Redirect to resume on desktop
        // setTimeout(() => {
        //     if (matches && link) {
        //         router.push(link);
        //     }
        // }, 500);
    }, [link, router, matches]);

    const DownloadButton = (
        <>
            <Typography
                style={{
                    marginTop: "1rem",
                }}
            >
                {staticDataContext.last_publication_date &&
                    `Last updated on ${new Date(
                        staticDataContext.last_publication_date
                    ).toLocaleDateString()} at ${new Date(staticDataContext.last_publication_date)
                        // Remove seconds from time
                        .toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}`}
            </Typography>
            <Link
                href={link || ""}
                download="Data-Export.xlsx"
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
                    borderRadius: 20,
                    margin: "auto",
                    marginY: theme.spacing(2),
                })}
                style={{
                    textDecoration: "none",
                }}
            >
                <Typography
                    color="textPrimary"
                    sx={{
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Download CV
                    <DownloadIcon
                        sx={(theme) => ({
                            marginLeft: theme.spacing(0.5),
                        })}
                    />
                </Typography>
            </Link>
        </>
    );

    return (
        <StaticDataContext.Provider value={staticDataContext}>
            <Layout>
                <GlobalStyles
                    styles={{
                        body: {
                            minWidth: "540px",
                        },
                    }}
                />
                <SEO title="Resume" />
                <Box
                    sx={(theme) => ({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        my: theme.spacing(4),
                    })}
                >
                    <Hidden mdDown>
                        <Document
                            file={link}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadProgress={(data) => {
                                setLoadProgress((data.loaded / data.total) * 100);
                            }}
                        >
                            <Page pageNumber={pageNumber} scale={1.3} />
                        </Document>
                    </Hidden>
                    <Hidden mdUp>
                        <Document
                            file={link}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadProgress={(data) => {
                                setLoadProgress((data.loaded / data.total) * 100);
                            }}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </Hidden>
                    {numPages === null && (
                        <LinearProgress
                            variant="determinate"
                            value={loadProgress}
                            sx={(theme) => ({
                                width: "40%",
                                height: "5px",
                                my: theme.spacing(2),
                            })}
                        />
                    )}
                    {numPages !== null && (
                        <Pagination
                            count={numPages || 0}
                            onChange={(e, value) => {
                                setPageNumber(value);
                            }}
                            page={pageNumber}
                            shape="rounded"
                            color="primary"
                            sx={(theme) => ({
                                my: theme.spacing(2),
                            })}
                        />
                    )}
                    {/* Download button */}
                    {DownloadButton}
                </Box>
            </Layout>
        </StaticDataContext.Provider>
    );
};

export default Resume;

export const getStaticProps: GetStaticProps<PageProps> = async ({ params, previewData }) => {
    const client = createClient({ previewData });

    const uid = params?.pagePath?.[params.pagePath.length - 1] || "home";
    const page = await client.getByUID("page", uid);

    let seoDataDoc: Content.SeoDataDocument | null = null;
    let resumeDoc: Content.ResumeDocument | null = null;

    try {
        seoDataDoc = await client.getSingle("seo_data");
        resumeDoc = await client.getSingle("resume");
    } catch (error) {
        // No external links document found
        console.log("error", error);
    }

    return {
        props: {
            page,
            staticDataContext: {
                externalLinksData: null,
                seoData: seoDataDoc?.data || null,
                resumeData: resumeDoc?.data || null,
                last_publication_date: resumeDoc?.last_publication_date || null,
            },
        },
    };
};
