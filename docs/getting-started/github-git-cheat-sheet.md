---
id: github-git-cheat-sheet
title: Folha de Dicas de Git do GitHub
description: Folha de Dicas de Git do GitHub (pt-BR)
slug: /github-git-cheat-sheet
---

- [GIT CHEAT SHEET](https://education.github.com/git-cheat-sheet-education.pdf)
- [Folha de Dicas de Git do GitHub](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/)
- [Getting Git right](https://www.atlassian.com/git)
- [Git Tutorial](https://www.w3schools.com/git/)
- [GitHub Docs](https://docs.github.com/pt)

## Instale o Git

GitHub fornece clientes desktop que incluem uma interface gráfica para as ações mais comuns em um repositório e atualiza automaticamente para a linha de comando do Git para cenários avançados.

- [Download GitHub Desktop](https://desktop.github.com/download/)
- [git-scm](http://git-scm.com)

Verifique a versão instalada do git em seu computador:

```bash
git --version
```

Edite o arquivo de configuração global do git:

```bash
git config --global -e
```

Liste a origem dos arquivos de configuração:

```bash
git config list --show-origin
```

## Configure a ferramenta

Configure o nome e email de usuário para todos os repositórios locais ligados às suas transações de commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

É recomendado verificar se a instalação do seu Git não está realizando nenhuma transformação entre LFs e CRLFs.

```bash
git config --global core.autocrlf false
```

```bash
git config --global core.autocrlf false
git config --global color.ui auto
git config --global init.defaultBranch main
```

Configure Git to use Visual Studio Code (VS Code) as the default editor for tasks like writing commit messages or interactive rebases

```bash
git config --global core.editor "code --wait"
```

## Crie repositórios

Inicie um novo repositório ou obtenha de uma URL existente

```bash
git init [nome-do-projeto]
```

Cria um novo repositório local com um nome especificado

```bash
git clone [url]
```

Baixa um projeto e seu histórico de versão inteiro

## Suprima o monitoramento

Ignore arquivos e diretórios temporários

```bash
*.log
build/
temp-*
```

Um arquivo de texto chamado .gitignore suprime o versionamento acidental de arquivos e diretórios correspondentes aos padrões especificados

```bash
git ls-files --others --ignored --exclude-standard
```

Lista todos os arquivos ignorados neste projeto

## Salve fragmentos

Arquive e restaure mudanças incompletas

```bash
git stash
```

Armazena temporariamente todos os arquivos monitorados modificados

```bash
git stash pop
```

Restaura os arquivos recentes em stash

```bash
git stash list
```

Lista todos os conjuntos de alterações em stash

```bash
git stash drop
```

Descarta os conjuntos de alterações mais recentes em stash

## Faça mudanças

Revise edições e crie uma transação de commit

$ git status

Lista todos os arquivos novos ou modificados para serem commitados

$ git diff

Mostra diferenças no arquivo que ainda não foram preparadas

$ git add [arquivo]

Faz o snapshot de um arquivo na preparação para versionamento

$ git diff --staged

Mostra a diferença entre arquivos preparados e suas últimas versões

$ git reset [arquivo]

Retira o arquivo da área de preparação, mas preserva seu conteúdo

$ git commit -m "[mensagem descritiva]"

Grava o snapshot permanentemente do arquivo no histórico de versão

## Mudanças em grupo

Nomeie uma série de commits e combine os esforços completos

$ git branch

Lista todos os branches locais no repositório atual

$ git branch [nome-do-branch]

Cria um novo branch

$ git switch -c [nome-do-branch]

Muda para o branch especificado e atualiza o diretório de trabalho

$ git merge [nome-do-branch]

Combina o histórico do branch especificado ao branch atual

$ git branch -d [nome-do-branch]

Exclui o branch especificado

## Revise o histórico

Navegue e inspecione a evolução dos arquivos do projeto

$ git log

Lista o histórico de versões para o branch atual

$ git log --follow [arquivo]

Lista o histórico de versões para um arquivo, incluindo mudanças de nome

$ git diff [primerio-branch]...[segundo-branch]

Mostra a diferença de conteúdo entre dois branches

$ git show [commit]

Retorna mudanças de metadata e conteúdo para o commit especificado

## Desfaça commits

Apague enganos e crie um histórico substituto

$ git reset [commit]

Desfaz todos os commits depois de [commit], preservando mudanças locais

$ git reset --hard [commit]

Descarta todo histórico e mudanças para o commit especificado

## Sincronize mudanças

Registre um repositório remoto e troque o histórico de versão

$ git fetch [nome-remoto]

Baixe todo o histórico de um repositório remoto

$ git merge [nome-remoto]/[branch]

Combina o branch remoto ao branch local atual

$ git push [alias] [branch]

Envia todos os commits do branch local para o GitHub

$ git pull

Baixa o histórico e incorpora as mudanças
