module.exports = {
  context: __dirname,

  entry: {
    javascript: "./src/index.js",
    html: "./build/index.html",
  },

  output: {
    filename: "app.js",
    path: "./build/js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      }
    ]
  }
}
