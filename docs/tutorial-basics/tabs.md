---
id: tabs
sidebar_position: 2
title: Tabs examples
slug: /tabs
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


```bash
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
```

<details>
<summary>Descrição aqui com tabela de opções...</summary>

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

</details>

<details>
<summary>Descrição aqui com tabela de opções e código...</summary>

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="github-cli" label="GitHub CLI">
    ```bash
gh auth login
```
  </TabItem>
</Tabs>

</details>

<details>
<summary>Descrição aqui com código...</summary>

```bash
gh auth login
```

</details>
