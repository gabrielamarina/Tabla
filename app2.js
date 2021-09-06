/*const fs = require ('fs');

console.clear ()
const base = 3


console.log (`tabla del ${base}`)
let salida= ''
for (let i=1; i<11; i++)
    { salida += (` ${base} x ${i} = ${base * i}\n` )
    
};

fs.writeFile (`tabla-${base}.txt`, salida, (err) => {
    if (err) throw  err;

console.log (`tabla de ${base} creado`)
})

console.log (salida)*/
// otra forma con writeFileSync

/*console.log (`tabla del ${base}`)
let salida= ''
for (let i=1; i<11; i++)
    { salida += (` ${base} x ${i} = ${base * i}\n` )
    
};

fs.writeFileSync (`tabla-${base}.txt`, salida);

console.log (`tabla de ${base} creado`)


console.log (salida)*/

//llamemos la funcion multiplicar
//const base= 3 ;

console.clear ()
const {crearArchivo} = require('./helpers/multiplicar2');
const {argv} = require('./configuracion/yargs');
const colors = require('colors')

//console.log (process.argv)
console.log (argv)
//console.log ('base: yargs', argv.base );

//const [ , , arg3='base=5'] = process.argv
//const [ , base=5] = arg3.split('=')
 
crearArchivo (argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log (nombreArchivo.rainbow, 'creado'))
.catch (err => console.log (err))
