
module.exports={
	
	entry: "./app/assets/scripts/app.js",
	output: {
		path: "./app/temp/scripts",
		filename: "app.js"
	},
	
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: [require.resolve("babel-preset-es2015")]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}