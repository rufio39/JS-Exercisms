//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {

  let rna = ""

  for (let num = 0; num < dna.length; num++) {
    
    let char = dna.charAt(num)
    
    if (char == 'G') {
      rna = rna + "C"

    } else if (char == 'C') {
      rna = rna +"G"

    } else if (char == 'T') {
      rna = rna + "A"

    } else if (char == 'A') {
      rna = rna + "U"
    } 
  }
  return rna
};

