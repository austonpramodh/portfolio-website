import React from "react";
import { withStyles, WithStyles, Typography } from "@material-ui/core";
import Styles from "./index.Style";
import parse, { HTMLReactParserOptions, domToReact } from "html-react-parser";

export const RichTextSliceType: "richtext" = "richtext";

export interface RichTextSliceProps {
    __typename: string;
    id: string;
    slice_type: typeof RichTextSliceType;
    slice_label: string;
    primary: {
        rich_text: {
            html: string;
            text: string;
            raw: {
                type: string;
                text: string;
                spans: {}[];
            }[];
        };
    };
}

const htmlReactParseOptions: HTMLReactParserOptions = {
    replace: domNode => {
        switch (domNode.name) {
            case "h1":
                return (
                    <Typography variant="h1">
                        {domNode.children ? domToReact(domNode.children, htmlReactParseOptions) : domNode.data}
                    </Typography>
                );
            case "h2":
                return (
                    <Typography variant="h2">
                        {domNode.children ? domToReact(domNode.children, htmlReactParseOptions) : domNode.data}
                    </Typography>
                );

            default:
                return undefined;
        }
    },
};

const RichTextSlice: React.SFC<RichTextSliceProps & WithStyles<typeof Styles>> = ({
    // eslint-disable-next-line @typescript-eslint/camelcase
    primary: { rich_text },
    classes,
}) => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    return <div className={classes.container}>{parse(rich_text.html, htmlReactParseOptions)}</div>;
};

export default withStyles(Styles)(RichTextSlice);
