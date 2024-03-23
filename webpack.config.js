// webpack.config.js
const path = require('path');

module.exports = {
    entry: './public/js/mintclub.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'mint.club-v2-sdk': path.resolve(__dirname, 'node_modules/mint.club-v2-sdk/dist/index.mjs')
        }
    }
};
