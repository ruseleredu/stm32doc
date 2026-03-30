---
id: components-showcase
title: 💼 Components Show Case
slug: /components-showcase
---

import { LABsIncomplete, EaDIncomplete , LABsApoio } from '@site/src/components/AvisosSite';
import {VerifyDev1,VerifyDev2,GitConfig} from '@site/src/components/InstructionsSite';
import {STM32Tools,STM32Toolsv2,STM32ToolsFull} from '@site/src/components/InstructionsSite';
import {DevTools,DevToolsv2} from '@site/src/components/InstructionsSite';

## AvisosSite


```bash
import {LABsIncomplete,EaDIncomplete,LABsApoio} from '@site/src/components/AvisosSite';
```

### LABsIncomplete

```md
<!-- Alerta de que este conteúdo de laboratório está incompleto! -->
<LABsIncomplete />
```
<!-- Alerta de que este conteúdo de laboratório está incompleto! -->
<LABsIncomplete />

---

### EaDIncomplete

```md
<!-- Alerta de que este conteúdo de EaD está incompleto! -->
<EaDIncomplete />
```
<!-- Alerta de que este conteúdo de EaD está incompleto! -->
<EaDIncomplete />

---

### LABsApoio

```md
<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />
```
<!-- Info de que este conteúdo é de apoio! -->
<LABsApoio />

---

## InstructionsSite

```bash
import {VerifyDev1,VerifyDev2,GitConfig} from '@site/src/components/InstructionsSite';
import {STM32Tools,STM32Toolsv2,STM32ToolsFull} from '@site/src/components/InstructionsSite';
import {DevTools,DevToolsv2} from '@site/src/components/InstructionsSite';
```

### VerifyDev1

```bash
import {VerifyDev1} from '@site/src/components/InstructionsSite';
```

```md
<!-- Verifique o seu ambiente dev, git, gh e code -->
<VerifyDev1 />

```

<!-- Verifique o seu ambiente dev, git, gh e code -->
<VerifyDev1 />

---

### VerifyDev2

```bash
import {VerifyDev2} from '@site/src/components/InstructionsSite';
```

```md
<!-- Verifique o seu ambiente dev, git, gh, code, gcc e gdb -->
<VerifyDev2 />
```
<!-- Verifique o seu ambiente dev, git, gh, code, gcc e gdb -->
<VerifyDev2 />

---

### GitConfig

```bash
import {GitConfig} from '@site/src/components/InstructionsSite';
```

```md
<!-- Configure o git -->
<GitConfig />
```

<!-- Configure o git -->
<GitConfig />

---


### GitLogOut

```bash
import {GitLogOut} from '@site/src/components/InstructionsSite';
```

import {GitLogOut} from '@site/src/components/InstructionsSite';

```md
<!-- Logout do seu ambiente dev, git e gh -->
<GitLogOut />
```

<!-- Logout do seu ambiente dev, git e gh -->
<GitLogOut />

---

### STM32Tools

```bash
import {STM32Tools} from '@site/src/components/InstructionsSite';
```

```md
<!-- List of STM32Cube Tools -->
<STM32Tools />
```

<!-- List of STM32Cube Tools -->
<STM32Tools />


---

### STM32Toolsv2

```bash
import {STM32Toolsv2} from '@site/src/components/InstructionsSite';
```

```md
<!-- List of STM32Cube Tools -->
<STM32Toolsv2 />
```

<!-- List of STM32Cube Tools -->
<STM32Toolsv2 />

---

```bash
import {STM32ToolsFull} from '@site/src/components/InstructionsSite';
```

```md
<!-- List of STM32Cube Tools -->
<STM32ToolsFull />
```

<!-- List of STM32Cube Tools -->
<STM32ToolsFull />

---

### DevTools

```bash
import {DevTools} from '@site/src/components/InstructionsSite';
```

```md
<!-- List of Dev Tools -->
<DevTools />
```

<!-- List of Dev Tools -->
<DevTools />

---

### DevToolsv2

```bash
import {DevToolsv2} from '@site/src/components/InstructionsSite';
```

```md
<!-- List of Dev Tools -->
<DevToolsv2 />
```

<!-- List of Dev Tools -->
<DevToolsv2 />

## LabFromTemplate

import LabFromTemplate from "@site/src/components/LabFromTemplate";

```bash
import LabFromTemplate from "@site/src/components/LabFromTemplate";
```

### LAB00
```md
<!-- Criar repositório no GitHub com base no template do laboratório -->
<LabFromTemplate labNumber="LAB00" />
```

<LabFromTemplate labNumber="LAB00" />

---

## LabFromScratch

import LabFromScratch from "@site/src/components/LabFromScratch";

```bash
import LabFromScratch from "@site/src/components/LabFromScratch";
```


### LAB00
```md
<!-- Criar repositório no GitHub com base no comando -->
<LabFromScratch repoName="LAB00" opts="--add-readme -c -l mit -g C"/>
```

<LabFromScratch repoName="LAB00" opts="--add-readme -c -l mit -g C"/>

---