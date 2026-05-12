// @ts-check

const config = {
  title: 'Easeam 2',
  tagline: 'Faster seam marking and UV prep for Blender artists.',
  favicon: 'img/favicon.svg',

  url: 'https://orcavia.github.io',
  baseUrl: '/Easeam/',

  organizationName: 'orcavia',
  projectName: 'Easeam',

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
    navbar: {
      title: 'Easeam 2',
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
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Mark Around Flat',
              to: '/operators/modal-operators/mark-around-flat',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Feedback tracker',
              href: 'https://github.com/orcavia/Easeam-Feedback/blob/main/README.md',
            },
          ],
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
