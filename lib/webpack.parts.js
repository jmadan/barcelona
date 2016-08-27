const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyWebpackPlugin = require('purifycss-webpack-plugin');


exports.clean = (path) => {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd()
            })
        ]
    };
}

exports.setupCSS = (paths) => {
    return {
        module: {
            loaders: [{
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                include: paths
            }]
        }
    };
}

exports.minify = () => {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    // Drop `console` statements
                    drop_console: true,
                    minimize: true
                }
            })
        ]
    }
}

exports.setFreeVariable = (key, value) => {
    const env = {};
    env[key] = JSON.stringify(value);
    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
}

exports.extractCSS = (paths) => {
    return {
        module: {
            loaders: [
                // Extract CSS during build
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                    include: paths
                }
            ]
        },
        plugins: [
            // Output extracted CSS to a file
            new ExtractTextPlugin('public/css/barcelona.css')
        ]
    };
}

exports.purifyCSS = (paths) => {
    return {
        plugins: [
            new PurifyWebpackPlugin({
                basePath: process.cwd(),
                // `paths` is used to point PurifyCSS to files not
                // visible to Webpack. You can pass glob patterns
                // to it.
                paths: paths
            }),
        ]
    }
}
