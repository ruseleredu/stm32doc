import { ThemeConfig } from "@docusaurus/preset-classic";

const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} stm32doc. Built with <a href="https://docusaurus.io/" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">Docusaurus</a> at ${utc3Time} UTC-3.`;

const footer: ThemeConfig["footer"] = {
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
            title: "UTFPR",
            items: [
                {
                    label: "Moodle",
                    href: "https://moodle.utfpr.edu.br/",
                },
                {
                    label: "Webmail",
                    href: "https://webmail.utfpr.edu.br/",
                },
                {
                    label: "Sistemas",
                    href: "https://sistemas2.utfpr.edu.br/",
                },
                {
                    label: "SEI",
                    href: "https://sei.utfpr.edu.br/",
                },
                {
                    label: "Chat",
                    href: "https://chat.utfpr.edu.br/",
                },
                {
                    label: "Ajuda",
                    href: "https://ajuda.utfpr.edu.br/",
                },
                {
                    label: "Calendário",
                    href: "https://www.utfpr.edu.br/alunos/calendario",
                },
                {
                    label: "TCC",
                    href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
                },
                {
                    label: "Nuvem",
                    href: "https://nuvem.utfpr.edu.br/",
                },
            ],
        },
        {
            title: "Sistemas",
            items: [
                {
                    label: "Sigepe",
                    href: "https://sougov.sigepe.gov.br/sougov/Home",
                },
                {
                    label: "gov.br",
                    href: "https://servicos.acesso.gov.br/",
                },
                {
                    label: "Consulta Diários",
                    href: "https://sistemas2.utfpr.edu.br/url/1141",
                },
                {
                    label: "Permanências",
                    href: "https://sistemas2.utfpr.edu.br/url/1026",
                },
                {
                    label: "Planejamento",
                    href: "https://sistemas2.utfpr.edu.br/url/1890",
                },
                {
                    label: "Lançamentos",
                    href: "https://sistemas2.utfpr.edu.br/url/1514",
                },
                {
                    label: "Mapa de Professor",
                    href: "https://sistemas2.utfpr.edu.br/url/1022",
                },
                {
                    label: "Mapa de Sala",
                    href: "https://sistemas2.utfpr.edu.br/url/1934",
                },
            ],
        },
        {
            title: "AI", //
            items: [
                {
                    label: "Gemini",
                    href: "https://gemini.google.com/app",
                }, //
                {
                    label: "ChatGPT",
                    href: "https://chatgpt.com/",
                }, //
                {
                    label: "Claude",
                    href: "https://claude.ai/",
                },
                {
                    label: "Copilot",
                    href: "https://copilot.microsoft.com/",
                },
                {
                    label: "DeepSeek",
                    href: "https://chat.deepseek.com/",
                },
                {
                    label: "Grok",
                    href: "https://grok.com/",
                },
                {
                    label: "Kimi",
                    href: "https://www.kimi.com/en",
                },
                {
                    label: "GLM",
                    href: "https://chat.z.ai/",
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
                    label: "PlatformIO",
                    href: "https://platformio.org//install/ide?install=vscode",
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
    //copyright: `Copyright © ${new Date().getFullYear()} STM32 Docs for ELT73A, Inc. Built with Docusaurus.`,
    copyright: COPYRIGHT_STRING,
};

export default footer;