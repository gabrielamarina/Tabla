
const fs = require ('fs');
const colors = require('colors')
const crearArchivo = async (base=1, listar= false, hasta =10) => {
    try {
         
    let salida= '';   

    for (let i=1; i<= hasta; i++) {
     salida += `${base} x ${i} = ${base * i}\n`; 
    
};

 if (listar) {
   console.log ('tabla del'.red, colors.blue (base))   
   console.log (salida); 
}
   
fs.writeFileSync(`./salidas/ tabla-${base}.txt`, salida);
    return (`tabla de ${base} creado`)
    } catch (err)  {
        throw (err)}
    

}

module.exports ={
    crearArchivo
}
