---
id: vs-code
title: Visual Studio Code
description: The open source AI code editor.
slug: /vs-code
---

## Visual Studio Code

### WinGet

```bash
winget install -e --id Microsoft.VisualStudioCode
```

```bash
winget update --id Microsoft.VisualStudioCode
```

### Instalação do VScode e extensão para o STM32

<iframe width="560" height="315" src="https://www.youtube.com/embed/a5A4wAYuuOY?si=78Cd1dAWLqcsN9oG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Command Line Interface (CLI)

- https://code.visualstudio.com/docs/configure/command-line

```bash
code --help
```

Launching from command line

```bash
code .
```

extensions.json

```json
{
  "recommendations": [
    "formulahendry.code-runner",
    "ms-vscode.cmake-tools",
    "ms-vscode.cpptools-themes",
    "ms-vscode.cpptools-extension-pack",
    "ms-vscode.cpptools",
    "pkief.material-icon-theme",
    "esbenp.prettier-vscode"
    // Add other relevant extensions
  ]
}
```

settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true,
    "**/.docusaurus": true,
    "**/build": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/.docusaurus": true,
    "**/build": true
  }
}
```

## VScode com compilador GCC e o depurador GDB

Configure o Visual Studio Code para usar o compilador GCC e o depurador GDB

- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)
- [Get the latest version of MinGW-w64 via MSYS2](https://www.msys2.org/)

```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/-R3l4Bc5jH4?si=WbfLdQtISBTG98d-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Como formatar o seu código em C no VScode

Como formatar o seu código em C no VScode

<iframe width="560" height="315" src="https://www.youtube.com/embed/GsGjdF7TkoM?si=CTQkIU3wxt4tFkck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Escolha e configuração de temas no VScode

Escolha e configuração de temas no VScode

<iframe width="560" height="315" src="https://www.youtube.com/embed/p1kprMBB9fQ?si=iPNpFzCl0s-8u58V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
