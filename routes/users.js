const user = require('../models/user');
const userRepo = require('../respositories/users');
/************************************************** */
const router = require('express').Router();
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const offset = parseInt(req.query.offset) || 0
  const limit = parseInt(req.query.limit)  || 20
  res.send(await userRepo.getUsers(offset, limit))
});

router.get('/:id', async function(req, res, next) {
  res.send(await userRepo.getUser(id))
});

router.post('/', async function (req, res, next ){
  const user = req.body;

  const getedUser = await userRepo.getUser(user.id);
  if( !getedUser ){
    res.send(await userRepo.addUser(id))
  }
});

router.put('/', async function (req, res, next ){
  const user = req.body;
  const getedUser = await userRepo.getUser(user.id);
  if (!getedUser ){
    res.send(await userRepo.updateUser(user))
  }
});

router.delete('/:id', async function (req, res, next ){
const user = req.body;
const getedUser = await userRepo.getUser(user.id);
if (!getedUser ){
  res.send(await userRepo.deleteUser(id))
}

  
});
/******************************************/
module.exports = router;
