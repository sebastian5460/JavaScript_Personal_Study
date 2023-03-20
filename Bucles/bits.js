


var b1 =357;
var b2 = 297;

//El operador binario  &  (AND)  Arroja 1 por cada coindidencia que encuentre entre 
//una comparación de numeros: 11011 & 01010 
//El resultado será:          01010
//Los valores pueden estar representados en decimal, pero el operador los 
//tratará en su equivalencia binaria
var b3 = b1 & b2;       

console.log(b3)

//El operador binario  >>  llevará acabo un shr (Shift Rigth) del número a la izq
//la cantidad de veces el número que se encuentre a la derecha del operador
//Se sabe que hacer esto es equivalente a dividir entre dos
console.log(357 >> 2)

//El operador binario << realiza un shl (Shift Left)
//Se sabe que hacer esto es equivalente a multiplicar por dos
console.log(357 << 3)