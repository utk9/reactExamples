module.exports = {
	entry: './src/app.js',
	output: {
		path: './public',
		filename: 'app-bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
}