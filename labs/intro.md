---
sidebar_position: 1
title: Introdução
description: Introdução as aulas de laboratório
---

# Aulas de Laboratório

Organização para os templates: https://github.com/ELT73A-LAB-TPL

| Laboratório     | Data       | Conteúdo                                                        | Template                                         |
| --------------- | ---------- | --------------------------------------------------------------- | ------------------------------------------------ |
| [LAB00](#lab00) | 18/08/2025 | Apresentação da Disicplina; Materiais utilizados na disciplina; | [TPL00](https://github.com/ELT73A-LAB-TPL/LAB00) |
| [LAB01](#lab01) | 25/08/2025 | Revisão da programação em C; Ambiente de desenvolvimento;       | [TPL01](https://github.com/ELT73A-LAB-TPL/LAB01) |

## [LAB00](/labs/lab00)

Apresentação da Disicplina; Materiais utilizados na disciplina;

- [ ] Atividades de EaD e Lab;
- [ ] Ambiente de desenvolvimento;
- [ ] Crie uma organização no GitHub;
- [ ] Adicione os membros do seu grupo;
- [ ] Promova o professor como owner;
- [ ] Projeto Final;

## [LAB01](/labs/lab01)

Revisão da programação em C; Ambiente de desenvolvimento;

- Atividades de EaD e Lab;
- Ambiente de desenvolvimento;
- Materiais utilizados;
- Avaliações;
- Projeto Final;

## Projeto Final

## Git commands

How to config [git](https://git-scm.com/)

```bash
git config --global user.name "Your Name"
git config --global user.email yourmail@domain.tld
```

It's recommended to verify that the your Git installation is not performing any transformation between LFs and CRLFs.

```bash
git config --global core.autocrlf false
```

The `git config --list --show-origin` command lists all the Git configuration variables and their values, along with the file path where each setting is defined. This is useful for troubleshooting and understanding which configuration file is overriding another.

```bash
git config list --show-origin
```

## Running STM32CubeMX in command-line mode

- https://www.st.com/resource/en/user_manual/um1718-stm32cubemx-for-stm32-configuration-and-initialization-c-code-generation-stmicroelectronics.pdf

To run STM32CubeMX in interactive command-line mode, use the following command line:

```bash
"%STM32CubeMX_PATH%\jre\bin\java" -jar "%STM32CubeMX_PATH%\STM32CubeMX.exe" -i
```

To run STM32CubeMX in command-line mode, getting commands from a script, use the following command line:

```bash
"%STM32CubeMX_PATH%\jre\bin\java" -jar "%STM32CubeMX_PATH%\STM32CubeMX.exe" -s ScriptToLoad.txt
```

To run STM32CubeMX in command-line mode getting commands from a script and without UI, use the following command line:

```bash
"%STM32CubeMX_PATH%\jre\bin\java" -jar "%STM32CubeMX_PATH%\STM32CubeMX.exe" -q ScriptToLoad.txt
```

To generate a script

```bash
export script ScriptToLoad.txt
```

### Load STM32CubeMX Script

Call for Help (--help, -h, /?)

```bash
LoadMX --help
```

Run STM32CubeMX interactively

```bash
LoadMX -i
```

Opens STM32CubeMX and loads default values for Project Name, Script and Code Generation (STM32F411CEUx, BaseScript.txt and N)

```bash
LoadMX
```

Load with Project Name
Opens STM32CubeMX with provided Project Name and loads default values for Script and Code Generation (BaseScript.txt and N)

```bash
LoadMX ProjectName
```

Opens STM32CubeMX with provided Project Name and Script Name and loads default value for Code Generation (N)

```bash
LoadMX ProjectName ScriptName.txt
```

Opens STM32CubeMX with provided Project Name, Script Name and generate code

```bash
LoadMX ProjectName ScriptName.txt Y
```

## References

### STM32 Arm® Cortex® MCU wiki

- https://wiki.st.com/stm32mcu/

### MiniF4-STM32F401CEU6

- https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1

### STM32CubeF4 MCU Firmware Package

- https://github.com/STMicroelectronics/STM32CubeF4
- https://github.com/STMicroelectronics/STM32Cube_MCU_Overall_Offer

### STM32 Development Tools

- https://www.st.com/en/development-tools/stm32cubemx.html
- https://www.st.com/en/development-tools/stm32cubeclt.html
- https://www.st.com/en/development-tools/stm32cubeprog.html
