

let valorB = function(num){
    return num*4;
}

let miNota = valorB(4);
console.log(miNota);

let valorA = num => num*4; // the "=>" expression, replaces the reserved word "function" and this goes after the argument of the function. "num" is the argument of the function, and "num*4" is the return expression to be executed.

let tuNota = valorA(5);
console.log(tuNota);