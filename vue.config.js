module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args;
      obj.title = '潛水世界';
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Diving_World/'
    : '/',
};
