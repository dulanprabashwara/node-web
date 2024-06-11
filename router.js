const express = require('express');
const router = express.Router()
const controller=  require('./controller');
router.get('/users',controller.getusers)
router.post('./createuser',controller.adduser);
router.post('./updateuser',controller.deleteuser);
router.post('./deleteuser',contoller.deleteuser);
module.exports = router;