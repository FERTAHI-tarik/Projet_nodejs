var express = require('express');
const { use } = require('.');
var router = express.Router();
const userRepo = require('../respositories/users');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  //res.send(await userRepo.getAllUsers()),
  res.send(await userRepo.getUsers(0,10))
  //res.send(await userRepo.updateUser(user))
});

router.get('/:id', async function(req, res, next) {
  res.send(await userRepo.getAllUsers()),
  res.send(await userRepo.deleteUser(id))
  //res.send(await userRepo.getAuthors())
  //res.send(await userRepo.getGuests())
  //res.send(await userRepo.getUser(1))
  //res.send(await userRepo.getUserByEmail("Roel68@yahoo.com"))

});

module.exports = router;
