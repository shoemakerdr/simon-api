'use strict'

const Simon = require('./simon')

module.exports = function playSimon (possible, seriesLength) {
	return new Simon(possible, seriesLength)
}
