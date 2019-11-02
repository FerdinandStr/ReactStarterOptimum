const webpack = require("webpack")
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    return merge(common(env), {
        mode: 'development',
        devtool: 'cheap-eval-source-map',
        entry: [
            'webpack-dev-server/client?http://localhost:8081',
            'webpack/hot/dev-server',
            './src/index.js'
        ],
        //CSS with styleloader for HotModuleReload in development//
        module: {
            rules: [
                {
                    test: /\.css$/,
                    // exclude: [/antd.*\.css$/],
                    use: ["style-loader", {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:4]"
                            },
                            importLoaders: 1,
                        }
                    }],
                },
                // {
                //     test: /antd.*\.css$/,
                //     use: ["style-loader", "css-loader"],
                // },
            ]
        },
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
        },
        devServer: {
            historyApiFallback: true,
            port: 8081,
            hot: true,
            compress: true,
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
            // new BundleAnalyzerPlugin()
        ]
    })
}
