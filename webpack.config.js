//webpack.config.js
var webpack = require('webpack')
module.exports = {
	entry: __dirname + '/src/main.js',//入口文件
	output: {
		path: __dirname + '/dist',//打包后导出文件夹
		filename: 'bundle.js'//导出的文件名
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	devServer: {
		contentBase: './dist',
		stats: { colors: true },
		historyApiFallback: true,
		inline: true
	}
}