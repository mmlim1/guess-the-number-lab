const game = {
  prevGuesses:[],
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    do {
    this.prevGuesses.push(this.getGuess())
    console.log(this.prevGuesses)
    this.render() }
    while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum) 
  },
  render: function() {
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secrectNum) {
      alert(`Congrats you guessed the number in ${this.prevGuesses.length}!`)
    } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secrectNum) {
      alert(`Your guess is too high Previous Guesses: ${this.prevGuesses}`)
    } else if (this.prevGuesses[this.prevGuesses.length-1] < this.secrectNum) {
      alert(`Your guess is too low Previous Guesses: ${this.prevGuesses}`)
    }
  },
  getGuess: function() {
    let curGuess
    while (!curGuess || curGuess < this.smallestNum || curGuess > this.biggestNum) {
      curGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }
    return curGuess
    
  },
}

game.play()

console.log(game)

