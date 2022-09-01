---
description: 這款排序套件可以幫忙我們進行排序，就不用寫一堆底層的原生方法去排序，只要new一下，還能取得各種event
---

# SortableJS 套件複習

[官方文件網址](https://sortablejs.github.io/Sortable/)

先來上個簡單的範例

**HTML:**

```html
<div id="example1" class="list-group col">
				<div class="list-group-item">Item 1</div>
				<div class="list-group-item">Item 2</div>
				<div class="list-group-item">Item 3</div>
				<div class="list-group-item">Item 4</div>
				<div class="list-group-item">Item 5</div>
				<div class="list-group-item">Item 6</div>
</div>
``` 

**JS:**

```js
var el = document.getElementById('example1');
var sortable = new Sortable(el, {
    animation: 150,
    //這邊class名稱怎麼設 底下css就怎麼打
    ghostClass: 'blue-background-class',
    onUpdate: function (/**Event*/evt) {
		console.log(evt);
	  },
});
``` 
**CSS:**

這邊要調一下背景顏色
```css
.blue-background-class{
  background-color: #C8EBFB!important;
}

``` 
這款排序套件可以幫忙我們進行排序，
就不用寫一堆底層的原生方法去排序，
只要new一下，還能取得各種event!!

**Codepen範例**

<iframe height="400" style="width: 100%;" scrolling="no" title="Sortable練習" src="https://codepen.io/wenhui_xiao/embed/PoNPPVz?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wenhui_xiao/pen/PoNPPVz'>Sortable練習</a> by 蕭文暉
  (<a href='https://codepen.io/wenhui_xiao'>@wenhui_xiao</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>