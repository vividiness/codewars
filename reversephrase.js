//1- inverter uma frase
function reverseWords(str){
    var phrase = str.split(" ")
    var inverse = [];
    
     for (let i = phrase.length-1; 0 <= i; i--) {
       inverse.push(phrase[i]);
     }
    return inverse = inverse.join(" ");
  }

console.log(reverseWords("oi meu nome é viviane")); 


//simple way
const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords("hello world!"))

