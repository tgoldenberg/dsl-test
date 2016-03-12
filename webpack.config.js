'use strict';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');


module.exports = {
	module:	{
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?.*)?$/, loader: 'file-loader' },
			{ test: /\.json$/, loader: 'json' },
			{ test: /\.css$/, loader: '!style/url!postcss-loader' },
			{ test: /\.less$/, loader: '!style/url!postcss-loader!less' },
			{ test: /\.jade$/, loader: 'html?removeRedundantAttributes=false!jade-html' },
			{ test: /\.html$/, loader: 'html?removeRedundantAttributes=false' }
		]
	},
	postcss: function(){
		return [autoprefixer]
	},
	resolveLoader: {
		root: process.cwd() + "/node_modules"
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			columns: false,
			filename: '[file].map[query]',
			lineToLine: false,
			module: false
		})
	],
	debug: true,
	entry: { app: './app.js' },
	output: { filename: '[name].bundle.js', path: '/' },
	context: process.cwd() + '/src/'
};
