---
sidebar_position: 3
title: Laboratório 00
description: Apresentação da Disicplina; Materiais utilizados na disciplina;
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';


# Laboratório 00

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
- [ ] Projeto Final;

<LABsIncomplete />

<details>
<summary>Verifique o seu ambiente de desenvolvimento!</summary>

Versão do [git](/docs/git) e configurações:

```bash
git --version
git config --list --show-origin
```

Versão do [GitHub CLI](/docs/github-cli) e status de login:

```bash
gh --version
gh auth status
```

Versão do [VS Code](/docs/vs-code) e extensões instaladas:

```bash
code -v
code --list-extensions –show-versions
```

Versão do [gcc e gdb](/docs/mingw).

```bash
gcc --version
gdb --version
```

</details>

## Crie um novo repositório com base no template do LAB00

<Tabs>
  <TabItem value="A" label="A">
    Grupo A: https://github.com/ELT73A-S22-2025-2-A
```bash
gh repo create ELT73A-S22-2025-2-A/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="B" label="B">
    Grupo B: https://github.com/ELT73A-S22-2025-2-B
```bash
gh repo create ELT73A-S22-2025-2-B/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="C" label="C">
    Grupo C: https://github.com/ELT73A-S22-2025-2-C
```bash
gh repo create ELT73A-S22-2025-2-C/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="D" label="D">
    Grupo D: https://github.com/ELT73A-S22-2025-2-D
```bash
gh repo create ELT73A-S22-2025-2-D/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="E" label="E">
    Grupo E: https://github.com/ELT73A-S22-2025-2-E
```bash
gh repo create ELT73A-S22-2025-2-E/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="F" label="F">
    Grupo F: https://github.com/ELT73A-S22-2025-2-F
```bash
gh repo create ELT73A-S22-2025-2-F/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="G" label="G">
    Grupo G: https://github.com/ELT73A-S22-2025-2-G
```bash
gh repo create ELT73A-S22-2025-2-G/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="H" label="H">
    Grupo H: https://github.com/ELT73A-S22-2025-2-H
```bash
gh repo create ELT73A-S22-2025-2-H/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="I" label="I">
    Grupo I: https://github.com/ELT73A-S22-2025-2-I
```bash
gh repo create ELT73A-S22-2025-2-I/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="J" label="J">
    Grupo J: https://github.com/ELT73A-S22-2025-2-J
```bash
gh repo create ELT73A-S22-2025-2-J/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="K" label="K">
    Grupo K: https://github.com/ELT73A-S22-2025-2-K
```bash
gh repo create ELT73A-S22-2025-2-K/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="L" label="L">
    Grupo L: https://github.com/ELT73A-S22-2025-2-L
```bash
gh repo create ELT73A-S22-2025-2-L/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```
  </TabItem>
  <TabItem value="X" label="X">
    Grupo X: https://github.com/ELT73A-S22-2025-2-X
```bash
gh repo create ELT73A-S22-2025-2-X/LAB00 --public -p ELT73A-LAB-TPL/LAB00
```

</TabItem>
</Tabs>

<details>
<summary>Configure a ferramenta git!</summary>

Configure o nome de usuário para todos os repositórios locais ligados às suas transações de commit:

```bash
git config --global user.name "Your Name"
```

Configure o email de usuário para todos os repositórios locais ligados às suas transações de commit:

```bash
git config --global user.email "you@example.com"
```

É recomendado verificar se a instalação do seu Git não está realizando nenhuma transformação entre LFs e CRLFs.

```bash
git config --global core.autocrlf false
```

Configure o Git para usar o Visual Studio Code (VS Code) como editor padrão para tarefas como escrever mensagens de commit ou rebases interativos

```bash
git config --global core.editor "code --wait"
```

</details>

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
