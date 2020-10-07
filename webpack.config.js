const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = {
    DEVELOPMENT: process.env.NODE_ENV === 'development',
    PRODUCTION: process.env.NODE_ENV === 'production',
};

module.exports = {
    mode: process.env.NODE_ENV,
    entry: ['./src/index.jsx'],
    devtool: MODE.DEVELOPMENT ? 'source-map' : 'cheap-source-map',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        port: 8085,
        historyApiFallback: true,
    },
    externals: {
        config: JSON.stringify({
            apiUrl: MODE.DEVELOPMENT? 'http://localhost:8080' : "http://0.0.0.0:8080"
        })
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            alwaysWriteToDisk: true,
            template: path.resolve('static/templates/main.html'),
            filename: 'index.html',
            hash: true,
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: MODE.PRODUCTION
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {hmr: MODE.DEVELOPMENT},
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(eot|gif|jpeg|jpg|png|svg|ttf|woff)(\?[0-9]+)?$/,
                use: ['url-loader'],
            },
        ],
    },
}