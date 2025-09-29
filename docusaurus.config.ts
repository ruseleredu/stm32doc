import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ELT73A-S22-2025.2",
  tagline: "Sistemas Microcontrolados",
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

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/stm32doc/edit/main/",
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
      },
    ],
  ],
  // ... rest of your config

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Sistemas Microcontrolados",
      logo: {
        alt: "Sistemas Microcontrolados Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentos",
        },
        {
          to: "/labs/intro", // Link to a page in your API docs
          label: "Laboratórios",
          position: "left",
          activeBaseRegex: `/labs/`, // Highlight when any API doc is active
        },
        {
          to: "/quiz/intro", // Link to a page in your API docs
          label: "Questionários",
          position: "left",
          activeBaseRegex: `/quiz/`, // Highlight when any API doc is active
        },
        /*  {
            to: "/tpls/intro", // Link to a page in your API docs
            label: "Templates",
            position: "left",
            activeBaseRegex: `/tpls/`, // Highlight when any API doc is active - [Calendário Acadêmico](/pdf/UTFPR-CTAcademicCalendar2025.pdf)
          }, */
        { to: "/blog", label: "Projetos", position: "left" },
        { href: "https://ruseleredu.github.io/stm32doc/assets/files/UTFPR-CTAcademicCalendar2025-268081c8b6239f53ca49523f814aaf59.pdf", label: "Calendário", position: "right" },
        // { href: "https://www.utfpr.edu.br/alunos/calendario", label: "Calendário", position: "right" },
        {
          href: "https://github.com/ruseleredu/stm32doc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentos",
          items: [
            {
              label: "GitHub Docs",
              href: "https://docs.github.com/pt",
            },
            {
              label: "GitHub Dicas",
              href: "https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/",
            },
            {
              label: "Git Tutorial",
              href: "https://www.w3schools.com/git/default.asp?remote=github",
            },

            {
              label: "GitHub Training",
              href: "https://githubtraining.github.io/training-manual/#/01_getting_ready_for_class",
            },
            {
              label: "GitHub CLI",
              href: "https://cli.github.com/manual/",
            },
          ],
        },
        {
          title: "Recursos",
          items: [
            {
              label: "WeAct Studio",
              href: "https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1",
            },
            {
              label: "DeepBlue",
              href: "https://deepbluembedded.com/",
            },
            {
              label: "STM32 MCU wiki",
              href: "https://wiki.st.com/stm32mcu/wiki/Main_Page",
            },
            {
              label: "STM32World Wiki",
              href: "https://stm32world.com/wiki/Main_Page",
            },
            {
              label: "ST STM32F411",
              href: "https://www.st.com/en/microcontrollers-microprocessors/stm32f411.html",
            },
            {
              label: "STM32-base",
              href: "https://stm32-base.org/",
            },
          ],
        },
        {
          title: "IDEs e Ferramentas",
          items: [
            {
              label: "Visual Studio Code",
              href: "https://code.visualstudio.com/download",
            },
            {
              label: "Git SCM",
              href: "https://git-scm.com/downloads",
            },
            {
              label: "GitHub CLI",
              href: "https://cli.github.com/",
            },
            {
              label: "GitHub Desktop",
              href: "https://desktop.github.com/download/",
            },
            {
              label: "MinGW MSYS2",
              href: "https://www.msys2.org/",
            },
            {
              label: "WinGet",
              href: "https://winget.run/",
            },
          ],
        },
        {
          title: "STM32Cube",
          items: [
            {
              label: "STM32CubeMX",
              href: "https://www.st.com/en/development-tools/stm32cubemx.html",
            },
            {
              label: "STM32CubeCLT",
              href: "https://www.st.com/en/development-tools/stm32cubeclt.html",
            },
            {
              label: "STMCUFinder",
              href: "https://www.st.com/en/development-tools/st-mcu-finder-pc.html",
            },
            {
              label: "STM32CubeProg",
              href: "https://www.st.com/en/development-tools/stm32cubeprog.html",
            },
            {
              label: "STM32CubeMonitor",
              href: "https://www.st.com/en/development-tools/stm32cubemonitor.html",
            },
            {
              label: "STM32CubeIDE",
              href: "https://www.st.com/en/development-tools/stm32cubeide.html",
            },
          ],
        },
        {
          title: "YouTube",
          items: [
            {
              label: "Adriano Ruseler",
              href: "https://www.youtube.com/@adrianoruseler653/videos",
            },
            {
              label: "STM32World",
              href: "https://www.youtube.com/@stm32world/videos",
            },
            {
              label: "STMicroelectronics",
              href: "https://www.youtube.com/@stmicroelectronics/videos",
            },
            {
              label: "Microsoft Visual Studio",
              href: "https://www.youtube.com/@visualstudio/videos",
            },
            {
              label: "Ben Eater",
              href: "https://www.youtube.com/@BenEater/videos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} STM32 Docs for ELT73A, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
