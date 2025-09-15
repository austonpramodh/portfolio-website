import { AppBar } from "@/components/AppBar";
import { ThemeAwareImageCreator } from "@/components/theme-aware-og-image";
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    Link as MuiLink,
    Typography,
} from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    getAllPostsSlug,
    getImageInfo,
    getPost,
    PostFrontmatterData,
} from "./utils";

export const metadata: Metadata = {
    title: "Blogs",
};

export default async function Blogs() {
    const slugs = getAllPostsSlug();

    const slugsWithMetadata = (
        await Promise.all(
            slugs.map(async (slug) => {
                const ct = await getPost(slug);
                return ct ? { slug, frontmatter: ct.frontmatter } : null;
            })
        )
    )
        .filter(Boolean)
        .sort((a, b) =>
            !a || !b
                ? 0
                : b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
        ) as {
        slug: string;
        frontmatter: PostFrontmatterData;
    }[];

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                minHeight: "100vh",
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <AppBar />
            <Container>
                <Container
                    sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        my: 6,
                        flexDirection: "column",
                    }}
                    maxWidth="md"
                >
                    <Typography
                        variant="h2"
                        fontWeight={700}
                        textAlign="center"
                        color="text.primary"
                    >
                        Blogs
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color="text.primary"
                        sx={{
                            my: 2,
                        }}
                    >
                        {`Engineering field notes from the trenches. This blog
                        tackles the non-obvious problems in full-stack
                        development, Networking and machine learning with PyTorch. These are
                        the solutions I had to build when the documentation
                        wasn't enough.`}
                    </Typography>
                </Container>

                <Container sx={{ pb: 12 }}>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {slugsWithMetadata.map((post) => (
                            <Grid
                                key={post.slug}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                }}
                                display={"flex"}
                                id={post.slug}
                            >
                                <BlogCard {...post} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </Container>
    );
}

function BlogCard({
    slug,
    frontmatter,
}: {
    slug: string;
    frontmatter: PostFrontmatterData;
}) {
    const publicationDate = new Date(frontmatter.date).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "long", day: "numeric" }
    );

    const imageInfo = getImageInfo(frontmatter);

    const image = frontmatter.heroImageExploded ? (
        <Image
            src={frontmatter.heroImageExploded.src}
            height={frontmatter.heroImageExploded.height}
            width={frontmatter.heroImageExploded.width}
            alt={frontmatter.title}
            style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
            }}
        />
    ) : (
        <ThemeAwareImageCreator
            title={imageInfo.title}
            description={imageInfo.description}
            background={imageInfo.background}
            primaryTextColor={imageInfo.primaryTextColor}
            secondaryTextColor={imageInfo.secondaryTextColor}
        />
    );

    return (
        <article>
            <MuiLink
                component={Link}
                href={`/blogs/${slug}`}
                underline="none"
                aria-label={`Read more about ${frontmatter.title}`}
            >
                <Card
                    sx={{
                        bgcolor: "background.paper",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        transition:
                            "transform 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        },
                    }}
                >
                    <CardMedia>{image}</CardMedia>
                    <CardHeader
                        sx={{
                            pb: 0,
                            "& .MuiCardHeader-title": {
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                lineHeight: 1.4,
                            },
                            "& .MuiCardHeader-subheader": {
                                fontSize: "0.8rem",
                                color: "text.secondary",
                            },
                        }}
                        title={frontmatter.title}
                        subheader={frontmatter.description}
                    />

                    <CardContent
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "flex-end",
                            pt: 2,
                        }}
                    >
                        {publicationDate}
                    </CardContent>
                </Card>
            </MuiLink>
        </article>
    );
}
