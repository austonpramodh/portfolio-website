import React from "react";
import GatsbyImage, { FluidObject } from "gatsby-image";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import Styles from "./index.Style";
export const ImageSliceType: "image" = "image";

export interface ImageSliceProps {
    __typename: string;
    id: string;
    slice_type: typeof ImageSliceType;
    slice_label: string;
    primary: {
        image: {
            alt?: string;
            localFile: {
                childImageSharp: {
                    fluid: FluidObject;
                };
            };
        };
    };
}

const ImageSlice: React.SFC<ImageSliceProps & WithStyles<typeof Styles>> = ({
    primary: {
        image: {
            alt,
            localFile: {
                childImageSharp: { fluid },
            },
        },
    },
    classes,
}) => {
    return (
        <div className={classes.container}>
            <GatsbyImage className={classes.image} fluid={fluid} />
            <Typography variant="caption">{alt}</Typography>
        </div>
    );
};

export default withStyles(Styles)(ImageSlice);
