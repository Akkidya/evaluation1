//difference between forEach and map
let number = [3,4,2,6];
let number1 =[];

//using foreach

number.forEach(function(value){
    number1.push(value * 2);
}) 
console.log(number1);
//using map()

let mappping= number.map((val) => val *2);
console.log(mappping)