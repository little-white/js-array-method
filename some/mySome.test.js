require('./mySome')
describe('mySome 用法', () => {

  test('只要有一个值满足条件的话则返回值为true', () => {
    var arr = [false, 0, true, NaN]
    var res = arr.mySome(function(item){
      return item
    })
    expect(res).toBe(true);
  });

  test('每个值都不满足条件的话才返回false', () => {
    var arr = [false, 0, NaN]
    var res = arr.mySome(function(item){
      return item
    })
    expect(res).toBe(false);
  });

  test('mySome第一个参数callback中第二个参数的用法：为原数组的下标；第三个参数的用法：值为原数组', () => {
    var res = [1,2,3].mySome(function(item, index, array){
      return array[index] !== item
    })
    expect(res).toEqual(false);
  });

})
