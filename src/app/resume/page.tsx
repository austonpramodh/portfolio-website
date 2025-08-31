"use server";
import { AppBar } from "@/components/AppBar";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, Container, Link, Typography } from "@mui/material";
import fs from "fs/promises";
import path from "path";
import LastUpdatedOn from "./LastUpdated";
import ResumePage from "./pageComponent";

const filePath = path.join(process.cwd(), "public", "Resume.pdf");

// Run once at build time (if statically generated)
const stats = await fs.stat(filePath);
const lastUpdatedDate = stats.mtime.toISOString();

const DownloadButton = () => {
    return (
        <>
            <LastUpdatedOn date={lastUpdatedDate} />

            <Link
                href={"/resume.pdf"}
                download="auston-resume.pdf"
                sx={{
                    backgroundColor: "var(--variant-containedBg)",
                    px: 1,
                    py: 4,
                    borderRadius: 20,
                    margin: "auto",
                    marginY: 2,
                }}
                style={{
                    textDecoration: "none",
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: 20,
                    }}
                >
                    <Typography
                        color="background.default"
                        sx={{
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        Download CV
                        <DownloadIcon
                            sx={{
                                ml: 0.5,
                            }}
                        />
                    </Typography>
                </Button>
            </Link>
        </>
    );
};

const Page = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    minHeight: "100vh",
                    // backgroundColor: "#f5f5f5",
                    backgroundColor: "background.paper",
                }}
                disableGutters
            >
                <main>
                    <AppBar />
                    <Container
                        maxWidth="md"
                        sx={{
                            py: 2,
                            // px: {
                            //     md: 2,
                            // },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            minHeight: "100vh",
                            // maxHeight: "100vh",
                        }}
                    >
                        <ResumePage />
                        <DownloadButton />
                    </Container>
                </main>
            </Container>
        </>
    );
};

export default Page;
