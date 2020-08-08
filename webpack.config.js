const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolveTsconfigAlias = () => {
    const { compilerOptions } = require('./tsconfig');

    return Object.keys(compilerOptions.paths)
        .map((folder) => folder.replace('/*', ''))
        .reduce((object, folder) => Object.assign(object, { [ folder ]: path.join(__dirname, 'resource', folder) }), {});
};

module.exports = [{
    target: 'electron-main',

    entry: {
        main: [
            path.join(__dirname, 'resource/main.ts'),
        ],
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].min.js',
    },

    devtool: 'source-map',
    node: {
        __dirname: false,
        __filename: false,
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: resolveTsconfigAlias(),
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
        ],
    }
}, {
    target: 'electron-renderer',

    entry: {
        renderer: [
            path.join(__dirname, 'resource/renderer.tsx'),
        ],
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].min.js',
    },

    devtool: 'source-map',
    node: {
        __dirname: true,
        __filename: true,
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: resolveTsconfigAlias(),
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    experimentalWatchApi: true,
                },
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
            {
                test: /\.(png|jpg|mp3|mp4|woff|woff2|glsl)$/i,
                exclude: /node_modules/,
                loader: 'url-loader',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'resource/index.html'),
            inject: false
        }),
    ]
}];