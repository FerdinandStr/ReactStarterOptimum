const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
process.env.NODE_ENV = 'production'; //without this (at top level) babel wont realize that we are in production, could also be set in the runscript call

module.exports = env => {
    return merge(common(env), {
        mode: process.env.NODE_ENV,
        output: {
            path: __dirname + "/dist/",
            filename: "[name].[chunkhash].js"
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                        priority: 0
                    },
                }
            },
            minimizer: [
                new TerserPlugin(),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        //CSS in extracted chunkfile for production//
        module: {
            rules: [
                {
                    test: /\.css$/,
                    // exclude: [/antd.*\.css$/],
                    use: [MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[local]_[hash:base64:4]"
                        }
                    }],
                },
                // {
                //     test: /antd.*\.css$/,
                //     use: [MiniCssExtractPlugin.loader, "css-loader"],
                // },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist/*.*']),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
            }),
            // new BundleAnalyzerPlugin({analyzerPort: 8889})
        ]
    })
}