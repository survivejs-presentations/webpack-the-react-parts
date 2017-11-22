module.exports = {
  /* ...  */
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: isVendor,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
    }),
  ],
};
