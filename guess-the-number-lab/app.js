const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
    this.prevGuesses.push(this.getGuess())
    this.render() 
    } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum) 
  },
  getGuess: function() {
    let curGuess
    while (!curGuess || curGuess < this.smallestNum || curGuess > this.biggestNum) {
      curGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      if (isNaN(curGuess) || curGuess > this.biggestNum || curGuess < this.smallestNum) {
        alert('This is not a valid entry')
      }
    }
    return curGuess
  },
  render: function() {
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secrectNum) {
      alert(`Congrats you guessed the number in ${this.prevGuesses.length} guesses!`)
    } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secrectNum) {
      alert(`Your guess is too high Previous Guesses: ${this.prevGuesses.join(', ')}`)
    } else if (this.prevGuesses[this.prevGuesses.length-1] < this.secrectNum) {
      alert(`Your guess is too low Previous Guesses: ${this.prevGuesses.join(', ')}`)
    }
  },
}


game.play()



