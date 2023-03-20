
const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
})

console.log('last code line');




/*
const os = require('os');

console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes.');
console.log('total mem: ', os.totalmem(), ' bytes.');

*/