---
sidebar_position: 11
title: Laboratório 08
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsApoio} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools,DevToolsv2,STM32Toolsv2} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 08

<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={8} internal={false} />
</div>

---

## Conteúdo

Uso do STM32CubeMonitor; InfluxDB;

- [ ] Crie uma conta no [my.st.com](https://www.st.com/content/st_com/en/user-registration.html);
- [ ] Instale o [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html#get-software);
- [ ] Instale o [ST-MCU-Finder](https://www.st.com/en/development-tools/st-mcu-finder-pc.html#get-software);
- [ ] Instale o [STM32CubeProg](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software);
- [ ] Crie um perfil no Visual Studio Code chamado `STM32`;
- [ ] Instale [STM32Cube para Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension);
- [ ] Configure o Visual Studio Code;
- [ ] Teste de geração e compilação de projeto para o STM32F411CEUx;
- [ ] Teste de uso do [LoadMX](/docs/loadmx)

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevToolsv2 />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Toolsv2 />

## Crie um novo repositório com base no template do LAB08

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB08" opts="-c" />

## Instruções do LAB

Esta atividade de laboratório tem como objetivo utilizar o InfluxDB e STM32CubeMonitor. Cada item equivale a 10% da nota.

- [ ] Crie um repositório (LAB08) via template (https://github.com/ELT73A-LAB-TPL/LAB08) na organização e clone;
- [ ] Importe e compile o código da pasta TIM2EXTI0ADC1PWMDMA
- [ ] Verifique a configuração dos periféricos;
- [ ] Configure o executável e probes no STM32CubeMonitor;
- [ ] Deploy e Dashboard no STM32CubeMonitor;
- [ ] Configure o InfluxDB no Node-RED;
- [ ] Teste de injeção de dados no InfluxDB;
- [ ] Leitura do ADC e injeção de dados no InfluxDB;
- [ ] Commit e push do Node-RED export flow;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação
- [ ] Uso do template e código - 20%
- [ ] Configuração do STM32CubeMonitor - 20%
- [ ] Configuração e teste do InfluxDB - 20%
- [ ] Leitura do ADC e injeção de dados no InfluxDB - 20%
- [ ] Commit e push do Node-RED export flow - 20%
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


## STM32CubeMonitor 
### InfluxDB Inject Test

```javascript
let adc1Value = Math.floor(Math.random()*4096); 
let adc2Value = Math.floor(Math.random()*4096); 

msg.topic = "InfluxData"
msg.payload = {
    "adc1in1": adc1Value,
    "voltage1": (adc1Value * 3.3) / 4095,
    "adc1in2": adc2Value,
    "voltage2": (adc2Value * 3.3) / 4095,
    "blueled": Math.round(Math.random())
}
return msg;
```

### InfluxDB Query Test
```sql
from(bucket: "Grupo-X")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_measurement"] == "test")
  |> filter(fn: (r) => r["_field"] == "adc1in1" or r["_field"] == "adc1in2" or r["_field"] == "blueled" or r["_field"] == "voltage1" or r["_field"] == "voltage2")
  |> last()
```

```javascript
let adc1Value = msg.payload[0]._value;
let adc2Value = msg.payload[1]._value;
let led = msg.payload[2]._value;
let vol1 = msg.payload[3]._value;
let vol2 = msg.payload[4]._value;

msg.topic = "InfluxData"
msg.payload = {
    "adc1in1": adc1Value,
    "voltage1": vol1,
    "adc1in2": adc2Value,
    "voltage2": vol2,
    "blueled": led
}
return msg;
```

