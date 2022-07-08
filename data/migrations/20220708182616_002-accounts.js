exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('accounts2', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('name', 128).unique().notNullable();
      tbl.text('email', 228).unique().notNullable();
      tbl.text('password', 128).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.decimal('city').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('accounts2');
  };