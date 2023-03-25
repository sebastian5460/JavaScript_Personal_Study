



//Dada una matriz cuadrada, el programa debe arrojar la transpuesta de la matriz


let matriz = [[1,2,4,3],[3,1,4,2],[2,5,2,3],[3,3,2,4]]
let matrizTrans = []

matriz.forEach(element => console.log(element))

console.log("----------------------------")
console.log("Matriz Transpuesta")


for(let i=0; i < matriz.length; i++){

    //Inicializamos la matriz interna (Filas) de la matrizTrans
    //matrizTrans[[]]  -> Creamos la matriz donde estarán los valores de la fila sub i
    matrizTrans[i] = []

    for(let j=0; j < matriz.length;j++){

        //Intercambiamos los valores de i a j en la Matriz Transpuesta
        matrizTrans[i][j] = matriz[j][i]
        
    }
    
    
}

matrizTrans.forEach(element => console.log(element))
console.log("----------------------------------")
console.log("Original Matrix")
matriz.forEach(element => console.log(element))

