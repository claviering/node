const text = require('../models/text.js')
const math = require('../models/math.js')
const file = require('../models/file.js')

exports.showIndex = (req, res) => {
  res.render('index.html', text);
}

exports.showRes = (req, res) => {
  let num = req.params.number
  file.read(num, (result) => {
    if (!result) {
      let list = math.calc(num)
      file.save(num, list)
      result = list
    }
    res.render('result.html', {
      num: num,
      list: result
    });
  })
}