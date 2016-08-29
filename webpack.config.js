let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MergePlugin = require('webpack-merge');
// let parts = require('./lib/webpack.parts');

const PATHS = {
    app: path.join(__dirname, 'src', 'barcelona.js'),
    style: path.join(__dirname, 'src/public/css', 'manhattan.css'),
    build: path.join(__dirname, '/build')
};

let config = {
    devtool: 'source-map',
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'app.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        "react", "es2015", "stage-0"
                    ]
                }
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([PATHS.build], {
            root: process.cwd()
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                // Drop `console` statements
                drop_console: true
            },
            mangle: false,
            beautify: true
        }),
        new webpack.optimize.DedupePlugin()
    ]
};


// switch (process.env.npm_lifecycle_event) {
// case 'build':
//     config = MergePlugin(parts.clean(PATHS.build),
//         common, { devtool: 'source-map' },
//         parts.setFreeVariable(
//             'process.env.NODE_ENV',
//             'production'
//         ),
//         parts.extractCSS(PATHS.style));
//     break;
// default:
//     config = MergePlugin(parts.clean(PATHS.build),
//         common, { devtool: 'source-map' },
//         parts.setFreeVariable(
//             'process.env.NODE_ENV',
//             'production'
//         ),
//         parts.extractCSS(PATHS.style));
// }

module.exports = validate(config);
