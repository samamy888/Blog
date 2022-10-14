<template>
    123456789
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref  } from "vue";
import { useThemeData } from '@vuepress/plugin-theme-data/client'

// const sidebar =   useThemeData()
const isDarkMode = ref(false);
let observer;
onMounted(async () => {
//   const html = document.querySelector("html") as HTMLElement;
//   isDarkMode.value = html.classList.contains("dark");
//   // watch theme change
//   observer = new MutationObserver(() => {
//     isDarkMode.value = html.classList.contains("dark");
//   });
//   observer.observe(html, {
//     attributeFilter: ["class"],
//     attributes: true,
//   });
    // await _service.getSidebar();
    // console.log(sidebar.value)
  
});
onBeforeUnmount(() => {
  observer.disconnect();
});
</script>