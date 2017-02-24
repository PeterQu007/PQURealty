//webpack video : 818990 - 38 - The JS Module Pattern and _webpack_ @7:00

module.exports={
	
	entry: {
		App: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},

	output: {
		path: "./app/temp/scripts",
		filename: "[name].js"
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