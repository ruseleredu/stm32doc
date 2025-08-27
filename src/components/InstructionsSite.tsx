import React from 'react';
// import Tabs from "@theme/Tabs";
// import TabItem from "@theme/TabItem";
import ThemeCodeBlock from '@theme/CodeBlock';
// import Admonition from '@theme/Admonition';
import Details from '@theme/Details';

// import {VerifyDev1,VerifyDev1} from '@site/src/components/InstructionsSite';

// import {VerifyDev1} from '@site/src/components/InstructionsSite';
// <!-- Verifique o seu ambiente dev, git, gh e code -->
// <VerifyDev1 />
export function VerifyDev1() {
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

// import {VerifyDev2} from '@site/src/components/InstructionsSite';
// <!-- Verifique o seu ambiente dev, git, gh, code, gcc e gdb -->
// <VerifyDev2 />
export function VerifyDev2() {
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
                    code --list-extensions -show-versions
                </ThemeCodeBlock>

                <p>Versão do gcc e gdb instaladas:</p>
                <ThemeCodeBlock className="language-bash">
                    gcc --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    gbd --version
                </ThemeCodeBlock>
            </Details>
        </div >
    );
}

// import {GitConfig} from '@site/src/components/InstructionsSite';
// <!-- Configure o git -->
// <GitConfig />
export function GitConfig() {
    return (
        <div>
            <Details summary={<summary>Configure a ferramenta git</summary>}>
                <p>Configure o nome de usuário para todos os repositórios locais ligados às suas transações de commit:</p>
                <ThemeCodeBlock className="language-bash">
                    git config --global user.name "Your Name"
                </ThemeCodeBlock>

                <p> Configure o email de usuário para todos os repositórios locais ligados às suas transações de commit:</p>
                <ThemeCodeBlock className="language-bash">
                    git config --global user.email "you@example.com"
                </ThemeCodeBlock>

                <p>É recomendado verificar se a instalação do seu Git não está realizando nenhuma transformação entre LFs e CRLFs.</p>
                <ThemeCodeBlock className="language-bash">
                    git config --global core.autocrlf false
                </ThemeCodeBlock>

                <p>Configure o Git para usar o Visual Studio Code (VS Code) como editor padrão para tarefas como escrever mensagens de commit ou rebases interativos</p>
                <ThemeCodeBlock className="language-bash">
                    git config --global core.editor "code --wait"
                </ThemeCodeBlock>

                <p>Liste as configurações aplicadas:</p>
                <ThemeCodeBlock className="language-bash">
                    git config --list --show-origin
                </ThemeCodeBlock>
            </Details>
        </div >
    );
}
