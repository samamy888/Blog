---
description: 最近在練習redis，正好寫個文章記錄下怎麼快速用docker部屬redis，並且用Redis Commander進行檢視、編輯、管理 Redis 資料庫👍
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
docker run -d --name redis -p 6379:6379 redis
```

這樣就大功告成啦! 有夠簡單👍

## redis commander

可以參考[官方網站](https://github.com/joeferner/redis-commander)給的指令

``` bash
npm install -g redis-commander
redis-commander
```

再複製cmd給的網紙貼到網頁上

<img src="https://user-images.githubusercontent.com/38503381/186594435-172f7ac3-e6b9-470a-9788-b141f5a1d890.png" alt="foo">

看到這個畫面就代表成功連上 redis 資料庫拉👍

## rebrow

或是可以使用 rebrow 作為 Web UI 的 Redis 管理工具

``` bash
docker pull marian/rebrow
docker run -d --name rebrow -p 5001:5001 --link redis:redis marian/rebrow
```

<img src="https://user-images.githubusercontent.com/38503381/210916765-58f14697-d797-4969-b974-60beef489260.jpg" alt="foo">

啟動後再把 localhost 改為 **redis**

即可成功連接~



## 檢視、編輯

再來我們可以新增key到資料庫上

<img src="https://user-images.githubusercontent.com/38503381/186594841-132cdcbc-d406-49c4-b1ab-fd8b4b4cea3c.png" alt="foo">

照著上圖所示就可以輕鬆新增

然後我們就可以看到剛剛設的key 跟 value

<img src="https://user-images.githubusercontent.com/38503381/186595045-62919a39-4812-4f1e-af59-603869bf22ca.png" alt="foo">

就可以進行刪改拉~~~

## 參考連結

* <https://github.com/joeferner/redis-commander>
* <https://stackoverflow.com/questions/41371402/connecting-to-redis-running-in-docker-container-from-host-machine>
* <https://dotblogs.com.tw/yc421206/2022/10/29/how_to_create_redis_net_6_local_development_environment>