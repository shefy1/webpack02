var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:'./src/app.js',
	output:{
		path:require('path').resolve(__dirname,'dist'),
		filename:'js/[name].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:require('path').resolve(__dirname,'node_modules'),
				include:require('path').resolve(__dirname,'src')
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!postcss-loader!less-loader'
			}
		]
	},

	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}