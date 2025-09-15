import { Divider, Link, Paper, Typography } from "@mui/material";
import { MDXComponents } from "mdx/types.js";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MuiMdxComponentsOptions } from "./types";

const defaults: (options: MuiMdxComponentsOptions) => MDXComponents = ({
    propOverrides,
}) => ({
    h1: (props: any) => (
        <Typography
            {...props}
            component="h1"
            variant="h1"
            color="textPrimary"
            {...propOverrides?.h1}
        />
    ),
    h2: (props: any) => (
        <Typography
            {...props}
            component="h2"
            variant="h2"
            color="textPrimary"
            {...propOverrides?.h2}
        />
    ),
    h3: (props: any) => (
        <Typography
            {...props}
            component="h3"
            variant="h3"
            color="textPrimary"
            {...propOverrides?.h3}
        />
    ),
    h4: (props: any) => (
        <Typography
            {...props}
            component="h4"
            variant="h4"
            color="textPrimary"
            {...propOverrides?.h4}
        />
    ),
    h5: (props: any) => (
        <Typography
            {...props}
            component="h5"
            variant="h5"
            color="textPrimary"
            {...propOverrides?.h5}
        />
    ),
    h6: (props: any) => (
        <Typography
            {...props}
            component="h6"
            variant="h6"
            color="textPrimary"
            {...propOverrides?.h6}
        />
    ),
    p: (props: any) => (
        <Typography
            {...props}
            component="p"
            variant="body1"
            color="textPrimary"
            {...propOverrides?.p}
        />
    ),
    strong: (props: any) => (
        <Typography
            {...props}
            component="strong"
            variant="inherit"
            color="textPrimary"
            {...propOverrides?.strong}
        />
    ),
    em: (props: any) => (
        <Typography
            {...props}
            component="em"
            variant="inherit"
            color="textPrimary"
            {...propOverrides?.em}
        />
    ),
    ul: (props: any) => (
        <Typography
            {...props}
            component="ul"
            variant="inherit"
            color="textPrimary"
            {...propOverrides?.ul}
        />
    ),
    ol: (props: any) => (
        <Typography
            {...props}
            component="ol"
            variant="inherit"
            color="textPrimary"
            {...propOverrides?.ol}
        />
    ),
    li: (props: any) => (
        <Typography
            {...props}
            component="li"
            variant="inherit"
            color="textPrimary"
            {...propOverrides?.li}
        />
    ),
    a: (props: any) => <Link {...props} {...propOverrides?.a} />,
    hr: (props: any) => (
        <Divider
            {...props}
            component="hr"
            sx={{
                height: 2,
                my: 2,
                // (theme) => theme.spacing(1)
            }}
            {...propOverrides?.hr}
        />
    ),
    blockquote: (props: any) => (
        <Paper
            {...props}
            component="blockquote"
            square
            elevation={1}
            sx={{
                paddingLeft: (theme) => theme.spacing(1),
                paddingTop: (theme) => theme.spacing(0.5),
                paddingBottom: (theme) => theme.spacing(0.5),
                paddingRight: (theme) => theme.spacing(0.5),
                color: (theme) => theme.palette.text.secondary,
                borderLeft: 3,
            }}
            {...propOverrides?.blockquote}
        />
    ),
    pre: (
        props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
    ) => {
        return <pre {...props} {...propOverrides?.code} />;
    },
    code: (
        props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
    ) => {
        // Handled by expressive-code library
        if (Array.isArray(props.children)) {
            return <code {...props} {...propOverrides?.code} />;
        }

        return (
            <code
                {...props}
                {...propOverrides?.code}
                className="expressive-code"
            />
        );
    },
    wrapper: (props: any) => (
        <div {...props} className="markdown-body" {...propOverrides?.wrapper} />
    ),
});

const components: (options?: MuiMdxComponentsOptions) => MDXComponents = (
    options
) => {
    return {
        ...defaults(options || {}),
        ...options?.overrides,
    };
};
export default components;
