import React from "react";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import Styles from "./index.Style";
import EmbeddedGistIframe from "../../../EmbedGist";

export const EmbedLinkSliceType: "embed_link" = "embed_link";
enum SliceLabels {
    Github = "github",
}

export interface EmbedLinkSliceProps {
    __typename: string;
    id: string;
    slice_type: typeof EmbedLinkSliceType;
    slice_label: SliceLabels;
    primary: {
        link: {
            title: string;
            embed_url: string;
        };
    };
}

const ChooseSliceComponent = (slice: EmbedLinkSliceProps, classes: WithStyles<typeof Styles>["classes"]) => {
    switch (slice.slice_label) {
        case SliceLabels.Github:
            return <EmbeddedGistIframe className={classes.github} gistUrl={slice.primary.link.embed_url} />;
        default:
            return <Typography>SliceLabelType Not FOund for : {JSON.stringify(slice)}</Typography>;
    }
};

const EmbedLinkSlice: React.SFC<EmbedLinkSliceProps & WithStyles<typeof Styles>> = ({ classes, ...slice }) => {
    return ChooseSliceComponent(slice, classes);
};

export default withStyles(Styles)(EmbedLinkSlice);
