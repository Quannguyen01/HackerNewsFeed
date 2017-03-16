const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index_bundle.html',
    inject: 'body'
});

module.exports = {
    resolve: {
        alias: {
            materialDesignLite: path.resolve(__dirname, 'bower_components', 'material-design-lite'),
            materialDesignIcons: path.resolve(__dirname, 'bower_components', 'material-design-icons', 'iconfont', 'material-icons.css')
        }
    },
    target: "electron-main",
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ],
    },
    plugins: [HtmlWebpackPluginConfig]
}
