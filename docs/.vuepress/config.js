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
								content: '之前最怕遇到的就是選擇的參數有時候會帶null' +
									'，那時候遇到這種的都改用字串寫法，如果變數一多就會變的很恐怖' +
									'，後來發現有其他寫法，就在也離不開了。',

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
								content: '前幾天朋友跟我分享這個網站，' +
									'看完之後發現這也太好用了，' +
									'寫在blog來跟大家推薦一下😅😅',
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
								content: '之前遇到字數過多的問題，' +
									'很笨的我都用正則去解決🤣🤣，' +
									'直到爬文才發現還有這種寫法',
							},
							{
								title: '置中產生器',
								path: '/note/CSS/CenterCreate',
								content: '有時候會煩惱置中的權重問題，' +
									'這裡就有無腦的置中產生器 哈哈，',
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
						content: '這款套件是我最喜歡的套件之一，' +
							'強大的功能 甚至有些寫法比原生還厲害，' +
							'這篇主要是紀錄幾個有用的',
					},
					{
						title: 'DataTables套件',
						path: '/recommend_kit/DataTables',
						content: '雖然bootstrap的css已經足夠好看了，' +
							'但是這款套件除了可以好看，' +
							'還能做到許多支持' +
							'模糊搜尋、分頁、排序等等，' +
							'還有許多功能我也還在摸索階段。',
					},
					{
						title: 'sweetalert2套件',
						path: '/recommend_kit/sweetalert2',
						content: '我覺得這款套件的alert框很好看，' +
							'搭配icon做出的演示更是妙不可言，',
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