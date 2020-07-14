---
description: |
      這款套件是我最喜歡的套件之一，
      強大的功能 甚至有些寫法比原生還厲害，
      這篇主要是紀錄幾個有用的
---

# Lodash套件

這款套件是我最喜歡的套件之一

強大的功能 甚至有些寫法比原生還厲害

這篇主要是紀錄幾個有用的

要更齊全的要再參考 [官方文檔中文版](https://www.lodashjs.com/)

## CDN引入

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>
```


<h3 >_.cloneDeep(value)</h3>


```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
可以解決淺拷貝的問題
[[Javascript] 關於 JS 中的淺拷貝和深拷貝](https://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/)


<Disqus_V2/>  

