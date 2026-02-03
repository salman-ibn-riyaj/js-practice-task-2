/**
 * upto 100 ticket : 100/-;
 * between 100-200 : 90;
 * above 200        : 70;
 * 
 */


function discount(quantity){
    if(quantity<=100){
        const discountPrice = quantity * 100;
        return discountPrice;
    }
    else if(quantity<=200){
        const discountPrice = quantity * 90;
        return discountPrice;
    }
    else{
        return quantity * 70;
    }

}


const total = discount(300);
console.log(total);