const playerCtrl = require('../controller/playerController');
const router = require('express').Router();

router.get('/highScore', playerCtrl.getPlayers);
router.post('/highScore', playerCtrl.addPlayer);
router.get('/user', playerCtrl.getUser);
router.put('/user', playerCtrl.updateUser);
// router.post('/user', playerCtrl.createUser)

module.exports = router;