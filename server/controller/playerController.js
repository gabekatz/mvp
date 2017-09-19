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
  },

  getUser: (req, res) => {
    Player.find(req.body.name)
      .then((data)=>{
        res.status(200).send(data);
      })
      .catch((err)=>{
        res.status(404).send(err);
      })
  },

  updateUser: (req, res) => {
    Player.update(req.body)
    .then((data)=>{
      res.status(202).send(data);
    })
    .catch((err)=>{
      res.status(404).send(err);
    })
  },

  // createUser: (req, res) => {
  //   Player
  // },
}