'use strict'

class Check {
	constructor(answers) {
		this.answers = answers
		this.iterAnswers = answers.entries()
	}
	guess (possible) {
		return possible === this.iterAnswers.next().value[1]
	}

	reset () {
		this.iterAnswers = this.answers.entries()
	}
}

module.exports = Check
