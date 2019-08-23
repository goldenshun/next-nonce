const withNonce = require('./dist/withNonce');
const { useNonce } = require('./dist/NonceContext');

console.log('index.js useNonce', useNonce);

module.exports = { withNonce: withNonce.default, useNonce };
