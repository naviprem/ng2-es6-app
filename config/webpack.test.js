/**
 * Created by premkrishna on 8/22/16.
 */
module.exports = {
    devtool: 'inline-source-map',

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {test: /\.html$/, loader: 'html'},
            {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]'},
            { test: /\.sass$/, loaders: ["raw", "sass"] }
        ]
    }
}