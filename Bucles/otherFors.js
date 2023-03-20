


//  ## for in ##
//La instrucción for in itera una variable específicada sobre cada una de las 
//propiedades enumerables de un objeto.
//Entre otras palabras, Va a iterear sobre cada uno de los elementos la instrucción
//especificada, donde la variable especificada tiene el nombre de "llave"
//Un for in se debería utilizar cuando no es necesario manipular el index
//No se debe usar un for in para iterar sobre un array, para esto se puede usar el for of
const Tesla_Cars = [
    {
        "name": "Model X",
        "model": 2021,
        "price": 55900,     //EUR
        "mileage": 65000    //km

    },
    {
        "name": "Model Y",
        "model": 2022,
        "price": 72900,     //EUR
        "mileage": 30    //km

    },
    {
        "name": "Model 3",
        "model": 2019,
        "price": 43950,     //EUR
        "mileage": 71305    //km

    },
    {
        "name": "Model S",
        "model": 2018,
        "price": 55990,     //EUR
        "mileage": 121200    //km

    }
]

//Usamos el bucle for in para iterar sobre cada uno de los elementos del 
//objeto JSON Tesla_Cars




// for(let i = 0; i < Tesla_Cars.length; i++){

//     console.log(Tesla_Cars[i])
    
// }




//  ## for of ##

const cursoJS = [

    "Intro a JS",
    "Variables y tipos",
    "Converción de tipos",
    "Funciones",
    perro = "Anibal"
    
]

cursoJS.floor = 25

console.log(cursoJS)

for(let prop in cursoJS){

    console.log(prop)
    
}
for(let prop of cursoJS){

    console.log(prop)
    
}