<template>
  <div :class="background" class="theme-default-content card" @click="gotoLink(item.link)">
    <div class="hot-deco-bg"></div>
    <!-- <div class="hot-deco-text">HOT</div> -->
    <p class="content">
      <b>{{ item.text }}</b>
    </p>
    <time class="issue-date d-none" datetime="2022-10-19">
      <span>date</span>
      {{ item.date }}
    </time>
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
main{
  text-align:center;
}

/* common card */
.card {
  position:relative;
  display: inline-block;
  min-width: 30%;
  max-width: 30%;
  height: 100px;
  border-radius: 5px;
  margin: 1.6rem 2rem 1.6rem 2.5rem;
  padding: 1.5rem 2.5rem;
  padding-top: 1.5rem;
  color:white;
  overflow:hidden;
  cursor:pointer;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
}
.card:before {
    content: '';
    position: absolute;
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    display: none;
    top: -600px;
    width: 100px;
    height: 1000%;
    transform: translateX(100%) rotate(45deg);
    z-index: 1;
    animation: .8s infinite alternate slide;
    background: #ffffff5c;
}
.card:hover{
    transform: translateY(-10px);
}
.card:hover:before {
    display: block;
    opacity: .5;
}
.hot-deco-text {
  position: absolute;
  color: #ffffff;
  right: 6px;
  top: 18px;
  animation: pulse-text 1s alternate infinite;
}
@keyframes pulse-text {
0% {
    transform: scale(0.8) rotate(50deg);
}
100% {
    transform: scale(1) rotate(50deg);
}
}
@keyframes slide {
  0% {
    transform: translateX(-100%) rotate(45deg);

  }
  50% {
    transform: translateX(200%) rotate(45deg);
  }
  100% {
    transform: translateX(500%) rotate(45deg);
  }
}

.issue-date{
  font-size: 14px;
    padding-top: 1.5rem;
    display: block;
    color: #0e4e85;
}


.issue-date span{
    display: inline-block;
    border: 1px solid #6583d3;
    padding: 0px 2.5px;
    letter-spacing: 2px;
    background-color: #698ece;
    color: white;
    text-align: center;
}



/* responsive card */
@media (max-width: 1024px){
.card  {
  min-width: 70%;
  max-width: 70%;
  margin: 1.5rem;
}
}
@media (max-width: 640px){
.card  {
  margin: 1rem;
}
}

.content {
  min-height: 60px;
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0; 
  padding: 0;
}
.dark-background {
  background: linear-gradient(270deg, #f7fdff 0%, #cbdcff 100%);
  box-shadow: 0px 0px 6px 0px #6666664d;
  color: #002345;
}
.dark-background .hot-deco-bg{
    position: absolute;
    background-color: #0083ff;
    right: -40px;
    top: 0px;
    transform: rotate(50deg);
    width: 150px;
    height: 25px;
}
.white-background {
    background: linear-gradient(270deg, #b8e6fb 0%, #809fde 100%);
    box-shadow: 0px 0px 6px 0px #6666664d;
}
.white-background .content{
  filter: drop-shadow(0 0 2px #0E2E57);
}
.white-background .hot-deco-bg{
    position: absolute;
    background-color: #2236a5;
    right: -40px;
    top: 0px;
    transform: rotate(50deg);
    width: 150px;
    height: 25px;
}
</style>
