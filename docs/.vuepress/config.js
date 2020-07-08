module.exports = {
	title: '文暉Blog',
	description: '這是文暉用來記錄技術的blog',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
		['link', { rel: 'stylesheet', href: 'https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css' }],
		['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' }],
		['script', { src: '/JS/jquery.min.js' }],
		['script', { src: 'https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js' }],
		['script', { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' }],
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
								title: 'SQL變數為null問題',
								path: '/note/SQL/Sql_NullQuestion',
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
							{
								title: '前端推薦網站:https://placeholder.com',
								path: '/note/HTML/placeholder',
							}
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
							{
								title: '字數過多問題',
								path: '/note/CSS/WordCount_Solution',
							},
							{
								title: '置中產生器',
								path: '/note/CSS/CenterCreate',
							},
						]
					},
				]
			},
			{
				title: '第三方套件複習',
				collapsable: true,
				children: [
					{
						title: 'Lodash套件',
						path: '/recommend_kit/Lodash',
					},
					{
						title: 'DataTables套件',
						path: '/recommend_kit/DataTables',
					},
					{
						title: 'sweetalert2套件',
						path: '/recommend_kit/sweetalert2',
					},
					{
						title: 'Swiper套件',
						path: '/recommend_kit/Swiper',
					},
				]
			},
			{
				title: 'LeetCode',
				collapsable: true,
				children: [
				]
			}
		],
	},
	plugins: {
		'Disqus': {
			shortname: 'https-samamy888-github-io-blog'
		}
	}
};