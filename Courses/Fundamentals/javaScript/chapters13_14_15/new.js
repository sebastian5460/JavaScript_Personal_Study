

function Autor(name, surName) {
    this.name = name;
    this.surName = surName;
}

let autor1 = new Autor('Alessandra', 'Salvaggio');

console.log(`Autor's surname: ${autor1.surName}`);
console.log(autor1);