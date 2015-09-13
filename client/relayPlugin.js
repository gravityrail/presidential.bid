const getbabelRelayPlugin = require('babel-relay-plugin');
const path = require('path');
const schema = require(path.resolve(__dirname, '../db/schema.json'));

module.exports = getbabelRelayPlugin(schema.data);
