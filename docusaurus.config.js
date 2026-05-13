// @ts-check

const config = {
  title: 'Easeam 2',
  tagline: 'Faster seam marking and UV prep for Blender artists.',
  favicon: 'img/favicon.svg',
  future: {
    v4: true,
    faster: true,
  },

  url: 'https://orcavia.github.io',
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
    image: 'img/easeam-social-card.svg',
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
          type: 'docSidebar',
          sidebarId: 'operatorsSidebar',
          position: 'left',
          label: 'Operators',
        },
        {
          href: 'https://blendermarket.com/products/easeam',
          label: 'Blender Market',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright ${new Date().getFullYear()} Orcavia. Easeam is GPL-2.0-or-later.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;
