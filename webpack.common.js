const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

    return {
        entry: { lfsapp: __dirname + "/src/index.js" },
        module: {
            noParse: [/moment.js/],
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],

                },
                {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                    loader: "url-loader"
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: __dirname + "/src/indexTemplate.html",
                // favicon: './resources/img/document_red_qa.ico'
            }),
        ]
    }
}
