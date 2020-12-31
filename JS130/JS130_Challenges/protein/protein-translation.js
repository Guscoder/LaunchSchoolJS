// RNA: "AUGUUUUCU" => translates to

// Codons: "AUG", "UUU", "UCU"
// => which become a polypeptide with the following sequence =>

// Protein: "Methionine", "Phenylalanine", "Serine"

// Below are the codons and resulting Amino Acids needed for the exercise.

// Codon	Amino Acids
// AUG	Methionine
// UUU, UUC	Phenylalanine
// UUA, UUG	Leucine
// UCU, UCC, UCA, UCG	Serine
// UAU, UAC	Tyrosine
// UGU, UGC	Cysteine
// UGG	Tryptophan
// UAA, UAG, UGA	STOP
// Test suite:

// create object to hold codon/aa pairs
//divide rna into 3 letter segments
// create new array to hold segments
// add each segment to array

// create array for protein names
// iterate through array of segments
// match each segment to prop in codon object
// add protein name to protein array
// return protein array

function splitRna(rna) {
  let codonArray = [];
  let startIndex = 0;
  for (let idx = 3; idx <= rna.length; idx += 3) {
    codonArray.push(rna.slice(startIndex, idx));
    startIndex += 3;
  }
  return codonArray;
}

const RNA_CHART = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

function translate(rna) {
  if (!rna) return [];

  let codonList = splitRna(rna);
  let proteinArray = [];

  for (let index = 0; index < codonList.length; index++) {
    const codon = codonList[index];
    if (!Object.keys(RNA_CHART).includes(codon)) {
      throw new Error("Invalid codon");
    }
    if (RNA_CHART[codon] === "STOP") break;
    proteinArray.push(RNA_CHART[codon]);
  }

  return proteinArray;
}

module.exports = translate;
