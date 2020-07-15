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

<Disqus_V2/>