const express = require('express');
const dateformat = require('dateformat');

const port = process.env.PORT || 3000;

var app = express();

app.get('/:time', (req, res) => {
  var time = req.params.time;
  var result = {};
  if ( /^[0-9]*$/.test(time) ){
    result.unix = time;
    result.natural = dateformat(new Date(time*1000), 'mmmm dd, yyyy');
  } else {
    try {
      var newDate = new Date(time);
      result.unix = newDate.getTime()/1000;
      result.natural = dateformat(newDate, 'mmmm dd, yyyy');
    } catch (e) {
      result.unix = null;
      result.natural = null;
    }
  }
  res.send(result);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});
