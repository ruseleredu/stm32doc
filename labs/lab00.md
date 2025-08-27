---
sidebar_position: 3
title: Laboratório 00
description: Apresentação da Disicplina; Materiais utilizados na disciplina;
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {VerifyDev2,GitConfig} from '@site/src/components/InstructionsSite';

# Laboratório 00
<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

| Template                                               | start/open  | end/close   | Conteúdo                                                        |
| ------------------------------------------------------ | ----------- | ----------- | --------------------------------------------------------------- |
| [Template 00](https://github.com/ELT73A-LAB-TPL/LAB00) | 18-Aug-2025 | 25-Aug-2025 | Apresentação da Disicplina; Materiais utilizados na disciplina; |

---

Apresentação da Disicplina; Materiais utilizados na disciplina;

- [ ] Atividades de EaD e Lab;
- [ ] Ambiente de desenvolvimento;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;

<!-- Verifique o seu ambiente dev, git, gh, code, gcc e gdb -->
<VerifyDev2 />

## Crie um novo repositório com base no template do LAB00
Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:
<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB00" opts="-c" />

<!-- Configure o git -->
<GitConfig />

## Uso do git e GitHub

- [Melhores práticas do Git](/docs/git-best-practices).
- [Folha de Dicas de Git do GitHub](/docs/github-git-cheat-sheet).

## Uso do [GitHub CLI](/docs/github-cli)

Create a new remote repository in a different organization

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00c --public -c -l mit --add-readme -g C
```

```bash
gh repo create ELT73A-S22-2025-2-A/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
