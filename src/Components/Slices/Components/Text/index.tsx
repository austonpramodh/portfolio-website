import React from "react";
import { Typography, withStyles, WithStyles } from "@material-ui/core";
import Styles from "./index.Style";

export const TextSliceType: "text" = "text";

export interface TextSliceProps {
    __typename: string;
    id: string;
    slice_type: typeof TextSliceType;
    slice_label: string;
    primary: {
        text: string;
    };
}

const TextSlice: React.SFC<TextSliceProps & WithStyles<typeof Styles>> = ({ primary: { text }, id, classes }) => {
    return (
        <Typography className={classes.container} variant="body1" key={id}>
            {text}
        </Typography>
    );
};

export default withStyles(Styles)(TextSlice);
