

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


