---
sidebar_position: 5
title: Laboratório 02
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {VerifyDev2,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';

# Laboratório 02

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

| Template                                               | start/open  | end/close   | Conteúdo                                             |
| ------------------------------------------------------ | ----------- | ----------- | ---------------------------------------------------- |
| [Template 02](https://github.com/ELT73A-LAB-TPL/LAB02) | 01-Sep-2025 | 08-Sep-2025 | Processo de compilação, gravação e commit de código; |

---

Processo de compilação, gravação e commit de código;

- [ ] Atividades de EaD e Lab;
- [ ] Ambiente de desenvolvimento;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;
- [ ] Projeto Final;

## Crie um novo repositório com base no template do LAB02

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB02" opts="-c" />

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Instalação do VScode e extensão para o STM32

<iframe width="560" height="315" src="https://www.youtube.com/embed/a5A4wAYuuOY?si=78Cd1dAWLqcsN9oG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```bash
code --list-extensions --profile "STM32"
```

```json title=".vscode/extensions.json"
{
  "recommendations": [
    "dan-c-underwood.arm",
    "jeff-hykin.better-cpp-syntax",
    "marus25.cortex-debug",
    "mcu-debug.debug-tracker-vscode",
    "mcu-debug.memory-view",
    "mcu-debug.peripheral-viewer",
    "mcu-debug.rtos-views",
    "ms-vscode.cmake-tools",
    "ms-vscode.cpptools",
    "ms-vscode.cpptools-extension-pack",
    "ms-vscode.cpptools-themes",
    "ms-vscode.hexeditor",
    "pkief.material-icon-theme",
    "stmicroelectronics.stm32-vscode-extension",
    "trond-snekvik.gnu-mapfiles",
    "twxs.cmake",
    "yzhang.markdown-all-in-one",
    "zixuanwang.linkerscript"
  ]
}
```

```json title=".vscode/settings.json"
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "ms-vscode.cpptools",
  "editor.formatOnPaste": true,
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "workbench.iconTheme": "material-icon-theme",
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "cmake.options.statusBarVisibility": "visible"
}
```

```json title=".vscode/launch.json"
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Build & Debug Microcontroller - ST-Link",
      "cwd": "${workspaceFolder}",
      "type": "cortex-debug",
      "executable": "${command:cmake.launchTargetPath}",
      // Let CMake extension decide executable: "${command:cmake.launchTargetPath}"
      // Or fixed file path: "${workspaceFolder}/path/to/filename.elf"
      "request": "launch",
      "servertype": "stlink",
      "device": "STM32F411CEUx", //MCU used
      "interface": "swd",
      "serialNumber": "", //Set ST-Link ID if you use multiple at the same time
      "runToEntryPoint": "main",
      "svdFile": "${config:STM32VSCodeExtension.cubeCLT.path}/STMicroelectronics_CMSIS_SVD/STM32F411.svd",
      "v1": false, //Change it depending on ST Link version
      "serverpath": "${config:STM32VSCodeExtension.cubeCLT.path}/STLink-gdb-server/bin/ST-LINK_gdbserver",
      "stm32cubeprogrammer": "${config:STM32VSCodeExtension.cubeCLT.path}/STM32CubeProgrammer/bin",
      "stlinkPath": "${config:STM32VSCodeExtension.cubeCLT.path}/STLink-gdb-server/bin/ST-LINK_gdbserver",
      "armToolchainPath": "${config:STM32VSCodeExtension.cubeCLT.path}/GNU-tools-for-STM32/bin",
      "gdbPath": "${config:STM32VSCodeExtension.cubeCLT.path}/GNU-tools-for-STM32/bin/arm-none-eabi-gdb",
      "serverArgs": ["-m", "0"]
      //"preLaunchTask": "Build + Flash"
      /* If you use external loader, add additional arguments */
      //"serverArgs": ["--extload", "path/to/ext/loader.stldr"],
    },
    {
      "name": "Attach to Microcontroller - ST-Link",
      "cwd": "${workspaceFolder}",
      "type": "cortex-debug",
      "executable": "${command:cmake.launchTargetPath}",
      // Let CMake extension decide executable: "${command:cmake.launchTargetPath}"
      // Or fixed file path: "${workspaceFolder}/path/to/filename.elf"
      "request": "attach",
      "servertype": "stlink",
      "device": "STM32F411CEUx", //MCU used
      "interface": "swd",
      "serialNumber": "", //Set ST-Link ID if you use multiple at the same time
      "runToEntryPoint": "main",
      "svdFile": "${config:STM32VSCodeExtension.cubeCLT.path}/STMicroelectronics_CMSIS_SVD/STM32F411.svd",
      "v1": false, //Change it depending on ST Link version
      "serverpath": "${config:STM32VSCodeExtension.cubeCLT.path}/STLink-gdb-server/bin/ST-LINK_gdbserver",
      "stm32cubeprogrammer": "${config:STM32VSCodeExtension.cubeCLT.path}/STM32CubeProgrammer/bin",
      "stlinkPath": "${config:STM32VSCodeExtension.cubeCLT.path}/STLink-gdb-server/bin/ST-LINK_gdbserver",
      "armToolchainPath": "${config:STM32VSCodeExtension.cubeCLT.path}/GNU-tools-for-STM32/bin",
      "gdbPath": "${config:STM32VSCodeExtension.cubeCLT.path}/GNU-tools-for-STM32/bin/arm-none-eabi-gdb",
      "serverArgs": ["-m", "0"]
      /* If you use external loader, add additional arguments */
      //"serverArgs": ["--extload", "path/to/ext/loader.stldr"],
    }
  ]
}
```
