module.exports = {
	title: '文暉Blog',
	description: '這是文暉用來記錄技術的blog',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
	  ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
	],
	base: '/blog/', // 这是部署到github相关的配置 下面会讲
	markdown: {
	  lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
	  sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
	  lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
	  //導航列
	  nav:[
		{ text: '文章', link: '/article/' }, 
		{ text: '關於', link: '/about/' }, 
		{ text: 'GitHub', link: 'https://github.com/samamy888' },   
	  ],
	  //側邊欄
	  sidebar: [
		'/',
        {
            title: '隨手筆記',
			collapsable: true,
            children: [ 
				{
					title: 'SQL相關',
					collapsable: true,
					children: [
						{
							title: 'SQL為null問題',
							path:'/note/SQL/Sql_NullQuestion',
						}
					]
				},
				{
					title: 'C#相關',
					collapsable: true,
					children: [
					]
				},
				{
					title: 'HTML相關',
					collapsable: true,
					children: [
					]
				},
				{
					title: 'JS相關',
					collapsable: true,
					children: [
					]
				},
				{
					title: 'CSS相關',
					collapsable: true,
					children: [
					]
				},
			]
		},
        {
			title: 'LeetCode',
            collapsable: true,
			children: [
			]
        }
	  ]
	}
  };