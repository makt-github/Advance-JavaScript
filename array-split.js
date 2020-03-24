
// Slice of an Array.........

const array = [1,2,3,4,5,6,7,8,9];

const partArray = array.slice(1,6);   // slice(staring index, ending index).
console.log(partArray);

console.log(array);

// Splice of an Array....

const removed = array.splice(5,4,10,11,12);  // splice(starting index, no of element need to  remove,in the place of removed items which new element is add);
console.log(removed);

console.log(array);

// New array after removed now being altogether using join() method....

const together = array.join("");
console.log(together);

const together1 = array.join(" ");
console.log(together1);

const together2 = array.join(",");
console.log(together2);