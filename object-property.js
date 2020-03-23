const students = [
    {id: 18, name:"Salma"},
    {id: 23, name:"Nahid"},
    {id: 24, name:"Nayeem"},
    {id: 30, name:"Tayef"},
    {id: 35, name:"Prapti"}

]

const names = students.map(s => s.name);
console.log(names);
const ids1 = students.map(s => s.id);
console.log(ids1);

const ids2 = students.filter( s => s.id > 18);
console.log(ids2);

const ids3 = students.find(s => s.id > 24);
console.log(ids3);