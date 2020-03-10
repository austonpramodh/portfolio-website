/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import Header from "../Header";
import React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";

import Styles from "./index.styles";

import "./layout.css";

const Layout: React.SFC<WithStyles<typeof Styles>> = ({ children }) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default withStyles(Styles)(Layout);
