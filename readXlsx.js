const XLSX = require('xlsx')
// const fs = require('fs')
// let stream = fs.createWriteStream("data.txt")

let filePath = './try.xlsx' // 文件路径
let SheetHead = 'sheet0' // 表名称

console.log('loading...')

let workbook = XLSX.readFile(filePath)
console.log(workbook.Strings) // 获取表头
let dataList = XLSX.utils.sheet_to_json(workbook.Sheets[SheetHead])
console.log(dataList)