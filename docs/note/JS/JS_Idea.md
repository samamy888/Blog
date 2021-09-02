---
description: 講解JS觀念分享，那途中有什麼問題的都可以儘管發問，阿問倒我了，就代表我還有可以學習的地方，絕對不是我很菜吼

---

# JS觀念分享

## var,const,let
<br/>

<span class='Gray'>var</span> 為**ES6**之前**JS**定義變數的語法

<span class='Gray'>let</span> 跟<span class='Gray'>const</span> 為**ES6**之後出現的

<img :src="$withBase('/JS_Idea/var_const_let_1.png')"><br/>



**ES6** 為 **ES5.1** 之後的語言標準，如果不懂 **ES6** 出現的新東西，我最後一頁會放連結，

我覺得他教的滿深的，練完可以對 **JS** 有滿大的幫助，那我們就還是先專注於這三個的差別。

<span class='Gray'> var </span> 是以 **function** 為一個 **scope** ，那 **scope** 作用域你可以把他想成是一個生命週期，

<span class='Gray'> let </span>跟 <span class='Gray'>const</span>  是以一個 **block** 一個大括弧為一個 **scope** ，

你看左邊的a會報錯，因為a出不去這個 **function scope** ，但是b就可以讀到了，因為他是以 **function** 為基準，**if** 都攔不住他，

那右邊 **function** 跟 **if** 都出不去喔，你去log都會顯示 **is not defined** 就可以避免不小心汙染全域的問題。

<img :src="$withBase('/JS_Idea/var_const_let_2.png')"><br/>

**for**迴圈如果用<span class='Gray'> var  </span>也會出現出了迴圈外 還是能用記數用的變數的問題

<span class='Gray'>let </span> 就沒這問題了 他在**for**裡面也是一個**block**

然後<span class='Gray'>const </span>  在設定時要給初值

如果重新給值的話 就會報**error** 適合用在圓周率之類幾乎不會變動的值


## Hoisting 提升
<br/>

接下來我們講提升，一開始你沒宣告A，然後去呼叫他，就會報錯， 顯示 **not defined**

但是我們先呼叫，再宣告a=10，就會變成**undefined**，不會報錯，但也不會是10

這就是提升，他會把a給拉到前面去宣告

那各位再猜一下，這個a會顯示多少

答案是10吼，因為他會把var a 給拉上去兩次 然後才a=10

<img :src="$withBase('/JS_Idea/Hoisting_1.png')"><br/>



那**function** 一樣是有拉升的，然後function的拉升優先度會高於var，不會被變數蓋過去


<img :src="$withBase('/JS_Idea/Hoisting_2.png')"><br/>


然後我們為什麼要有提升呢，這是為了讓你可以先呼叫**function**再去宣告，不用每次都要把**function**拉到最上方

然後就是我們可以達成function的互相呼叫，比如說A叫B  B又叫A之類的

沒有提升就無法做到這些。

這只是個觀念，可以聽一下有個大概，因為我們平常就有在應用了。

<img :src="$withBase('/JS_Idea/Hoisting_3.png')"><br/>


## Closure 閉包
<br/>

接下來，我們來講閉包

照理講變數的生命週期在**function**結束之後就會被**GC** 釋放記憶體

你看這個count，在counter結束之後，應該會被釋放，每次重新進來都會重新宣告為0

但是閉包的特性，就可以讓他鎖住這個變數，不讓他被清掉

我們就宣告兩個變數等於這個**function** 

然後你看我們每次呼叫，都會被++，而不是重新變0然後++

這就是閉包厲害的地方

都變成各自私有的變數了

<img :src="$withBase('/JS_Idea/Closure_1.png')"><br/>

再來講一下閉包的優缺點喔

第一點是不會汙染全域變數 

第二點是能夠模擬private變數的功能，達到封裝私有屬性跟私有方法，超讚的

第三點就是能讓變數保存內存 不會被釋放

所以缺點就是閉包如果過度使用的話

瀏覽器就會占用很多的內存吼 要小心

<img :src="$withBase('/JS_Idea/Closure_2.png')"><br/>

## Prototype 原型
<br/>


最後就是講<span class='Gray'>prototype</span>原型

你可以把他想像成**JS**版的**class**

假設我們用**new**的方式 **new** 兩個**function**出來 分別為dogA跟dogB  

那假設我們只改a的屬性 b就不會跟著動  不能夠共享屬性跟方法 那變成要用好幾遍 無法做到繼承


<img :src="$withBase('/JS_Idea/Prototype_1.png')"><br/>

再來使用<span class='Gray'>prototype</span>寫法再寫一次

我們把species 抽出來當<span class='Gray'>prototype</span>

那前面都還是正常發揮

那當我們改動<span class='Gray'>prototype</span>的時候

Dog不管A或B就會跟著變 做到繼承的目的

<img :src="$withBase('/JS_Idea/Prototype_2.png')"><br/>


## 補充及參考文獻
<br/>

[ES6入門教學](https://es6.ruanyifeng.com/)

[前端工程師一定要會的 JS 觀念題-中英對照之上篇](https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f)

[我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)

[你一直在用，但從沒搞懂的閉包](https://medium.com/schaoss-blog/%E4%BD%A0%E4%B8%80%E7%9B%B4%E5%9C%A8%E7%94%A8-%E4%BD%86%E5%BE%9E%E6%B2%92%E6%90%9E%E6%87%82%E7%9A%84%E9%96%89%E5%8C%85-e6b39b4a5ade)

[JavaScript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

<style>
span{
 font-weight: bold;
}
.Gray{
    background-color: #e6e5ef;  
}
.Red{
    background-color: red;  
}
</style>