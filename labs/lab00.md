---
sidebar_position: 3
title: Laboratório 00
description: Apresentação da Disicplina; Materiais utilizados na disciplina;
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {VerifyDev2,GitConfig,STM32Tools,DevTools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 00

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={0} internal={false} />
</div>

---

## Conteúdo

Apresentação da Disicplina; Materiais utilizados na disciplina;

- [ ] Atividades de EaD e Lab;
- [ ] Ambiente de desenvolvimento;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevTools />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Crie um novo repositório com base no template do LAB00

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB00" opts="-c" />

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

How to commit updates

```bash
cd LAB00
git status
git add .
git commit -m "My message for this commit!"
git push
git log
```

To implement: Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.

For more information, see: http://choosealicense.com/licenses/mit/
