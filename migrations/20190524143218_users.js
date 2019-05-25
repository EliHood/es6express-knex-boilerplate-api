export const up = async knex => {
   await knex.schema.createTable('users', (t) => {
    t.increments('id').primary().unsigned()
    t.string('username').unique().index()
    t.string('password')
    t.string('email').unique().index()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

export const down = async knex => {
  await knex.schema.dropTable("users");
};
