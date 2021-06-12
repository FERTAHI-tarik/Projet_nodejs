var express = require('express');
var router = express.Router();
const commentsRepo = require('../repositories/comments');

router.get('/', async function(req, res, next) {
    const  page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    res.send(await  articlesRepo.getArticles(offset,limit))
  });

  router.get('/:id', async function(req, res, next) {
    res.send(await commentsRepo.getComment(req.params.id))
})

  router.post('/', async function (req, res, next ){
    const comment = req.body;
  
    const getedcomment = await commentsRepo.getArticle(comment.id);
    if( !getedcomment ){
      res.send(await commentsRepo.addComment(id))
    }
  });
  
  router.put('/', async function (req, res, next ){
    const comment = req.body;
    const getedcomment = await commentsRepo.addComment(comment.id);
    if (!getedcomment ){
      res.send(await commentsRepo.updateComment(comment))
    }
  });
  
  router.delete('/:id', async function (req, res, next ){
  const comment = req.body;
  const getedcomment = await commentsRepo.getComment(comment.id);
  if (!getedcomment ){
    res.send(await getedcomment.deleteComment(id))
  }
  });

module.exports = router;