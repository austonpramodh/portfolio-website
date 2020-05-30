import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface ProfileImageData {
    prismicHomepage: {
        data: {
            profile_picture: {
                localFile: {
                    childImageSharp: {
                        fluid: FluidObject;
                    };
                };
            };
        };
    };
}
const ProfileImage = () => {
    const data = useStaticQuery<ProfileImageData>(graphql`
        {
            prismicHomepage {
                data {
                    profile_picture {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 300) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        alt
                    }
                }
            }
        }
    `);

    return (
        <Img
            style={{ height: "100%", width: "100%" }}
            fluid={data.prismicHomepage.data.profile_picture.localFile.childImageSharp.fluid}
        />
    );
};

export default ProfileImage;
