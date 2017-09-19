const Sequelize = require('sequelize');
const db = require('./config');
const seed = require('../seed')

const Player = db.define('player', {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER,
  rank: Sequelize.INTEGER,

})

Player.sync({force: true})
  .then(() => {
    seed(Player);
  })
  .catch((err) => {
    console.log('Error in syncing database');
  })

module.exports = { Player };