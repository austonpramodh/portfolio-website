"use client";
import {
    LinearProgress,
    Pagination,
    Paper,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

const ResumePage = () => {
    const pdfFile = "/Resume.pdf";

    const [numPages, setNumPages] = useState<null | number>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loadProgress, setLoadProgress] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <Paper
                sx={{
                    p: numPages === null ? 2 : undefined,
                }}
            >
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadProgress={(data) => {
                        setLoadProgress((data.loaded / data.total) * 100);
                    }}
                >
                    <Page
                        pageNumber={pageNumber}
                        // renderTextLayer={false}
                        // renderAnnotationLayer={false}
                        scale={isMediumScreen ? 1.5 : 0.5}
                    />
                </Document>
            </Paper>

            {numPages === null && (
                <>
                    <LinearProgress
                        variant="determinate"
                        value={loadProgress}
                        sx={(theme) => ({
                            width: "40%",
                            height: "5px",
                            my: theme.spacing(2),
                        })}
                    />
                </>
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
        </>
    );
};

export default ResumePage;
