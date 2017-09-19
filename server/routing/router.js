const playerCtrl = require('../controller/playerController');
const router = require('express').Router();

router.get('/player', playerCtrl.getPlayers);
router.post('/player', playerCtrl.addPlayer);

module.exports = router;