const XLSX = require('xlsx')
const filePath = './try.xlsx' // 文件路径
const SheetHead = 'sheet0' // 表名称

console.log('loading...')
let workbook = XLSX.readFile(filePath)
console.log(workbook.Strings) // 获取表头
let dataList = XLSX.utils.sheet_to_json(workbook.Sheets[SheetHead])
console.log(dataList)