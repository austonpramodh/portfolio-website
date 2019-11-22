require("@babel/register")({
    presets: ["@babel/preset-typescript", "@babel/preset-react", "@babel/preset-env"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: ["@babel/transform-runtime"],
});

require("./startScript");
