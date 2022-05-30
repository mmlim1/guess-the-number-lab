const game = {
  prevGuesses: [],
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  getGuess: prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`),
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
  },
  
}

console.log(game)

