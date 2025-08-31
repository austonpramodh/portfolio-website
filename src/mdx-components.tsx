import { Paper } from "@mui/material";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import muimdxcomponents from "./components/mui-mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        ...muimdxcomponents({
            propOverrides: {
                h1: {
                    // variant: "h3",
                    sx: {
                        mb: 2,
                    },
                },
                h2: {
                    // variant: "h4",
                    sx: {
                        mb: 2,
                    },
                },
                h3: {
                    // variant: "h5",
                    sx: {
                        mb: 2,
                    },
                },
                h4: {
                    // variant: "h6",
                    sx: {
                        my: 2,
                    },
                },
                h5: {
                    // variant: "h6",
                    sx: {
                        my: 2,
                    },
                },
                h6: {
                    // variant: "h6",
                    sx: {
                        my: 1,
                    },
                },
                p: {
                    variant: "body1",
                    sx: {
                        mb: 1,
                    },
                },
                strong: {
                    variant: "body1",
                    fontWeight: 600,
                    component: "span",
                },
                li: {
                    sx: {
                        ml: 4,
                    },
                },
                em: {
                    fontStyle: "italic",
                    color: "textSecondary",
                },
                sup: {
                    fontStyle: "italic",
                    color: "textSecondary",
                },
            },
        }),
        img: (props: {
            src: {
                src: string;
                height: number;
                width: number;
                blurDataURL: string;
                blurWidth: number;
                blurHeight: number;
            };
            alt: string;
        }) => {
            return (
                <Paper
                    sx={{
                        overflow: "hidden",
                        borderRadius: 1,
                    }}
                >
                    <Image
                        src={props.src.src}
                        height={props.src.height}
                        width={props.src.width}
                        alt={props.alt}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Paper>
            );
        },
    };
}
