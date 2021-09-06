const saludar = (nombre) => {
    return `Saludos   ${nombre}`
}
console.log (saludar ('Gaby'))

setTimeout (
  
    ()=>{
    console.log(saludar ('Tony'))
    
}, 4000)
setTimeout (
  
    ()=>{
    console.log(saludar ('Al último'))
    
}, 1000)

function sumar (a,b,c) {
    return (a - b + c)
}
console.log (sumar (2,1, 4))

const sumas = (a,b,c)=>
  (a+b+c)

 
console.log (sumas (2,1, 4))

setTimeout ( ()=> console.log ('Hola despues de muuchooo'), 4000

)

const getUsuario = (id, callback) => {
    const usuario = {id, nombre: 'glucosa', unidades: 'mg/dl'}

setTimeout (()=> {callback (usuario)}, 1500)}

getUsuario (90, (usuario)=>{
    console.log (usuario.id),
    console.log (usuario.unidades)
})

const empleados = [
    {
        id:1,
        nombre: 'Gonzalez'
    },
    {
        id:2,
        nombre: 'Moreno'
    },
    {
        id:3,
        nombre: 'Lavalle'
    }
]

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:1,
        salario: 1500
    },
    {
        id:1,
        salario: 1600
    }
]
const getEmpleado = (id)=> {
    
    return new Promise ((res, rej)=>{
        const empleado= empleados.find (e=> e.id=== id)?.nombre;
     
        (empleado)?
        res (empleado)
        :rej ( `Empleado con ${id} no existe`)
        
    })
    
}
const id= 10

/*getEmpleado (id)
.then (empleado => console.log (empleado))
.catch (err => console.log (err))*/

const getSalario = (id)=> {
    
    return new Promise ((res, rej)=>{
        const salario= salarios.find (s=> s.id=== id)?.salario;
     
        (salario)?
        res (salario)
        :rej ( `El Empleado con ${id} no tiene registrado su salario`)
        
    })
    
}

/*getSalario (id)
.then (salario => console.log (salario))
.catch (err => console.log (err))
//otra forma//
let nombre
getEmpleado (id)
.then (empleado=>{ 
   nombre= empleado
    return getSalario (id)})
    .then (salario => console.log ('el empleado ', nombre, 'tiene un sueldo de ', salario))
    .catch (err => console.log (err))*/

const getinfoUsuario = async (id) => {
   try{
    const empleado= await getEmpleado (id);
    const salario= await getSalario (id);
    return `El salario del empleado ${empleado} cobra ${salario}`
} catch (error){
    return (error)}
}
getinfoUsuario (id)
.then (msg => console.log (msg))
.catch (err => console.log (err))
