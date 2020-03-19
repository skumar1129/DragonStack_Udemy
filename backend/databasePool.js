const { Pool } = require('pg');
const secrets = require('./secrets/databaseConfiguration.js');

const pool = new Pool(secrets);

module.exports = pool;
