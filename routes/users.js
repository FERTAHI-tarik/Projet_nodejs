const user = require('../models/user');
const userRepo = require('../repositories/users');
/************************************************** */
const router = require('express').Router();
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const offset = parseInt(req.query.offset) || 0
  const limit = parseInt(req.query.limit)  || 20
  res.send(await userRepo.getUsers(offset, limit))
});

router.get('/:id', async function(req, res, next) {
  const user = req.body.id;
  res.send(await userRepo.getUser(user))
});

router.post('/', async function (req, res, next ){
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  const getUserByEmail = await userRepo.getUserByEmail(email);
  if( !getUserByEmail ){
    res.send(await userRepo.addUser(username, email, password, role))
  }
});

router.put('/', async function (req, res, next ){
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const user = req.body;
  
  res.send(await userRepo.updateUser(user))
  
});

router.delete('/:id', async function (req, res, next ){
  const id = req.params.id;
  console.log(id);
  await userRepo.deleteUser(id);
  res.send({message:"tms7"})  
});
/******************************************/
  module.exports = router;
