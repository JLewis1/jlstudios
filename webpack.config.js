module.exports = {
    entry: "./entry.js",
    output: {
        path: "/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
            },
            {
                test: /\.sass$/,
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
            }
        ]

    }
};