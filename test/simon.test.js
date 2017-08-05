'use strict'

const assert = require('chai').assert
const Simon = require('../simon')
const log = console.log

describe('Simon object', function () {
	const simon = new Simon()
	describe('newSeries method', function () {
		it('will initialize a new simon series', function () {
			simon.newSeries()
			const firstSeries = simon.getFullSeries().map(x => x)
			simon.newSeries()
			assert.notDeepEqual(simon.getFullSeries(), firstSeries)
		})
	})
})
