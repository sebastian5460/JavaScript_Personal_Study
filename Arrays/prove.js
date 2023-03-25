


let cars = [
    {
        "color":"Red",
        "brand": "Kia"
    },{
        "color":"Red",
        "brand": "Kia",
        "licensePlate": "AAA1"
    },{
        "color":"Red",
        "brand": "Kia",
        "licensePlate": "H11A"
    }
]

let reult = cars.filter(element => element.licensePlate)

console.log(reult)

var newArr = []

for(let i=0; i < cars.length; i++){

    if((cars.licensePlate !== null) || (cars.licensePlate !== undefined)){
        newArr.push(cars[i].licensePlate)
    }
    
}

console.log(newArr)


switch (true) { 
	case false: console.log("Soy falso :( ") 
    break;
	case true: console.log("Soy verdadero!") 
    break;
}



var num = "1"

console.log(1 + parseInt(num))


