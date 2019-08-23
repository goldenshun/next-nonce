const withNonce = require('./dist/withNonce');
const { useNonce } = require('./dist/NonceContext');

module.exports = { withNonce: withNonce.default, useNonce };
