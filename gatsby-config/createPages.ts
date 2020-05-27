import { resolve } from "path";
import { GatsbyNode } from "gatsby";

interface AllPrismicBlogPostUids {
    allPrismicBlogPost: {
        nodes: {
            uid: string;
        }[];
    };
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const result = await graphql(`
        query MyQuery {
            allPrismicBlogPost {
                nodes {
                    uid
                }
            }
        }
    `);

    (result.data as AllPrismicBlogPostUids).allPrismicBlogPost.nodes.forEach(({ uid }) => {
        createPage({
            path: uid,
            component: resolve(__dirname, "../src/Template/Post/index.tsx"),
            context: {
                uid: uid,
            },
        });
    });
};
