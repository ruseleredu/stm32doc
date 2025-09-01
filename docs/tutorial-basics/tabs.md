---
id: tabs
sidebar_position: 2
title: Tabs examples
slug: /tabs
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import { STM32Tools } from '@site/src/components/InstructionsSite';

<!-- List of STM32Cube Tools -->
<STM32Tools />

<Tabs>
  <TabItem value="STM32CubeMX" label="STM32CubeMX" default>
  **STM32Cube initialization code generator.**
 - [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html) is a graphical tool that allows a very easy configuration of STM32 microcontrollers and microprocessors, as well as the generation of the corresponding initialization C code for the Arm® Cortex®-M core or a partial Linux® Device Tree for Arm® Cortex®-A core, through a step-by-step process.
  </TabItem>
    <TabItem value="STM32CubeCLT" label="STM32CubeCLT">
    **STM32CubeCLT is an all-in-one multi-OS command-line toolset, which is part of the STM32Cube ecosystem.**
   - [STM32CubeCLT](https://www.st.com/en/development-tools/stm32cubeclt.html) includes GNU C/C++ for Arm® toolchain executables, GDB debugger, and STM32CubeProgrammer (STM32CubeProg) utility. It provides system view descriptors for the entire STM32 MCU portfolio and associate each STM32 MCU and development board with the appropriate SVD.
  </TabItem>
  <TabItem value="ST-MCU-FINDER" label="ST-MCU-FINDER">
  **STM32 and STM8 product finder for desktops.**
    - [ST-MCU-FINDER-PC](https://www.st.com/en/development-tools/st-mcu-finder-pc.html) allows exploring and connecting to the complete portfolio of STM32 Arm® Cortex®-M, STM32 Arm® Cortex®-A7, and STM8 microcontrollers, microprocessors, development boards and examples directly from the developer’s desktop environment.
  </TabItem>
  <TabItem value="STM32CubeProg" label="STM32CubeProg">
    **STM32CubeProg is an all-in-one multi-OS software tool for programming STM32 products.**
    - [STM32CubeProg](https://www.st.com/en/development-tools/stm32cubeprog.html) provides an easy-to-use and efficient environment for reading, writing, and verifying device memory through both the debug interface (JTAG and SWD) and the bootloader interface (UART and USB DFU, I2C, SPI, and CAN). STM32CubeProgrammer is delivered in GUI (graphical user interface) and CLI (command-line interface) versions.
  </TabItem>
  <TabItem value="STM32CubeMonitor" label="STM32CubeMonitor">
    **Monitoring tool to test STM32 applications at run-time.**
    - [STM32CubeMonitor](https://www.st.com/en/development-tools/stm32cubemonitor.html) family of tools helps to fine-tune and diagnose STM32 applications at run-time by reading and visualizing their variables in real-time. With non-intrusive monitoring, STM32CubeMonitor preserves the real-time behavior of applications, and perfectly complements traditional debugging tools to perform application profiling.
  </TabItem>
    <TabItem value="STM32CubeIDE" label="STM32CubeIDE">
    **Integrated Development Environment for STM32.**
    - [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)  is an advanced C/C++ development platform with peripheral configuration, code generation, code compilation, and debug features for STM32 microcontrollers and microprocessors. It is based on the Eclipse®/CDT™ framework and GCC toolchain for the development, and GDB for the debugging.
  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="vscode" label="VS Code">
   - [VS Code](https://code.visualstudio.com/)
   - [STM32Cube for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension)
  ```bash
winget install -e --id Microsoft.VisualStudioCode
```
  </TabItem>
  <TabItem value="git" label="Git" default>
    - [git](https://git-scm.com/) 
```bash
winget install -e --id Git.Git
```
  </TabItem>
    <TabItem value="gh" label="GitHub CLI">
    - [GitHub CLI](https://cli.github.com/)
```bash
winget install --id GitHub.cli
```
  </TabItem>
</Tabs>

```bash
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
```

<details>
<summary>Descrição aqui com tabela de opções...</summary>

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

</details>

<details>
<summary>Descrição aqui com tabela de opções e código...</summary>

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="github-cli" label="GitHub CLI">
    ```bash
gh auth login
```
  </TabItem>
</Tabs>

</details>

<details>
<summary>Descrição aqui com código...</summary>

```bash
gh auth login
```

</details>
