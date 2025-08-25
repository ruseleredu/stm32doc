import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

function generateTabs(count) {
  const tabs = [];
  for (let i = 0; i < count; i++) {
    const label = String.fromCharCode(65 + i); // 65 is the ASCII code for 'A'
    tabs.push(
      <TabItem value={label.toLowerCase()} label={label}>
        Content for item {label}.
      </TabItem>
    );
  }
  return tabs;
}

export const GeneratedTabs = () => <Tabs>{generateTabs(10)}</Tabs>;
