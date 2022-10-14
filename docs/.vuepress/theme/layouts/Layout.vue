<template>
  <ParentLayout>
    <template #page-bottom v-if="!frontmatter.homePage">
      <CommentService :darkmode="isDarkMode" />
    </template>
    <template #page-top v-else>
      <ArticleList/>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref  } from "vue";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { usePageFrontmatter } from '@vuepress/client'
import ArticleList from '../component/ArticleList.vue'

const frontmatter = usePageFrontmatter();

const isDarkMode = ref(false);
let observer;
onMounted(() => {
  const html = document.querySelector("html") as HTMLElement;
  isDarkMode.value = html.classList.contains("dark");
  // watch theme change
  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark");
  });
  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true,
  });
});
onBeforeUnmount(() => {
  observer.disconnect();
});
</script>