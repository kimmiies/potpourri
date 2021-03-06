module.exports = {
  entry: "./entry.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: ['react', 'es2015']
         }
       },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
