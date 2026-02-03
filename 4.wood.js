// // perchairwood = 5cft;
// // pertablewoood = 10cft;
// // perbedwood = 20cft;


// function totalWood(quantity1, quantity2, quantity3){

//     const perChariWood = 5;
//     const perTableWood = 10;
//     const perBedWood = 20;

//     const chairTotalWood = quantity1 * perChariWood;
    
//     const tableTotalWood = quantity2 * perTableWood;

//     const bedTotalWood = quantity3 * perBedWood;

//     const total = chairTotalWood + tableTotalWood + bedTotalWood;
//     return total;
    
// }


// const total = totalWood(10, 10, 10);
// console.log(total);



// another prac

function totalPrice(shirtQuantity, pantQuantity, shoeQuantity){

    const perShirtPirce = 800;
    const perPantPrice = 900;
    const perShoePrice = 1200;

    const shirtTotalPrice = shirtQuantity * perShirtPirce;

    const pantTotalPrice = pantQuantity* perPantPrice;

    const shoeTotalPrice = perShoePrice * shoeQuantity;

    const total = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return total;

}


const total = totalPrice(5, 5, 2);
console.log(total);


