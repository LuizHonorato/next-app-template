const withImages = require('next-images');

module.exports = {
  withImages: withImages({
    esModule: true
  }),
  devIndicators: {
    autoPrerender: false,
  },
}
