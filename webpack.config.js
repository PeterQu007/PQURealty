//webpack video : 818990 - 38 - The JS Module Pattern and _webpack_ @7:00

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
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}