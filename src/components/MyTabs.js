import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import MDXContent from "@theme/MDXContent";

export default function MyTabs({ labNumber }) {
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
          <p>
            Grupo {group}: https://github.com/ELT73A-S22-2025-2-{group}
          </p>
          <pre>
            <code>
              gh repo create ELT73A-S22-2025-2-{group}/{labNumber} --public
              --template ELT73A-LAB-TPL/{labNumber}
            </code>
          </pre>
        </TabItem>
      ))}
    </Tabs>
  );
}
