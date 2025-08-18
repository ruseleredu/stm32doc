---
sidebar_position: 3
title: Laboratório 00
description: Introdução as aulas de laboratório
---

# Laboratório 00

- [Template 00](https://github.com/ELT73A-LAB-TPL/LAB00)

## Git commands

```bash
git --version
```

Configure a ferramenta

```bash
git config --global user.name "Your Name"
git config --global user.email yourmail@domain.tld
```

It's recommended to verify that the your Git installation is not performing any transformation between LFs and CRLFs.

```bash
git config --global core.autocrlf false
git config --global color.ui auto
git config --global init.defaultBranch main
```

Configure Git to use Visual Studio Code (VS Code) as the default editor for tasks like writing commit messages or interactive rebases

```bash
git config --global core.editor "code --wait"
```

```bash
git config --global -e
```

```bash
git config list --show-origin
```

## Folha de dicas

https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/
