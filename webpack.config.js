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
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]


}