//Modules

//importacion siempre empieza con el ./
//no requiere el .js
const names = require('./module_names')
const sayHi = require('./module_utils')
const data = require('./alternative_flavor')
require('./mindgrenade')


console.log(data)

sayHi(names.john)
sayHi(names.jesus)
//console.log(names)