module.exports = {
  base: '/rehabilitation-ui/',
  title: 'rehabilitation-ui',
  description: 'a website',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/zinkwu/rehabilitation-ui/' },
    ],
    sidebar: [
      '/',
      '/install/',
      '/get-started/',
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/icon',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/popover',
          '/components/toast',
          '/components/collapse',
        ]
      }
    ]
  }
}