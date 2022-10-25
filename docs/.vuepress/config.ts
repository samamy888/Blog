import { ref } from 'vue'
import { defineUserConfig } from 'vuepress'
import { service } from './sidebarService'
import { commentPlugin } from "vuepress-plugin-comment2";
import { localTheme } from './theme'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

const _service = new service()
const sidebar =  ref(await _service.getSidebar())
export default defineUserConfig({
  base:'/blog/',
  lang: 'zh-TW',
  title: '文暉blog',
  head: [
    ['link', { rel: 'icon', href: 'favicon.png' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', sizes:"180x180" }],
    ['link', { rel: 'icon', href: 'android-chrome-192x192.png', sizes:"192x192" }],
    ['link', { rel: 'icon', href: 'android-chrome-512x512.png', sizes:"512x512" }],
    ['link', { rel: 'icon', type:"image/png", href: 'favicon-32x32.png', sizes:"32x32"  }],
    ['link', { rel: 'icon', type:"image/png", href: 'favicon-16x16.png', sizes:"16x16"  }],

  ],
  plugins: [
    backToTopPlugin(),
    searchPlugin(),
    prismjsPlugin(),
    commentPlugin({
      provider: "Giscus",
      repo:'samamy888/blog',
      repoId:'MDEwOlJlcG9zaXRvcnkyNjMyMjA3NzI=',
      category:'Announcements',
      categoryId:'DIC_kwDOD7BuJM4CRDlW'
    }),
  ],
  description: '文暉blog',
  theme: localTheme({
    sidebar: sidebar.value
  }),
})