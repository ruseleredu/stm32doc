---
id: winget
title: WinGet
description: Use WinGet to install and manage applications.
slug: /winget
---

## Use WinGet to install and manage applications

O programa utilitário de linha de comando winget permite instalar aplicativos e outros pacotes a partir da linha de comando.

:::note
The WinGet command line tool is only supported on Windows 10 version 1809 (build 17763) or later.
:::

[winget.run](https://winget.run/)

## Use WinGet

After App Installer is installed, you can run WinGet by typing 'winget' from a Command Prompt.

```bash
winget --version
```

```bash
uso: winget  [<comando>] [<opções>]
```

```bash
Os seguintes comandos estão disponíveis:
  install    Instalar um determinado pacote
  show       Mostra informações sobre um pacote
  source     Gerenciar fontes de pacotes
  search     Localizar e mostrar informações básicas de pacotes
  list       Exibir os pacotes instalados
  upgrade    Mostra e executa atualizações disponíveis
  uninstall  Desinstala um determinado pacote
  hash       Ajuda para arquivos do instalador de hash
  validate   Valida um arquivo de manifesto
  settings   Abra as configurações ou defina as configurações do administrador
  features   Mostra o status dos recursos experimentais
  export     Exporta uma lista dos pacotes instalados
  import     Instala todos os pacotes em um arquivo
  pin        Gerenciar pinos de pacote
  configure  Configura o sistema em um estado desejado
  download   Baixa o instalador de um determinado pacote
  repair     Repara o pacote selecionado
  dscv3      Comandos de recurso DSC v3
```

Para obter mais detalhes sobre um comando específico, passe o argumento help. `[-?]`

```bash
As seguintes opções estão disponíveis:
-v,--version Exibir a versão da ferramenta
--info Exibir informações gerais da ferramenta
-?,--help Mostra a ajuda sobre o comando selecionado
--wait Solicita que o usuário pressione qualquer tecla antes de sair
--logs,--open-logs Abrir o local padrão dos logs
--verbose,--verbose-logs Habilita o registro em log detalhado para winget
--nowarn,--ignore-warnings Suprime saídas de aviso
--disable-interactivity Desabilitar os prompts interativos
--proxy Definir um proxy a ser usado para esta execução
--no-proxy Desabilitar o uso de proxy para esta execução
```
