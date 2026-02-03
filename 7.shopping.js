// let products = [

//     { name: "shirt", price: 500, color: 'white' },
//     { name: "shirt1", price: 400, color: 'black' },
//     { name: "shirt2", price: 300, color: 'b&W' },
//     { name: "shirt3", price: 500, color: 'blue' },
//     { name: "shirt4", price: 150, color: 'yellow' }


// ];

// function totalPrice(products){
//     // console.log(products);
//     let total = 0;
//     for(const product of products){
//         // console.log(product);
//         total = total + product.price;

//     }
//     return total;
// }


// const total = totalPrice(products);
// console.log(total);


// Total Price another prac:

let products = [
    { name: 'shirt', price: 600 },
    { name: 'shampoo', price: 600 },
    { name: 'pant', price: 600 },
    { name: 'comb', price: 600 },
    { name: 'tie', price: 600 },
    { name: 'spray', price: 600 }
];


function totalPrice(products) {
    // console.log(products);
    let total = 0;
    for (const product of products) {
        // console.log(product);
        total = total + product.price;
    }
    return total;
}


const total = totalPrice(products);
console.log(total);


