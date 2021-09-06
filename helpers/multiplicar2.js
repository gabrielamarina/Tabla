
   
   
    /*const getSalario = (id)=> {
    
    return new Promise ((res, rej)=>{
        const salario= salarios.find (s=> s.id=== id)?.salario;
     
        (salario)?
        res (salario)
        :rej ( `El Empleado con ${id} no tiene registrado su salario`)
        
    })*/
// crear con promesa//
/*const crearArchivo = (base = 1) => {
 try{  

    return new Promise ((res, rej) => {
    const fs = require ('fs');
    
    console.log (`tabla del ${base}`)    

    let salida= ''; 
    
    for (let i=1; i<11; i++) {
    
    salida += `${base} x ${i} = ${base * i}\n`; 
    }
  
    

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    res (`tabla de ${base}.txt`);
    
    console.log (salida);
});


}
catch(error) {throw (error)}
}
module.exports ={
    crearArchivo
}*/

// crear con async
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