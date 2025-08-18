---
id: loadmx
title: LoadMX
description: Load STM32CubeMX Script.
slug: /loadmx
---

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
