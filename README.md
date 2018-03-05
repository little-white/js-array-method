![build-status](https://travis-ci.org/little-white/js-array-method.svg?branch=master)

# 初衷

* 熟悉JS Array中每个方法的作用
* 实现每个方法，来窥探其内部原理

# 列表

* [filter](./filter/README.md)
  * [使用方法及实现原理](./filter/README.md)
  * 源码实现[myFilter.js](./filter/myFilter.js)
  * 源码测试[myFilter.test.js](./filter/myFilter.test.js)
* [map](./map/README.md)
  - [使用方法及实现原理](./map/README.md)
  - 源码实现[myMap.js](./map/myMap.js)
  - 源码测试[myMap.test.js](./map/myMap.test.js)
* [reduce](./reduce/README.md)
  - [使用方法及实现原理](./reduce/README.md)
  - 源码实现[myReduce.js](./reduce/myReduce.js)
  - 源码测试[myReduce.test.js](./reduce/myReduce.test.js)

# 测试

```javascript
npm i && npm test
```

使用[jest](https://facebook.github.io/jest/)来对代码进行单元测试

# 脚本

由于每次都要新建文件夹、文件操作，就写了个简单的脚本来实现

```bash
# 语法
chmod +x init.sh
./init.sh arguments // arguments 为新建文件的名字
# 例如
./init.sh map // 创建map文件夹、在map下创建myMap.js、myMap.test.js、README.MD文件
```

