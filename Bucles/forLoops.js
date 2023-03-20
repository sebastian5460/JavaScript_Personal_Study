


//  ## Basic structure ##

//Imprime los números del 0 al 9
//  Iniciaclización de variable; Límite de iteración, incremento de iteración
/*
for(let i=0; i<10;i++){

    console.log(i)
    
} */

//  ## Bucle de 2 dimensiones ##
//Imprime las tablas de multiplicar del 1 al 10 x 1 al 10 cada una
/*
console.log("\n\nTablas de multiplicar\n")
for(let i=1;i<11;i++){

    for(let j=1;j<11;j++){

        var product = i*j   //Productos de la iteración de i por la iteración de j
        
        console.log(i+" x "+j+" : "+product)
        
                
    }

    console.log("------------------------------------\n")
    
} */





//  ## do while ##
//Ejectua un bucle por lo menos una vez y hasta que la condición deje de ser evaluada como VERDADERA

// var prueba_do = 1.0

// do{

//     console.log("El número actual es: "+prueba_do)
//     prueba_do += 1

// }while(prueba_do < 6)   //Lógica: prueba_do < 6 (True); el parámetro del while se toma como afirmación, hasta que esta afirmación no sea contradicha, el ciclo seguirá ejecutándose




//  ## while ##
//Mismo que do while, pero sin la necesidad de ejecutarse por lo menos una vez

// var prueba_do2 = 1.0
// while(prueba_do2 < 6){ //El ciclo nunca se ejecuta dado que desde el principio no cumple la condición del bucle.
//     console.log("El número actual es: "+prueba_do2)
//     prueba_do2 ++ //Equivalente a += 1
// }



//Poniendo a prueba la expreción "break"
// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Bucles externos: ' + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Bucles internos: ' + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }




//  ## continue ##
// "continue" interrumpe la ejecución del código y se devuelve a comprobar la condición, si esta es verdadera el bloque de código sigue ejecutándose hasta que deje de cumplir la condición

let varC = 0
let varD = 0
while(varC < 3){
    varC++
    if(varC === 3){
        continue
    }
    varD += varC
    console.log(varD)
}

