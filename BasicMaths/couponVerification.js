


const price = document.querySelector('#price');
const coupon = document.querySelector('#couponValidation');
const button = document.querySelector('#calculate');
const container = document.querySelector('.container');
const result = document.querySelector('#result');
const btn = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const message = document.querySelector('#otherList')

const coupon_Object = {

    'seb03020' : 30,
    'karen2034': 28,
    'simon3476': 15
    
}

const coupon_Array_List = [];

coupon_Array_List.push({
    name: "titan4532",
    discount: 30,
});
coupon_Array_List.push({
    name: "perruno3351",
    discount: 20,
});
coupon_Array_List.push({
    name: "aviador9890",
    discount: 15,
});
coupon_Array_List.push({
    name: "gatuno4421",
    discount: 45,
});











button.addEventListener('click', discountCalculation);



function discountCalculation(){

    const inputPrice = Number(price.value);
    const inputCoupon = coupon.value;

    //Verifies the existence of the coupon
    if(!coupon_Object[inputCoupon]){

        result.innerText = "The coupon entered is not valid"
        
    } else {
        const newValue = `The Object discount is: ${(inputPrice * (100 - coupon_Object[inputCoupon])/100)}`;
        result.innerText = newValue;
    }
    
    /*  //Logic to calculate the discount of a product 
    if(!inputPrice || !inputCoupon){

        result.innerText = "Exists empty fields, fill the fields"
        
    }else if(inputCoupon > 100) {
        result.innerText = "Coupon value must not exceed 100%"       
    } else {
        const newValue = (inputPrice * (100-inputCoupon)/100)
        result.innerText = newValue;
    }
    */
    
    
}




//To create elements with a function

// function discountCalculation(){
    
//     const inputPrice = price.value;
//     const percentage = coupon.value;
//     const newPrice = (inputPrice *(100 - percentage)/100);

//     const result = document.createElement('p');
//     result.innerText = newPrice;
//     container.appendChild(result);
    
    
    
// }



// document.querySelector(".btn").addEventListener("click", e => {
//     const newElement = document.createElement("div");
//     newElement.classList.add("div");
//     newElement.textContent = "soy un div creado con javascript";
//     document.querySelector(".container").appendChild(newElement);
// });



btn.addEventListener('click', arrayDiscount);

function arrayDiscount(){

    const inputPrice = price.value;
    const inputCoupon = coupon.value;

    //Verifies if the entered coupon exist in the array of coupons
    function isCouponInArray(couponElement){

        return couponElement.name == inputCoupon;
        
    }
    
    let discount;


    const comproveFind = coupon_array_find.find(isCouponInArray);//{name, discount} object
    
    

    //throws an object and save it in arrayCoupon
    const arrayCoupon = coupon_Array_List.filter(isCouponInArray); //[{name,discount}] array

    if(arrayCoupon.length > 0){

        discount = arrayCoupon[0].discount;
        result.innerText = `The filter discount is: ${(inputPrice * (100 - discount)/100)}`;
        
    } else {
        result.innerText = 'Invalid coupon'
    }
    
    console.log(discount, arrayCoupon, coupon_Array_List);
    console.log(`discount: ${discount}`,  arrayCoupon, coupon_Array_List);

    if(comproveFind){
        message.innerText = 'Try with the "find" List'
    } else message.innerText = "";

    

}



const coupon_array_find = []
coupon_array_find.push({

    name: "terreneitor2000",
    discount: 35
});
coupon_array_find.push({

    name: "terremoto2500",
    discount: 20
});
coupon_array_find.push({

    name: "hipodroum4560",
    discount: 25
});


//We'll find the coupons name now with the find() method
//main differente among filter() and find() is that filter throws an array with all 
//the matches encountered in the list (array), by the other hand, find() just 
//will throw the first object (or parameter) that matches with the specificated.
btn3.addEventListener('click', calculateDiscountFind);


function calculateDiscountFind(){

    const inputPrice = price.value;
    const inputCoupon = coupon.value;

    function isCouponNameFind(couponElement){

        return couponElement.name == inputCoupon;
        
    }

    const comproveFind = coupon_Array_List.filter(isCouponNameFind);//[{name, discount}] array
    
    const couponFind = coupon_array_find.find(isCouponNameFind); //{name, discount} object
    
    if(couponFind){
        result.innerText = (inputPrice * (100 - couponFind.discount)/100);
    }else {result.innerText = "Invalid Coupon"}

    if(comproveFind.length > 0){
        message.innerText = 'Try with "filter" list';
    }else message.innerText = "";

    console.log(comproveFind);
    
}