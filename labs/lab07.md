---
sidebar_position: 10
title: Laboratório 07
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 07

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={7} internal={false} />
</div>

---

## Conteúdo

Uso do STM32CubeMonitor; MQTT, IoT;

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

## Crie um novo repositório com base no template do LAB07

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB07" opts="-c" />



## Instruções do LAB

Esta atividade de laboratório tem como objetivo utilizar o DMA, MQTT e STM32CubeMonitor. Cada item equivale a 10% da nota.

- [ ] Crie um repositório (LAB07) via template (https://github.com/ELT73A-LAB-TPL/LAB07) na organização e clone;
- [ ] Importe e compile o código da pasta TIM2EXTI0ADC1PWMDMA
- [ ] Verifique a configuração dos periféricos;
- [ ] Configure o executável e probes no STM32CubeMonitor;
- [ ] Configure o MQTT no Node-RED;
- [ ] Teste de injeção de dados no MQTT;
- [ ] Comfiguração do APP para MQTT;
- [ ] Acionamento do LED via MQTT;
- [ ] Commit e push do Node-RED export flow;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação
- [ ] Uso do template e código - 20%
- [ ] Configuração do STM32CubeMonitor - 20%
- [ ] Configuração e teste do MQTT - 20%
- [ ] Comfiguração do APP e acionamento do LED - 20%
- [ ] Commit e push do Node-RED export flow - 20%
- [ ] Link do repositório no GitHub (hyperlink) - 10%
  
## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

---
