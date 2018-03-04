require('./myReduce')
describe('myReduce 用法', () => {
  let originArr = []
  beforeAll(() => {
    originArr = [1,2,3]
  });

  test('没有初始值的求和运算', () => {
    var res = originArr.myReduce(function(a, c){
      return a + c
    })
    expect(res).toBe(6);
  });

  test('有初始值的求和运算', () => {
    var res = originArr.myReduce(function(a, c){
      return a + c
    }, 5)
    expect(res).toBe(11);
  });

  test('没有初始值的四则运算', () => {
    var res = originArr.myReduce(function(a, c){
      return (a + c) * c
    })
    expect(res).toBe(27);
  });

  test('数组为空并且没有初始值会抛异常', () => {
    // jest判断抛异常:https://github.com/facebook/jest/issues/781
    expect(function(){
      [].myReduce(function(a, c){return a + c})
    }).toThrow();
  });

  test('myReduce第一个参数callback中第三个参数的用法：值为原数组', () => {
    var res = originArr.myReduce(function(a, c, array){
      return array // 只是为了测试array的值，当然这种写法不推荐，因为没啥意义
    })
    expect(res).toEqual([1,2,3]);
  });
})
