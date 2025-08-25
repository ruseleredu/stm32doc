---
sidebar_position: 4
title: Laboratório 01
description: Introdução as aulas de laboratório
---

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

:::warning

A documentação desta atividade de laboratório está em **processo de construção** e por isso pode estar imcompleta.

Utilize como base a descrição apresentada no [Moodle da disciplina](https://moodle.utfpr.edu.br/course/view.php?id=29540).
:::

## Requesitos

- [VScode](/docs/vs-code)
- outros

```bash
winget install -e --id Microsoft.VisualStudioCode
```

```bash
winget install -e --id MSYS2.MSYS2
```

Update MSYS2: After installation, open the MSYS2 terminal (from the start menu).

```bash
pacman -Syu
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

## Free interactive C tutorial

- [W3Schools C Tutorial](https://www.w3schools.com/c/)
- [tutorialspoint C Tutorial](https://www.tutorialspoint.com/cprogramming/index.htm)
- [geeksforgeeks C Tutorial](https://www.geeksforgeeks.org/c/c-programming-language/)
- [geeksforgeeks.org bit-fields-c](https://www.geeksforgeeks.org/c/bit-fields-c/)
- [learn-c.org](https://www.learn-c.org/)
- [includehelp.com/c](https://www.includehelp.com/c/)

```c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

## Install MinGW-w64 UCRT Toolchain

```bash
pacman -S mingw-w64-ucrt-x86_64-toolchain base-devel make git
```

## Online compiler and debugger for C

- https://leetcode.com/playground/
- https://www.onlinegdb.com/online_c_compiler
- https://www.jdoodle.com/c-online-compiler
- https://www.programiz.com/c-programming/online-compiler/
- https://replit.com
- https://onecompiler.com/c
- https://codeanywhere.com/languages/c
- https://www.mycompiler.io/pt/new/c
- https://www.codechef.com/ide
