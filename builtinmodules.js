
//para los modulos built-in no se usa el ./
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)


const currentOS = {

	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freemem: os.freemem()
}

console.log(currentOS)

const path =require('path')

console.log('separator:')
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

console.log('base:')
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)