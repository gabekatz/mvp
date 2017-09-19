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
    Player.create(req.body  )
    .then((data)=>{
      res.status(201).send(data);
    })
    .catch((err)=>{
      res.status(404).send(err);
    })
  },

  getUser: (req, res) => {
    // console.log('req', req)
    Player.findOne({
      where: {
        name: req.query.name
      }
    })
      .then((data)=>{
        console.log('FROM GET USER', req.query.name)
        res.status(200).send(data);
      })
      .catch((err)=>{
        res.status(404).send(err);
      })
  },

  updateUser: (req, res) => {
    Player.update(req.body, {
      where: {
        name: req.body.name,
      }
    })
    .then((data)=>{
      console.log('from updating user', req.body)
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