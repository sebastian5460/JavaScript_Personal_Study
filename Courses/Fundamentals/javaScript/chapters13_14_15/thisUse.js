

let KiaPicanto = {

    color: 'white',
    maker: 'KIA',
    model: 'PICANTO',
    year: 2023,
    prize: 55290000
    
}

let chevroletOnix = {

    color: 'Dark Blue',
    maker: 'CHEVROLET',
    model: 'ONIX',
    year: 2023,
    prize: 69490000

    
}

function tellMeColor() {

    console.log(this.color);
    
}

function giveMeFullDescription() {
    
    console.log(`${this.maker} ${this.model} ESPECIFICATIONS \n ---------------------------- \n Color: ${this.color}. \n maker: ${this.maker}. \n model: ${this.model}. \n prize: $ ${this.prize}. \n \n ----------------------------`)

}


// KiaPicanto.getColor = tellMeColor;
// chevroletOnix.getColor = tellMeColor;

// KiaPicanto.getColor();
// chevroletOnix.getColor();


KiaPicanto.getFullDescription = giveMeFullDescription;
chevroletOnix.getFullDescription = giveMeFullDescription;

KiaPicanto.getFullDescription();
chevroletOnix.getFullDescription();

console.log(this);