var express = require('express');
var router = express.Router();
const tagsRepo = require('../repositories/tags');

router.get('/', async function(req, res, next) {
    const  page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    res.send(await  tagsRepo.getAllTag(offset,limit))
  });

  router.get('/:id', async function(req, res, next) {
    res.send(await tagsRepo.getTag(req.params.id))
  })

  router.post('/', async function (req, res, next ){
    const tag = req.body;
    const getedTag = await tagsRepo.getArticle(comment.id);
    if( !getedTag ){
      res.send(await tagsRepo.addTag(id))
    }
  });
  
  router.put('/', async function (req, res, next ){
    const tag = req.body;
    const getedtag = await tagsRepo.addComment(tag.id);
    if (!getedtag ){
      res.send(await tagsRepo.updateComment(tag))
    }
  });
  
  router.delete('/:id', async function (req, res, next ){
  const tag = req.body;
  const getedtag = await tagsRepo.getTag(tag.id);
  if (!getedtag ){
    res.send(await getedtag.deletetag(id))
  }
  });

module.exports = router;