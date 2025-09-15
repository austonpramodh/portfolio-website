import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostsSlug, getImageInfo, getPost } from "../utils";
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
    const { title, description } = frontmatter;

    const imageInfo = getImageInfo(frontmatter);
    return {
        title: title,
        description: description,
        openGraph: {
            images: [
                {
                    url:
                        "/api/og?title=" +
                        imageInfo.title +
                        "&description=" +
                        imageInfo.description +
                        "&background=" +
                        encodeURIComponent(imageInfo.background) +
                        "&primaryTextColor=" +
                        encodeURIComponent(imageInfo.primaryTextColor) +
                        "&secondaryTextColor=" +
                        encodeURIComponent(imageInfo.secondaryTextColor) +
                        "&height=" +
                        encodeURIComponent(imageHeight) +
                        "&width=" +
                        encodeURIComponent(imageWidth) +
                        "&subDescription=" +
                        encodeURIComponent(imageInfo.subDescription),
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
