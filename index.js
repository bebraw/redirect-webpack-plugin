const { RawSource } = require("webpack-sources");

module.exports = class RedirectWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const { redirects } = this.options;

    compiler.hooks.emit.tapAsync('RedirectWebpackPlugin', (compilation, cb) => {
      Object.keys(redirects).forEach(from => {
        const to = redirects[from];

        compilation.assets[`${from}/index.html`] = new RawSource(
          `<meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}" />`
        );
      });

      cb();
    });
  }
};
