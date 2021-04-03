const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  devIndicators: {
    autoPrerender: false,
  },
})

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
}