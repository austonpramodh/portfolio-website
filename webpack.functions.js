// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require("dotenv-webpack");

// @see https://github.com/netlify/netlify-lambda#webpack-configuration
module.exports = {
    devtool: "inline-cheap-source-map",
    optimization: { minimize: false },
    plugins: [new Dotenv()],
};
