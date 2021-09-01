const sidebar = [
    '/',
    {
        title: '隨手筆記',
        collapsable: true,
        children: [{
                title: 'SQL相關',
                collapsable: true,
                children: [{
                    title: 'SQL變數為null問題',
                    path: '/note/SQL/Sql_NullQuestion',
                }]
            },
            {
                title: 'C#相關',
                collapsable: true,
                children: [{
                        title: '使用StopWatch偵測效能與執行時間',
                        path: '/note/C_Sharp/stopwatch',
                    },
                    {
                        title: '工作排程器上讀不到config問題',
                        path: '/note/C_Sharp/workscheduler_config',
                    }
                ]
            },
            {
                title: 'HTML相關',
                collapsable: true,
                children: [{
                        title: '前端推薦網站:https://placeholder.com',
                        path: '/note/HTML/placeholder',
                    },
                    {
                        title: '取消顯示歷史輸入記錄',
                        path: '/note/HTML/autocomplete',
                    }
                ]
            },
            {
                title: 'JS相關',
                collapsable: true,
                children: [{
                        title: '創建文章列表Vuepress元件',
                        path: '/note/JS/ArticleList_Create',
                    },
                    {
                        title: 'JS觀念分享',
                        path: '/note/JS/JS_Idea',
                    },
                    {
                        title: 'wrap()替換dom節點',
                        path: '/note/JS/Dom_Wrap',
                    },
                ]
            },
            {
                title: 'CSS相關',
                collapsable: true,
                children: [{
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
        children: [{
                title: 'Lodash套件',
                collapsable: true,
                path: '/recommend_kit/Lodash',
            },
            {
                title: 'DataTables套件',
                collapsable: true,
                path: '/recommend_kit/DataTables',
            },
            {
                title: 'sweetalert2套件',
                collapsable: true,
                path: '/recommend_kit/sweetalert2',
            },
            {
                title: 'Swiper套件',
                collapsable: true,
                path: '/recommend_kit/Swiper',
            },
            {
                title: 'SortableJS套件',
                collapsable: true,
                path: '/recommend_kit/SortableJS',
            },
            {
                title: 'SheetJS套件',
                collapsable: true,
                path: '/recommend_kit/SheetJS',
            },
        ]
    },
    {
        title: 'SideProject',
        collapsable: true,
        children: [{
            title: '原神裝備比對網站',
            path: '/SideProject/GenshinArtifacts',
        }, ]
    },
    {
        title: '技術分享文件',
        collapsable: true,
        children: [{
                title: '正則表達式',
                path: '/TechSharing/Regex',
            },
            {
                title: 'vue框架入門',
                path: '/TechSharing/VueStarted',
            },
            {
                title: 'JS觀念分享-PPT文件版',
                path: '/TechSharing/JS_Idea_PPT',
            },
        ]
    },
    {
        title: 'LeetCode',
        collapsable: true,
        children: []
    }
];
module.exports = sidebar;