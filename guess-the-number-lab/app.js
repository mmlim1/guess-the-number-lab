const game = {
  prevGuesses: [],
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    let curGuess
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    while (this.prevGuesses[this.prevGuesses.length-1] !==this.secretNum) {
      this.getGuess()
      this.prevGuesses.push(this.curGuess)
    //if (this.prevGuesses[this.prevGuesses.length-1] > this.secrectNum) {

    }
  }
},
  getGuess: function() {
    let curGuess
    while (!curGuess || curGuess < this.smallestNum || curGuess > this.biggestNum) {
      curGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }
    console.log(curGuess)
    },

  
}


game.play()

console.log(game)

