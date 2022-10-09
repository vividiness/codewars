const arr = N => Array.from({length: N}, (_,i) => i+1);
                        //function(v or _,k) is an arrow function that assign index number of current element to that element value.

console.log(arr(5))

//explicação
var arr1 = Array.from({
    length: 5 // Create 5 indexes with undefined values
  },
  function(v, k) { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
                    // Executa uma função map nos referidos índices usando v(alue)[undefined] e k(ey)[0 to 4]
                
    return k; // Return k(ey) as value for this index - Retorna k(ey) como valor para este índice
  }
);
console.log(arr1);
