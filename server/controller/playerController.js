const {Player} = require('../database')


module.exports = {
  getPlayers: (req, res) => {
    Player.findAll({
      limit:10,
      order: [['rank', 'ASC']],
    })
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

  updateHighScores: (req, res) => {
    Player.findAll()
    .then((data)=>{
      let list = data.map((player)=> {return player})
      list.sort(function(a, b){return b.score-a.score});
      Player = list.map((player, i) => { 
        console.log('FROM INSIDE MAP FUNCTION: ', player)
        player.update({rank: i+1})
        return player
      })
      
      console.log('FROM HIGH SCORE LIST: ', list);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  // createUser: (req, res) => {
  //   Player
  // },
}