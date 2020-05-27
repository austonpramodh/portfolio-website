/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("ts-node").register({
    compilerOptions: {
        module: "commonjs",
        target: "es2017",
    },
});

exports.createPages = require("./gatsby-config/createPages").createPages;

exports.onCreateWebpackConfig = ({ actions: { replaceWebpackConfig }, getConfig }) => {
    const config = getConfig();

    config.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: "workerize-loader" },
    });

    config.output.globalObject = "this";

    replaceWebpackConfig(config);
};
