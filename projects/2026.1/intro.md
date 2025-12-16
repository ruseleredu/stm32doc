---
title: Introdução
description: Projetos desenvolvidos no semestre 2026.1.
sidebar_position: 1
---

## Projeto Final 2026.1

O Projeto final tem os seguintes critérios de avaliação (Percentagem da nota):

1) Conter pelo menos um dispositivo de entrada (Botão, Teclado, Sensor...) (10%);
2) Utilizar pelo menos um periférico dedicado (ADC, PWM, DMA, Timer...) (10%);
3) Conter pelo menos um dispositivo saída (LED, Display, Motor, CubeMonitor...) (10%);
4) Possuir alguma rotina de interrupção (ISR) (10%);
5) Ser feito em bancada, protótipo operacional (30%);
6) Documentação no GitHub (15%);
7) Video de apresentação (15%); Ex: https://youtu.be/th4r7HzCY8c

**Data limite de entrega: ??/??/2026**

A partir dos requisitos a equipe tem liberdade para usar tantos componentes e técnicas quanto achar necessário. 

Documente o projeto em um repositório no GitHub e elabore um video breve de apresentação;

- Somente projetos realizados no VS Code serão aceitos;
- Utilize Markdown para documentar o projeto!

:::tip
Fluxograma com [meirmaid](https://mermaid.js.org/), utilize o [editor](https://mermaid.live) e dê uma olhada na [documentação](https://mermaid.js.org/syntax/stateDiagram.html);
:::

- https://mermaid.js.org/
- https://mermaid.live
- https://mermaid.js.org/syntax/stateDiagram.html


:::info

Informações para o desenvolvimento do projeto!

:::

:::warning[VS Code deve ser a IDE de uso!]

Somente projetos realizados no VS Code serão aceitos!

:::

:::danger[O código deve compilar!]

O código deve compilar!

:::


### gitignore

<details>
  <summary>.gitignore</summary>

A [.gitignore](https://git-scm.com/docs/gitignore) file tells Git which files and directories to intentionally ignore, preventing them from being tracked in your repository, which keeps it clean of build artifacts, logs, temporary files, and IDE settings. 

  ```bash
  # Ignore STM32CubeMX-generated files
*.ioc
*.bak
MX/

# Ignore build directories
build/
out/
Debug/
Release/

# Ignore object files and compiled binaries
*.o
*.a
*.so
*.exe
*.elf
*.bin
*.hex
*.map
*.lst

# Ignore CMake cache and generated files
CMakeCache.txt
CMakeFiles/
cmake_install.cmake
Makefile
compile_commands.json

# Ignore Ninja build artifacts
build/
*.ninja
.ninja_deps
.ninja_log
rules.ninja

# Ignore VS Code settings and workspace files
.vscode/
*.code-workspace

# Ignore logs and temporary files
*.log
*.tmp

# Ignore user-specific configuration files
*.user
*.swp
*.swo
Thumbs.db
Desktop.ini
```
</details>
