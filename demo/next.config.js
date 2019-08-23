module.exports = {
  webpack: (config, options) => {
    config.resolve.symlinks = false;
    console.log('config', config);
    return config;
  }
}