import { ref } from 'vue'
import { defineUserConfig } from 'vuepress'
import { service } from './service'
import { commentPlugin } from "vuepress-plugin-comment2";
import { localTheme } from './theme'

const _service = new service()
const sidebar =  ref<string[]>(await _service.getSidebar())
export default defineUserConfig({
  base:'/blog/',
  lang: 'zh-TW',
  title: '文暉blog',
  plugins: [
    commentPlugin({
      provider: "Giscus",
      repo:'samamy888/blog',
      repoId:'MDEwOlJlcG9zaXRvcnkyNjMyMjA3NzI=',
      category:'Announcements',
      categoryId:'DIC_kwDOD7BuJM4CRDlW'
    }),
  ],
  description: 'Just playing around',
  theme: localTheme({
    sidebar: sidebar.value
  }),
})