var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter)

const shortid = require('shortid');

// accounts list
router.get('/account', function(req, res, next) {
  let accounts = db.get('accounts').value();
  res.render('list', {accounts: accounts});
});

// add record
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//test
router.get('/get', function(req, res, next) {
  res.send('get is good');
});
router.get('/delete', function(req, res, next) {
  res.send('Delete is also good');
});


router.post('/account', function(req, res) {
  let id = shortid.generate();
  db.get('accounts').unshift({id:id, ...req.body}).write();
  res.render('success',{masg:'Add success', url:'/account'});
});

router.get('/account/:id', (req, res) => {
  let id = req.params.id;
  db.get('accounts').remove({id:id}).write();
  res.render('success',{masg:'Delete success', url:'/account'});
})

module.exports = router;
