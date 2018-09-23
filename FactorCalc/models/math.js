exports.calc = (num) => {
  let list = []
  if (num < 0 || num > 10000 || isNaN(num)) {
    list.push('请求错误')
    return list
  }
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      list.push(i)
    }
  }
  return list
}