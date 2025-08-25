---
sidebar_position: 3
title: Laboratório 00
description: Apresentação da Disicplina; Materiais utilizados na disciplina;
---

# Laboratório 00

| Template                                               | start/open  | end/close   | Conteúdo                                                        |
| ------------------------------------------------------ | ----------- | ----------- | --------------------------------------------------------------- |
| [Template 00](https://github.com/ELT73A-LAB-TPL/LAB00) | 18-Aug-2025 | 25-Aug-2025 | Apresentação da Disicplina; Materiais utilizados na disciplina; |

Apresentação da Disicplina; Materiais utilizados na disciplina;

- [ ] Atividades de EaD e Lab;
- [ ] Ambiente de desenvolvimento;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;
- [ ] Projeto Final;

:::warning

A documentação desta atividade de laboratório está em **processo de construção** e por isso pode estar imcompleta.

Utilize como base a descrição apresentada no [Moodle da disciplina](https://moodle.utfpr.edu.br/course/view.php?id=29540).
:::

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

## Uso do git e GitHub

- [Melhores práticas do Git](/docs/git-best-practices).
- [Folha de Dicas de Git do GitHub](/docs/github-git-cheat-sheet).
