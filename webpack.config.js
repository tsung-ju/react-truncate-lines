module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "index.cjs.js",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  optimization: {
    minimize: false,
  },
};
