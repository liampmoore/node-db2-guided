const knex = require('knex');
const knexfile = require('../knexfile');


const environment = process.env.NODE_ENV || "development";
const knexConfig = knexfile[environment];

//db represents a live connection to the database
const db = knex(knexConfig);

module.exports = db;