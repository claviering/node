const express = require('express')
const template = require('art-template')
const app = express()

app.engine('html', require('express-art-template'));
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index.html', {
      user: {
          name: 'aui',
          tags: ['art', 'template', 'nodejs']
      }
  });
});

const tpstr = template.render('helle {{ name }}', {
  name: 'world'
})
console.log(tpstr)

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})