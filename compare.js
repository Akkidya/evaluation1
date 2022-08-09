/*
Compare two objects, If all properties are equal return true or return false?
a. ({id: 1, name: “edison”}, {id: 1, name: “edison”})
b. ({id: 1, name: “edison”}, {id: 2, name: “edison”})
*/
let a = ({ id : 1, name : "edison"},{id : 1, name : "edison"})
let b = ({id : 1 , name : "edison"},{id :2, name : "edison"})
console.log(JSON.stringify(a) === JSON.stringify(b));
    