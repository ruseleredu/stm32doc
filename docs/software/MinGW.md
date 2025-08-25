---
id: mingw
title: MinGW
description: Minimalist GNU for Windows.
slug: /mingw
---

## Requesitos

```bash
winget install -e --id Microsoft.VisualStudioCode
```

```bash
winget install -e --id MSYS2.MSYS2
```

To start a new interactive UCRT64 shell from cmd, run the following command:

```bash
C:\msys64\msys2_shell.cmd -ucrt64
```

Update MSYS2: After installation, open the MSYS2 terminal (from the start menu).

```bash
pacman -Syu
```

## VScode com compilador GCC e o depurador GDB

Configure o Visual Studio Code para usar o compilador GCC e o depurador GDB

- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)
- [Get the latest version of MinGW-w64 via MSYS2](https://www.msys2.org/)

```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/-R3l4Bc5jH4?si=WbfLdQtISBTG98d-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Check your MinGW installation

C:\msys64\ucrt64\bin

```bash
gcc --version
g++ --version
gdb --version
```

## Install MinGW-w64 UCRT Toolchain

```bash
pacman -S mingw-w64-ucrt-x86_64-toolchain base-devel make git
```

## GNU Arm Embedded Toolchain for Windows

- [Arm GNU Toolchain](https://developer.arm.com/Tools%20and%20Software/GNU%20Toolchain)

Search for Available ARM Toolchain Packages

```bash
pacman -Ss arm-none-eabi
```

Install the ARM Toolchain

```bash
pacman -S mingw-w64-x86_64-arm-none-eabi-toolchain
```

Verify Installation

C:\msys64\mingw64\bin

```bash
arm-none-eabi-gcc --version
```
