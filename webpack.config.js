module.exports = {
  mode: "development",
  context: __dirname + "/lib",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
};
