# reduce

```javascript
// a:accumulator c:currentValue
[1,2,3].reduce(function(a,c){
  return a + c
}) // 6 具体过程:1 + 2 -> a;3 + 3 -> a;结束返回a

[1,2,3].reduce(function(a,c){
  return a + c
}, 5) // 11 具体过程:5 + 1 -> a;6 + 2 -> a;8 + 3 -> a;结束返回a

[1,2,3].reduce(function(a,c){
  return (a + c) * c
}) // 27 具体过程:(1 + 2) * 2 -> a;(6 + 3) * 3 -> a;结束返回a
```

和filter、map不同的是，reduce返回的肯定是单个值。这个值是通过callback产生。

### 实现原理

```javascript
// currentIndex:数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
var currentIndex = initValue ? 0 : 1

//accumulator:累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
var accumulator = initValue ? initValue : this[0]

for(var i=currentIndex, len=this.length; i<len; i++){
  accumulator = cb(accumulator, this[i]) // 通过迭代将callback的返回值付给accumulator，以此往复
}
```

### 异常处理

```javascript
[].reduce(function(a, c){return a+c}) // Uncaught TypeError: Reduce of empty array with no initial value
```

当数组为空并且没有初始值的时候，reduce会抛异常，在myReduce中我们也实现一下：

```javascript
if(!this.length && !initValue){
  throw new TypeError("myReduce of empty array with no initial value")
}
```

具体实现请查看[myReduce.js](./myReduce.js)

具体用法请查看[myReduce.test.js](./myReduce.test.js)