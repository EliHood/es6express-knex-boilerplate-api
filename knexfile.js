// Update with your config settings.
import 'dotenv/config'; // this gives us access to env

module.exports ={

  development: {
    client: 'pg',
    connection: {
      host : process.env.NODE_ENV === 'production' ? 'db' : process.env.HOST || 'localhost',
      user : process.env.DBUSER || 'postgres',
      password : process.env.DBPASS  || 'postgres',
      database : process.env.DBNAME  || 'postgres',
      charset: 'utf8',
      port: 5432
      
      
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
      password: 'password',

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
