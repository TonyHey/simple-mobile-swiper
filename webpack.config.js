const webpack = require("webpack");
const path = require("path");

module.exports = {
    // devtool: "source-map",
    entry: {
        swiper: "./swiper.js"
    },
    output: {
        libraryTarget: "umd",
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
                // exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // sourceMap: true,
            compress: { warnings: false },
            comments: false
        }),
    ]
}