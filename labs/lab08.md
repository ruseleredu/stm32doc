---
sidebar_position: 11
title: Laboratório 08
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';

# Laboratório 08

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

| Tarefa                                                              | Template                                               | start/open  | end/close   | Conteúdo                          |
| ------------------------------------------------------------------- | ------------------------------------------------------ | ----------- | ----------- | --------------------------------- |
| [LAB08](https://moodle.utfpr.edu.br/mod/assign/view.php?id=1783994) | [Template 08](https://github.com/ELT73A-LAB-TPL/LAB08) | 03-Nov-2025 | 10-Nov-2025 | Uso do STM32CubeMonitor; InfluDB; |

---

## Conteúdo

Uso do STM32CubeMonitor; InfluDB;

- [ ] Crie uma conta no [my.st.com](https://www.st.com/content/st_com/en/user-registration.html);
- [ ] Instale o [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html#get-software);
- [ ] Instale o [STM32CubeCLT](https://www.st.com/en/development-tools/stm32cubeclt.html#get-software);
- [ ] Instale o [ST-MCU-Finder](https://www.st.com/en/development-tools/st-mcu-finder-pc.html#get-software);
- [ ] Instale o [STM32CubeProg](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software);
- [ ] Crie um perfil no Visual Studio Code chamado `STM32`;
- [ ] Instale [STM32Cube para Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension);
- [ ] Configure o Visual Studio Code;
- [ ] Teste de geração e compilação de projeto para o STM32F411CEUx;
- [ ] Teste de uso do [LoadMX](/docs/loadmx)

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevTools />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Crie um novo repositório com base no template do LAB08

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB08" opts="-c" />
