<template>
  <div>
    <div v-for="x in site">
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
  data() {
    return {
      site: this.$site,
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