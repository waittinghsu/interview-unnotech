const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        // 這是套件 addon-storysource 所需要的 webpack 設定
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      },
      {
        // pug 設置
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
		    // scss 設置
        test: /\.s[a|c]ss?$/,
        use: [
          'vue-style-loader',
          'css-loader',
            {
                loader: "sass-loader",
                options: {
                    implementation: require('sass'),
                    fiber: require('fibers')
                }
            }
        ]
      },
      {
		    // css 設置
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
    ]
  },
  resolve: {
    alias: {
	  // nuxt 預設的 alias 有 '@', '@@', '~', '~~' 但是本人只有在用 '@', 有需要可以自己再加。
      '@': path.dirname(path.resolve(__dirname))
    }
  }
};
