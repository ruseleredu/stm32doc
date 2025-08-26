import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThemeCodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details';


export default function LabFromTemplate({ labNumber, opts = "" }) {
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
                        <li> <b>LAB Template:</b> <a href={`https://github.com/ELT73A-LAB-TPL/${labNumber}`} target="_blank" rel="noopener noreferrer">
                            https://github.com/ELT73A-LAB-TPL/{labNumber}
                        </a></li>
                    </ul>
                    <p>
                        Use o comando abaixo para criar o repositório no GitHub com base no template do laboratório:
                    </p>
                    <ThemeCodeBlock className="language-bash">
                        gh repo create ELT73A-S22-2025-2-{group}/{labNumber} --private -p ELT73A-LAB-TPL/{labNumber} {opts}
                    </ThemeCodeBlock>
                    <p>Agora, acesse o diretório do repositório clonado:</p>
                    <ThemeCodeBlock className="language-bash">
                        cd {labNumber}
                    </ThemeCodeBlock>
                    <p>Abra o repositório clonado no VS Code:</p>
                    <ThemeCodeBlock className="language-bash">
                        code .
                    </ThemeCodeBlock>
                    <p>Verifique o status do repositório:</p>
                    <ThemeCodeBlock className="language-bash">
                        git status
                    </ThemeCodeBlock>
                </TabItem>
            ))}
        </Tabs>
    );
}

