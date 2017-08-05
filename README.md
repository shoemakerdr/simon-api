# simon-api
An npm module for that can be used for Free Code Camp's Simon Project

```javascript
// initialize a new Simon object
// can also be intialized with two optional arguments:
// Simon(possible, seriesLength)
// possible is the number of possibilities for the series (defaults to 4)
// seriesLength is the length in the series (defaults to 20)
const simon = new Simon()

simon.newSeries()
// initialize a new random series
simon.getFullSeries() // get the full series up front
// [1,4,3,3,2,4,1,1,2,3,4,4,3,2,1,4,2,3,2,3]
simon.getCurrent() // get the current series (1st part if next() not been called)
// [1]
simon.checkUserSeries([1]) // check the entire current series against user input
// true
simon.next() // add the next element of the series to the current series
simon.getCurrent()
// [1,4]
simon.checkUserSeries([1, 4])
// true
simon.next()
simon.getCurrent()
// [1,4,3]
// You can also check each sequential user guess individually
simon.checkUserGuess(1)
// true
simon.checkUserGuess(4)
// true
simon.checkUserGuess(3)
// true

```
