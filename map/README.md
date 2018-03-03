# map

```javascript
[1,2,3].map(function(item){
  return {
    name: item
  }
}) // [{name: 1},{name: 2},{name: 3}]

[1,2,3].map(function(item){
  return item * 2
}) // [2,4,6]
```

map方法返回一个新数组，长度和原数组相等，每个元素是callback中的返回值

### 实现原理

```javascript
let new_array = arr.myMap(function callback(currentValue, index, array) { 
    // Return element for new_array 
}[, thisArg]) // 语法

for(var i=0, len=this.length; i<len; i++){
  arr.push(cb.apply(obj, [this[i], i, this])) // 也可以使用call：cb.call(obj, this[i], i, this)
} // 核心实现
```

由于长度和原数组一直，在每次循环时都需要push到新数组，并且新数组的元素是callback的的返回值。其中index，array，thisArg和[myFilter](../filter/README.md)实现的原理相同。

具体实现请查看[myMap.js](./myMap.js)

具体用法请查看[myMap.test.js](./myMap.test.js)