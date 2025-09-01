---
sidebar_position: 5
title: Laboratório 02
description: Introdução as aulas de laboratório
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {LABsIncomplete} from '@site/src/components/AvisosSite';
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import {DevTools,GitConfig,STM32Tools} from '@site/src/components/InstructionsSite';

# Laboratório 02

<!-- Aviso de que este conteúdo está em construção! -->
<LABsIncomplete />

| Template                                               | start/open  | end/close   | Conteúdo                                             |
| ------------------------------------------------------ | ----------- | ----------- | ---------------------------------------------------- |
| [Template 02](https://github.com/ELT73A-LAB-TPL/LAB02) | 01-Sep-2025 | 08-Sep-2025 | Processo de compilação, gravação e commit de código; |

---

## Conteúdo

Processo de compilação, gravação e commit de código;

- [ ] Crie uma conta no [my.st.com](https://www.st.com/content/st_com/en/user-registration.html);
- [ ] Instale o [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html#get-software);
- [ ] Instale o [STM32CubeCLT](https://www.st.com/en/development-tools/stm32cubeclt.html#get-software);
- [ ] Instale o [ST-MCU-Finder](https://www.st.com/en/development-tools/st-mcu-finder-pc.html#get-software);
- [ ] Instale o [STM32CubeProg](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software);
- [ ] Crie um perfil no Visual Studio Code chamado `STM32`;
- [ ] Instale [STM32Cube para Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension);
- [ ] Configure o Visual Studio Code;
- [ ] Teste de geração e compilação de projeto para o STM32F411CEUx;
- [ ] Teste de uso do [LoadMX](/docs/loadmx)

## Verifique o seu ambiente de desenvolvimento

<!-- List of Dev Tools -->
<DevTools />

<!-- Configure o git -->
<GitConfig />

---

<!-- List of STM32Cube Tools -->
<STM32Tools />

## Crie um novo repositório com base no template do LAB02

Escolha o Grupo e entre com o comando abaixo para criar o repositório no GitHub:

<!-- Gera instruções para criar o repositório no GitHub por grupo com base no template do laboratório. -->
<LabFromTemplate labNumber="LAB02" opts="-c" />

## Instalação do VScode e extensão para o STM32

<iframe width="560" height="315" src="https://www.youtube.com/embed/a5A4wAYuuOY?si=78Cd1dAWLqcsN9oG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```bash
code --list-extensions --profile "STM32"
```

<details>
 <summary>Recomendações de extensões e configurações para o VS Code.</summary>
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

</details>
