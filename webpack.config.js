import config from "./tasks/config";

module.exports = {
  mode: config.env,
  entry: [`./${config.scripts.srcRoot}/app.js`],
  output: {
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  }
};

if (config.isDevelopment) {
  module.exports.devtool = 'source-map';
}
