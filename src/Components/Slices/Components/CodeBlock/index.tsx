import React from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import Styles from "./index.Styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeBlockSliceType: "code_snippet" = "code_snippet";

export interface CodeBlockSliceProps extends WithStyles<typeof Styles> {
    id: string;
    slice_type: typeof CodeBlockSliceType;
    slice_label: string;
    primary: {
        language: string;
        code_snippet: string;
        show_line_numbers: boolean;
    };
}

const CodeSliceBlock: React.SFC<CodeBlockSliceProps> = ({
    classes,
    // eslint-disable-next-line @typescript-eslint/camelcase
    primary: { code_snippet, language, show_line_numbers },
}) => {
    return (
        <div className={classes.container}>
            {/*  eslint-disable-next-line @typescript-eslint/camelcase */}
            <SyntaxHighlighter language={language} style={githubGist} showLineNumbers={show_line_numbers}>
                {/* eslint-disable-next-line @typescript-eslint/camelcase */}
                {code_snippet}
            </SyntaxHighlighter>
        </div>
    );
};

export default withStyles(Styles)(CodeSliceBlock);
