import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

function generateTabs(count, lab) {
  const tabs = [];
  for (let i = 0; i < count; i++) {
    const label = String.fromCharCode(65 + i); // 65 is the ASCII code for 'A'
    tabs.push(
      <TabItem value={label.toLowerCase()} label={label}>
        Grupo S22-{label}: https://github.com/ELT73A-S22-2025-2-{label}
      </TabItem>
    );
  }
  return tabs;
}

export const GeneratedTabs = () => <Tabs>{generateTabs(15, 0)}</Tabs>;
export default GeneratedTabs;
