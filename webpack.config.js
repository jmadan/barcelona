let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const MergePlugin = require('webpack-merge');
let parts = require('./lib/webpack.parts');

const PATHS = {
    app: path.join(__dirname, 'src', 'barcelona.js'),
    style: path.join(__dirname, 'src/public/css', 'manhattan.css'),
    build: path.join(__dirname, 'dist')
};

let common = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'app.js'
    },
    module: {
        loaders: [{
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    "presets": [
                        "react", "es2015", "stage-0"
                    ]
                }
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Barcelona' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

let config;

switch (process.env.npm_lifecycle_event) {
case 'build':
    config = MergePlugin(parts.clean(PATHS.build),
        common, { devtool: 'source-map' },
        parts.setFreeVariable(
            'process.env.NODE_ENV',
            'production'
        ),
        parts.extractCSS(PATHS.style));
    break;
default:
    config = MergePlugin(parts.clean(PATHS.build),
        common, { devtool: 'source-map' },
        parts.setFreeVariable(
            'process.env.NODE_ENV',
            'production'
        ),
        parts.extractCSS(PATHS.style));
}

module.exports = validate(config);
