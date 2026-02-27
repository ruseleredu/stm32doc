---
sidebar_position: 8
title: Laboratório 05
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsApoio} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';
import LabTable from '@site/src/components/LabTable';

# Laboratório 05

<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />

<!-- Tabela com link para atividade, inicio, fim e descrição do LAB! -->
<div style={{ display: "flex", justifyContent: "center" }}>
  <LabTable index={5} internal={false} />
</div>
---

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
- [ ] Teste de uso do [LoadMX](/docs/loadmx)

## Avaliação
- [ ] Uso do template e LoadMX - 20%
- [ ] Configuração dos periféricos 10%
- [ ] Código para piscar o LED via interrupção do User KEY - 10%
- [ ] Configuração do TIMER2 para 1s - 10%
- [ ] Código de configuração e leitura do ADC - 10%
- [ ] Código de atualização do PWM - 10%
- [ ] Link do repositório no GitHub (hyperlink) - 20%
  
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

Carregue o script do STM32CubeMX com [LoadMX](/docs/loadmx)

```bash
LoadMX TIM2EXTI0ADC1PWM TIM2EXTI0ADC1PWM.txt
```

## Diagrama de pinos do STM32F4x1

---

![STM32F4x1 microcontroller pinout diagram;](/img/MiniSTM32F4x1/STM32F4x1_PinoutDiagram_RichardBalint.png)

---


O debugger [ST-LINK/V2](/docs/st-link) possue um conector IDC de 10 pinos. A pinagem é descrita na figura a seguir.

![ST-LINK/V2 Clone](/img/ST-LINK_V2_Clone_Header.png)


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

## Como carregar um script do STM32CubeMX com [LoadMX](/docs/loadmx)

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

Generate code with TIM2 and EXT INT
```bash
LoadMX TIM2EXTI0 TIM2EXTI0.txt
```

Generate code with  TIM2, EXT INT and ADC1
```bash
LoadMX TIM2EXTI0ADC1 TIM2EXTI0ADC1.txt
```

Generate code with TIM2, EXT INT, ADC1 and PWM
```bash
LoadMX TIM2EXTI0ADC1PWM TIM2EXTI0ADC1PWM.txt
```

