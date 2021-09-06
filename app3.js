const base= 10 ;
const {crearArchivo} = require('./helpers/multiplicar2');
crearArchivo (base)
.then (crearArchivo => console.log ('Archivo creado'))
.catch (err => console.log (err))