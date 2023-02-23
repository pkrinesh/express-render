var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    success: 'ok',
    message: 'Welcome to express world',
  });
});

module.exports = router;
