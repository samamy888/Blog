<template>
 
  <main class="page">
    <slot name="top" />

    <div  class="theme-default-content" >
       <ArticleList/>
    </div>
    <slot name="bottom" />
  </main>
</template>

<script>
import ArticleList from "@theme/components/ArticleList.vue";
export default {
  name: 'Home',

  components: { ArticleList },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>
