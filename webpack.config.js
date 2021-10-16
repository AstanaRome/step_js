const { VueLoaderPlugin } = require('vue-loader');


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
        extensions: ['.js', '.vue', '.json', '.scss'],
        
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
            },
            {
                test: /\.sass$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      indentedSyntax: true,
                      // sass-loader >= 8
                      sassOptions: {
                        indentedSyntax: true
                      }
                    }
                  }
                ]
              },

              {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      // вы можете также указать файл, например `variables.scss`
                      // используйте свойство `prependData` здесь, если версия sass-loader = 8
                      // используйте свойство `data` здесь, если версия sass-loader < 8
                      additionalData: `$color: red;`
                    }
                  }
                ]
              }


        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]



};