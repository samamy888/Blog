<template >
    <template v-for="item in sidebar" :key="item">
        <ArticleCard  :item="item" :darkmode="props.darkmode" />
    </template>
</template>
<script setup lang="ts">
import { onMounted,ref,watch  } from "vue";
import ArticleCard from './ArticleCard.vue'
import { useSidebarItems } from '@vuepress/theme-default/client';
const sidebar = ref();
const props = defineProps({
    darkmode: Boolean
})
onMounted(async () => {
    sidebar.value = useSidebarItems().value
    .map(x=>x.children)
    .flatMap(x=>x)
    .map(x=>({
        text:x.text,
        link:x.link,
        date:x.link.replace(/.+\/(.+)-.+/gm,'$1')
    }))
    console.log(sidebar.value)
});
</script>