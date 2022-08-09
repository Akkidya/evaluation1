let person = [{id: 1, name: "edison" },
              {id: 2, name: "Annand" },
               {id: 3, name: "Vasnath"}
]
var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  console.log(groupBy(['one','two','three'],'length'));
  