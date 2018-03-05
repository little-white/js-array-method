require('./myEvery')
describe('myEvery 用法', () => {

  test('每个值都为true的话返回值为true', () => {
    var arr = [1, true, []]
    var res = arr.myEvery(function(item){
      return item
    })
    expect(res).toBe(true);
  });

  test('都一个值为false的话返回为false', () => {
    var arr = [1, true, [], false]
    var res = arr.myEvery(function(item){
      return item
    })
    expect(res).toBe(false);
  });

  test('支持数组对象', () => {
    var arr = [{age: 20}, {age: 30}, {age: 40}, {age: 50}]
    var res = arr.myEvery(function(item){
      return item.age > 10
    })
    expect(res).toBe(true);
  });

  test('myEvery第一个参数callback中第二个参数的用法：为原数组的下标；第三个参数的用法：值为原数组', () => {
    var res = [1,2,3].myEvery(function(item, index, array){
      return array[index] === item
    })
    expect(res).toEqual(true);
  });

})
