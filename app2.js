const {crearArchivo} = require('./helpers/multiplicar2');
const {argv} = require('./configuracion/yargs');
const colors = require('colors')

//console.log (process.argv)
console.log (argv)
 
crearArchivo (argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log (nombreArchivo.rainbow, 'creado'))
.catch (err => console.log (err))
