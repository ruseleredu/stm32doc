// src/components/MyComponents.js

import React from 'react';
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThemeCodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details';

export function ComponentA() {
    return (
        <>
            <Admonition type="info" title="This is Component A">
                <p>It's designed for a specific purpose.</p>
            </Admonition>
        </>
    );
}

export function ComponentB() {
    return (
        <>
            <ThemeCodeBlock className="language-bash">
                # This is the first line.
                # This is the second line.

                # This is the fourth line, after a blank line.
                # This is the fifth line.
                yes, only single line in!
            </ThemeCodeBlock>
        </>
    );
}

export function ComponentC() {
    return (
        <div>
            <Details summary={<summary>This is Component C</summary>}>
                <p>It handles a different set of functionalities.</p>
            </Details>
        </div >
    );
}

export const ComponentD = () => {
    return (
        <div>
            <h2>This is Component D</h2>
            <p>An example of a component defined as an arrow function.</p>
        </div>
    );
};

export function UserStatus({ status }) {
  let statusMessage;

  switch (status) {
    case 'online':
      statusMessage = <p style={{ color: 'green' }}>🟢 User is online.</p>;
      break;
    case 'offline':
      statusMessage = <p style={{ color: 'red' }}>🔴 User is offline.</p>;
      break;
    case 'away':
      statusMessage = <p style={{ color: 'orange' }}>🟠 User is away.</p>;
      break;
    default:
      statusMessage = <p>🟡 Status is unknown.</p>;
  }

  return (
    <div>
      <h3>Current Status:</h3>
      {statusMessage}
    </div>
  );
}