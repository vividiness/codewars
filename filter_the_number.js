var filterString = function(value) {
    const num = [0,1,2,3,4,5,6,7,8,9]
    var numeros = [];
    value = value.split("")
  
    for(let i=0; i<value.length; i++){
      for(let j=0; j<num.length; j++){
        if(value.contains(num[j])){
           numeros.push(value[i])
        }
      }
      
    }
  
    return numeros;
    }
    console.log(filterString('12oi348'))
  
    //ou
  
    var FilterString = function(value) {
      return parseInt(value.replace(/[^\d]/g, ""))
    }