import knex from 'knex';
import bookshelf from 'bookshelf';
import config from '../knexfile';

let conn = knex(config.development);


export default bookshelf(conn);