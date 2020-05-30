import React, { Fragment } from "react";
import { graphql, PageProps, Link } from "gatsby";
import Styles from "./index.Styles";
import { withStyles, WithStyles, Typography, Avatar } from "@material-ui/core";
import withLayout from "../../Components/Layouts/Blog/withLayout";
import SEO from "../../Components/Seo";
import Footer from "../../Components/Footer";
import ProfileImage from "../../Components/ProfileImage";
import moment from "moment";

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allPrismicBlogPost(skip: $skip, limit: $limit) {
            nodes {
                id
                uid
                data {
                    short_title
                    introduction
                    published_on
                    last_updated
                }
            }
        }
    }
`;

interface HomeDataInterface {
    allPrismicBlogPost: {
        nodes: {
            id: string;
            uid: string;
            data: {
                short_title: string;
                introduction: string;
                published_on: any;
                last_updated: any;
            };
        }[];
    };
}

const BlogTemplate: React.SFC<PageProps<HomeDataInterface> & WithStyles<typeof Styles>> = ({
    data: {
        allPrismicBlogPost: { nodes },
    },
    classes,
}) => {
    const allPosts = nodes;

    return (
        <Fragment>
            <SEO title={"Blog Posts"} description={"Blog Posts"} />
            <div className={classes.container}>
                <div className={classes.profile}>
                    <Avatar className={classes.avatar}>
                        <ProfileImage />
                    </Avatar>
                    <Typography variant="h1">Auston Pramodh Barboza</Typography>
                    <Typography className={classes.role} variant="body1">
                        Software Engineer
                    </Typography>
                </div>
                {/* eslint-disable-next-line @typescript-eslint/camelcase*/}
                {allPosts.map(({ uid, id, data: { introduction, short_title, published_on } }) => {
                    return (
                        <Link key={id} to={"/" + uid}>
                            <div className={classes.post}>
                                {/* eslint-disable-next-line @typescript-eslint/camelcase*/}
                                <Typography variant="h2">{short_title}</Typography>
                                <Typography variant="subtitle2">
                                    {moment(published_on).format("MMM DD, YYYY")}
                                </Typography>
                                <Typography variant="body1">{introduction}</Typography>
                            </div>
                        </Link>
                    );
                })}

                <Footer />
            </div>
        </Fragment>
    );
};

export default withLayout(withStyles(Styles)(BlogTemplate));
