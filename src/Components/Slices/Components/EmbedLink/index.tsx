import React from "react";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import Styles from "./index.Style";
import EmbeddedGistIframe from "../../../EmbedGist";

export const EmbedLinkSliceType: "embed_link" = "embed_link";
enum SliceLabels {
    Github = "github",
}

export interface EmbedLinkSliceProps {
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

const ChooseSliceComponent = (slice: EmbedLinkSliceProps) => {
    switch (slice.slice_label) {
        case SliceLabels.Github:
            return <EmbeddedGistIframe gistUrl={slice.primary.link.embed_url} />;
        default:
            return <Typography>SliceLabelType Not FOund for : {JSON.stringify(slice)}</Typography>;
    }
};

const EmbedLinkSlice: React.SFC<EmbedLinkSliceProps & WithStyles<typeof Styles>> = ({ classes, ...slice }) => {
    return <div className={classes.container}>{ChooseSliceComponent(slice)}</div>;
};

export default withStyles(Styles)(EmbedLinkSlice);
