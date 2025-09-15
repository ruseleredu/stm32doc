---
title: Toggle built-in LED attached to PC13
sidebar_label: Toggle built-in LED
description: Code snipptes to toggle a LED.
---

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

