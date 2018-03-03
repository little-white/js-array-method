require('./myMap')
describe('myMap 用法', () => {
  let originArr = []
  beforeAll(() => {
    originArr = [1,2,3]
  });

  test('使用myMap生成的新数组个数应该和原数组的个数相等', () => {
    var newArr = originArr.myMap(function(item){
      return item
    })
    expect(newArr.length).toEqual(originArr.length);
  });

  test('myMap第一个参数中callback的用法：根据返回值生成新的数组', () => {
    var newArr = originArr.myMap(function(item){
      return {
        name: item
      }
    })
    expect(newArr).toEqual([{name: 1},{name: 2},{name: 3}]);
  });

  test('myMap第二个参数this的用法：指向myMap第一个参数中callback的this', () => {
    var newArr = originArr.myMap(function(item){
      var value = this.value;
      return {
        name: item+value
      }
    }, {value: 1})
    expect(newArr).toEqual([{name: 2},{name: 3},{name: 4}]);
  });

  test('myMap第一个参数callback中第二个参数的用法：为原数组的下标', () => {
    var newArr = originArr.myMap(function(item, index, array){
      return index
    })
    expect(newArr).toEqual([0,1,2]);
  });

  test('myMap第一个参数callback中第三个参数的用法：值为原数组', () => {
    var newArr = originArr.myMap(function(item, index, array){
      return array.indexOf(item) !== -1 ? item : ''
    })
    expect(newArr).toEqual([1,2,3]);
  });
})
