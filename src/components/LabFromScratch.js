import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThemeCodeBlock from '@theme/CodeBlock';

export default function LabFromScratch({ labNumber , opts="" }) {
  // An array of your groups
  const groups = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "X",
  ];

  return (
    <Tabs>
      {groups.map((group) => (
        <TabItem key={group} value={group.toLowerCase()} label={group}>
             <ul>
  <li><b>Grupo S22-{group}:</b> <a href={`https://github.com/ELT73A-S22-2025-2-${group}`} target="_blank" rel="noopener noreferrer">
                https://github.com/ELT73A-S22-2025-2-{group}
              </a> </li>
</ul> 

          <ThemeCodeBlock className="language-bash">
          gh repo create ELT73A-S22-2025-2-{group}/{labNumber} --public
              --template ELT73A-LAB-TPL/{labNumber} {opts}
           </ThemeCodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
    
