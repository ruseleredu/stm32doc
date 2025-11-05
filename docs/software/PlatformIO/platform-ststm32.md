---
id: platform-ststm32
title: ST STM32
sidebar_position: 2
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
