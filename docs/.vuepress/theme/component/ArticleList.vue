<template >
    <template v-for="item in sidebar">
        <ArticleCard :item=item :darkmode=darkmode />
    </template>
</template>
<script setup lang="ts">
import { onMounted,ref  } from "vue";
import ArticleCard from './ArticleCard.vue'
import { useSidebarItems } from '@vuepress/theme-default/client';
const sidebar = ref();
const props = defineProps({
    darkmode: Boolean
})
const { darkmode } = props
onMounted(async () => {
    sidebar.value = useSidebarItems().value.map(x=>x.children).flatMap(x=>x)
});
</script>