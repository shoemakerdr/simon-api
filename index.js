'use strict'

const Simon = require('./simon')

module.exports = function playSimon (possible, seriesLength) {
	const simon = new Simon(possible, seriesLength)
	simon.newSeries()
	return simon
}
