// @ts-check

const fs = require('fs');
const path = require('path');

const legacyRouteRedirectScript = `
(function () {
  var legacyBasePath = '/Easeam-doc';
  var canonicalBasePath = '/easeam';
  var currentPath = window.location.pathname;

  if (
    currentPath === legacyBasePath ||
    currentPath === legacyBasePath + '/' ||
    currentPath.indexOf(legacyBasePath + '/') === 0
  ) {
    var targetPath = canonicalBasePath + currentPath.slice(legacyBasePath.length);

    if (targetPath === canonicalBasePath) {
      targetPath += '/';
    }

    window.location.replace(targetPath + window.location.search + window.location.hash);
  }
})();
`;

function escapeHtmlAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function createRedirectHtml(targetPath) {
  const escapedTargetPath = escapeHtmlAttribute(targetPath);
  const serializedTargetPath = JSON.stringify(targetPath);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta http-equiv="refresh" content="0; url=${escapedTargetPath}">
    <link rel="canonical" href="${escapedTargetPath}">
    <title>Redirecting...</title>
    <script>
      window.location.replace(${serializedTargetPath} + window.location.search + window.location.hash);
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="${escapedTargetPath}">${escapedTargetPath}</a>.</p>
  </body>
</html>
`;
}

function legacyEaseamDocRedirectsPlugin() {
  const legacyBasePath = 'Easeam-doc';
  const canonicalBasePath = '/easeam/';

  function findGeneratedIndexFiles(directory) {
    const entries = fs.readdirSync(directory, {withFileTypes: true});
    const indexFiles = [];

    for (const entry of entries) {
      const absolutePath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === legacyBasePath) {
          continue;
        }

        indexFiles.push(...findGeneratedIndexFiles(absolutePath));
      } else if (entry.isFile() && entry.name === 'index.html') {
        indexFiles.push(absolutePath);
      }
    }

    return indexFiles;
  }

  return {
    name: 'legacy-easeam-doc-redirects',
    async postBuild({outDir}) {
      for (const indexFile of findGeneratedIndexFiles(outDir)) {
        const relativeRoute = path
          .dirname(path.relative(outDir, indexFile))
          .replaceAll(path.sep, '/');
        const routeSuffix = relativeRoute === '.' ? '' : relativeRoute;
        const targetPath = routeSuffix
          ? `${canonicalBasePath}${routeSuffix}`
          : canonicalBasePath;
        const redirectDirectory = path.join(outDir, legacyBasePath, routeSuffix);

        fs.mkdirSync(redirectDirectory, {recursive: true});
        fs.writeFileSync(
          path.join(redirectDirectory, 'index.html'),
          createRedirectHtml(targetPath),
        );
      }
    },
  };
}

const config = {
  title: 'Easeam 2',
  tagline: 'Blender UV seam marking, unwrap tools, and UV map management documentation.',
  favicon: 'img/favicon.svg',
  future: {
    v4: true,
    faster: true,
  },

  url: 'https://orcavia.dev',
  baseUrl: '/easeam/',

  organizationName: 'orcavia',
  projectName: 'easeam',

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
        sitemap: {
          changefreq: 'daily',
          priority: 0.8,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [legacyEaseamDocRedirectsPlugin],

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: legacyRouteRedirectScript,
    },
  ],

  themeConfig: {
    image: 'img/easeam-discord-embed.png',
    metadata: [
      {
        name: 'description',
        content:
          'Easeam 2 documentation for Blender UV seam marking, unwrap workflows, UV island cleanup, and UV map management.',
      },
      {
        name: 'keywords',
        content:
          'Easeam 2, Blender add-on, Blender addon, UV seam, UV seam marking, Blender unwrap, UV unwrap, UV mapping, UV map management, UV islands',
      },
      {property: 'og:type', content: 'website'},
      {
        property: 'og:title',
        content: 'Easeam 2 Blender UV Seam & Unwrap Documentation',
      },
      {
        property: 'og:description',
        content:
          'Documentation for Easeam 2, a Blender add-on for UV seam marking, unwrap workflows, UV island cleanup, and UV map management.',
      },
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
      content: 'Easeam 2 is now available on Superhive and Gumroad. Documentation is still being expanded.',
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
          to: '/operators/changelog',
          position: 'left',
          label: 'Changelog',
        },
        {
          href: 'https://superhivemarket.com/products/easeam-2',
          label: 'Superhive',
          position: 'right',
        },
        {
          href: 'https://orcavia.gumroad.com/l/easeam2',
          label: 'Gumroad',
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
