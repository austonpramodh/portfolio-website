import { Theme, TypographyProps } from "@mui/material";
import { MDXComponents } from "mdx/types.js";

export type MuiMdxComponentsOptionsPropOverrides = {
    [key in keyof MDXComponents]?: any;
} & {
    [key in
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "p"
        | "strong"
        | "em"]?: TypographyProps;
};

export type MuiMdxComponentsOptions = {
    overrides?: MDXComponents;
    propOverrides?: MuiMdxComponentsOptionsPropOverrides;
    Highlighter?: React.ComponentType<any>;
    highlighterStyle?: (theme: Theme) => object | object;
};
