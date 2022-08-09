 //Remove duplicate from the following array([1,2,9,4,5,8,3,5,1,4,5])
 let array = [1,2,9,4,5,8,3,5,1,4,5];
 let remove = array.filter((a,b) => array.indexOf(a) === b);
 console.log(remove);