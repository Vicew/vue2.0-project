// import originJSONP from 'jsonp'

 function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  console.log(url)
  // return new Promise((resolve, reject) => {
  //   originJSONP(url, option, (err, data) => {
  //     if (!err) {
  //       resolve(data)
  //     } else {
  //       reject(err)
  //     }
  //   })
  // })
}
function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}

const url = 'https://www.baidu.com'
const data = {
  time: 155,
  name: 'patrick'
}
jsonp(url, data)