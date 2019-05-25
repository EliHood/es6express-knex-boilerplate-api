import bookshelf from '../config/bookshelf';

/**
 * Example User Model.
 */
const User = bookshelf.Model.extend({
    tableName: 'users'
});

export default User;