import React, { Fragment } from "react";
import { graphql, PageProps, Link } from "gatsby";
import Styles from "./index.Styles";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import withLayout from "../../Components/Layouts/Blog/withLayout";
import SEO from "../../Components/Seo";
import GetSliceCompoenent, { SliceType } from "../../Components/Slices";
import Footer from "../../Components/Footer";

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
                        id
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
                            code_snippet
                            show_line_numbers
                        }
                    }

                    ... on PrismicBlogPostBodyQuote {
                        id
                        slice_type
                        slice_label
                        primary {
                            quote
                        }
                    }

                    ... on PrismicBlogPostBodyRichtext {
                        id
                        slice_type
                        slice_label
                        primary {
                            rich_text {
                                html
                                text
                                raw
                            }
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

    const renderedBlog = blogPost.body.map((slice, index) => {
        return GetSliceCompoenent(slice, index);
    });

    return (
        <Fragment>
            <SEO title={blogPost.title} description={blogPost.title} />
            <div className={classes.container}>
                <div className={classes.postHeader}>
                    <Typography variant="subtitle2" className={classes.backButtonContainer}>
                        <Link to="/blog">back to list</Link>
                    </Typography>

                    <Typography variant="h1">{blogPost.title}</Typography>
                </div>

                {renderedBlog}
                <Footer />
            </div>
        </Fragment>
    );
};

export default withLayout(withStyles(Styles)(PostTemplate));
