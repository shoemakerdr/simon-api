'use strict'

const log = console.log

class Simon {
	constructor (possible=4, seriesLength=20) {
		this.possible = possible
		this.seriesLength = seriesLength
		this.series = []
		this.count = 1
		this.current = []
	}

	newSeries () {
		const series = []
		let randomPossible
		for (let i = 0; i < 20; i++) {
			randomPossible = Math.floor(Math.random() * this.possible) + 1
			series.push(randomPossible)
		}
		this.series = series
		this.count = 1
		this.current = [this.series[0]]
	}

	getFullSeries () {
		return this.series
	}

	next () {
		this.count++
		const current = []
		for (let i = 0; i < this.count; i++) {
			current.push(this.series[i])
		}
		this.current = current
	}

	getCurrent () {
		return this.current
	}

	checkUserSeries (guesses) {
		const current = this.getCurrent()
		const len = this.series.length
		for (let i = 0; i < len; i++) {
			if (guesses[i] !== current[i])
				return false
		}
		return true
	}
}

module.exports = Simon
