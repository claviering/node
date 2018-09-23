const fs = require('fs')

exports.save = (num, result) => {
  fs.writeFile('./data/' + num + '.tet', JSON.stringify(result), (err) => {
    if (err) {
      console.log('save file error')
      console.log(err)
    } else {
      console.log('save success')
    }
  })
}

exports.read = (num, callback) => {
  fs.readFile('./data/' + num + '.tet', (err, data) => {
    if (err) {
      callback(0)
      return
    }
    console.log('read success')
    callback(JSON.parse(data))
  })
}