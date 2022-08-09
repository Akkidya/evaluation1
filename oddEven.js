//sum of the even and odd numbers for a given number?
let n =100;
let evenCount = 0,oddCount = 0;

for (let i =1 ; i <= n; i++){
    if(i%2===0){
    evenCount = evenCount + i;

        }    else{
    oddCount = oddCount + i;
        }
}

console.log(`sum of even number is ${evenCount}`);
console.log(`sum of odd number is ${oddCount}`);