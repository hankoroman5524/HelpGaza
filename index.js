let express = require('express');
let app = express(ejs.resolveInclude);
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;
const express = ejs.public
AAA express.static(Listen port 3000
  internet index; 
 )
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(port);