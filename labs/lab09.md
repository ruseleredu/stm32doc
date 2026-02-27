---
sidebar_position: 12
title: Laboratório 09
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsApoio} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {STM32Toolsv2,GitConfig,DevToolsv2} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 09

<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />

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

Esta atividade de laboratório tem como objetivo utilizar o PlatformIO. Cada item equivale a 10% da nota.

- [ ] Crie um perfil no Visual Studio Code chamado `STM32IO`;
- [ ] Instale o [PlatformIO IDE for VSCode](https://platformio.org/install/ide?install=vscode);
- [ ] Configure o Visual Studio Code;
- [ ] Configure o [PlatformIO Core](https://platformio.org/install/cli);
- [ ] Edite a variável de ambiente `Path` e adicione `%USERPROFILE%\.platformio\penv\Scripts\`;
- [ ] Instale os drivers for [ST-LINK](https://docs.platformio.org/en/latest/plus/debug-tools/stlink.html#debugging-tool-stlink) debug tool
- [ ] Envie o link do repositório no GitHub (hyperlink);


## Avaliação
- [ ] Uso do template e código - 20%
- [ ] Verificação do PLatformIO - 70%
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

### Pisca LED
Definição do pino no arquivo main.h
```c title="src/main.h"
#ifndef MAIN_H
#define MAIN_H

#include "stm32f4xx_hal.h"

#define LED_PIN                                GPIO_PIN_13
#define LED_GPIO_PORT                          GPIOC
#define LED_GPIO_CLK_ENABLE()                  __HAL_RCC_GPIOC_CLK_ENABLE()

#endif // MAIN_H
```

Inicie LED_Init:
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
// highlight-start
upload_protocol = stlink
debug_tool = stlink
// highlight-end
```


## Arduino


Inicie LED_Init:
```c title="src/main.c"
#include <Arduino.h>

#ifndef LED_BUILTIN
  #define LED_BUILTIN PC13
#endif

void setup()
{
  // initialize LED digital pin as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  // turn the LED on (HIGH is the voltage level)
  digitalWrite(LED_BUILTIN, HIGH);
  // wait for a second
  delay(1000);
  // turn the LED off by making the voltage LOW
  digitalWrite(LED_BUILTIN, LOW);
   // wait for a second
  delay(1000);
}

```
 
```ini title="platformio.ini"
[env:blackpill_f411ce]
platform = ststm32
board = blackpill_f411ce
framework = arduino
// highlight-start
upload_protocol = stlink
debug_tool = stlink
// highlight-end
```



## Frameworks
- [STM32F411CE (128k RAM. 512k Flash)](https://docs.platformio.org/en/latest/boards/ststm32/genericSTM32F411CE.html) 
  
| Name                                                                                                |                                                                                                                                                 Description                                                                                                                                                 |
| :-------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [Arduino](https://docs.platformio.org/en/latest/frameworks/arduino.html#framework-arduino)          |                                      Arduino Wiring-based Framework allows writing cross-platform software to control devices attached to a wide range of Arduino boards to create all kinds of creative coding, interactive objects, spaces or physical experiences.                                       |
| [CMSIS](https://docs.platformio.org/en/latest/frameworks/cmsis.html#framework-cmsis)                |                                                                                                               Vendor-independent hardware abstraction layer for the Cortex-M processor series                                                                                                               |
| [LibOpenCM3](https://docs.platformio.org/en/latest/frameworks/libopencm3.html#framework-libopencm3) |                                                                                              The libopencm3 project aims to create an open-source firmware library for various ARM Cortex-M microcontrollers.                                                                                               |
| [STM32Cube](https://docs.platformio.org/en/latest/frameworks/stm32cube.html#framework-stm32cube)    | STM32Cube embedded software libraries, including: The HAL hardware abstraction layer, enabling portability between different STM32 devices via standardized API calls; The Low-Layer (LL) APIs, a light-weight, optimized, expert oriented set of APIs designed for both performance and runtime efficiency |
