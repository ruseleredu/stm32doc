---
sidebar_position: 12
title: Laboratório 09
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {STM32Toolsv2,GitConfig,DevToolsv2} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 09

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={9} internal={false} />
</div>

---

## Conteúdo

Introdução ao uso do [PlatformIO](/docs/platformio-intro);

- [ ] Crie um perfil no Visual Studio Code chamado `STM32IO`;
- [ ] Instale o [PlatformIO IDE for VSCode](https://platformio.org/install/ide?install=vscode);
- [ ] Configure o Visual Studio Code;
- [ ] Configure o [PlatformIO Core](https://platformio.org/install/cli);
- [ ] Edite a variável de ambiente `Path` e adicione `%USERPROFILE%\.platformio\penv\Scripts\`;
- [ ] Instale os drivers for [ST-LINK](https://docs.platformio.org/en/latest/plus/debug-tools/stlink.html#debugging-tool-stlink) debug tool
- [ ] Teste de geração e compilação de projeto para o STM32F411CEUx;


## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevToolsv2 />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Toolsv2 />

## Crie um novo repositório com base no template do LAB09

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB09" opts="-c" />


## Instruções do LAB

Esta atividade de laboratório tem como objetivo utilizar o FreeRTOS. Cada item equivale a 10% da nota.

- [ ] Crie um repositório (LAB09) via template (https://github.com/ELT73A-LAB-TPL/LAB09) na organização e clone;
- [ ] Importe e compile o código da pasta TIM2EXTI0ADC1PWMDMARTOS
- [ ] Verifique a configuração dos periféricos;
- [ ] Verifique o breakpoint EXTI0;
- [ ] Verifique a leitura dos ADCs uso das filas (Queues);
- [ ] Verifique a operação das tarefas (Tasks);
- [ ] Verifique a operação do Mutex e Semaphores;
- [ ] Verifique a operação do Event flags;
- [ ] Verifique a operação do PWM;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação
- [ ] Uso do template e código - 20%
- [ ] Verificação do FreeRTOS - 70%
- [ ] Link do repositório no GitHub (hyperlink) - 10%


## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

---


## User Code
### Timer 2 com interrupção e saída PWM no canal 1
Inicialize o Timer 2 com suporte a rotina de interrupção e saída PWM no canal 1:
```c title="Src/main.c"
  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_ADC1_Init();
  MX_TIM2_Init();
  /* USER CODE BEGIN 2 */
  // highlight-next-line
  HAL_TIM_PWM_Start_IT(&htim2,TIM_CHANNEL_1);
  /* USER CODE END 2 */
```


### User Key
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

### ADC1 na interrupção do Timer 2
Inicie o ADC1 na interrupção do Timer 2:
```c title="Src/stm32f4xx_it.c"
void TIM2_IRQHandler(void)
{
  /* USER CODE BEGIN TIM2_IRQn 0 */

  /* USER CODE END TIM2_IRQn 0 */
  HAL_TIM_IRQHandler(&htim2);
  /* USER CODE BEGIN TIM2_IRQn 1 */
  // highlight-next-line
  HAL_ADC_Start_IT(&hadc1);
  /* USER CODE END TIM2_IRQn 1 */
}
```

### Leitura do AN1 e atualização do valor de comparação do PWM
Na interrupção do ADC1, faça a leitura do AN1 e atualize o valor de comparação do PWM:  
TIM2->CCR1 = HAL_ADC_GetValue(&hadc1);


```c title="Src/stm32f4xx_it.c"
void ADC_IRQHandler(void)
{
  /* USER CODE BEGIN ADC_IRQn 0 */

  /* USER CODE END ADC_IRQn 0 */
  HAL_ADC_IRQHandler(&hadc1);
  /* USER CODE BEGIN ADC_IRQn 1 */
  // highlight-next-line
  TIM2->CCR1 = HAL_ADC_GetValue(&hadc1);
  /* USER CODE END ADC_IRQn 1 */
}
```

### Tratamento do sinal de leitura do AN1

```c title="Src/stm32f4xx_it.c"
void ADC_IRQHandler(void)
{
  /* USER CODE BEGIN ADC_IRQn 0 */
  // highlight-start
  uint16_t adc1in1;
  float voltage;
  // highlight-end
  /* USER CODE END ADC_IRQn 0 */
  HAL_ADC_IRQHandler(&hadc1);
  /* USER CODE BEGIN ADC_IRQn 1 */
  // highlight-start
  adc1in1 = HAL_ADC_GetValue(&hadc1);
  voltage = (adc1in1*3.3)/4095;
  // highlight-end
  /* USER CODE END ADC_IRQn 1 */
}
```
