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
simon.getNext() // get the next part of the series (1st part if not been called)
// [1]
simon.check(1) // check each value one at a time in the series
// true
simon.getNext()
// [1,4]
simon.check(1)
// true
simon.check(4)
// true
simon.getNext()
// [1,4,3]
simon.check(1)
// true
simon.check(4)
// true
simon.check(2)
// false
simon.getCurrent();
// [1,4,3]
simon.check(1)
// true
simon.check(4)
// true
simon.check(4)
// false
simon.newSeries();
// to start a new game
```
