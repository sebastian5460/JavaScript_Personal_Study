

var arr = ['a','z','e','j']

//El arreglo forEach recibe como parámetro una función que se ejecturá
//una vez por cada iteración

//El orden de los parámetros recibidos por la función interna del forEach es:
//(current Value, index, array)
// arr.forEach(function(element, index,arreglo){

//     console.log(element)
//     console.log(index)
//     console.log(arreglo)
    
    
// })

var matrix = [[1,1,0,0],[1,0,1,0],[0,1,1,0],[1,0,1,1]]

// matrix.forEach(element => console.log(element))

for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[i].length; j++){

        if( i == j){

            matrix[i][j] = 1
            
        }
        else matrix[i][j] = 0
        
    }
    
}

matrix.forEach(function(element){
    console.log(element)
})




//  ## Parámetros del forEach en los arrays ##

//El método forEach podrá tener hasta 3 parámetros los cuales se especifican en el
//ejemplo de abajo. 
//los parámetros element e index son más intuitivos que el parámetro array.
//El parámetro array hará referencia al array sobre el cual la función forEach estará
//iterando, ya que un array puede contener otros array internos.


let frutas = [["Fresa", "Pera"], ["Manzana", "Papaya"]] //array de 2 dimensiones

//Se imprime el consola el array global
frutas.forEach(function(element,index,array){

    console.log(`Elemento: ${element} \nÍndice: ${index} \nArray: ${array}`)
    
})

console.log("\n------------------------\n")

//Se imprimirá en consola el contenido de los arrays internos
for(let i=0; i < frutas.length;i++){
    
    frutas[i].forEach(function(element,index,array){
        
        console.log(`Elemento: ${element} \nÍndice: ${index} \nArray: ${array}`)

    })
    
}