const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css", [
    //
  ]);

mix.webpackConfig({
  output: {
    chunkFilename: `js/[name].js?id=[chunkhash]`,
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
      "@": path.resolve(__dirname, "resources/js/"),
    },
  },
  module: {
    rules: [
      {
        // Regex to find all JS files
        test: /\.js$/,
        // This rule only applies to files in the marked directory
        include: [
          path.resolve(__dirname, "node_modules/marked"),
          // You can add other packages here that need transpiling, like 'zod'
          // path.resolve(__dirname, 'node_modules/zod'),
        ],
        // Use the babel-loader to transpile the files
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
});
