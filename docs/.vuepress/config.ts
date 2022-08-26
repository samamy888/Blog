import { ref } from 'vue'
import { defaultTheme, defineUserConfig } from 'vuepress'
import { service } from './service'

const _service = new service()
const sidebar =  ref<string[]>(await _service.getSidebar())
console.log(sidebar.value)
export default defineUserConfig({
  lang: 'zh-TW',
  title: '文暉blog',
  description: 'Just playing around',
  theme: defaultTheme({
    sidebar: sidebar.value
  }),
})