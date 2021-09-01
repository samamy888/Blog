const sidebar = require('../.vuepress/sidebar')
module.exports = {
    title: '文暉Blog',
    description: '這是文暉用來記錄技術的blog',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'stylesheet', href: 'https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css' }],
        ['script', { src: '/JS/jquery.min.js' }],
        ['script', { src: 'https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js' }],
        ['script', { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js' }],
    ],
    base: '/blog/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        //導航列
        nav: [
            { text: '文章', link: '/article/' },
            { text: '關於', link: '/about/' },
            { text: 'GitHub', link: 'https://github.com/samamy888' },
        ],
        //側邊欄
        sidebar: sidebar,
        displayAllHeaders: true // Default: false
    },
    thirdPartyComponents: {
        fontAwesomeIcons: {
            regular: ['address-card', 'file-audio'], // Regular font awesome icon keys here
            solid: ['battery-quarter'] // Solid font awesome icon keys here
        }
    }
};