---
sidebar_position: 9
title: Laboratório 06
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsApoio} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 06

<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={6} internal={false} />
</div>

---

## Conteúdo

Uso do STM32CubeMonitor; Visualização de variáveis;

- [ ] Verifique sua conta no [my.st.com](https://www.st.com/content/st_com/en/user-registration.html);
- [ ] Instale o [STM32CubeMonitor](https://www.st.com/en/development-tools/stm32cubemonitor.html#get-software);
- [ ] Instale o [Node.js](https://nodejs.org/en/download/current);
- [ ] Instale o [STM32CubeProg](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software);


## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevTools />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Crie um novo repositório com base no template do LAB06

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB06" opts="-c" />




## Instruções do LAB

Esta atividade de laboratório tem como objetivo utilizar o STM32CubeMonitor. Cada item equivale a 10% da nota.

- [ ] Crie um repositório (LAB06) via template (https://github.com/ELT73A-LAB-TPL/LAB06) na organização e clone;
- [ ] Importe e compile o código da pasta TIM2EXTI0ADC1PWM
- [ ] Verifique a configuração dos periféricos;
- [ ] Verifique o STM32CubeMonitor;
- [ ] Configure o executável e probes no STM32CubeMonitor;
- [ ] Deploy e Dashboard no STM32CubeMonitor;
- [ ] Adicione Write Panel para a variável BLUELED;
- [ ] Adicione Single value para o LED;
- [ ] Commit e push do Node-RED export flow;
- [ ] Envie o link do repositório no GitHub (hyperlink);

## Avaliação
- [ ] Uso do template e código - 30%
- [ ] Configuração do STM32CubeMonitor - 20%
- [ ] Write Panel para a variável BLUELED - 10%
- [ ] Single value para o LED - 10%
- [ ] Commit e push do Node-RED export flow - 10%
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