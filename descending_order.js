// // The indexOf method returns the index of the first occurrence of the value in the array or -1 if the value is not found.

const descendingOrder = (n) => {
 
    if(typeof n !== 'number' || n <0){
        return n
    }

     const numChars = n.toString().split('')
     const numSorted = numChars.map((numChar) => Number(numChar)).sort().reverse()
        //sort = ordenar
        //acredito que >>map<< é quase um for, nesse exemplo, já que é uma função de callback em cada elemento de um array
     return Number(numSorted.join(""))

    //return parseInt(n.toString().split("").sort().reverse().join(''))

}

console.log(descendingOrder(1247609))