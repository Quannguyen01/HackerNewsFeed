const path = require('path');

module.exports = {
    target: "electron-main",
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ],
    }
}
