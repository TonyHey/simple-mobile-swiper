const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: "source-map",
    mode: "development",
    entry: {
        index: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env",
                            "stage-0"
                        ]
                    }
                }],
                exclude: /node_modules/,
            }
        ]
    },
    optimization: {
      minimize: true
    },
    watchOptions: {
      poll:1000,
      ignored:/node_modules/,
    },
}
