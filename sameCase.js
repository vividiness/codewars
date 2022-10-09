const sameCase = (a,b) =>{
    return /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1
}

console.log(sameCase('a','C'))