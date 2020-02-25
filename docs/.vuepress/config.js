module.exports = {
  title: "USPCodeLab Handbook",
  description:
    "Bem vindo ao Handbook do USPCodeLab! Aqui você pode saber mais sobre este grupo de extensão inter-campi, o que fazemos e como nos organizamos :)",
  head: [
    ['link', { rel: 'icon', href: './public/favicon.ico' }],
    ['link', { rel: 'manifest', href: './public/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#fefefe' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: './public/apple-touch-icon.png' }],
  ],
  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  themeConfig: {
    sidebar: [
      '/',
    ],
    sidebarDepth: 3,
    smoothScroll: true
  }
};
