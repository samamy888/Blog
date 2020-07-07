<template>
  <div>
    <div v-for="x in list">
      <ArticleBox :item="x" />
    </div>
  </div>
</template>

<script>
import config from "../../config.js";
import ArticleBox from "@theme/components/ArticleBox.vue";
var sidebar = config.themeConfig.sidebar;
let cnt = 0;
let max = 20;
var vue = {
  name: "ArticleList",

  components: { config },
  computed: {
    list: function() {
      return GetSidebar();
    }
  }
};
export default vue;
function GetSidebar() {
  let article = [];
  for (let i = 0; i < sidebar.length; i++) {
    let tmp = GetOutSide(sidebar[i]);
    if (tmp == undefined) continue;
    tmp = tmp.flat();
    article = [...article, ...tmp];
  }
  cnt = 0;
  return article;
}
function GetOutSide(item) {
  cnt++;
  let ans = [];
  if (item.children != undefined && cnt < max) {
    item.children.forEach(element => {
      let tmp = GetOutSide(element);
      ans.push(tmp);
    });
    return ans;
  }
  if (item.title != undefined) return item;
}
</script>