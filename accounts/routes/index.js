var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter)

const shortid = require('shortid');

// accounts list
router.get('/account', function(req, res, next) {
  res.render('list');
});

// add record
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', function(req, res) {
  let id = shortid.generate();
  db.get('accounts').unshift({id:id, ...req.body}).write();
  res.send('add record');
});

module.exports = router;
