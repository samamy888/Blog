---
description: |
      公司專案每月需要把大家的LOG紀錄都匯出來，
      研究了一下發現挺有趣，就製作了這篇文章。
---
# Git Log 匯出 Excel

公司專案每月需要把大家的LOG紀錄都匯出來，

研究了一下發現挺有趣，就製作了這篇文章

我們專案要的格式大概是這樣

<img :src="$withBase('/GitLog.png')" alt="foo">

需要commit訊息、作者名稱、commit時間

我們可以去GIT官網看到相關資訊
[官方文件網址](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E6%AA%A2%E8%A6%96%E6%8F%90%E4%BA%A4%E7%9A%84%E6%AD%B7%E5%8F%B2%E8%A8%98%E9%8C%84)

我們可以用 **git log** 指令在cmd上面取得log資訊

然後我們要達成上面那張圖的格式

還需要用到pretty搭配format

以下是常用的formate指令

|選項|輸出說明|
|--- |--- |
|%H|該提交 SHA-1 雜湊值|
|%h|該提交簡短的 SHA-1 雜湊值|
|%T|「樹（tree）」物件的 SHA-1 雜湊值|
|%t|「樹」物件簡短的 SHA-1 雜湊值|
|%P|親代（parent）提交的 SHA-1 雜湊值|
|%p|親代提交簡短的 SHA-1 雜湊值|
|%an|作者名字|
|%ae|作者電子郵件|
|%ad|作者日期（依據 --date 選項值而有不同的格式）|
|%ar|作者日期，相對時間格式。|
|%cn|提交者名字|
|%ce|提交者電子郵件|
|%cd|提交者日期|
|%cr|提交者日期，相對時間格式。|
|%s|標題|

然後我們還需要限制日期跟作者名字

以下表格列出一些常用的選項

|選項|說明|
|--- |--- |
|-(n)|只顯示最後 n 筆提交。|
|--since, --after|列出特定日期後的提交。|
|--until, --before|列出特定日期前的提交。|
|--author|列出作者名字符合指定字串的提交。|
|--committer|列出提交者名字符合指定字串的提交。|
|--grep|列出提交訊息中符合指定字串的提交。|
|-S|列出修改檔案中有加入或移除指定字串的提交。|

如果作者太多要選出幾個的話

我們就需要用到正則去選出我們要的

就需要用到 **--perl-regexp**

最後就是匯出成csv檔

我們就要用 **>>file.csv**

最終的指令就可以變為

``` bash

git log --pretty=format:%s,%an,%as -- after="2021-08-01" --until="2021-08-31" --perl-regexp --author="wenhui" >> file.csv

```

然後打開csv檔案會發現亂碼

<img :src="$withBase('/GitLog_Big5.png')" alt="foo">

這是因為預設big5編碼

我們需要把它變為UTF-8

我們打開excel上方的資料>從文字/CSV

匯入亂碼的CSV，原點選擇 65001:Unicode(UTF-8)

載入完就會是正確的文字拉~~~

<img :src="$withBase('/GitLog.png')" alt="foo">