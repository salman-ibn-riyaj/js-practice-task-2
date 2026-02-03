// let phones = [
//     {name: 'samsung', color: 'black', price: 20000, quantity: 1},
//     {name: 'htc', color: 'black', price: 25000, quantity: 1},
//     {name: 'walton', color: 'black', price: 35000, quantity: 1},
//     {name: 'xiaomi', color: 'black', price: 45000, quantity: 1},
//     {name: 'Oppo', color: 'black', price: 55000, quantity: 1},
//     {name: 'vivo', color: 'black', price: 50000, quantity: 1},

// ];


// function cheaperPhone(array){
//     // console.log(array);
//     let cheaper = array[0];
//     for(const perPhone of array){
//         // console.log(perPhone);
//         if(perPhone.price < cheaper.price){
//             cheaper = perPhone;
//         }
//     }
//     return cheaper;
// }


// const cheaper = cheaperPhone(phones);
// console.log(cheaper);



// biggest price prac:

let mobiles = [
    {name: 'samsung', color: 'fair', price: 15000, quantity: 1},
    {name: 'balton', color: 'fair', price: 17000, quantity: 1},
    {name: 'htc', color: 'fair', price: 14000, quantity: 1},
    {name: 'oppo', color: 'fair', price: 19000, quantity: 1},
    {name: 'vivo', color: 'fair', price: 12000, quantity: 1},
    {name: 'ishone', color: 'fair', price: 150000, quantity: 1},
    {name: 'itel', color: 'fair', price: 10000, quantity: 1}
];


function expensivePhone(features){
    // console.log(features);
    let mostExpensive = features[0];
    for(const individualPhone of features){
        // console.log(individualPhone);
        if(individualPhone.price > mostExpensive.price){
            mostExpensive = individualPhone;
        }

    }
    return mostExpensive;
}


const expesive = expensivePhone(mobiles);
console.log(expesive);


