---
sidebar_position: 3
title: Laboratório 00
description: Introdução as aulas de laboratório
---

# Laboratório 00

- [Template 00](https://github.com/ELT73A-LAB-TPL/LAB00)

## Git commands

```bash
git --version
```

Configure a ferramenta

```bash
git config --global user.name "Your Name"
git config --global user.email yourmail@domain.tld
```

It's recommended to verify that the your Git installation is not performing any transformation between LFs and CRLFs.

```bash
git config --global core.autocrlf false
git config --global color.ui auto
git config --global init.defaultBranch main
```

Configure Git to use Visual Studio Code (VS Code) as the default editor for tasks like writing commit messages or interactive rebases

```bash
git config --global core.editor "code --wait"
```

```bash
git config --global -e
```

```bash
git config list --show-origin
```

## Folha de dicas

https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/

```c title="Core/Src/main.c"
  htim2.Instance = TIM2;
  htim2.Init.Prescaler = 3999;
  htim2.Init.CounterMode = TIM_COUNTERMODE_UP;
  htim2.Init.Period = 3999;
  htim2.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
  htim2.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_ENABLE;
```

```c title="MX_I2C1_Init"
  hi2c1.Instance = I2C1;
  hi2c1.Init.ClockSpeed = 100000;
  hi2c1.Init.DutyCycle = I2C_DUTYCYCLE_2;
  hi2c1.Init.OwnAddress1 = 0;
  hi2c1.Init.AddressingMode = I2C_ADDRESSINGMODE_7BIT;
  hi2c1.Init.DualAddressMode = I2C_DUALADDRESS_DISABLE;
  hi2c1.Init.OwnAddress2 = 0;
  hi2c1.Init.GeneralCallMode = I2C_GENERALCALL_DISABLE;
  hi2c1.Init.NoStretchMode = I2C_NOSTRETCH_DISABLE;
```

```c title="static void MX_I2C1_Init(void)"
  hi2c1.Instance = I2C1;
  hi2c1.Init.ClockSpeed = 100000;
  hi2c1.Init.DutyCycle = I2C_DUTYCYCLE_2;
  hi2c1.Init.OwnAddress1 = 0;
  hi2c1.Init.AddressingMode = I2C_ADDRESSINGMODE_7BIT;
  hi2c1.Init.DualAddressMode = I2C_DUALADDRESS_DISABLE;
  hi2c1.Init.OwnAddress2 = 0;
  hi2c1.Init.GeneralCallMode = I2C_GENERALCALL_DISABLE;
  hi2c1.Init.NoStretchMode = I2C_NOSTRETCH_DISABLE;
```
