---
id: loadmx
title: LoadMX
description: Load STM32CubeMX Script.
slug: /loadmx
---

https://github.com/ELT73A-LAB-TPL/CubeMX

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

## Como carregar um script do STM32CubeMX

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
