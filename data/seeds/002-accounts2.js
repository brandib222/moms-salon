exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('accounts2').truncate()
    .then(function () {
      // add data into insert
      return knex('accounts2').insert([
        { name: 'Cathy', city: 'Evansville', email:'Cathy@gmail.com', password:'love' },
        { name: 'Gale', city: 'Newburgh', email:'Gale@gmail.com', password:'1234' }

      ]);
    });
};
