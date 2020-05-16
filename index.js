const express = require('express');

const app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  const result = "";
  if (req.query.operator == 0) result = Number(req.query.a)+Number(req.query.b); 
  else if (req.query.operator == 1) result = Number(req.query.a)-Number(req.query.b);
  else if (req.query.operator == 2) result = Number(req.query.a)/Number(req.query.b);
  else if (req.query.operator == 3) result = Number(req.query.a)*Number(req.query.b);
  
  
  res.render('index', {
    title: 'Homepage',
    result: result,
    a: req.query.a,
    b: req.query.b
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
