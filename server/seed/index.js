const seedData = require('./seedData');

module.exports = (table) =>{
  seedData.forEach((seed) =>{
    table.create(seed);
    console.log(seed, ' added')
  })
}