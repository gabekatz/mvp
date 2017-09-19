const {Player} = require('../database')


module.exports = {
  getPlayers: (req, res) => {
    Player.findAll()
    .then((data)=>{
      res.status(200).send(data);
    })
    .catch((err)=>{
      res.status(404).send(err);
    })
  },

  addPlayer: (req, res) => {
    Player.create(req.body)
    .then((data)=>{
      res.status(201).send(data);
    })
    .catch((err)=>{
      res.status(404).send(err);
    })
  }
}