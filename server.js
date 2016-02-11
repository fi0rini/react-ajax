'use strict';
var path = require('path')
  , assign = require('object-assign')
  , express = require('express')
  , app = express()

// configure static directories
app.use(express.static(path.resolve('build')));
app.get('/test-data', (req, res) => {
  var comment = {
    username: 'user001',
    text: 'some test text data for a comment maybe?',
    date: new Date(),
    likes: 100
  }
  res.send(new Array(10).fill(comment));
});

app.listen(4000, ()=> console.log('local listening->4000'))