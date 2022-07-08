const db = require('../../data/dbConfig');

module exports = {
    find,
    findByEmail,
    add, 
    remove, 
    update
};

function findByEmail(email) {
    return db('accounts2')
      .where({ email })
      .first();
  }

async function add(hub) {
    const [id] = await db('accounts2').insert(account);
  
    return findByEmail(email);
  }

  function remove(email) {
    return db('accounts2')
      .where({ email })
      .del();
  }

  function update(email, changes) {
    return db('accounts2')
      .where({ email })
      .update(changes, '*');
  }
