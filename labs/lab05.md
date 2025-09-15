---
sidebar_position: 8
title: Laboratório 05
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 05

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={5} internal={false} />
</div>
---

## Conteúdo

DMA: Direct memory access (Acesso direto à memória);

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

## Crie um novo repositório com base no template do LAB05

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB05" opts="-c" />




## Instruções do LAB

Esta atividade de laboratório tem como objetivo configurar o TIM2, ADC e PWM do STM32. Cada item equivale a 10% da nota.

- [ ] Crie um repositório (LAB05) via template (https://github.com/ELT73A-LAB-TPL/LAB05) na organização e clone;
- [ ] Carregue o arquivo de configuração TIM2EXTI0ADC1PWM.txt
- [ ] Gere o código, commit e push dos arquivos gerados;
- [ ] Adicione o código para piscar o LED via interrupção do User KEY;
- [ ] Configure TIMER2 para 1s;
- [ ] Adicione o código de configuração do ADC;
- [ ] Adicione o código de leitura do ADC;
- [ ] Adicione o código de atualização do PWM;
- [ ] Commit e push dos arquivos modificados;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação
- [ ] Uso do template e LoadMX - 20%
- [ ] Configuração dos periféricos 10%
- [ ] Código para piscar o LED via interrupção do User KEY - 10%
- [ ] Configuração do TIMER2 para 1s - 10%
- [ ] Código de configuração e leitura do ADC - 10%
- [ ] Código de atualização do PWM - 10%
- [ ] Link do repositório no GitHub (hyperlink) - 20%

## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

---

