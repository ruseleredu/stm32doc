---
sidebar_position: 6
title: Laboratório 03
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsApoio} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevToolsv2,GitConfig,STM32Toolsv2,GitCommit,NewBranch} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 03


<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={3} internal={false} />
</div>

---

## Conteúdo
Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);

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
- [ ] Teste de geração e compilação de projeto para o STM32F411CEUx;
- [ ] Teste de uso do [LoadMX](/docs/loadmx)
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação

- [ ] Crie um repositório na organização chamado LAB03 - 10%
- [ ] Clone, crie e importe um projeto em branco - 20%
- [ ] Configure os periféricos - 20%
- [ ] Gere o código, commit e push dos arquivos gerados - 10%
- [ ] Crie um novo branch chamado new-feature - 10%
- [ ] Adicione o código para piscar o LED - 10%
- [ ] Commit, push e envie o link do repositório no GitHub (hyperlink) - 20%

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevToolsv2 />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Toolsv2 />

## Crie um novo repositório com base no template do LAB03

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB03" opts="-c" />

<!-- Git Commit -->
<GitCommit />

## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

O debugger [ST-LINK/V2](/docs/st-link) possue um conector IDC de 10 pinos. A pinagem é descrita na figura a seguir.

![ST-LINK/V2 Clone](/img/ST-LINK_V2_Clone_Header.png)

---

## Edite o seu código

```c title="Core/Scr/main.c"
int main(void)
{

  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  /* USER CODE BEGIN 2 */

  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
  }
  /* USER CODE END 3 */
}
```

---

## Crie uma branch nova

<!-- Como criar uma nova branch -->
<NewBranch />


```c title="Core/Scr/main.c"
/* Infinite loop */
/* USER CODE BEGIN WHILE */
while (1)
{
  // highlight-next-line
  // Place your code HERE!
  /* USER CODE END WHILE */

  /* USER CODE BEGIN 3 */
  // highlight-next-line
  // Place your code HERE!
}
/* USER CODE END 3 */
```



```c title="Core/Scr/main.c"
/* Infinite loop */
/* USER CODE BEGIN WHILE */
while (1)
{
  // highlight-next-line
  HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
  HAL_Delay(100); /* Insert delay 100 ms */
  /* USER CODE END WHILE */

  /* USER CODE BEGIN 3 */
  // highlight-next-line
  // Place your code HERE!
}
/* USER CODE END 3 */
```


```c title="Core/Scr/main.c"
/* Infinite loop */
/* USER CODE BEGIN WHILE */
while (1)
{
  // highlight-start
  HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_RESET); // LED ON
  HAL_Delay(100); /* Insert delay 100 ms */
  HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_SET); // LED OFF
  HAL_Delay(100); /* Insert delay 100 ms */
  // highlight-end
  /* USER CODE END WHILE */

  /* USER CODE BEGIN 3 */
  // highlight-next-line
  // Place your code HERE!
}
/* USER CODE END 3 */
```


### Toggle with HAL_GPIO_WritePin and HAL_Delay
```c
// Toggle built-in LED attached to PC13
HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_RESET); // LED ON
HAL_Delay(100); /* Insert delay 100 ms */
HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_SET); // LED OFF
HAL_Delay(100); /* Insert delay 100 ms */
```

### Toggle with HAL_GPIO_TogglePin

```c
// Toggle built-in LED attached to PC13
HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
HAL_Delay(100); /* Insert delay 100 ms */
```

### Toggle with HAL_GPIO_WritePin if Button is pressed
```c
// If Button Is Pressed
if (HAL_GPIO_ReadPin(GPIOA, GPIO_PIN_0))
  HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_SET); // LED OFF
else
   HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_RESET); // LED ON
```




## Como carregar um script do STM32CubeMX

Call for Help (--help, -h, /?)

```bash
LoadMX --help
```

Run [STM32CubeMX](/docs/stm32cubemx) interactively with [LoadMX](/docs/loadmx)

```bash
LoadMX -i
```

To generate a script

```bash
export script ScriptToLoad.txt
```

```bash
LoadMX ProjectName FinalScript.txt
```

```bash
code ProjectName --profile "STM32"
```

```bash
code . --profile "STM32"
```

## Referências
- [MiniF4x1Cx_V31 SchDoc](/pdf/MiniF4x1Cx_V31.pdf)
- [STM32F411xC Datasheet](/pdf/DS10314.pdf)
- https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1
