---
description: 想說網站上找的文章列表都有點不太合我胃口就自己來手寫一個文章列表的元件!!
---

# 創建文章列表Vuepress元件

想說網站上找的文章列表都有點不太合我胃口
就自己來手寫一個文章列表的元件!!
以後要自己維護也比較方便~~
寫個筆記讓自己以後忘記還可以複習 哈哈哈😁😁

## 1.首先創建vue檔

<img :src="$withBase('/ArticleList_1.png')" alt="foo"> 

<br/>

我們分成兩個檔

1.ArticleList : 負責列出box清單

2.ArticleBox : 負責每個box的內容


## 2.去enhanceApp.js注入我們新增的vue原件

<br>

路徑為: **/docs/.vuepress/enhanceApp.js**

``` js
import ArticleList from './theme/components/ArticleList.vue'
import ArticleBox from './theme/components/ArticleBox.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('ArticleList', ArticleList)
  Vue.component('ArticleBox', ArticleBox)
}

```
## 3.畫面顯示

創建個md檔 article.md 然後內容就寫原件名稱 


article.md:


``` js
<ArticleList/>
```

ArticleList.vue :

``` vue
<template>
  <div>
    <div v-for="x in test">
      <ArticleBox :item="x" />
    </div>
  </div>
</template>

<script>

import ArticleBox from "@theme/components/ArticleBox.vue";

var vue = {
  name: "ArticleList",
  data() {
    return {
      test: ['123','456','789']
    };
  }
};

export default vue;
</script>
```
ArticleBox.vue :

``` vue
<template>
  <div>
    <div class="card">
      {{item}}
    </div>
  </div>
</template>
<script>
var vue = {
  name: "ArticleBox",
  props: ["item"]
};
export default vue;
</script>
<style scoped>
.card {
  padding: 1.2em;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
}
</style>
```

<br/>

架構大概為
ArticleList會獲得**site列表**，再用列表去跑迴圈，把每個文章資料都放到Articlebox裡面去顯示
ArticleBox就負責每個文章的顯示

測試樣子就會是這樣

<img :src="$withBase('/ArticleDemo.png')" alt="foo"> 


## 4.然後我們要先抓出site列表

<br>

我打算利用Vuepress的[Global Computed](https://vuepress.vuejs.org/zh/guide/global-computed.html)來取得所有網頁資訊
會用到$site、$page、$frontmatter。

<br>

**$site** : 取得blog資訊。

**$page** : 取得所有頁面資訊。

**$frontmatter**  :  我們到時候要把簡介寫在 **$description** 裡面 到時候就會使用到。

<br>

所以我們利用[Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)把簡介都寫在各自的md最前面

<br>

```
---
description: 想說網站上找的文章列表都有點不太合我胃口就自己來手寫一個文章列表的元件!!
---
```

然後我們在ArticleList的mounted裡面寫個log  可以看到我們的 **$site**

``` vue
var vue = {
  name: "ArticleList",
  data() {
    return {
      test: ['123','456','789'],
    };
  },
  mounted() {
    console.log(this.$site);
  },
};
```

<img :src="$withBase('/ShowSite.png')" alt="foo"> <br/>


再來我們把Page展開 就能看到我們要的資訊了 那我們大概就知道怎麼做下一步了

<img :src="$withBase('/ShowPage.png')" alt="foo"> <br/>


## 5.ArticleList編寫

<br/>

### html部分:

``` vue
<template>
  <div>
    <div v-for="x in site">
      <ArticleBox :item="x" />
    </div>
  </div>
</template>
```
<br/>

**site :** 用this.$site抓到的值去v-for

<br/>

### script部分:

``` js
<script>

import ArticleBox from "@theme/components/ArticleBox.vue";

var vue = {
  name: "ArticleList",
  data() {
    return {
      site: [],
    };
  },
  mounted() {
    this.site = Site_To_List(this.$site.pages);
    this.site = _.orderBy(this.site, (x) => new Date(x.lastUpdated), ["desc"]);
  },
};
function Site_To_List(pages) {
  let list = [];
  return pages.filter((x) => {
    if (x.frontmatter == {}) return false;
    if (x.frontmatter.description == undefined) return false;
    return x.frontmatter.description.length > 0;
  });
}
export default vue;
</script>

```
<br/>

把沒有description的列表去filter掉，然後再進行排序 

## 6.ArticleBox編寫

<br/>

### html部分:

``` vue
<template>
  <div>
    <div class="card">
      <div class="lastupdated_time">
        <i class="fas fa-calendar-alt"></i>
        {{item.lastUpdated}}
      </div>
      <a :href="'/blog'+item.path">
        <h1>{{item.title}}</h1>
      </a>
      <div class="border"></div>
      <div class="body" v-html="description"></div>
      <div class="footer" @click="GoPath">繼續閱讀</div>
    </div>
  </div>
</template>

```
<br/>

**item.lastUpdated :** 顯示最後更新時間

**item.path :** 讓它們點進去可以直接進文章

**description :** $frontmatter新增的簡介描述

<br/>

### script部分:

``` js
<script>
var vue = {
  name: "ArticleBox",
  props: ["item"],
  computed: {
    description: function() {
      if (this.item.frontmatter == {} || this.item.frontmatter == undefined)
        return null;
      if (this.item.frontmatter.description == undefined) 
        return null;
      return this.item.frontmatter.description;
    }
  },
  methods: {
    GoPath: function() {
      let path = "/blog" + this.item.path;
      location.href = path;
    }
  }
};
export default vue;
</script>

```
<br/>

**description :** 做防呆，防止item.frontmatter.description找不到

**GoPath :** 讓它們點進去可以直接進文章

**props: ["item"] :** 接收$Page資料

### css部分:


``` css
<style scoped>
.card {
  padding: 1.2em;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
}
.card h1 {
  text-align: center;
  color: #428bca;
  cursor: pointer !important;
}
.border {
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
}
.body {
  margin-top: 10px;
  line-height: 1.8;
  color: #333333;
  font-family: "Segoe UI", "微軟正黑體";
  font-size: 12pt;
  font-weight: 400;
}
.footer {
  border: 3px solid #000;
  color: #000;
  font: 12px Montserrat;
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  max-width: 250px;
  display: block;
  text-align: center;
  margin: 20px auto;
  position: relative;
  cursor: pointer !important;
}
.footer:hover {
  background: #000;
  border-color: #000;
  color: #fff;
}
.lastupdated_time {
  color: #aaa;
  text-align: right;
}
/* end STYLE 6 */
</style>
``` 

<br/>

那這次的筆記就記錄到這邊了~
有什麼問題歡迎再留言一起討論~~
謝謝觀看👍👍👍👍

<Disqus_V2/> 