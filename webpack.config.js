const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

// FIXME: change next line if you don't want publish to gh-pages
const publicPath = process.env.PUBLIC_PATH === 'gh' ?
    '/typescript-react-redux-starter/' : '/';

const vendor = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
    'redux-thunk',
    'redux-localstorage',
    'immutable',
    'whatwg-fetch',
];
module.exports = {
    entry: {
        vendor,
        app: ['./src/index.tsx'],
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].js',
        publicPath,
        sourceMapFilename: '[name].[hash].js.map',
        chunkFilename: '[id].chunk.js',
    },

    devtool: 'cheap-module-source-map',
    resolve: { extensions: ['.webpack.js', '.web.js', '.tsx', '.ts', '.js'] },
    plugins,

    devServer: {
        historyApiFallback: { index: '/' },
    },

    module: {
        rules: [
            loaders.tsx,
            loaders.html,
            loaders.css,
            loaders.svg,
            loaders.image,
            loaders.eot,
            loaders.woff,
            loaders.woff2,
            loaders.ttf,
        ],
    },

}