---
description: |
     最近在練習redis，正好寫個文章記錄下怎麼快速用docker部屬redis，
     並且用Redis Commander進行檢視、編輯、管理 Redis 資料庫👍
---

# Docker創建redis並用redis commander進行操作

最近在練習redis，正好寫個文章記錄下怎麼快速用docker部屬redis，
並且用Redis Commander進行檢視、編輯、管理 Redis 資料庫👍

## docker架設redis

首先我們先從 docker 拉取 redis 的 images

``` bash
docker pull redis
```

然後我們再把他run起來並指定port號

``` bash
docker run -d --name redis-test -p 6379:6379
```

這樣就大功告成啦! 有夠簡單👍

## redis commander

可以參考[官方網站](https://github.com/joeferner/redis-commander)給的指令

``` bash
npm install -g redis-commander
redis-commander
```

再複製cmd給的網紙貼到網頁上

<img :src="$withBase('/RedisCommander.png')" alt="foo">

看到這個畫面就代表成功連上 redis 資料庫拉👍

## 檢視、編輯

再來我們可以新增key到資料庫上

<img :src="$withBase('/RedisCommander2.png')" alt="foo">

照著上圖所示就可以輕鬆新增

然後我們就可以看到剛剛設的key 跟 value

<img :src="$withBase('/RedisCommander3.png')" alt="foo">

就可以進行刪改拉~~~

## 參考連結

* [https://github.com/joeferner/redis-commander](https://github.com/joeferner/redis-commander)
* [https://stackoverflow.com/questions/41371402/connecting-to-redis-running-in-docker-container-from-host-machine](https://stackoverflow.com/questions/41371402/connecting-to-redis-running-in-docker-container-from-host-machine)