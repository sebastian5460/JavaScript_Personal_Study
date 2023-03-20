


//Creación de piramide tomando en como caracater de dibujo cual sea que el usuario ingrese

// let counter2 = 1
// let line2 = ""
// for(let i = 6; i < 1; i--){

//     line2 += "$"

//     console.log(line2)

// }


//Imprime la piramide pero invertida
/*
let levels = 6          //Indica el número de filas de la piramide
let base = levels-1     //Indica el número de caracateres de la base
let line = ""
for(let i = 0; i < levels; i++){
    
    for(j=0; j < base; j++){
        
        line +="#"
        
        
        
    }
    
    base--
    
    console.log(line)
    
    line =""
    
} */




//  ## PIRAMIDE EN ESPEJO ##

let levels = 6          //Indica el número de filas de la piramide
let base = levels-1     //Indica el número de caracateres de la base
let line = ""           //Inicialización string para el caracter a imprimir
let voidSpace = " "     //Añade espacios vacios a los items del array
let pyramid = []        //Array donde se guardarán los datos para imprimilos en sentido contrario.

for(let i = 0; i < levels; i++){
    
    for(j=0; j < base; j++){
        
        line += "#"             
               
    }

    if( i == 0){

        pyramid[i] = line   //El primer item del array es la base de la piramide, por ende no dispone de espacio vacíos
    }
    else{
        pyramid[i] = voidSpace + line   //Guarda los caracteres guardados actualmente en la variable "line" añadiendo los respectivos espacios vacios
        voidSpace += " "    //Aumento de los espacio vacíos a medida que disminuyen los caracteres almacenados en "line" estos espacio son necesarios para que de la impresión de piramide invertida una vez se imprima en pantalla
    }
    
    base--      //Disminuye el número de caracteres que se guardará en el array
    
    line =""    //Reinicia el string, borra los valores almacenados en la variable
    
}

//Imprimimos el array desde atrás hacia adelante, imprimiendo los de adelante hacia atrás se logra invertir la piramide
for(let i = pyramid.length - 1; i >= 0; i--){

    console.log(pyramid[i])
    }

