---
description: |
      雖然bootstrap的css已經足夠好看了，但是這款套件除了可以好看，      
      還能做到許多支持，模糊搜尋、分頁、排序等等，還有許多功能我也還在摸索階段。
---

# DataTables 套件複習

[官方文件網址](https://datatables.net/)

雖然bootstrap的css已經足夠好看了，但是這款套件除了可以好看，
還能做到許多支持，模糊搜尋、分頁、排序等等，還有許多功能我也還在摸索階段。  

[這篇文章也講得不錯，有各種設置說明](https://my.oschina.net/tongjh/blog/675026)

## CDN引入

```js
<link href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" rel="stylesheet" />

<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>

```

## 1.簡配版

```js
$(document).ready(function(){
  $('#myTable').DataTable();
});
``` 
 
<iframe height="400" style="width: 100%;" scrolling="no" title="DataTables套件練習" src="https://codepen.io/wenhui_xiao/embed/RwWYqPz?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wenhui_xiao/pen/RwWYqPz'>DataTables套件練習</a> by 蕭文暉
  (<a href='https://codepen.io/wenhui_xiao'>@wenhui_xiao</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 2.過長可以滾動版本


```js
 $('#myTable').DataTable({
    scrollY:'100px',
});
```  

<iframe height="400" style="width: 100%;" scrolling="no" title="DataTables套件練習_過長可以滾動" src="https://codepen.io/wenhui_xiao/embed/KKdJVam?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wenhui_xiao/pen/KKdJVam'>DataTables套件練習_過長可以滾動</a> by 蕭文暉
  (<a href='https://codepen.io/wenhui_xiao'>@wenhui_xiao</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 3.只有表格的版本

```js
 $('#myTable').DataTable({
    paging: false,
    searching: false,
    info:false,
});
``` 


<iframe height="400" style="width: 100%;" scrolling="no" title="DataTables套件練習_只顯示表格" src="https://codepen.io/wenhui_xiao/embed/BaogPEJ?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wenhui_xiao/pen/BaogPEJ'>DataTables套件練習_只顯示表格</a> by 蕭文暉
  (<a href='https://codepen.io/wenhui_xiao'>@wenhui_xiao</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 4.顯示數量客製化版本

```js
 $('#myTable').DataTable({
    lengthMenu: [[5, 10, 15,-1], [5, 10, 15, "All"]],
});
``` 
<iframe height="400" style="width: 100%;" scrolling="no" title="DataTables套件練習_顯示長度客製化" src="https://codepen.io/wenhui_xiao/embed/wvKLEgE?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wenhui_xiao/pen/wvKLEgE'>DataTables套件練習_顯示長度客製化</a> by 蕭文暉
  (<a href='https://codepen.io/wenhui_xiao'>@wenhui_xiao</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<Disqus_V2/>  