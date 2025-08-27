---
title: Multiple components
description: Multiple components in a single JavaScript file.
---

To add multiple components in a single JavaScript file, you can define them as separate functions or classes and then export them. This is a common practice in React applications, including Docusaurus projects.

import { ComponentA, ComponentB, ComponentC, ComponentD, UserStatus , CodeTabsExample} from '@site/src/components/MyComponents';
import { LABsIncomplete } from '@site/src/components/AvisosSite';
// import allComponents from '@site/src/components/MyComponents';

<ComponentA />

<ComponentB />

<ComponentC />

<UserStatus  status="online"/>

<UserStatus  status="offline"/>

<UserStatus  status="away"/>

<UserStatus  status="none"/>

## Use

```bash
import { ComponentA, ComponentC } from '@site/src/components/MyComponents';
```

```bash
<ComponentA />
```

<LABsIncomplete />

<CodeTabsExample />

<ComponentD />
