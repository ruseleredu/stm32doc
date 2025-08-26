import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThemeCodeBlock from '@theme/CodeBlock';

export default function LabFromScratch({ repoName, opts = "" }) {
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
                        gh repo create ELT73A-S22-2025-2-{group}/{repoName} {opts}
                    </ThemeCodeBlock>

                    <details>
                        <summary>More options</summary> <br />
                        <p>
                            The gh repo create command is a function of the GitHub CLI (Command Line Interface) used to create a new repository on GitHub.
                        </p>
                        <ul>
                            <li><b>--public</b>: Create a public repository. </li>
                            <li><b>--private</b>: Create a private repository.</li>
                            <li><b>--add-readme</b>: Add a README file to the repository.</li>
                            <li><b>--add-gitignore &lt;template&gt;</b>: Add a .gitignore file to the repository, using the specified template (e.g., "Node", "Python", "Java").</li>
                            <li><b>--add-license &lt;license&gt;</b>: Add a license to the repository, using the specified license (e.g., "mit", "apache-2.0", "gpl-3.0").</li>
                            <li><b>-c, --clone</b>: Clone the repository after creating it.</li>
                        </ul>
                    </details>

                    <ThemeCodeBlock className="language-bash">
                        gh repo view ELT73A-S22-2025-2-{group}/{repoName} --web
                    </ThemeCodeBlock>

                </TabItem>
            ))}
        </Tabs>
    );
}

