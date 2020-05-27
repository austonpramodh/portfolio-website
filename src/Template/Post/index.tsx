import React from "react";
import { graphql, PageProps } from "gatsby";
import Styles from "./index.Styles";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import Layout from "../../Components/Layouts/Blog";
import SEO from "../../Components/Seo";
import GetSliceCompoenent, { SliceType } from "../../Components/Slices";

export const query = graphql`
    query($uid: String!) {
        prismicBlogPost(uid: { eq: $uid }) {
            data {
                short_title
                introduction
                published_on
                last_updated
                title
                body {
                    ... on PrismicBlogPostBodyText {
                        slice_type
                        slice_label
                        primary {
                            text
                        }
                    }

                    ... on PrismicBlogPostBodyImage {
                        slice_type
                        slice_label
                        id
                        primary {
                            image {
                                alt
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 1000, maxHeight: 800) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }

                    ... on PrismicBlogPostBodyEmbedLink {
                        slice_type
                        slice_label
                        id
                        primary {
                            link {
                                title
                                embed_url
                            }
                        }
                    }

                    ... on PrismicBlogPostBodyCodeSnippet {
                        id
                        slice_type
                        slice_label
                        primary {
                            language
                            code_snippet
                            show_line_numbers
                        }
                    }
                    __typename
                }
            }
        }
    }
`;

interface PostDataInterface {
    prismicBlogPost: {
        data: {
            short_title: string;
            introduction: string;
            published_on: any;
            last_updated: any;
            title: string;
            body: SliceType[];
        };
    };
}

const PostTemplate: React.SFC<PageProps<PostDataInterface> & WithStyles<typeof Styles>> = ({ data, classes }) => {
    const blogPost = data.prismicBlogPost.data;

    const renderedBlog = blogPost.body.map(slice => {
        return GetSliceCompoenent(slice);
    });

    return (
        <Layout>
            <SEO title={blogPost.title} description={blogPost.title} />
            <div className={classes.container}>
                <Typography variant="h1" className={classes.postHeader}>
                    {blogPost.title}
                </Typography>
                {renderedBlog}
            </div>
        </Layout>
    );
};

export default withStyles(Styles)(PostTemplate);
