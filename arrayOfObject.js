/*
1 Remove duplicate from an array of an object by id and name?
a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:
    ‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}]
    */
let list = [
    {id :1, name : 'Stephen Covey'},
    {id :2,name :'robin sharma'},
    {id : 3, name : 'toistory'},
    {id : 3, name : 'toistory'},
    {id : 5 , name : 'james clear'}
];

let duplicate = list.reduce((a,b) =>{
    let obj = a.find((item) => item.id === b.id);
    if(obj){
        return a;
    }
    return a.concat([b])
},[]);
console.log(duplicate);