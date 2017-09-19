const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL);

db.authenticate()
  .then(()=>{
    console.log('Database created')
  })
  .catch((err)=>{
    console.log('Database failed to be created: ', err)
  })

module.exports = db;