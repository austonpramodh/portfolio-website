import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypeExpressiveCode, {
    RehypeExpressiveCodeOptions,
} from "rehype-expressive-code";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    webpack: (config) => {
        // Add your custom webpack configuration here
        config.resolve.alias.canvas = false; // Disable canvas module for PDF rendering
        return config;
    },
};

const rehypeExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
    // You can add configuration options here
    plugins: [pluginLineNumbers()],
    defaultProps: {
        showLineNumbers: false,
        frame: "code",
    },
    themes: ["github-light", "github-dark"],
    themeCssSelector: (theme) => {
        switch (theme.name) {
            case "github-light":
                return ".mode-light";
            case "github-dark":
                return ".mode-dark";
            default:
                return "html";
        }
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
            rehypeMdxImportMedia,
            [rehypeExpressiveCode, rehypeExpressiveCodeOptions],
        ],
    },
});

export default withMDX(nextConfig);
