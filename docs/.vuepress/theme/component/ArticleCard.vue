<template>
  <div :class="background" class="theme-default-content card">
    <p class="content" @click="gotoLink(item.link)">
      <b>{{ item.text }}</b>
    </p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, PropType, watch } from "vue";
import { sidebarItem } from "../../interface/sidebarItem";
import { useRouter } from "vue-router";
const sidebar = ref();
const router = useRouter();
const props = defineProps({
  item: { type: Object as PropType<sidebarItem>, required: true },
  darkmode: Boolean,
});
const { item } = props;
const background = ref();
onMounted(async () => {
  if (props.darkmode) background.value = "dark-background";
  else background.value = "white-background";
  console.log(item)
});
watch(
  () => props.darkmode,
  (newValue) => {
    if (newValue) background.value = "dark-background";
    else background.value = "white-background";
  }
);
const gotoLink = (link) => {
  router.push(link);
};
</script>
<style scoped>
.card {
  height: 100px;
  width: 300px;
  border-radius: 20px;
  
}
.content {
  font-size: 1.2rem;
  padding-top: 20px;
}
.dark-background {
  background-color: white;
  color: black;
}
.white-background {
  background-color: black;
  color: white;
  box-shadow: 0 0 20px 8px #d0d0d0;
}
</style>
