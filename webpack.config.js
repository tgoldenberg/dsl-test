'use strict';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	module:	{
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
			{ test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?.*)?$/, loader: 'file-loader' },
			{ test: /\.css$/, loader: 'style!css!postcss' },
			{ test: /\.less$/, loader: 'style!css!postcss!less' },
			{ test: /\.tpl\.jade$/, loader: 'html?removeRedundantAttributes=false!jade-html' },
			{ test: /\.tpl\.html$/, loader: 'html?removeRedundantAttributes=false' },
			{ test: /[^\.][^t][^p][^l]\.jade$/, loader: 'file?name=[name].html!jade-html' },
			{ test: /[^\.][^t][^p][^l]\.html$/, loader: 'file?name=[name].[ext]' }
		]
	},
	postcss: function(){
		return [autoprefixer]
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			// exclude the index entry point
			exclude: /.*index.*$/,
			columns: false,
			filename: '[file].map[query]',
			lineToLine: false,
			module: false
		})
	],
	debug: true,
	entry: { app: './app.js', index: './index.html' },
	output: { filename: '[name].bundle.js', path: './bin/' },
	context: process.cwd() + '/src',
	devServer: {
		publicPath: '/',
		outputPath: '/',
		filename: 'app.bundle.js',
		watchOptions: undefined,
		watchDelay: undefined,
		contentBase: process.cwd() + '/src',
		stats: {
			cached: false,
			cachedAssets: false,
			colors: true
		}
	}
};
