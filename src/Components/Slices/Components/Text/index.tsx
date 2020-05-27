import React from "react";
import { Typography, withStyles, WithStyles } from "@material-ui/core";
import Styles from "./index.Style";

export const TextSliceType: "text" = "text";

export interface TextSliceProps {
    id: string;
    slice_type: typeof TextSliceType;
    primary: {
        text: string;
    };
}

const TextSlice: React.SFC<TextSliceProps & WithStyles<typeof Styles>> = ({ primary: { text }, id, classes }) => {
    return (
        <div className={classes.container}>
            <Typography variant="body1" key={id}>
                {text}
            </Typography>
        </div>
    );
};

export default withStyles(Styles)(TextSlice);
