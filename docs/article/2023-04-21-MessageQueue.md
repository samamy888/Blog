---
description: 講解一下我理解的 Message Queue 知識
---

# Message Queue 介紹

在一個系統中，一般不會只有一隻程式在運作，而是會有多隻程式同時負責各種不同的任務，而程式之間難免會有互相傳遞資料進行處理的需求，而大部分都會使用**Restful API**去進行處理，但是其實還有 **Message Queue** 這個方式可以去使用，那為什麼要使用呢? 請容我細細道來。

## 什麼是Message Queue

<img src="https://user-images.githubusercontent.com/38503381/231683883-0f68f86f-bfd4-4c9f-800c-fff65c7a5e76.jpg">

如圖所示，有個 **Queue** 會去處理訊息 **Message** ，並且有先進先出(FIFO)的特性，

角色會有產生Message的 **Producer** 和處理訊息的 **Consumer** ，主要用途為不同服務間的訊息溝通。


## Message Queue 的特性

### 非同步(Asynchronous Communications Protocol)

這是 Message Queue 很大的一個特性，一般API在發出Request之後，會等待取得Response，

但是 MQ 在 Producer 發送完 Message Queue 之後不需要等到 response 就可以繼續處理其他事。

### 可靠性(Reliablity)

一旦訊息被成功送進Queue裡面，在被 Consumer 成功消耗前，都會保存著，

能夠確保Consumer就算掛了，在恢復之前，需要做的任務還能被保留著，可以等到恢復後再繼續處理。

### 解偶(Decouple)

可以將 Producer 和 Consumer 進行解偶，開發人員可以各自負責規模較小的工作。

並且可以Producer與Consumer各自使用不同的語言進行開發實作，只要Message資料格式有事先溝通好，就能正常運作。

### 擴充性高(Flexiability of scaling)

producer, queue, consumer 可以依照需求擴張或縮減

## 使用情境

* 訂單處理系統：在一個電商網站中，當一個用戶下單時，訂單系統會將訂單信息寫入一個消息隊列中，然後由後臺的訂單處理系統消費這些消息，根據訂單信息執行相應的操作，比如通知庫房發貨、通知物流公司配送等。

* 異步任務處理：在一個網站中，用戶可以提交一些需要耗時處理的任務，比如視頻轉碼、圖片處理等，為了提高用戶體驗，可以將這些任務信息寫入消息隊列中，由後臺的任務處理系統消費這些消息並異步處理這些任務，處理完成後再通知用戶任務已經完成。

* 分布式系統集成：在一個複雜的分布式系統中，不同的模塊可能需要異步地協同完成某些操作，比如采集數據、計算指標等，可以將這些操作作為消息寫入消息隊列中，由消費者模塊消費這些消息並執行相應的操作。

* 日誌處理系統：在一個大規模的分布式系統中，可能會產生大量的日誌信息，為了避免日誌信息對系統性能造成影響，可以將這些日誌信息寫入消息隊列中，由後臺的日誌處理系統消費這些消息並進行日誌的聚合、統計、分析等操作。

## 

## 參考連結

* <https://medium.com/starbugs/%E8%AE%93%E4%BB%BB%E5%8B%99%E6%8E%92%E9%9A%8A%E5%90%A7-message-queue-1-de949e274c43>
* <https://godleon.github.io/blog/ChatOps/message-queue-concepts/>