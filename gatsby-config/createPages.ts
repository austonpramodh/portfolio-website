import { resolve } from "path";
import { GatsbyNode } from "gatsby";

interface AllPrismicBlogPostUids {
    allPrismicBlogPost: {
        nodes: {
            uid: string;
        }[];
    };
}

const createPostPages: GatsbyNode["createPages"] = async ({ boundActionCreators, graphql }) => {
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

const createBlogHomePages: GatsbyNode["createPages"] = async ({ boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    // const result = await graphql(`
    //     query {
    //         allPrismicBlogPost {
    //             totalCount
    //         }
    //     }
    // `);

    createPage({
        path: "blog",
        component: resolve(__dirname, "../src/Template/Home/index.tsx"),
        context: {
            skip: 0,
            limit: 10,
        },
    });
};

export const createPages: GatsbyNode["createPages"] = async createPagesArgs => {
    createPostPages(createPagesArgs);
    createBlogHomePages(createPagesArgs);
};
