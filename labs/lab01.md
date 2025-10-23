---
sidebar_position: 4
title: Laboratório 01
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {VerifyDev2,GitConfig,STM32Tools,DevTools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 01

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={1} internal={false} />
</div>

---

## Conteúdo

GitHub e Revisão da programação em C; Ambiente de desenvolvimento;

- [ ] Uso do GitHub;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;
- [ ] Ambiente de desenvolvimento;
- [ ] Comandos básicos, git e GitHub;
- [ ] Revisão da programação em C;

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevTools />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Crie um novo repositório com base no template do LAB01

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB01" opts="-c" />

## Requesitos

- [VScode](/docs/vs-code-intro)
- [MinGW](/docs/mingw)

```bash
C:\msys64\msys2_shell.cmd -ucrt64
```

```bash
pacman -Syu
```

```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

## VScode com compilador GCC e o depurador GDB

Configure o Visual Studio Code para usar o compilador GCC e o depurador GDB

- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)
- [Get the latest version of MinGW-w64 via MSYS2](https://www.msys2.org/)

```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/-R3l4Bc5jH4?si=WbfLdQtISBTG98d-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Check your MinGW installation

C:\msys64\ucrt64\bin

Verifique a versão do [gcc](https://gcc.gnu.org/) e [gdb](https://sourceware.org/gdb/).

```bash
gcc --version
gdb --version
```

## Como formatar o seu código em C no VScode

Como formatar o seu código em C no VScode

<iframe width="560" height="315" src="https://www.youtube.com/embed/GsGjdF7TkoM?si=CTQkIU3wxt4tFkck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Escolha e configuração de temas no VScode

Escolha e configuração de temas no VScode

<iframe width="560" height="315" src="https://www.youtube.com/embed/p1kprMBB9fQ?si=iPNpFzCl0s-8u58V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```bash
code --list-extensions --profile "C/C++"
```

```json title=".vscode/extensions.json"
{
  "recommendations": [
    "formulahendry.code-runner",
    "ms-vscode.cmake-tools",
    "ms-vscode.cpptools",
    "ms-vscode.cpptools-extension-pack",
    "ms-vscode.cpptools-themes",
    "pkief.material-icon-theme",
    "yzhang.markdown-all-in-one"
    // Add other relevant extensions
  ]
}
```

```json title=".vscode/settings.json"
{
  "workbench.iconTheme": "material-icon-theme",
  "editor.formatOnSave": true,
  "C_Cpp.default.compilerPath": "C:/msys64/ucrt64/bin/gcc.exe",
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "editor.formatOnPaste": true,
  "[c]": {
    "editor.defaultFormatter": "ms-vscode.cpptools"
  },
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  }
}
```

```bash
mkdir helloworld
cd helloworld
code .
```

```c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

```bash
git init
git add .
git commit -m "First Commit!"
```

If you have a local Git repository you want to push to GitHub, you can use:

```bash
gh repo create ELT73A-S22-2025-2-X/helloworld --source=. --public --push
```

Description of the repository

```bash
gh repo edit -d "Description of the repository"
```

Repository home page URL

```bash
gh repo edit -h "https://ruseleredu.github.io/stm32doc/"
```

Make the repository available as a template repository

```bash
gh repo edit  --template
```

## Uso do [GitHub CLI](/docs/github-cli)

Create a new remote repository in a different organization

```bash
gh repo create ELT73A-S22-2025-2-X/LAB01 --public -c -l mit --add-readme -g C
```

## Uso do git e GitHub

- [Melhores práticas do Git](/docs/git-best-practices).
- [Folha de Dicas de Git do GitHub](/docs/github-git-cheat-sheet).




## Instruções TODO

Esta atividade de laboratório tem como objetivo verificar a configuração adequada do ambiente de desenvolvimento para o STM32.

- [ ] Crie uma organização baseada no nome do grupo;
- [ ] Adicione os membros do seu grupo a organização;
- [ ] Adicione o professor como membro da organização;
- [ ] Crie um projeto em branco na pasta EmptyTest;
- [ ] Importe um projeto em branco na pasta CubeMxTest;
- [ ] Commit e push dos arquivos gerados;
- [ ] Envie o link da organização (hyperlink);
- [ ] Envie o link do repositório no GitHub (hyperlink);


## Avaliação TODO

- [ ] Crie uma organização baseada no nome do grupo - 10%
- [ ] Adicione os membros do seu grupo a organização - 10%
- [ ] Adicione o professor como membro da organização - 10%
- [ ] Crie um projeto em branco na pasta EmptyTest - 25%
- [ ] Importe um projeto em branco na pasta CubeMxTest - 25%
- [ ] Envie o link da organização e do repositório no GitHub (hyperlink) - 20%


