---
description: |
      之前在用日期插件的時候，發現日期插件整個被歷史紀錄擋住，
      後來爬文一下，發現只要填上一個屬性就可以關閉這功能了
---
# INPUT 取消顯示歷史輸入記錄

之前在用日期插件的時候，發現日期插件整個被歷史紀錄擋住
      
<img :src="$withBase('/autocomplete.png')" alt="foo"> 

**後來爬文一下，發現只要填上一個屬性就可以關閉這功能了**

## 程式碼
```html
<input type="text" autocomplete="off">
```

## 語法
```html
<input autocomplete="value">
```

## 屬性值

<table class="table">
<tr class="first">
    <td>值</td>
    <td> 描述</td>
<tr>
<tr>
    <td> on</td>
    <td> 默認值，開啟</td>
</tr>
<tr>
    <td> off</td>
    <td>  關閉</td>
</tr>
</table>

<Disqus_V2/>
<style scoped>
.table {
  border: 1px solid black;
  background-color:#ffffff!important
}
.first{
    background-color:#414141;
    color:#ffffff;
}
.table td{
    width:50vh
}
</style>