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
            </ThemeCodeBlock>
        </>
    );
}

export function ComponentC() {
    return (
        <div>
            <Details summary={<summary>Verifique o seu ambiente de desenvolvimento!</summary>}>
                <p>Versão do git e configurações:</p>
                <ThemeCodeBlock className="language-bash">
                    git --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    git config --list --show-origin
                </ThemeCodeBlock>

                <p>Versão do GitHub CLI e status de login:</p>
                <ThemeCodeBlock className="language-bash">
                    gh --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    gh auth status
                </ThemeCodeBlock>

                <p>Versão do VS Code e extensões instaladas:</p>
                <ThemeCodeBlock className="language-bash">
                    code -v
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    code --list-extensions --show-versions
                </ThemeCodeBlock>
            </Details>
        </div >
    );
}

// Tabs example
export function ComponentD() {
    return (
        <Tabs
            defaultValue="componentA"
            values={[
                { label: 'Component A', value: 'componentA' },
                { label: 'Component B', value: 'componentB' },
                { label: 'Component C', value: 'componentC' },
            ]}
        >
            <TabItem value="componentA">
                <ComponentA />
            </TabItem>
            <TabItem value="componentB">
                <ComponentB />
            </TabItem>
            <TabItem value="componentC">
                <ComponentC />
            </TabItem>
        </Tabs>
    );
}


export function CodeTabsExample() {
    return (
        <Tabs>
            <TabItem value="javascript" label="JavaScript">
                <pre>
                    <code>
                        {`function greet(name) {
  return 'Hello, ' + name + '!';
}`}
                    </code>
                </pre>
            </TabItem>
            <TabItem value="python" label="Python">
                <pre>
                    <code>
                        {`def greet(name):
    return 'Hello, ' + name`}
                    </code>
                </pre>
            </TabItem>
            <TabItem value="ruby" label="Ruby">
                <pre>
                    <code>
                        {`def greet(name)
  "Hello, #{name}!"
end`}
                    </code>
                </pre>
            </TabItem>
        </Tabs>
    );
}



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