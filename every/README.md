# every

```javascript
[1,true,'aa',[]].every(function(item){
  return item
}) // true

[{age: 20}, {age: 30}, {age: 40}, {age: 50}].every(function(item){
  return item.age >= 30
}) // false 因为有个元素的age为20 不满足 >=30
```

every返回一个布尔值，这个值是根据数组中的每个元素是否满足callback中的条件来得到的，都满足为true，有一个不满足则为false。

### 实现原理

判断数组的每个元素是否满足条件，只要有一个不满足则返回false，都满足返回true。

```javascript
Array.prototype.myEvery=function(cb){
  var tag = true
  for(var i=0,len=this.length; i<len; i++){
    if(!cb(this[i])){
      tag = false
      break
    }
  }

  return tag
}
```

具体实现请查看[myEvery.js](./myEvery.js)

具体用法请查看[myEvery.test.js](./myEvery.test.js)
