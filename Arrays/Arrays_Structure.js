

//  ## Arrays ##

//Estrucuta de un array
//El array puede expresarse como cualquiera de las formas expresadas abajo
//La forma más rápida y común de hacerlo es como estipula arr3
let arr = new Array()
let arr2 = []


//------------------------------------------------------
//------------------------------------------------------


//  ## Manipulando elementos del Array ##

let matrix = ["Fresa", "Cereza", "Ciruela", "Mango", "Manzana"]





//Añadir elementos al final de un array
//  ## push ##

////El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

console.log(matrix) //Array original
const count = matrix.push("Pera")
console.log(matrix) //Array modificado con el método push
console.log(count)  //length del nuevo array


//También se pueden añadir más de un elemento a la vez

let sports = ["Soccer", "Baseball"]
console.log(sports)
sports.push("footbal", "Swimming")
console.log(sports)








//Eliminar el último elemento de un Array
//  ## pop ##


const fruta_Eliminada = matrix.pop() //Elimina el último elemento del array y devuelve el valor que elimina. En este caso le asignamos dicho valor a la constante fruta_Eliminada                          

console.log(matrix) //Se elimina el elemento Pera que se agregó anteriormente
console.log(fruta_Eliminada)    //Se imprime el elemento eliminado almacenado en la variable especificada








//Añadir un elemento al principio de un Array
//  ## unshift ##

matrix.unshift("Naranja")
console.log(matrix)






//Eliminar el primer elemento de un Array
//  ## shift ##

matrix.shift()
console.log(matrix)     //Elimina el elemento Naranja




//Encontrar el índice de un elemento del Array
//  ## indexOf ##

console.log(matrix.indexOf("Ciruela"))






//Copiar un Array
//  ## slice ##

let copiaMatrix = matrix.slice()
console.log(copiaMatrix)








//   ## splice ##
// Eliminar elementos de un array especificando desde dónde se borran
// También agrega valores en la posción especificada
// El primer número representa el lugar donde se comenzará reemplazar o eliminar
// el segundo parámetro determina cuántos elementos se borrarán

matrix.splice(1,2)  //Se eliminarán 2 elementos comenzando desde el índice 1
console.log(matrix)

var Names = ["Sofia", "Ramón", "Pedro"]

Names.splice(1,0,"Karen")   //No se borra ningún elemento, solo se agrega el string en la posición 1

console.log(Names)





//  ## some ##
// Verifica si se cumple una condición y arroja su valor booleano

var array = [
    {
        "Nombre" : "Bici",
        "Precio": 3000
    },{
        "Nombre" : "TV",
        "Precio": 9500
    },{
        "Nombre" : "Libro",
        "Precio": 600
    },{
        "Nombre" : "Libro",
        "Precio": 800
    }
]

var articulos = array.some(function(articulo){
    return articulo.Precio > 10000;
})


console.log(articulos)





//  ## find ##
// Verifica si existe una propiedad de un objeto que le pasemos y devuelve el objeto
// Tomando el array del ejemplo de some  (anterior)

var articuloLibro = array.find(function(element){
    return element.Nombre === "Libro"
})
    
console.log(articuloLibro)
    
    
var articuloLibro2 = array.filter(function(element){

    element.Nombre === null || element.Nombre === undefined

    return element.Nombre === "Libro"
})

console.log(articuloLibro2)
