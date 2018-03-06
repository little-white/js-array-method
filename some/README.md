# some

```javascript
[true, false, 0, NaN].some(function(item){
  return item
}) // true

[1, 2, 3, 4].some(function(item){
  return item < 0
}) // false
```

some返回一个布尔值，这个值是根据数组中的元素是否满足callback中的条件来得到的，只要有一个满足为true，都不满足则为false。

如果说every是&&（且）的关系，some就是或的关系。

### 实现原理

判断元素的是否满足条件，有一个满足则返回true，都不满足返回false

```javascript
Array.prototype.mySome = function(cb){
  var tag = false
  for(var i=0,len=this.length; i<len; i++){
    if(cb(this[i])){
      tag = true
      break
    }
  }
  
  return tag
}
```

具体实现请查看[mySome.js](./mySome.js)

具体用法请查看[mySome..test.js](./mySome..test.js)