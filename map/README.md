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

具体实现请查看[myMap.js](./myMap.js)

具体用法请查看[myMap.test.js](./myMap.test.js)