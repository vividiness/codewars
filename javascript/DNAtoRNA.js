function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
     
  dna = dna.split("")
    
  for (let i=0; i<dna.length; i++) {
      if(dna[i] == 'T'){
      dna[i] = 'U'
   }    
  }
  
  return dna.toString().replace(/,/g, '')
    
  }

dna.replaceAll('T', 'U')

const DNAtoRNA = dna => dna.split("T").join("U")

const DNAtoRNA2 = dna => dna.join(/T/g, 'U')