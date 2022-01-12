module.exports = {
  base: '/rehabilitation-ui/',
  title: 'rehabilitation-ui',
  description: 'a website',
  themeConfig: {
    sidebar: [
      '/',
      '/install/',
      '/get-started/',
      {
        title: '组件',
        children: [
          '/components/button'
        ]
      }
    ]
  }
}