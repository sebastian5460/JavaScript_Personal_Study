


//Ejercicio para convertir una matriz cuadrada a una matriz identidad

//Declaramos un matriz cuadrada 4x4
var matrix = [[1,4,3,5],[1,6,7,2],[3,5,3,9],[7,8,8,2]]
//Instanciamos la matriz identidad

var matrix_Iden = new Array();

//Imprimimos la matrizz cuadrada 4x4
matrix.forEach(element => console.log(element))



//Convertimos la matriz cudradada 4x4 en su equivalente identidad
for(let i=0; i<matrix.length;i++){

    //Iteramos sobre los elementos de los arraya internos
    for(let j=0; j<matrix[i].length;j++){

        //La matriz identidad entrega 1 en la diagonal
        //El resto son cero
        if(i==j){
            matrix_Iden[i][j].push(1)
        }
        else matrix_Iden[i][j].push(0)
            
        
    }
    
}

//Imprimimos la matriz identidad
console.log("------------- Matriz Identidad -------------")

matrix_Iden.forEach(element => console.log(element))



//  ## Multiplicación de la matriz identidad
console.log("------------- Multiplicación -------------")

// var matrix_Diag = []

// for (let i = 0; i < matrix.length; i++) {
    
//     matrix_Iden[i] = matrix[i].map(element => element *2)
    
// }
// console.log(matrix_Iden)




// matrix.forEach(element => console.log(matrix_Diag))

// for (let i = 0; i < matrix.length; i++) {
    
//     matrix_Diag = matrix.map(function(element){
//         matri
//     })
    
// }






// for(let i=0; i<matrix.length;i++){

//     for(let j=0; j<matrix[i].length;j++){

//         //La matriz identidad entrega 1 en la diagonal
//         //El resto son cero
//         if(i==j){
//             for (let i = 0; i < matrix.length; i++) {
    
//                 matrix_Iden[i] = matrix[i].map(element => element *2)
    
//             }
//         }
//         else matrix_Iden[i][j] = 0
        
//     }
    
// }











//Using node js 
// var name1
// process.stdout.write("Name: ")

// process.stdin.on('data',function(data){

//     name1 = data.toString().trim()

//     process.stdout.write(`Hello ${data}`)

//     process.exit()
    
// })