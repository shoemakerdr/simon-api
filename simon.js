'use strict'

const log = console.log

class Simon {
	constructor (possible=4, seriesLength=20) {
		this.possible = possible
		this.seriesLength = seriesLength
		this.series = []
	}

	newSeries () {
		const series = []
		let randomPossible
		for (let i = 0; i < 20; i++) {
			randomPossible = Math.floor(Math.random() * this.possible) + 1
			series.push(randomPossible)
		}
		this.series = series
	}

	getFullSeries () {
		return this.series
	}
}

module.exports = Simon
