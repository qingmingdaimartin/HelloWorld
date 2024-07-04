var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter)

const shortid = require('shortid');

const moment = require('moment');
const AccountModel = require('../models/AccountModel');

/* //test
console.log(moment('2023-02-24').toDate())
 */
// accounts list
router.get('/account', async function(req, res, next) {
  try {
    const data = await AccountModel.find().sort({time: -1}).exec();
    console.log(data);
  
    res.render('list', {accounts: data, moment: moment});
  } catch (err) {
    res.status(500).send('read false');
  }
});

// add record
router.get('/account/create', function(req, res, next) {
  res.render('create');

});
router.post('/account', async (req, res) => {
  try {
    await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate()
    });
    res.render('success', { msg: 'Add success', url: '/account' });
  } catch (err) {
    res.status(500).send('Error adding account');
  }
});

router.get('/account/:id', async (req, res) => {
  const id = req.params.id;
  try { 
    await AccountModel.deleteOne({ id: id });
    res.render('success', { msg: 'Delete success', url: '/account' });
  } catch (err) {
    res.status(500).send('Error');
  }
});

module.exports = router;
