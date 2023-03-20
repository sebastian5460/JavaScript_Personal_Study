


const cursos = {
    materia1: "ecuaciones Dif.",
    materia2: "matemáticas",
    materia3: "Álgebra"
}

let key = "";

// for (key in cursos) {

//     console.log(`${key}. ${cursos[key]}`);
// }

for (let i = 0; i < cursos.length; i++) {

    console.log(`${i}. ${cursos[i]}`);
    
}



// //expected: 
//  materia1. ecuaciones Dif
//  materia2. matemáticas
//  materia3. Álgebra