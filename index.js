const express = require('express');
const people = require('./people.json');

const app = express();


app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index' {
    title: 'Homepage',
    people: people.profiles
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
