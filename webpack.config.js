//webpack video : 818990 - 38 - The JS Module Pattern and _webpack_ @7:00
var path=require('path');
var webpack=require('webpack');

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
				//"test" is commonly used to match the file extension
				test: /\.js$/,

				exclude: /node_modules/ ,

				loader: 'babel-loader',

				query: { presets: ['es2015'] }
			}
		]
	},

	//resolveLoader: { 
	//	//root: path.join(__dirname, "node_modules") 
	//	modules: ['node_modules', path.join(__dirname, "node_modules") ]
	//}
}