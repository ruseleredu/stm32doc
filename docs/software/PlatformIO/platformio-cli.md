---
id: platformio-cli
title: PlatformIO Core (CLI)
sidebar_position: 2
description: PlatformIO Core (CLI tool) is the heart of the entire PlatformIO ecosystem.
slug: /platformio-cli
---

- https://docs.platformio.org/en/latest/core/index.html
- https://platformio.org/install/cli
- https://docs.platformio.org/en/latest/core/installation/index.html


## CLI Guide
- https://docs.platformio.org/en/latest/core/userguide/index.html#piocore-userguide
  
### pio boards
- https://docs.platformio.org/en/latest/core/userguide/cmd_boards.html#cmd-boards
  
```bash
pio boards --installed
```

```bash
pio boards ststm32
```

```bash
pio boards pio boards STM32F411CEU6
```

```bash
Platform: ststm32
=========================================================================================================
ID                  MCU            Frequency    Flash    RAM    Name
------------------  -------------  -----------  -------  -----  -----------------------------------------
pybstick26_std      STM32F411CEU6  100MHz       512KB    128KB  PYBStick Standard 26
genericSTM32F411CE  STM32F411CEU6  100MHz       512KB    128KB  STM32F411CE (128k RAM. 512k Flash)
thunder_pack_f411   STM32F411CEU6  100MHz       512KB    128KB  ThunderPack v1.1+
blackpill_f411ce    STM32F411CEU6  100MHz       512KB    128KB  WeAct Studio BlackPill V2.0 (STM32F411CE)
```

```bash
pio boards pio boards STM32F411CEU6 --json-output
```

```json
[{"id": "pybstick26_std", "name": "PYBStick Standard 26", "platform": "ststm32", "mcu": "STM32F411CEU6", "fcpu": 100000000, "ram": 131072, "rom": 524288, "frameworks": ["arduino", "cmsis", "stm32cube", "libopencm3"], "vendor": "PYBStick", "url": "https://shop.mchobby.be/fr/micropython/1844-pybstick-standard-26-micropython-et-arduino-3232100018440-garatronic.html", "connectivity": ["can"], "debug": {"tools": {"blackmagic": {}, "jlink": {}, "stlink": {}, "cmsis-dap": {}}}}, {"id": "genericSTM32F411CE", "name": "STM32F411CE (128k RAM. 512k Flash)", "platform": "ststm32", "mcu": "STM32F411CEU6", "fcpu": 100000000, "ram": 131072, "rom": 524288, "frameworks": ["arduino", "cmsis", "stm32cube", "libopencm3"], "vendor": "Generic", "url": "https://www.st.com/en/microcontrollers-microprocessors/stm32f411ce.html", "debug": {"tools": {"blackmagic": {}, "jlink": {}, "stlink": {}}}}, {"id": "thunder_pack_f411", "name": "ThunderPack v1.1+", "platform": "ststm32", "mcu": "STM32F411CEU6", "fcpu": 100000000, "ram": 131072, "rom": 524288, "frameworks": ["arduino", "cmsis", "stm32cube", "libopencm3"], "vendor": "ThunderPack", "url": "https://github.com/jgillick/ThunderPack/tree/STM32F4", "connectivity": ["can"], "debug": {"tools": {"blackmagic": {}, "jlink": {}, "stlink": {}, "cmsis-dap": {}}}}, {"id": "blackpill_f411ce", "name": "WeAct Studio BlackPill V2.0 (STM32F411CE)", "platform": "ststm32", "mcu": "STM32F411CEU6", "fcpu": 100000000, "ram": 131072, "rom": 524288, "frameworks": ["arduino", "cmsis", "stm32cube", "libopencm3", "zephyr"], "vendor": "WeAct Studio", "url": "https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1", "debug": {"tools": {"blackmagic": {}, "jlink": {}, "stlink": {}, "cmsis-dap": {}}}}]
```