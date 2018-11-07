
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('contactsTable', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('contactsTable')
  ]);
};
