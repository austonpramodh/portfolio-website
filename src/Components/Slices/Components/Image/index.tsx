import React from "react";
import GatsbyImage, { FluidObject } from "gatsby-image";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import Styles from "./index.Style";
export const ImageSliceType: "image" = "image";

export interface ImageSliceProps {
    id: string;
    slice_type: typeof ImageSliceType;
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
    id,
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
            <div key={id} className={classes.imageContainer}>
                <GatsbyImage fluid={fluid} />
                <Typography variant="caption">{alt}</Typography>
            </div>
        </div>
    );
};

export default withStyles(Styles)(ImageSlice);
