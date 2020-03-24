
function countNumber(){
    let count = 0;
    return function(){
        count++ ;
        return count;

    }
}

const c1 = countNumber();
console.log(c1());
console.log(c1());
//console.log(c1());  Nothing can  do before declaration...
console.log(c1());

const c2 =  countNumber();
console.log(c2());
console.log(c2());
console.log(c1());
console.log(c2());