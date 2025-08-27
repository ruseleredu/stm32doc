---
sidebar_position: 4
title: Laboratório 01
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {VerifyDev2,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';

# Laboratório 01

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

| Template                                               | start/open  | end/close   | Conteúdo                     |
| ------------------------------------------------------ | ----------- | ----------- | ---------------------------- |
| [Template 01](https://github.com/ELT73A-LAB-TPL/LAB01) | 25-Aug-2025 | 01-Sep-2025 | Revisão da programação em C; |

---

GitHub e Revisão da programação em C; Ambiente de desenvolvimento;

- [ ] Uso do GitHub;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;
- [ ] Ambiente de desenvolvimento;
- [ ] Comandos básicos, git e GitHub;
- [ ] Revisão da programação em C;

<!-- Verifique o seu ambiente dev, git, gh, code, gcc e gdb -->
<VerifyDev2 />

## Crie um novo repositório com base no template do LAB01

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB01" opts="-c" />

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Requesitos

- [VScode](/docs/vs-code)
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

## Referências

### Free interactive C tutorial

- [W3Schools C Tutorial](https://www.w3schools.com/c/)
- [tutorialspoint C Tutorial](https://www.tutorialspoint.com/cprogramming/index.htm)
- [geeksforgeeks C Tutorial](https://www.geeksforgeeks.org/c/c-programming-language/)
- [geeksforgeeks.org bit-fields-c](https://www.geeksforgeeks.org/c/bit-fields-c/)
- [learn-c.org](https://www.learn-c.org/)
- [includehelp.com/c](https://www.includehelp.com/c/)

### Online compiler and debugger for C

- https://leetcode.com/playground/
- https://www.onlinegdb.com/online_c_compiler
- https://www.jdoodle.com/c-online-compiler
- https://www.programiz.com/c-programming/online-compiler/
- https://replit.com
- https://onecompiler.com/c
- https://codeanywhere.com/languages/c
- https://www.mycompiler.io/pt/new/c
- https://www.codechef.com/ide
