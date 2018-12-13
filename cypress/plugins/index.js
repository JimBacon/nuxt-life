// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// Configuration to support component testing with Cypress.
// See https://github.com/bahmutov/cypress-vue-unit-test#manual
// Also note that Vue Loader >= v15 requires plugin configuration.
// See https://vue-loader.vuejs.org/migrating.html#migrating-from-v14

const webpack = require('@cypress/webpack-preprocessor')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackOptions = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: { '~': process.cwd() }
  },
  plugins: [new VueLoaderPlugin()]
}
const options = {
  webpackOptions,
  watchOptions: {}
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', webpack(options))
}
