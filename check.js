'use strict'

class Check {
	constructor(answers) {
		this.answers = answers
		this.iterAnswers = answers.entries()
        this.guesses = 0
	}
	guess (possible) {
        this.guesses++
		return possible === this.iterAnswers.next().value[1]
	}

	reset () {
        this.guesses = 0
		this.iterAnswers = this.answers.entries()
	}
}

module.exports = Check
