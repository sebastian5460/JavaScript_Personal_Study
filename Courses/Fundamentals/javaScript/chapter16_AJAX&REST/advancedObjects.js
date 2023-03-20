

const persons = {

    name: "Juan",
    surName: "Márquez",
    gender: "Male",
    alive: true,
    age: 27,

    address: {
        street: "Buenos ratos 18",
        population: "Catelldefels",
        province: "Barcelona",
        CP: "08860"
    },

    telephoneNumbers: [
        {type: "house", number: "0000000"},
        {type: "movil", number: "1111111"}
    ],

    titles: ["Sr.", "Dr."]

}


const nominative = p => {
    const {name, surName} = p; // const name = p.name , surName = p.surName ;
    const [firstTitle, secondTitle] = p.titles;  // const firstTitle = p.title[0]; const secondTitle = p.title[1];
    return `${secondTitle || firstTitle} ${surName} ${name}`

}
console.log(nominative(persons));


const location = p => {

    const {address: {street, population}} = p; //const street = p.address.street; const population = p.address.population;
    return `Street: ${street}\nPopulation: ${population}`;
}

console.log(location(persons));
console.log(nominative({ name:'Julia', surName:'Casas', titles: ['Dr.','Mr']}))
console.log(location({address: {street: 'Elm street', population:'Easy'}}));
