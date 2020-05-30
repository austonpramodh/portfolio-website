import React from "react";
import { Typography, withStyles, WithStyles } from "@material-ui/core";
import Styles from "./index.Style";

export const QuoteSliceType: "quote" = "quote";

export interface QuoteSliceProps {
    __typename: string;
    id: string;
    slice_type: typeof QuoteSliceType;
    slice_label: string;
    primary: {
        quote: string;
    };
}

const QuoteSlice: React.SFC<QuoteSliceProps & WithStyles<typeof Styles>> = ({ primary: { quote }, id, classes }) => {
    return (
        <Typography className={classes.container} variant="body1" key={id}>
            {quote}
        </Typography>
    );
};

export default withStyles(Styles)(QuoteSlice);
