const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.get('/api/shout/:word', (req, res) => {
  const { word } = req.params;
  res.status(200).send(`${word.toUpperCase()}!!!`);
});

app.post('/api/array/merge', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  if (!(a instanceof Array)) {
    res.status(400).send({ error: 'Both keys in request body must be of type Array.' });
  } else if (!(b instanceof Array)) {
    res.status(400).send({ error: 'Both keys in request body must be of type Array.' });
  }
  const newArray = [];
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    newArray.push(a[i]);
    if (b.length > count) {
      count++;
      newArray.push(b[i]);
    }
  }
  if (b.length > count) {
    for (let i = count; i < b.length; i++) {
      newArray.push(b[i]);
    }
  }
  res.send({ result: newArray });
});

let server = app.listen(app.get('port'), () => console.log('listening to port ' + app.get('port')))
