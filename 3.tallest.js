let heights = [12,13,14,15,16,17,1,81,91];

function whoIsTall(numbers){
    // console.log(numbers);
    let max = heights[0];
    for(const height of heights){
        // console.log(height);
        if(height > max){
            max = height;
        }
    }
    return max;
}


const tallest = whoIsTall(heights);
console.log(tallest);


// smallest height;

let measures = [12,2,45,56,98,75,24,65,300];


function smallestOne(heights){
    // console.log(heights);
    let minHeight = heights[0];
    for(const height of heights){
        // console.log(height);
        if(height<minHeight){
            minHeight = height;
        }
    }
    return minHeight

}


const tall = smallestOne(measures);
console.log(tall);