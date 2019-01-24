/* dependency setup */
process.env.UV_THREADPOOL_SIZE = 128;

var express = require("express");
var bodyParser = require('body-parser');
var log4js = require('log4js');
var logger = log4js.getLogger();

logger.level = 'debug';
logger.debug("launching summit health endpoint");

/* end of dependency setup */

var port = process.env.PORT || 8060;

var app = express();

app.get('/info', function(req, res) {

  logger.debug('called the information endpoint for ' + req.query.id)

  var patientdata = {

    personal: {
      name: 'Raph DAlmeida',
      age: 38,
      gender: 'male',
      street: '34 Main Street',
      city: 'Toronto',
      zipcode: 'M5H 1T1'
    },

    medications: ['Ventolin HFA (albuterol)', 'Spiriva Handihaler (tiotropium)'],

    appointments: ['2018-01-15 1:00 - Dentist', '2018-02-14 4:00 - Internal Medicine', '2018-09-30 8:00 - Pediatry']
  }

  res.send(patientdata);
});

app.get('/measurements', function(req, res) {

  logger.debug('called the measurements endpoint for ' + req.query.id)

  var measurements = {
    smokerstatus: 'former smoker',
    height: 1.6,
    weight: 62,
    bmi: 24.2,
    bmirange: 'normal',
    sysbp: 124,
    diabp: 83
  }

  res.send(measurements);
});

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json())

app.listen(port);
logger.debug("Listening on port ", port);
