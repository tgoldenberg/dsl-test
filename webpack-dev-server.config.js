module.exports = {
	publicPath: '/',
	outputPath: '/',
	filename: 'app.bundle.js',
	watchOptions: undefined,
	watchDelay: undefined,
	hot: true,
	contentBase: process.cwd() + '/src/',
	stats: {
		cached: false,
		cachedAssets: false,
		colors: true
	}
};
