// /**
//  * first 100 = 100tk;
//  * second 100 = 90;
//  * above 200 = 70;
//  */


// function layeredDiscount(quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;


//     if(quantity <= 100){
//         const first100TotalPrice = quantity * first100Price;
//         return first100TotalPrice;
//     }
//     else if(quantity <=200){
//         const first100TotalPrice = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingQuantityTotalPrice = remainingQuantity * second100Price;
//         const second100TotalPrice = first100TotalPrice + remainingQuantityTotalPrice;

//         return second100TotalPrice;
//     }
//     else{
//         const first100TotalPrice = 100 * first100Price;
//         const second100TotalPrice = 100 * second100Price; 
//         const remainingQuantity = quantity - 200;
//         const above200remainingPrice = remainingQuantity * above200Price;

//         const above200TotalPrice = first100TotalPrice + second100TotalPrice + above200remainingPrice;

//         return above200TotalPrice;
//     }


// }


// const total = layeredDiscount (250);
// console.log(total);



// another practice

