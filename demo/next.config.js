module.exports = {
  webpack: (config) => {
    config.resolve.symlinks = false; // eslint-disable-line no-param-reassign
    return config;
  },
};
