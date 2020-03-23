const numbers = [1, 2, 3, 4, 5, 6, 7];

// const squareNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const square = element * element ;
//     squareNumbers.push(square);
// }

// console.log(squareNumbers);

// Another way is MAP.....

const squareNumbers = numbers.map(x => x*x);
console.log(squareNumbers);

// Use of Map.....

// numbers.map(function(element,index,array){
//     console.log(element,index,array);
// });

// numbers.map((element,index,array) => console.log(element,index,array));


// Use of filter....

const isThere = squareNumbers.filter(x => x>10);
console.log(isThere);

// use of find...

const bigger = squareNumbers.find(x => x < 25);
console.log(bigger);

/* 
   Map >> It returns whole array with given functionalities as per requirement..
   
   Filter >> It returns also an array with specific functionalities like small numbers, big numbers etc..

   Find >> It returns  an element as per requirement provided within the function declaration..
*/
