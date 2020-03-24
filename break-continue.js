

const array = [1,2,3,4,5,6,-1,-2,-3,7,8,9];

console.log("Break: ");

for(let i = 0; i < array.length; i++){
    
    //console.log(array[i]);
    if(i > 4){
        break;
    }
    console.log(array[i]);
}

console.log("Continue: ");

for(let i = 0; i < array.length; i++){
    
    // console.log(array[i]);
    if(array[i] < 0){
        continue;
    }
    console.log(array[i]);
}

// console.log(x);
// var x = 1 ;

// function doSomething(x, y = 4){

//     console.log(y);
    
//     }
//     doSomething(3,2);