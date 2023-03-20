

const randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

//Se podrís ejecutar la anterior expresión como una arrow function:

const randomNum2 = () => Math.floor(Math.random() * 10); //Cuando no se le pasa ningún paramétro a la arrow function, se deben colocar solo los paréntesis ().
console.log(randomNum2);

//Funciones que necesitan un return:

// Forma tradicional
function whatDay(day){
    const dayName = ['Domingo', 'Lunes', 'Martees'];
    return dayName[day];
}

// Con arrow function
const whatDayF = g => {
    const dayName = ['Domingo', 'Lunes', 'Martees'];
    return dayName[g];
}

whatDay(0);
console.log(whatDay);
whatDayF(1);
console.log(whatDayF);