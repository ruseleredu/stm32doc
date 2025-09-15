---
sidebar_position: 6
title: Laboratório 03
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 03

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={3} internal={false} />
</div>

---

## Conteúdo
Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);

Interrupções via GPIO e Temporizadores (Timers);

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

## Crie um novo repositório com base no template do LAB03

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB03" opts="-c" />


Esta atividade de laboratório tem como objetivo verificar a configuração adequada dos periféricos e debug via ST/Link do STM32.

- [ ] Crie um repositório na organização chamado LAB03;
- [ ] Clone o repositório para a sua máquina local;
- [ ] Crie e importe um projeto em branco;
- [ ] Configure SYS Debug para Serial Wire e RCC Clock
- [ ] Configure User KEY e Blue LED
- [ ] Gere o código, commit e push dos arquivos gerados;
- [ ] Crie um novo branch chamado new-feature;
- [ ] Adicione o código para piscar o LED!
- [ ] Commit e push dos arquivos gerados;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação

- [ ] Crie um repositório na organização chamado LAB03 - 10%
- [ ] Clone, crie e importe um projeto em branco - 20%
- [ ] Configure os periféricos - 20%
- [ ] Gere o código, commit e push dos arquivos gerados - 10%
- [ ] Crie um novo branch chamado new-feature - 10%
- [ ] Adicione o código para piscar o LED - 10%
- [ ] Commit, push e envie o link do repositório no GitHub (hyperlink) - 20%


## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

---

O debugger [ST-LINK/V2](/docs/st-link) possue um conector IDC de 10 pinos. A pinagem é descrita na figura a seguir.

![ST-LINK/V2 Clone](/img/ST-LINK_V2_Clone_Header.png)
