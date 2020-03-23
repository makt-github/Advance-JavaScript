 
 // For what reasons we got undefined and null as return.........

 // Some cases are shown below in different examples....
 
 function add (x,y){
     console.log(x+y);
     return ;
 }

 const result = add(10, 15);
 console.log(result);
 const result2 = add(10) ;

 const array = [1,5,8];
 console.log(array[10]);

 const num = undefined ;
 console.log(num);
 
 const info = {name:"Tayef", ID: 030,};
 console.log(info.age);


 function doFun(g,h){

    console.log(h);
 }


 const k = doFun(10);
 console.log(k);