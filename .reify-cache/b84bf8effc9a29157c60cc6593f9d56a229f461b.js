"use strict";module.export({up:()=>up,down:()=>down},true);
const up = async knex => {
   await knex.schema.createTable('users', (table) => {
       table.increments('id');
       table.string('username', 255).notNullable();
       table.string('password', 30).notNullable();
       table.string('email', 255).notNullable();
    })
};

const down = async knex => {
  await knex.schema.dropTable("users");
};
