const db = require('../../data/dbConfig');

module.exports = {
    findByEmail,
    add, 
    remove, 
    update,
    get
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function accountToBody(account) {
  return {
    ...account,
    completed: intToBoolean(account.completed),
  };
}

function get(email) {
  let query = db('actions');

  if (email) {
    return query
      .where('email', email)
      .first()
      .then((account) => {
        if (account) {
          return accountToBody(account);
        } else {
          return null;
        }
      });
  } else {
    return query.then((accounts) => {
      return accounts.map((account) => accountToBody(account));
    });
  }
}

function findByEmail(email) {
    return db('accounts2')
      .where({ email })
      .first();
  }

async function add(account) {
    const [email] = await db('accounts2').insert(account);
  
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
