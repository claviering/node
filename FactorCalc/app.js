const express = require('express')
const app = express()
const controllers = require('./controllers/controller.js')
app.engine('html', require('express-art-template'));

app.get('/', controllers.showIndex);
app.get('/:number', controllers.showRes);

app.listen(3000, () => {
console.log('running in:')
  console.log('http://127.0.0.1:3000')
})