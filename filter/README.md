# filter

```javascript
[1,2,3].filter(function(item){
  return item > 1
}) // [2,3]

[1,2,3].filter(function(item){
  return item % 2
}) // [1,3]

```

filter方法是返回一个新的数组，这个数组是通过满足回调函数中的条件的元素来得到的。

因为它是挂在Array.prototype上，所以只有数组才可以有此方法。

```javascript
{name: 1}.filter(function(){}) // error
```

### 实现原理

```javascript
Array.prototype.myFilter = function(){
  console.log(this)
}
[1,2,3].myFilter(function(){
}) // [1,2,3]
```

当给Array.prototype添加方法myFilter后，this指向的是调用的数组。

### 实现代码beta版

```javascript
[1,2,3].filter(function(item){return item > 1}) // 可以看出filter中的参数是一个callback，callback参数为数组的元素，callback的返回值为满足添加的布尔值

Array.prototype.myFilter = function(cb){
  var arr = []
  for(var i=0,len=this.length; i<len; i++){
    if(cb(this[i])){
       arr.push(this[i])
    }
  }

  return arr
}

[1,2,3].myFilter(function(item){return item > 1}) // [2,3]
```

### 实现代码release版

```javascript
[1,2,3].filter(function(item){return item > this.value}, {value: 1}) // 可以看出filter方法的第二个参数是可选的，callback中的this指向了这个参数

function testThis(greeting){
  console.log(greeting + ' ' + this.name)
}

testThis.call({name: 'qiqi'}, 'hello') // hello qiqi

Array.prototype.myFilter = function(cb, obj){
  var arr = []
  for(var i=0,len=this.length; i<len; i++){
    if(cb.call(obj, this[i], i, this)){
       arr.push(this[i])
    }
  }

  return arr
}

[1,2,3].myFilter(function(item){return item > this.value}, {value: 1}) // // [2,3]
```

具体实现请查看[myFilter.js](./myFilter.js)

具体用法请查看[myFilter.test.js](./myFilter.test.js)
