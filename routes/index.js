var express = require('express');
var router = express.Router();
const db = require("../db");
 
/* GET index. */
router.get('/', async (req, res, next) => {
  try {
    const docs = await db.findAll();
    res.render('index', { title: 'Lista de Técnicas', docs });
  } catch (err) {
    next(err);
  }
})

/* GET tecnicas. */
/*
router.get('/ver/:id', async (req, res, next) => {
  const id = req.params.id; 
  try {
    const doc = await db.findOne(id);
    res.render('tecnicas', { title: 'Técnicas de DX', doc, action: '/ver/' + doc._id });
  } catch (err) {
    next(err);
  }
})
*/

module.exports = router;