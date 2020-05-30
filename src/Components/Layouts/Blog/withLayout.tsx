import React from "react";
import Layout from "./index";
import { PageProps } from "gatsby";

const withLayout = (Component: React.ComponentType<any & {}>): React.SFC<PageProps> => props => {
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};

export default withLayout;
