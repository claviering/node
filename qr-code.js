// 读取 xlsx 生成二维码
const XLSX = require('xlsx')
const fs = require('fs')
let qr = require('qr-image')
let stream = fs.createWriteStream("data.txt");
const baseUrl = 'example.com'

let SheetHead = 'sheet' // 表名称
let filePath = '../../Downloads/example.xlsx'
let workbook = XLSX.readFile(filePath)
let dataList = XLSX.utils.sheet_to_json(workbook.Sheets[SheetHead])
console.log(dataList)
for (let data of dataList) {
  let storeNo = data['店编']
  let storeName = data['店铺名称']
  let url = baseUrl + 'storeCode=' + storeNo + '&storeName=' + storeName
  stream.write(url + '\n')
  let qr_svg = qr.image(url, { type: 'png', size: 15, margin: 1 });
  qr_svg.pipe(require('fs').createWriteStream('img/' + storeNo + storeName + '.png'));
}
console.log('dataList length', dataList.length)