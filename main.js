// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// Creates an object with two key value pairs (specimenNum and dna) and some method functions
const pAequorFactory = (num, dnaBase) => {
  return {
    specimenNum: num,
    dna: dnaBase,
    mutate() {                                                        //Mutates the dna property to another random string of letters
      let randomIndex = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase()
      while(newBase === this.dna[randomIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase
      return this.dna
    },
    compareDNA(pAequor) {                                             //Compares the dna property of this.object with another object
      let ret = 0;

      for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) ret++;
      };
      let value = Math.floor((ret / this.dna.length)*100);

      console.log(`Speciment #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${value}% DNA in common`)

    },
    willLikelySurvive() {                                             //Checks to see what percentage of this.dna is 'C or 'G. Creates a percentage total variable. if percentage is > 60%, returns true,, else false
      let survival = 0;
      
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survival ++;
        };
      };
      let percent = ((survival / this.dna.length) * 100);
        if (percent >= 60) {
          return true;
        } else {
          return false;
        }
    },
  }

};

let create30 = () => {
  pAequor = []
  survivors = [];
  for (let i = 0; survivors.length < 30; i++) {

    pAequor[i] =pAequorFactory(i, mockUpStrand());
    if (pAequor[i].willLikelySurvive() === true) {
      survivors.push(pAequor[i]);
    }
  }
  return survivors
}



//let testSubject = pAequorFactory(1, mockUpStrand());
//console.log(testSubject)
//let  pAequor = pAequorFactory(2, mockUpStrand());
//console.log(pAequor)
//console.log(testSubject.compareDNA(pAequor));
//console.log(pAequor.willLikelySurvive());
console.log(create30());