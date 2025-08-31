import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostsSlug, getPost } from "../utils";
import PostLayout from "./post-layout";

export default async function Page({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;

    try {
        if (!slug) throw new Error("Slug missing!");

        const content = await getPost(slug); // Assuming getPost is a function that fetches the post data based on slugs

        if (!content)
            throw new Error("Content Validation Error or Content not found!");

        return (
            <PostLayout
                frontmatter={{
                    ...content.frontmatter,
                    heroImageExploded: content.frontmatter.heroImageExploded,
                    slug,
                }}
            >
                <content.default />
            </PostLayout>
        );
    } catch (error) {
        console.log(error);
        return notFound();
    }
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    if (!slug) throw new Error("Slug missing!");

    const content = await getPost(slug);

    if (!content)
        throw new Error("Content Validation Error or Content not found!");

    const { frontmatter } = content;
    const [imageHeight, imageWidth] = [600, 800];
    const {
        title,
        description,
        textImageBackground,
        textImageTitle,
        textImageDescription,
        textImageTitleColor,
        textImageDescriptionColor,
    } = frontmatter;

    return {
        title: title,
        description: description,
        openGraph: {
            images: [
                {
                    url:
                        "/api/og?title=" +
                        textImageTitle +
                        "&description=" +
                        textImageDescription +
                        "&backgroundColor=" +
                        encodeURIComponent(textImageBackground) +
                        "&primaryTextColor=" +
                        encodeURIComponent(textImageTitleColor) +
                        "&secondaryTextColor=" +
                        encodeURIComponent(textImageDescriptionColor) +
                        "&height=" +
                        encodeURIComponent(imageHeight) +
                        "&width=" +
                        encodeURIComponent(imageWidth),
                    width: 800,
                    height: 600,
                    alt: frontmatter.title,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const slugs = getAllPostsSlug();
    return slugs.map((s) => ({ slug: s }));
}
