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


## VS Code
### Configuração do terminal
 
```json title="settings.json"
{
    // highlight-next-line
    "terminal.integrated.defaultProfile.windows": "PIO CLI",
    "terminal.integrated.profiles.windows": {
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": [],
            "icon": "terminal-cmd"
        },
        // highlight-start
        "PIO CLI": {
            "path": "cmd.exe",
            "args": [
                "/k",
                "${env:USERPROFILE}\\.platformio\\penv\\Scripts\\activate.bat && pio --version"
            ],
            "icon": "python",
            "overrideName": true
        }
        // highlight-end
    }
}
```

## STM32Cube HAL: debugging and unit testing
- [Tutorials and Examples](https://docs.platformio.org/en/latest/tutorials/index.html)
- [STM32Cube HAL and Nucleo-F401RE: debugging and unit testing](https://docs.platformio.org/en/latest/tutorials/ststm32/stm32cube_debugging_unit_testing.html)

### User Key
Toggle no LED interno:
```c title="src/main.h"
#ifndef MAIN_H
#define MAIN_H

#include "stm32f4xx_hal.h"

#define LED_PIN                                GPIO_PIN_13
#define LED_GPIO_PORT                          GPIOC
#define LED_GPIO_CLK_ENABLE()                  __HAL_RCC_GPIOC_CLK_ENABLE()

#endif // MAIN_H
```


### ADC1 na interrupção do Timer 2
Inicie o ADC1 na interrupção do Timer 2:
```c title="src/main.c"
#include "main.h"

void LED_Init();

int main(void)
{
  HAL_Init();
  LED_Init();

  while (1)
  {
    HAL_GPIO_TogglePin(LED_GPIO_PORT, LED_PIN);
    HAL_Delay(1000);
  }
}

void LED_Init()
{
  LED_GPIO_CLK_ENABLE();
  GPIO_InitTypeDef GPIO_InitStruct;
  GPIO_InitStruct.Pin = LED_PIN;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_PULLUP;
  GPIO_InitStruct.Speed = GPIO_SPEED_HIGH;
  HAL_GPIO_Init(LED_GPIO_PORT, &GPIO_InitStruct);
}

void SysTick_Handler(void)
{
  HAL_IncTick();
}
```

```ini title="platformio.ini"
[env:blackpill_f411ce]
platform = ststm32
board = blackpill_f411ce
framework = stm32cube
upload_protocol = stlink
debug_tool = stlink
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
