var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');

  const eventdata = new Date();
  eventdata.setDate("2024-01-01");
  
  const data = new Date(); //pega o momento atual
  data.setTime(data.getTime()/*retorna em ms*/ + 60000); //atual + 1min

  
  res.json({
    nome: 'Reveillon',
    data: data.toJSON(),
    event: eventdata.toJSON(),
  });
});

module.exports = router;
