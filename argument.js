//  function add(num1,  num2){
//      console.log(arguments);
//      return num1 + num2 + arguments[2];
//  }

// function add(num1,  num2){
//     console.log(...arguments);
//     return num1 + num2 ;
// }

function add(num1,  num2){
    const arg = [...arguments];
    let sum = 0;

    for(let i = 0; i < arg.length; i++){
        const item = arg[i];
        sum = sum + item ;
    }
    console.log(arg);

    return sum;
}

 const result = add(5,6,1,2);
 console.log(result);
