

//  ## Cars model Random generate ##
// The following script generates a randomly array of 3 different car models
// using a "cars" object as a constructer function


// constructer function
function cars (brand, model, year) {

    this.brand = brand
    this.model = model
    this.year = year

}

// brands of the cars to be used
let brand1, brand2, brand3

brand1 = "Tesla"
brand2 = "Toyota"
brand3 = "KIA"

// models of the cars to be used
let model1, model2, model3

model1 = "Model X"
model2 = "Prado"
model3 = "Cerato"

// year of refference as the base year to be add with a random plus year
// ex: 2015 + (Random year 1 to 10) 6 = 2021 -> year of the model
let refYear = 2015
let year

// proves
// console.log(Math.random().toFixed(2))
// console.log(Math.random().toFixed(1) * 10 )


// list of the cars to be printed
let totalCars = []
// random number that will determine the brand of the car
let ranCar



for (let i = 0; i < 30; i++) {
    
    ranCar = Math.random().toFixed(2)
    year = (Math.random().toFixed(1) * 10) + refYear

    if(ranCar < 0.33){

        totalCars[i] = new cars(brand3, model1, year )

    } else if(ranCar >= 0.33 && ranCar < 0.66){
        
        totalCars[i] = new cars(brand2, model1, year )

    } else if(ranCar >= 0.66 && ranCar < 1){
        
        totalCars[i] = new cars(brand1, model1, year )

    }
    
    
}

console.log(totalCars)

console.log(totalCars[1].topic)