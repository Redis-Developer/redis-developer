module.exports = {
  title: 'Redis Developer',
  tagline: 'The Home of Redis Developer',
  url: 'https://developer.redislabs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Redis Developer',
      logo: {
        alt: 'Redis Logo',
        src: 'img/logos/redis.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Getting Started',
          position: 'left',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Develop',
          items: [
            {
              label: 'Java',
              to: '/develop/java',
            },
            {
              label: 'Python',
              to: '/develop/python',
            },
            {
              label: 'Node.js',
              to: '/develop/node',
            },
            {
              label: 'Go',
              to: '/develop/golang',
            },                        
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/redis',
            },
            {
              label: 'Discussion Forums',
              href: 'https://forum.redislabs.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/redislabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://redislabs.com/blog/tech-blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/redis-developer/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RedisLabs Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/redis-developer/redis-developer/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
