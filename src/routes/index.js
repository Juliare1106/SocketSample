const router = require('express').Router();
const path = require('path');

router.get('/index', (req, res) => {
  res.render('index');
});

module.exports = router;
