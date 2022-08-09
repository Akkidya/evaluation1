
/*Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]]
*/ 
let array = [[1,4,2,3],[10,20,30],[100,500,700,600],[2000,1000]];

array.forEach(function(row){
    row.forEach(function(col){
        console.log(col)
    })
});