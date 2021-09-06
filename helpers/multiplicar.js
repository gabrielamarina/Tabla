
    
    const fs = require ('fs');
   
   
    
    const crearArchivo = (base=1) => {
    console.log (`tabla del ${base}`)    
    let salida= '';   

    for (let i=1; i<11; i++) {
     salida += `${base} x ${i} = ${base * i}\n`; 
    
};
    console.log (salida); 
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log (`tabla de ${base} creado`)
   
}

module.exports ={
    crearArchivo
}