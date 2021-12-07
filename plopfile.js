/* eslint-disable global-require */

module.exports = (plop) => {
  plop.setGenerator('component', require('./generators/component'))
  plop.setGenerator('composable', require('./generators/composable'))
}
