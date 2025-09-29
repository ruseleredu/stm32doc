---
sidebar_position: 7
title: Laboratório 04
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 04

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={4} internal={false} />
</div>
---


## Instruções do LAB

Esta atividade de laboratório tem como objetivo verificar a interrupção via GPIO com User KEY e interrupção via TIMER 2 do STM32. Cada item equivale a 10% da nota.

- [ ] Crie um repositório na organização chamado LAB04 e clone para a sua máquina local;
- [ ] Crie e importe um projeto em branco;
- [ ] Configure SYS Debug para Serial Wire e RCC Clock;
- [ ] Configure User KEY e Blue LED;
- [ ] Configure TIMER2 para 1s;
- [ ] Gere o código, commit e push dos arquivos gerados;
- [ ] Adicione o código para piscar o LED via interrupção do User KEY!
- [ ] Adicione o código para piscar o LED via interrupção do TIM2!
- [ ] Commit e push dos arquivos gerados;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação

- [ ] Repositório criado no GitHub - 10%
- [ ] Configuração dos periféricos - 20%
- [ ] Configuração do TIMER2 para 1s - 20%
- [ ] Código para piscar o LED via interrupção do User KEY -15%
- [ ] Código para piscar o LED via interrupção do TIM2 - 15%
- [ ] Link do repositório no GitHub (hyperlink) - 20%

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevTools />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Crie um novo repositório com base no template do LAB04

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB04" opts="-c" />

Generate code with TIM2 and EXT INT
```bash
LoadMX TIM2EXTI0 TIM2EXTI0.txt
```

## Como fazer commit da atualizações
Verifique o status do repositório
```bash
git status
```
Adicione os arquivos modificados
```bash
git add .
```
Realize o commit das alterações
```bash
git commit -m "My message for this commit!"
```
Envie para o repositório remoto (GitHub)
```bash
git push
```
Vizualize o log de alterações
```bash
git log
```

## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

---


O debugger [ST-LINK/V2](/docs/st-link) possue um conector IDC de 10 pinos. A pinagem é descrita na figura a seguir.

![ST-LINK/V2 Clone](/img/ST-LINK_V2_Clone_Header.png)


### Using GPIO EXTI0 Interrupt to Toggle BLUE LED Flag on WeActStudio STM32F411CEU6 board

Learn how to use the GPIO EXTI0 interrupt feature on the STM32F411CEU6 microcontroller to toggle a flag that controls a BLUE LED. This step-by-step guide covers configuring the GPIO pin, setting up the external interrupt, and writing the interrupt handler to efficiently manage LED toggling. Ideal for beginners and hobbyists working on STM32-based projects.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1yOwjK1VTw0?si=6uM4VFDyQ1gFk6GS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



Inicialize o Timer 2 com suporte a rotina de interrupção:
```c title="Src/main.c"
  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_TIM2_Init();
  /* USER CODE BEGIN 2 */
  // highlight-next-line
  HAL_TIM_Base_Start_IT(&htim2);
  /* USER CODE END 2 */
```

Toggle no LED interno via interrupção do User Key:
```c title="Src/stm32f4xx_it.c"
void EXTI0_IRQHandler(void)
{
  /* USER CODE BEGIN EXTI0_IRQn 0 */

  /* USER CODE END EXTI0_IRQn 0 */
  HAL_GPIO_EXTI_IRQHandler(User_KEY_EXTI0_Pin);
  /* USER CODE BEGIN EXTI0_IRQn 1 */
  // highlight-next-line
  HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
  /* USER CODE END EXTI0_IRQn 1 */
}
```

Toggle no LED interno via interrupção do Timer 2 (1s):
```c title="Src/stm32f4xx_it.c"
void TIM2_IRQHandler(void)
{
  /* USER CODE BEGIN TIM2_IRQn 0 */

  /* USER CODE END TIM2_IRQn 0 */
  HAL_TIM_IRQHandler(&htim2);
  /* USER CODE BEGIN TIM2_IRQn 1 */
  // highlight-next-line
  HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
  /* USER CODE END TIM2_IRQn 1 */
}
```



## Como carregar um script do STM32CubeMX

Call for Help (--help, -h, /?)

```bash
LoadMX --help
```

Run STM32CubeMX interactively with [LoadMX](/docs/loadmx)

```bash
LoadMX -i
```

To generate a script

```bash
export script ScriptToLoad.txt
```