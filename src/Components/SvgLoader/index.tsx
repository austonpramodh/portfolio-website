import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";
import atobNode from "atob";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
const requireSvgIcon = require.context(
    `../../../.cache/caches/gatsby-source-prismic/`, // Don’t make this a variable
    true, // Whether or not to check subdirectories
    /\.svg$/, // Rough regex for extensions, maybe change this for your use case?
);

interface SVGLoader {
    path: string;
    className?: string;
    style?: React.CSSProperties;
}

//TODO: Rename vairables to meaningful names

const SVGLoader: React.SFC<SVGLoader & WithStyles<typeof Styles>> = ({
    path,
    className = undefined,
    classes,
    style = undefined,
}) => {
    const str = "gatsby-source-prismic/";
    const finalPath = path.slice(path.indexOf(str) + str.length, path.length);
    const CompoData = requireSvgIcon("./" + finalPath);
    const dataStr = "data:image/svg+xml;base64,";
    const decodedData = CompoData.slice(CompoData.indexOf(dataStr) + dataStr.length, CompoData.length);
    return (
        <span
            style={style}
            className={`${className} ${classes.container} `}
            dangerouslySetInnerHTML={{ __html: atobNode(decodedData) }}
        />
    );
};

export default withStyles(Styles)(SVGLoader);
