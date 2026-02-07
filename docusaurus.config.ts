import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* Enabling math equations */
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import footer from "./footer";
import navbarItems from "./navbar"; // Import your new navbar file

const config: Config = {
  title: "ELT73A - Sistemas Microcontrolados",
  tagline: 'Desenvolver e implementar soluções para problemas de controle e automação utilizando microcontroladores.',
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/stm32doc/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ruseleredu", // Usually your GitHub org/user name.
  projectName: "stm32doc", // Usually your repo name.

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true, // Diagrams can be rendered using Mermaid in a code block.
    hooks: {
      onBrokenMarkdownLinks: "warn", // or 'throw'
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Include the KaTeX CSS in your config under stylesheets:
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Wsr4Nh3yrvMf2KCebJchRJoVo1gTU6kcP05uRSh5NV3sj9+a8IomuJoQzf3sMq4T",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // 👇 Add this line for the last update time on docs
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/stm32doc/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/stm32doc/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "labs", // Unique ID for this docs instance
        path: "labs", // Path to your API docs folder
        routeBasePath: "labs", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarslabs.js"), // Separate sidebar for LAB docs
        // ... other options specific to your API docs
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "quiz", // Unique ID for this docs instance
        path: "quiz", // Path to your API docs folder
        routeBasePath: "quiz", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarsquiz.js"), // Separate sidebar for Quiz docs
        // ... other options specific to your API docs
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "projects", // Unique ID for this docs instance
        path: "projects", // Path to your API docs folder
        routeBasePath: "projects", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarsproj.js"), // Separate sidebar for Quiz docs
        // ... other options specific to your API docs
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "tpls", // Unique ID for this docs instance
        path: "tpls", // Path to your API docs folder
        routeBasePath: "tpls", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarstpls.js"), // Separate sidebar for Quiz docs
        // ... other options specific to your API docs
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  // ... rest of your config

  themeConfig: {
    // Replace with your project's social card
    image: "img/ELT73A-BannerCourse.png",
    navbar: {
      title: "ELT73A",
      logo: {
        alt: "Sistemas Microcontrolados Logo",
        src: "img/logo.svg",
      },
      items: navbarItems,
    },
    footer: footer,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "autohotkey",
        "arduino",
        "apacheconf",
        "nginx",
        "bash",
        "matlab",
        "powershell",
        "ini",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
