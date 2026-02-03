// let products = [
//     {name: 'shirt', price: 500, quantity: 2},
//     {name: 'pant', price: 700, quantity: 2},
//     {name: 'shoes', price: 900, quantity: 2},
//     {name: 'comd', price: 100, quantity: 2},
//     {name: 'shampoo', price: 400, quantity: 1},
//     {name: 'soap', price: 200, quantity: 1},
// ];


// function totalPrice(products){
//     // console.log(products);
//     let total = 0;
//     for(const product of products){
//         // console.log(product);
//         const perProductTotalPrice = product.price * product.quantity;
//         total = total + perProductTotalPrice;

//     }
//     return total;

// }


// const total = totalPrice(products);
// console.log(total);



// Another practice :

let shoppings = [
    {name: 'shirt', price: 500, quantity: 2},
    {name: 'pant', price: 900, quantity: 2},
    {name: 'shoes', price: 1200, quantity: 2}  
];


function totalPrice(products){
    // console.log(products);
    let total = 0;
    for(const product of products){
        // console.log(product);
        const perProductTotalPrice = product.price * product.quantity;
        total = total + perProductTotalPrice;
    }
    return total;

}


const total = totalPrice(shoppings);
console.log(total);