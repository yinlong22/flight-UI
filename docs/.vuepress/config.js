module.exports = {
    base: '/flight-UI/',
    title: 'fliUI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: 'https://github.com/yinlong22/flight-UI'},
            {text: '交流', link: 'https://juejin.im/post/5ec7888c6fb9a04797066f01'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            },

        ]
    }
}