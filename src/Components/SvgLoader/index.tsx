import { WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import Styles from "./index.Styles";
import clsx from "clsx";
interface Props {
    url: string;
    className?: string;
    fillColor?: string;
}

const SvgURLLoader: React.FunctionComponent<Props & WithStyles<typeof Styles>> = ({
    url,
    className,
    classes,
    fillColor,
}) => {
    const [{ isLoading, svg }, setState] = React.useState<{
        isLoading: boolean;
        svg: string | null;
    }>({
        isLoading: true,
        svg: null,
    });

    React.useEffect(() => {
        fetch(url)
            .then((res) => res.text())
            .then((text) => setState({ svg: text, isLoading: false }))
            .catch(() => {
                setState({ isLoading: false, svg: null });
            });
    }, []);

    if (isLoading) return <div className="spinner" />;

    if (!svg) return <div className="error" />;

    return (
        <div
            id={`hello-fillColor-${fillColor}`}
            dangerouslySetInnerHTML={{ __html: svg }}
            className={clsx(classes.container, fillColor ? "" : classes.fillColor, className)}
            style={
                fillColor
                    ? {
                          fill: fillColor,
                      }
                    : {}
            }
        />
    );
};

export default withStyles(Styles)(SvgURLLoader);
