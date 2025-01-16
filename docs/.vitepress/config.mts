import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import timeline from 'vitepress-markdown-timeline';

export default defineConfig({
  title: 'QQDecrypt',
  description: '解密QQ聊天数据库',
  lang: 'zh-CN',
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-6TSGD7CVS3' },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6TSGD7CVS3');`,
    ],
    ['link', { rel: 'icon', href: '/icons/logo.jpg' }],
  ],
  vite: {
    plugins: [
      AutoSidebar({ deletePrefix: 'index', ignoreIndexItem: true, collapsed: false }),
    ],
  },
  sitemap: {
    hostname: 'https://qq.sbcnm.top',
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(timeline);
    },
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    appearance: 'dark', 
    lastUpdated: { text: '最后更新于' },
    nav: [
      { text: '主页', link: '/' },
      { text: '致谢', link: '/about/thanks' },
      { text: '文件', link: '/files' },
    ],
    footer: {
      message: ' CC BY-NC-SA 4.0 <a href="/about/LICENSE"> License</a>',
      copyright: '<a href="/about/碎碎念">Copyright © 2025 </a>',
    },
    editLink: {
      pattern: 'https://github.com/QQBackup/QQDecrypt/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    prev: '上一页',
    next: '下一页',
    darkModeSwitchLabel: '亮/暗模式',
    lightModeSwitchTitle: '调整为亮色模式',
    darkModeSwitchTitle: '调整为暗色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QQBackup/QQDecrypt' },
    ],
    outline: {
      level: [2, 3],
      label: '页面目录',
    },
  },
});
