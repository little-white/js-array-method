require('./myFilter')

test('[1,2,3].myFilter(function(item){return item > 1})  to equal [2,3]', () => {
  expect([1,2,3].myFilter(function(item){return item > 1})).toEqual([2,3]);
});

test('[1,2,3].myFilter(function(item){return item%2})  to equal [2,3]', () => {
  expect([1,2,3].myFilter(function(item){return item%2})).toEqual([1,3]);
});

test('[1,2,3].myFilter(function(item){return true})  to equal [2,3]', () => {
  expect([1,2,3].myFilter(function(item){return true})).toEqual([1,2,3]);
});

test('this argument of myFilter', () => {
  expect([1,2,3].myFilter(function(item){return item > this.value}, {value: 1})).toEqual([2,3]);
});

test('index argument of callback', () => {
  expect([1,2,3].myFilter(function(item, index){return item === (index + 1)})).toEqual([1,2,3]);
});

test('array argument of callback', () => {
  expect([1,2,3].myFilter(function(item, index, array){return array.indexOf(item) !== -1})).toEqual([1,2,3]);
});
