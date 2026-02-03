const max = Math.max(12,13,14,151,61,71,81,9);
console.log(max);

const max2 = Math.max(12,14,1516,13,14,15,12,3,159,14,785555);
console.log(max2);

const max3 = Math.max(12,13,151,2515,142,500);
console.log(max3);

const max4 = Math.max(1245,5000,6000,7000);
console.log(max4);

const max5 = Math.max(12345, 500000,25,12,56,48);
console.log(max5);


const disha = 56;
const salman = 85;

if(disha>salman){
    console.log('Disha is besharam.');
}
else{
    console.log('salman is virgin.')
}


function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max7 = getMax(65, 66);
console.log(max7);

const max8 = getMax(88, 98);
console.log(max8);

const ultimateMax = getMax(max7, max8);
console.log(ultimateMax);


