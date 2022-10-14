<template>
  <div class="theme-default-content card">
    <p @click="gotoLink(item.link)">
      {{ item.text }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, PropType } from "vue";
import { sidebarItem } from "../../interface/sidebarItem";
import { useRouter } from 'vue-router'
const sidebar = ref();
const router = useRouter()
const props = defineProps({
  item: { type: Object as PropType<sidebarItem>, required: true },
  darkmode: Boolean
});
const { item, darkmode } = props;
onMounted(async () => {
  console.log(item.text);
  console.log(darkmode);
});
const gotoLink = (link) => {
    router.push(link)
}
</script>
<style scoped>
    .card {
        height: 100px;
        width: 300px;
        background-color: white;
        color: black;
    }
</style>
