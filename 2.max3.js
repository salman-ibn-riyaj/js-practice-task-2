const jim = 98;
const kim = 100;
const tim = 50;


if(jim > kim && jim >tim){
    console.log('Jim is the boss.');
}
else if(kim > jim && kim >tim){
    console.log('Kim is the boss.')
}
else{
    console.log('Tim is the boss.')
}


function whoIsTheBoss(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }

    else if(num2 > num3 && num2 > num1){
        return num2;
    }

    else{
        return num3;
    }
}


const result = whoIsTheBoss(55, 56, 57);
console.log(result);