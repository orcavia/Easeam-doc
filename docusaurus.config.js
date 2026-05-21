// @ts-check

const config = {
  title: 'Easeam 2',
  tagline: 'Faster seam marking and UV prep for Blender artists.',
  favicon: 'img/favicon.svg',
  future: {
    v4: true,
    faster: true,
  },

  url: 'https://orcavia.dev',
  baseUrl: '/Easeam-doc/',

  organizationName: 'orcavia',
  projectName: 'Easeam-doc',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'operators',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/easeam-discord-embed.png',
    metadata: [
      {property: 'og:image:type', content: 'image/png'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},
      {name: 'twitter:image:alt', content: 'Easeam 2 documentation preview'},
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'development-status',
      content: 'This documentation is still in development. Easeam 2 has not been released yet.',
      backgroundColor: '#f3a35e',
      textColor: '#1d160f',
      isCloseable: false,
    },
    navbar: {
      title: '',
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Operators',
        },
        {
          href: 'https://superhivemarket.com/products/easeam',
          label: 'Superhive',
          position: 'right',
        },
        {
          href: 'https://orcavia.dev/',
          label: 'Orcavia',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Join Discord',
          href: 'https://discord.gg/MznXAXeYQN',
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Orcavia. Easeam is GPL-2.0-or-later.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;
