var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');

  const now = new Date();
  const reveillonDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
  const timeRemaining = reveillonDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  res.json({
    name: 'Reveillon',
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });
});

module.exports = router;
