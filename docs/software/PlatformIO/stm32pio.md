---
id: platformio-stm32pio
title: stm32pio
sidebar_position: 4
description: Small cross-platform Python app that can create and update PlatformIO projects from STM32CubeMX .ioc files.
slug: /platformio-stm32pio
---

Small cross-platform Python app that can create and update PlatformIO projects from STM32CubeMX .ioc files. It uses STM32CubeMX to generate a HAL-framework-based code and alongside creates PlatformIO project with compatible parameters to stick them both together. Both CLI and GUI editions are available

- https://pypi.org/project/stm32pio/
- https://github.com/ussserrr/stm32pio

## Requirements

- [PlatformIO CLI](/docs/platformio-cli)
- [STM32CubeMX](/docs/stm32cubemx)

  
## Installation
```bash
pip install stm32pio
```

```bash
C:\Users\ruseler>pip install stm32pio
Collecting stm32pio
  Downloading stm32pio-2.1.2-py3-none-any.whl.metadata (8.9 kB)
Downloading stm32pio-2.1.2-py3-none-any.whl (76 kB)
Installing collected packages: stm32pio
Successfully installed stm32pio-2.1.2
```

## Usage

```bash
stm32pio
```

```bash
usage: stm32pio [-h] [--version] [-v] {init,generate,pio_init,patch,new,status,validate,clean,gui} ...

Small cross-platform Python app that can create and update PlatformIO projects from STM32CubeMX .ioc files. It uses STM32CubeMX to generate a HAL-framework-based code and alongside creates PlatformIO project
with compatible parameters to stick them both together. Both CLI and GUI editions are available. Visit https://github.com/ussserrr/stm32pio for more information. Use 'stm32pio [command] -h' to see help on
the particular command

options:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  -v, --verbose         enable verbose output (default level: INFO)

commands:
  valid commands

  {init,generate,pio_init,patch,new,status,validate,clean,gui}
                        available actions
    init                create config .INI file to check and tweak parameters before proceeding
    generate            generate CubeMX code only
    pio_init            create new compatible PlatformIO project
    patch               tweak the project so both CubeMX and PlatformIO could work together
    new                 generate CubeMX code, create PlatformIO project and glue them together
    status              inspect the project current state
    validate            verify current environment based on the config values
    clean               clean-up the project (by default, no files will be deleted immediately without your confirmation)
    gui                 start the graphical version of the application. All arguments will be passed forward, see its own --help for more information

No arguments were given, exiting...
```

## Examples

- [Command line interface usage](https://github.com/ussserrr/stm32pio/tree/master/examples/cli)