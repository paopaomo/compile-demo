const { AutoWebPlugin } = require('web-webpack-plugin');
const path = require('path');

const autoWebPlugin = new AutoWebPlugin('pages', {
    template: './template.html'
});

module.exports = {
    entry: autoWebPlugin.entry({
    }),
    plugins: [
        autoWebPlugin,
    ],
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'less-loader'
                ]
            },
        ]
    }
};
