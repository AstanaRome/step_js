const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    devServer: {
        port: 8080,
        compress: true,
        static: {
            directory: './public'
        }
    },

    entry: './src/app.js',
    output: {
        filename: 'js/app.js'
    },

    resolve: {
        extensions: ['.js', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]


}