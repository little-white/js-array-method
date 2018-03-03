require('./myFilter')

describe('myFilter 用法', () => {
  let originArr = []
  beforeAll(() => {
    originArr = [1,2,3]
  });

  test('myFilter第一个参数callback中第一个参数的用法：当此元素大于1时应返回[2,3]', () => {
    var newArr = originArr.myFilter(function(item){
      return item > 1
    })
    expect(newArr).toEqual([2,3]);
  });

  test('myFilter第一个参数callback中第一个参数的用法：当此判断元素为奇数时应返回[1,3]', () => {
    var newArr = originArr.myFilter(function(item){
      return item % 2
    })
    expect(newArr).toEqual([1,3]);
  });

  test('myFilter第一个参数callback中第一个参数的用法：当没有条件时应返回[1,2,3]', () => {
    var newArr = originArr.myFilter(function(item){
      return true
    })
    expect(newArr).toEqual([1,2,3]);
  });

  test('myFilter第二个参数this的用法：指向myfilter第一个参数中callback的this', () => {
    var newArr = originArr.myFilter(function(item){
      return item > this.value
    }, {value: 1})
    expect(newArr).toEqual([2,3]);
  });

  test('myFilter第一个参数callback中第二个参数的用法：值为数组的下标', () => {
    var newArr = originArr.myFilter(function(item, index){
      return item === (index + 1)
    })
    expect(newArr).toEqual([1,2,3]);
  });

  test('myFilter第一个参数callback中第三个参数的用法：值为原数组', () => {
    var newArr = originArr.myFilter(function(item, index, array){
      return array.indexOf(item) !== -1
    })
    expect(newArr).toEqual([1,2,3]);
  });
})
