module.exports = {
  base: '/gulu-Demo-website/',
  title: '鑫 UI',
  description: '一个好用的UI框架',
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: 'Github', link: 'https://github.com/botshen/gulu-Demo'},
    ],
    displayAllHeaders: true, // 默认值：false
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
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
        ]
      },

    ]
  }
}