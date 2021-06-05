var express = require('express');
var router = express.Router();
const userRepo = require('../respositories/users');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await userRepo.getAllUsers())
});

module.exports = router;
