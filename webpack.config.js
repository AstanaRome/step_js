module.exports = {
    devServer: {
        port: 8080,
        compress: true,
        static: {
            directory: './public',
        },
    },



    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
        ],
    }

};