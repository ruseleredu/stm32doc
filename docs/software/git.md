---
id: git
title: Git
description: Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
slug: /git
---

## Git commands

```bash
git --version
```

How to config [git](https://git-scm.com/)

```bash
git config --global user.name "Your Name"
git config --global user.email yourmail@domain.tld
```

It's recommended to verify that the your Git installation is not performing any transformation between LFs and CRLFs.

```bash
git config --global core.autocrlf false
```

```bash
git config list --show-origin
```
