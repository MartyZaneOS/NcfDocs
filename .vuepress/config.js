module.exports = {
    title: 'NCF文档',
    description: '简单   灵活   可扩展',
    base: '/docs/',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.ico' }],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?9d53390a6ba903e20fabf2e207b3e9bb";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
        `
        ]
    ],
    evergreen: true,
    editLinkText: '在 GitHub 上编辑此页',
    port: 8080,
    ga: 'UA-71886989-13',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'NCF文档',
            description: '简单   灵活   可扩展'
        },
        '/en/': {
            lang: 'en-US',
            title: 'NcfDocs',
            description: 'Simple   Flexible   Extensible'
        }
    },
    themeConfig: {
        repo: 'NeuCharFramework/NCF',
        docsDir: 'doc',
        editLinks: true,
        editLinkText: '编辑此页面！',
        nav: [
            { text: '指南', link: '/start/home/index' },
            {
                text: '生态系统',
                items: [
                    {
                        text: "项目", items: [
                            { text: '基础库源码解析', link: '/NcfPackageSources/home/index' },
                            { text: '动态WebApi', link: '/DynamicWebApi/home/index' }
                        ]
                    },
                    {
                        text: '帮助', items: [
                            { text: '在线资源', link: 'https://weixin.senparc.com/' },
                            { text: '问答社区', link: 'https://weixin.senparc.com/QA' },
                            { text: 'QQ群(147054579)', link: 'https://shang.qq.com/wpa/qunwpa?idkey=43ac0b00d5932d5d815ed2949b8f8fbc7dece1abd79e0182f10493e185bbb43f' },
                            { text: 'Senparc微信SDK', link: 'https://sdk.weixin.senparc.com/' }
                        ]
                    },

                ]
            },
            { text: '上线实战', link: '/' },
            { text: '捐赠', link: '/' },
            { text: 'Gitee', link: 'https://gitee.com/NeuCharFramework/NCF' },
            { text: 'Github', link: 'https://github.com/NeuCharFramework/NCF' }
        ],
        sidebar: {
            '/start/': [
                {
                    title: 'NCF概要',
                    collapsable: false,
                    children: [
                        '/start/instruction/about-ncf',
                        '/start/instruction/environment',
                        '/start/instruction/index_xncf'
                    ]
                },
                {
                    title: '开始开发',
                    collapsable: false,
                    children: [
                        '/start/start-develop/get-ncf-template',
                        '/start/start-develop/run-ncf',
                        '/start/start-develop/install',
                        '/start/start-develop/admin-login',
                        '/start/start-develop/admin-background',
                        '/start/start-develop/admin-module-manage',
                        '/start/start-develop/get-docs'
                    ]
                },
                {
                    title: '配置',
                    collapsable: false,
                    children: [
                        '/start/database/setting',
                        '/start/config/mutiple-tenant',
                        '/start/config/redis'
                    ]
                },
                {
                    title: '模块化开发',
                    collapsable: false,
                    children: [
                        '/start/xncf-develop/thought',
                        '/start/xncf-develop/about-xncf',
                        '/start/xncf-develop/create-xncf',
                        '/start/xncf-develop/about-custom-xncf',
                        '/start/xncf-develop/dev-xncf',
                        '/start/xncf-develop/update-xncf',
                        '/start/xncf-develop/invoke-between-modules',
                        '/start/xncf-develop/publish_xncf_modules_to_nuget',
                        '/start/xncf-develop/update_basic_library',
                        '/start/developer/embedded_static_to_ncf',
                        '/start/developer/issue_local_nuget',
                        '/start/developer/advanced'
                    ]
                },
                {
                    title: '数据库',
                    collapsable: false,
                    children: [
                        '/start/database/setting',
                        '/start/database/mutil_database_support',
                        '/start/database/appoint_database',
                        '/start/database/add_migration_for_service_project',
                        '/start/database/mutil_database_principle',
                        '/start/database/database_plant',
                        '/start/database/add_migration_with_database_plant'
                    ]
                },
                {
                    title: 'Q&A',
                    collapsable: false,
                    children: [
                        '/start/qa/explanation_of_terms',
                        '/start/qa/common_problem'
                    ]
                },
                {
                    title: '新发布',
                    collapsable: false,
                    children: [
                        '/start/release/new_function',
                        '/start/release/update',
                        '/start/release/log'
                    ]
                }
            ],
            '/NcfPackageSources/': [
                {
                    title: '准备',
                    collapsable: false,
                    children: [
                        '/NcfPackageSources/home/index'
                    ]
                },
                {
                    title: '快速开始',
                    collapsable: false,
                    children: [
                        '/guide/quickstart/quickstart',
                        '/guide/quickstart/clone',
                        '/guide/quickstart/initDb',
                        '/guide/quickstart/config',
                        '/guide/quickstart/startup'
                    ]
                }
            ],
            '/DynamicWebApi/': [
                {
                    title: '动态WebApi',
                    collapsable: false,
                    children: [
                        '/DynamicWebApi/home/index'
                    ]
                }
            ]
        }
    },
    locales: {
        '/': {
            // 多语言下拉菜单的标题
            selectText: '选择语言',
            // 该语言在下拉菜单中的标签
            label: '简体中文',
            // 编辑链接文字
            editLinkText: '在 GitHub 上编辑此页',
            // Service Worker 的配置
            serviceWorker: {
                updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                }
            },
            // 当前 locale 的 algolia docsearch 选项
            algolia: {},
            nav: [
                { text: '指南', link: '/start/home/index' },
                {
                    text: '生态系统',
                    items: [
                        {
                            text: "项目", items: [
                                { text: '基础库源码解析', link: '/NcfPackageSources/home/index' },
                                { text: '动态WebApi', link: '/DynamicWebApi/home/index' }
                            ]
                        },
                        {
                            text: '帮助', items: [
                                { text: '在线资源', link: 'https://weixin.senparc.com/' },
                                { text: '问答社区', link: 'https://weixin.senparc.com/QA' },
                                { text: 'QQ群(147054579)', link: 'https://shang.qq.com/wpa/qunwpa?idkey=43ac0b00d5932d5d815ed2949b8f8fbc7dece1abd79e0182f10493e185bbb43f' },
                                { text: 'Senparc微信SDK', link: 'https://sdk.weixin.senparc.com/' }
                            ]
                        },

                    ]
                }
            ],
            sidebar: {
                '/start/': [
                    {
                        title: 'NCF概要',
                        collapsable: false,
                        children: [
                            '/start/instruction/about-ncf',
                            '/start/instruction/environment',
                            '/start/instruction/index_xncf'
                        ]
                    },
                    {
                        title: '开始开发',
                        collapsable: false,
                        children: [
                            '/start/start-develop/get-ncf-template',
                            '/start/start-develop/run-ncf',
                            '/start/start-develop/install',
                            '/start/start-develop/admin-login',
                            '/start/start-develop/admin-background',
                            '/start/start-develop/admin-module-manage',
                            '/start/start-develop/get-docs'
                        ]
                    },
                    {
                        title: '配置',
                        collapsable: false,
                        children: [
                            '/start/database/setting',
                            '/start/config/mutiple-tenant',
                            '/start/config/redis'
                        ]
                    },
                    {
                        title: '模块化开发',
                        collapsable: false,
                        children: [
                            '/start/xncf-develop/thought',
                            '/start/xncf-develop/about-xncf',
                            '/start/xncf-develop/create-xncf',
                            '/start/xncf-develop/about-custom-xncf',
                            '/start/xncf-develop/dev-xncf',
                            '/start/xncf-develop/update-xncf',
                            '/start/xncf-develop/invoke-between-modules',
                            '/start/xncf-develop/publish_xncf_modules_to_nuget',
                            '/start/xncf-develop/update_basic_library',
                            '/start/developer/embedded_static_to_ncf',
                            '/start/developer/issue_local_nuget',
                            '/start/developer/advanced'
                        ]
                    },
                    {
                        title: '数据库',
                        collapsable: false,
                        children: [
                            '/start/database/setting',
                            '/start/database/mutil_database_support',
                            '/start/database/appoint_database',
                            '/start/database/add_migration_for_service_project',
                            '/start/database/mutil_database_principle',
                            '/start/database/database_plant',
                            '/start/database/add_migration_with_database_plant'
                        ]
                    },
                    {
                        title: 'Q&A',
                        collapsable: false,
                        children: [
                            '/start/qa/explanation_of_terms',
                            '/start/qa/common_problem'
                        ]
                    },
                    {
                        title: '新发布',
                        collapsable: false,
                        children: [
                            '/start/release/new_function',
                            '/start/release/update',
                            '/start/release/log'
                        ]
                    }
                ],
                '/NcfPackageSources/': [
                    {
                        title: '准备',
                        collapsable: false,
                        children: [
                            '/NcfPackageSources/home/index'
                        ]
                    },
                    {
                        title: '快速开始',
                        collapsable: false,
                        children: [
                            '/guide/quickstart/quickstart',
                            '/guide/quickstart/clone',
                            '/guide/quickstart/initDb',
                            '/guide/quickstart/config',
                            '/guide/quickstart/startup'
                        ]
                    }
                ],
                '/DynamicWebApi/': [
                    {
                        title: '动态WebApi',
                        collapsable: false,
                        children: [
                            '/DynamicWebApi/home/index'
                        ]
                    }
                ]
            }
        },
        '/en/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
                updatePopup: {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            },
            algolia: {},
            nav: [
                { text: '指南', link: '/start/home/index' },
                {
                    text: '生态系统',
                    items: [
                        {
                            text: "项目", items: [
                                { text: '基础库源码解析', link: '/NcfPackageSources/home/index' },
                                { text: '动态WebApi', link: '/DynamicWebApi/home/index' }
                            ]
                        },
                        {
                            text: '帮助', items: [
                                { text: '在线资源', link: 'https://weixin.senparc.com/' },
                                { text: '问答社区', link: 'https://weixin.senparc.com/QA' },
                                { text: 'QQ群(147054579)', link: 'https://shang.qq.com/wpa/qunwpa?idkey=43ac0b00d5932d5d815ed2949b8f8fbc7dece1abd79e0182f10493e185bbb43f' },
                                { text: 'Senparc微信SDK', link: 'https://sdk.weixin.senparc.com/' }
                            ]
                        },

                    ]
                }
            ],
            sidebar: {
                '/start/': [
                    {
                        title: 'NCF概要',
                        collapsable: false,
                        children: [
                            '/start/instruction/about-ncf',
                            '/start/instruction/environment',
                            '/start/instruction/index_xncf'
                        ]
                    },
                    {
                        title: '开始开发',
                        collapsable: false,
                        children: [
                            '/start/start-develop/get-ncf-template',
                            '/start/start-develop/run-ncf',
                            '/start/start-develop/install',
                            '/start/start-develop/admin-login',
                            '/start/start-develop/admin-background',
                            '/start/start-develop/admin-module-manage',
                            '/start/start-develop/get-docs'
                        ]
                    },
                    {
                        title: '配置',
                        collapsable: false,
                        children: [
                            '/start/database/setting',
                            '/start/config/mutiple-tenant',
                            '/start/config/redis'
                        ]
                    },
                    {
                        title: '模块化开发',
                        collapsable: false,
                        children: [
                            '/start/xncf-develop/thought',
                            '/start/xncf-develop/about-xncf',
                            '/start/xncf-develop/create-xncf',
                            '/start/xncf-develop/about-custom-xncf',
                            '/start/xncf-develop/dev-xncf',
                            '/start/xncf-develop/update-xncf',
                            '/start/xncf-develop/invoke-between-modules',
                            '/start/xncf-develop/publish_xncf_modules_to_nuget',
                            '/start/xncf-develop/update_basic_library',
                            '/start/developer/embedded_static_to_ncf',
                            '/start/developer/issue_local_nuget',
                            '/start/developer/advanced'
                        ]
                    },
                    {
                        title: '数据库',
                        collapsable: false,
                        children: [
                            '/start/database/setting',
                            '/start/database/mutil_database_support',
                            '/start/database/appoint_database',
                            '/start/database/add_migration_for_service_project',
                            '/start/database/mutil_database_principle',
                            '/start/database/database_plant',
                            '/start/database/add_migration_with_database_plant'
                        ]
                    },
                    {
                        title: 'Q&A',
                        collapsable: false,
                        children: [
                            '/start/qa/explanation_of_terms',
                            '/start/qa/common_problem'
                        ]
                    },
                    {
                        title: '新发布',
                        collapsable: false,
                        children: [
                            '/start/release/new_function',
                            '/start/release/update',
                            '/start/release/log'
                        ]
                    }
                ],
                '/NcfPackageSources/': [
                    {
                        title: '准备',
                        collapsable: false,
                        children: [
                            '/NcfPackageSources/home/index'
                        ]
                    },
                    {
                        title: '快速开始',
                        collapsable: false,
                        children: [
                            '/guide/quickstart/quickstart',
                            '/guide/quickstart/clone',
                            '/guide/quickstart/initDb',
                            '/guide/quickstart/config',
                            '/guide/quickstart/startup'
                        ]
                    }
                ],
                '/DynamicWebApi/': [
                    {
                        title: '动态WebApi',
                        collapsable: false,
                        children: [
                            '/DynamicWebApi/home/index'
                        ]
                    }
                ]
            }
        }
    }
}