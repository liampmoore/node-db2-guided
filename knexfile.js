// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", // db driver
    connection: {
      // could be an object or a string
      filename: "./data/market.db3",
    },
    useNullAsDefault: true, // only needed for SQLite
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.PROD_DB || "my_db",
      user: process.env.PROD_DB_USER || "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

// npm i -g knex
// knex init
// move the object from connection.js into the development property
// on knexfile.js

// update connection.js to require knexfile and use the development
// property as the knexConfig

// create a migration with knex migrate:make vegetables

// change the db name inside knexfile.js

// run the migration with knex migrate:latest
