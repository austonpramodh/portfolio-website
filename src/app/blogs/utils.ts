import fs from "fs";
import path from "path";
import z from "zod";

export const getAllPostsSlug = () => {
    const blogDir = path.join(process.cwd(), "src", "app", "blogs", "_content");
    const allFiles = fs.readdirSync(blogDir, { withFileTypes: true });
    const directories = allFiles.filter((file) => file.isDirectory());
    const slugs = directories.map(({ name }) => name);
    return slugs;
};

const frontMatterSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    heroImage: z.string().nullable().optional(),
    author: z.string(),
    readTime: z.string(),
    hashTags: z.array(z.string()).optional().default([]),
    disableHeader: z.boolean().optional().default(false),
    textImageTitle: z.string().optional(),
    textImageDescription: z.string().optional(),
    textImageBackground: z.string().default("#FF350A"),
    textImageTitleColor: z.string().default("#FFFFFF"),
    textImageDescriptionColor: z.string().default("#F8F8F8"),
});

export type PostFrontmatterData = {
    title: string;
    description: string;
    date: Date;
    heroImage: string;
    author: string;
    readTime: string;
    hashTags: string[];
    disableHeader?: boolean;
    heroImageExploded: {
        src: string;
        height: number;
        width: number;
        blurDataURL: string;
        blurWidth: number;
        blurHeight: number;
    } | null;
    slug: string;
    textImageTitle: string | null;
    textImageDescription: string | null;
    textImageBackground: string;
    textImageTitleColor: string;
    textImageDescriptionColor: string;
};

export const getPost = async (
    slug: string
): Promise<{
    default: React.ComponentType;
    frontmatter: PostFrontmatterData;
} | null> => {
    try {
        const content = await import(`./_content/${slug}/page.mdx`);

        const frontmatter = frontMatterSchema.parse(content.frontmatter);

        // TODO: validate if hero image name exists
        let heroImageExploded = null;
        if (frontmatter.heroImage) {
            heroImageExploded = await import(
                `./_content/${slug}/${frontmatter.heroImage}`
            );
        }

        return {
            ...content,
            frontmatter: {
                ...frontmatter,
                heroImageExploded: heroImageExploded?.default ?? null,
                slug,
            },
        };
    } catch (error) {
        console.log(error);
        return null;
    }
};
