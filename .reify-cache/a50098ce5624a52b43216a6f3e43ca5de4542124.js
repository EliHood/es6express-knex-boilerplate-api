"use strict";var module1=module;module1.link('dotenv/config');// Update with your config settings.
 // this gives us access to env

module.exports ={

  development: {
    client: 'pg',
    connection: {
      host : process.env.HOST,
      user : process.env.DBUSER,
      password : process.env.DBPASS,
      database : process.env.DBNAME,
      charset: 'utf8'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'knextest',
      user:     'eli',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
