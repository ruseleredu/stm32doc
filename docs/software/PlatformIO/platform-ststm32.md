---
id: platform-ststm32
title: ST STM32
sidebar_position: 3
description: ST STM32 development platform for PlatformIO 
slug: /platform-ststm32
---

The STM32 family of 32-bit Flash MCUs based on the ARM Cortex-M processor is designed to offer new degrees of freedom to MCU users. It offers a 32-bit product range that combines very high performance, real-time capabilities, digital signal processing, and low-power, low-voltage operation, while maintaining full integration and ease of development.

- https://github.com/platformio/platform-ststm32
- https://docs.platformio.org/en/latest/platforms/ststm32.html


## Usage

- Install PlatformIO
- Create PlatformIO project and configure a platform option in platformio.ini file:

### Stable version

```bash
[env:stable]
platform = ststm32
board = ...
...
```

### Development version

```bash
[env:development]
platform = https://github.com/platformio/platform-ststm32.git
board = ...
...
```

## Board

- [WeAct Studio BlackPill V2.0 (STM32F411CE)](https://docs.platformio.org/en/latest/boards/ststm32/blackpill_f411ce.html)

```bash
[env:blackpill_f411ce]
platform = ststm32
board = blackpill_f411ce

upload_protocol = stlink
```

## Frameworks


| Name                                                                                                |                                                                                                                                                 Description                                                                                                                                                 |
| :-------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [Arduino](https://docs.platformio.org/en/latest/frameworks/arduino.html#framework-arduino)          |                                      Arduino Wiring-based Framework allows writing cross-platform software to control devices attached to a wide range of Arduino boards to create all kinds of creative coding, interactive objects, spaces or physical experiences.                                       |
| [CMSIS](https://docs.platformio.org/en/latest/frameworks/cmsis.html#framework-cmsis)                |                                                                                                               Vendor-independent hardware abstraction layer for the Cortex-M processor series                                                                                                               |
| [LibOpenCM3](https://docs.platformio.org/en/latest/frameworks/libopencm3.html#framework-libopencm3) |                                                                                              The libopencm3 project aims to create an open-source firmware library for various ARM Cortex-M microcontrollers.                                                                                               |
| [STM32Cube](https://docs.platformio.org/en/latest/frameworks/stm32cube.html#framework-stm32cube)    | STM32Cube embedded software libraries, including: The HAL hardware abstraction layer, enabling portability between different STM32 devices via standardized API calls; The Low-Layer (LL) APIs, a light-weight, optimized, expert oriented set of APIs designed for both performance and runtime efficiency |
| [Zephyr](https://docs.platformio.org/en/latest/frameworks/zephyr.html#framework-zephyr)             |                                                                                                      Zephyr is a new generation, scalable, optimized, secure RTOS for multiple hardware architectures                                                                                                       |
