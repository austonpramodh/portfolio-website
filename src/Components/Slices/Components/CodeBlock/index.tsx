import React from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import Styles from "./index.Styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeBlockSliceType: "code_snippet" = "code_snippet";

enum SliceLabels {
    JavaScript = "javascript",
}
export interface CodeBlockSliceProps extends WithStyles<typeof Styles> {
    __typename: string;
    id: string;
    slice_type: typeof CodeBlockSliceType;
    slice_label: SliceLabels | null;
    primary: {
        code_snippet: string;
        show_line_numbers: boolean;
    };
}

const CodeSliceBlock: React.SFC<CodeBlockSliceProps> = ({
    classes,
    // eslint-disable-next-line @typescript-eslint/camelcase
    slice_label,
    // eslint-disable-next-line @typescript-eslint/camelcase
    primary: { code_snippet, show_line_numbers },
}) => {
    return (
        <div className={classes.container}>
            <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/camelcase
                language={slice_label || undefined}
                style={githubGist}
                // eslint-disable-next-line @typescript-eslint/camelcase
                showLineNumbers={show_line_numbers}
            >
                {/* eslint-disable-next-line @typescript-eslint/camelcase */}
                {code_snippet}
            </SyntaxHighlighter>
        </div>
    );
};

export default withStyles(Styles)(CodeSliceBlock);
