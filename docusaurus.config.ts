import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DucklingScript',
  tagline: 'Ducks are cool, but ducklings are cooler. 😎',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ducklingscript.dragonofshuu.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DragonOfShuu', // Usually your GitHub org/user name.
  projectName: 'ducklingscript-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Docusaurus plugins
  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DragonOfShuu/ducklingscript-docs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.sass',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ducklingscript-social-card.png',
    navbar: {
      title: 'DucklingScript',
      logo: {
        alt: 'DucklingScript Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docReference',
          position: 'left',
          label: 'Commands',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docQuackinter',
          position: 'left',
          label: 'Quackinter',
        },
        {
          href: 'https://github.com/DragonOfShuu/DucklingScript',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Dragon of Shuu, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.gruvboxMaterialDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
