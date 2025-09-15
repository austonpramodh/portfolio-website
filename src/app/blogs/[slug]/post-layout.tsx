import { AppBar } from "@/components/AppBar";
import { ThemeAwareImageCreator } from "@/components/theme-aware-og-image";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
    Box,
    Container,
    Divider,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { JSX } from "react";
import { PostFrontmatterData } from "../utils";
import { getImageInfo } from "./page";

export default function PostLayout({
    children,
    frontmatter,
}: {
    children: React.ReactNode;
    frontmatter: PostFrontmatterData;
}): JSX.Element {
    const formattedDate = frontmatter.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const articleUrl = `https://auston.dev/blogs/${frontmatter.slug}`;

    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    backgroundColor: "background.paper",
                    pb: 4,
                }}
            >
                <AppBar />
                <Container
                    maxWidth="md"
                    sx={{
                        my: 8,
                        flexGrow: 1,
                    }}
                >
                    <>
                        <Box>
                            {!frontmatter.disableHeader && (
                                <Typography
                                    variant="h4"
                                    textAlign={"center"}
                                    sx={{ mb: 2 }}
                                    fontWeight={700}
                                >
                                    {frontmatter.title}
                                </Typography>
                            )}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    // alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    textAlign={"center"}
                                    fontWeight={700}
                                    color="textPrimary"
                                >
                                    Published: {formattedDate}
                                </Typography>
                                <Divider
                                    orientation="vertical"
                                    sx={{
                                        height: "auto",
                                        mx: 2,
                                        bgcolor: "secondary.light",
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    textAlign={"center"}
                                    fontWeight={700}
                                    color="textPrimary"
                                >
                                    {frontmatter.readTime}
                                </Typography>
                                {/* <Divider
                                    orientation="vertical"
                                    sx={{
                                        height: "auto",
                                        mx: 2,
                                        bgcolor: "secondary.light",
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    textAlign={"center"}
                                    fontWeight={700}
                                    color="textPrimary"
                                >
                                    Author: {frontmatter.author}
                                </Typography> */}
                            </Box>

                            {/* Hero Image */}
                            <Paper
                                sx={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex",
                                    my: 4,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                {frontmatter.heroImageExploded ? (
                                    <Image
                                        src={frontmatter.heroImageExploded.src}
                                        height={
                                            frontmatter.heroImageExploded.height
                                        }
                                        width={
                                            frontmatter.heroImageExploded.width
                                        }
                                        alt={frontmatter.title}
                                        style={{
                                            height: "auto",
                                            width: "100%",
                                        }}
                                    />
                                ) : (
                                    <ThemeAwareImageCreator
                                        title={getImageInfo(frontmatter).title}
                                        description={
                                            getImageInfo(frontmatter)
                                                .description
                                        }
                                        background={
                                            getImageInfo(frontmatter).background
                                        }
                                        primaryTextColor={
                                            getImageInfo(frontmatter)
                                                .primaryTextColor
                                        }
                                        secondaryTextColor={
                                            getImageInfo(frontmatter)
                                                .secondaryTextColor
                                        }
                                    />
                                )}
                            </Paper>
                        </Box>
                        <Box
                            sx={{
                                my: 4,
                            }}
                        >
                            <Divider />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    my: 2,
                                }}
                            >
                                <Typography variant="h5" color="textPrimary">
                                    Share this post
                                </Typography>
                                <Box>
                                    <IconButton
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}&title=${frontmatter.title}&summary=${frontmatter.description}&source=Auston-Blog`}
                                    >
                                        <LinkedInIcon
                                            sx={{
                                                color: "textPrimary",
                                            }}
                                        />
                                    </IconButton>
                                    <IconButton
                                        href={`http://twitter.com/share?text=${frontmatter.title}&url=${articleUrl}&hashtags=${frontmatter.hashTags}`}
                                    >
                                        <TwitterIcon
                                            sx={{
                                                color: "textPrimary",
                                            }}
                                        />
                                    </IconButton>
                                    <IconButton
                                        href={`mailto:?subject=I wanted you to see this site&amp;body=Check out this site ${articleUrl}.`}
                                    >
                                        <EmailIcon
                                            sx={{
                                                color: "textPrimary",
                                            }}
                                        />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Divider />
                        </Box>
                    </>
                </Container>
                <Container maxWidth="md">
                    <article>{children}</article>
                </Container>
            </Container>
        </>
    );
}
