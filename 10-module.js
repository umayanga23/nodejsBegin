const oss = require('os')

//info about user
const user = oss.userInfo()
console.log(user)

//method return the system uptime in minute
console.log(`the system uptime is ${oss.uptime()/60} minute`)

const currentOs = {
  name: oss.type(),
  release: oss.release(),
  totalmem: oss.totalmem(),
  freemem:oss.freemem()
}

console.log(currentOs.release)