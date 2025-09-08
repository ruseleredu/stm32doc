import React from 'react';
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThemeCodeBlock from '@theme/CodeBlock';
// import Admonition from '@theme/Admonition';
import Details from '@theme/Details';
import Link from '@docusaurus/Link';

// import {VerifyDev1,VerifyDev1} from '@site/src/components/InstructionsSite';
/*
<Link to="/docs/stm32cubemx">STM32CubeMX</Link>
<Link to="/docs/stm32cubeclt">STM32CubeCLT</Link>
<Link to="/docs/stm32cubeprg">STM32CubeProg</Link>
<Link to="/docs/stm32cubemon">STM32CubeMonitor</Link>

<Link to="/docs/stm32cubeide">STM32CubeIDE</Link>

<Link to="/docs/git">git</Link>
<Link to="/docs/github-cli">GitHub CLI</Link>
<Link to="/docs/vs-code">Visual Studio Code</Link>


<Link to="/docs/stm32cubetools">STM32Cube Tools</Link>
*/
// import {VerifyDev1} from '@site/src/components/InstructionsSite';
// <!-- Verifique o seu ambiente dev, git, gh e code -->
// <VerifyDev1 />
export function VerifyDev1() {
    return (
        <div>
            <Details summary={<summary>Verifique o seu ambiente de desenvolvimento!</summary>}>
                <p>Versão do <Link to="/docs/git">git</Link> e configurações:</p>
                <ThemeCodeBlock className="language-bash">
                    git --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    git config --list --show-origin
                </ThemeCodeBlock>

                <p>Versão do <Link to="/docs/github-cli">GitHub CLI</Link> e status de login:</p>
                <ThemeCodeBlock className="language-bash">
                    gh --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    gh auth status
                </ThemeCodeBlock>

                <p>Versão do <Link to="/docs/vs-code">Visual Studio Code</Link> e extensões instaladas:</p>
                <ThemeCodeBlock className="language-bash">
                    code -v
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    code --list-extensions --profile "STM32"
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
                <p>Versão do <Link to="/docs/git">git</Link> e configurações:</p>
                <ThemeCodeBlock className="language-bash">
                    git --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    git config --list --show-origin
                </ThemeCodeBlock>

                <p>Versão do <Link to="/docs/github-cli">GitHub CLI</Link> e status de login:</p>
                <ThemeCodeBlock className="language-bash">
                    gh --version
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    gh auth status
                </ThemeCodeBlock>

                <p>Versão do <Link to="/docs/vs-code">Visual Studio Code</Link> e extensões instaladas:</p>
                <ThemeCodeBlock className="language-bash">
                    code -v
                </ThemeCodeBlock>
                <ThemeCodeBlock className="language-bash">
                    code --list-extensions --profile "STM32"
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

                <p>Configure o <Link to="/docs/git">git</Link> para usar o <Link to="/docs/vs-code">Visual Studio Code</Link> como editor padrão para tarefas como escrever mensagens de commit ou rebases interativos</p>
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



// import {STM32Tools} from '@site/src/components/InstructionsSite';
// <!-- List of STM32Cube Tools -->
// <STM32Tools />
export function STM32Tools() {
    return (
        <Tabs>
            <TabItem value="STM32CubeMX" label="STM32CubeMX" default>
                <p><b><Link to="/docs/stm32cubemx">STM32CubeMX</Link> is an initialization code generator.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubemx.html#get-software" target="_blank">STM32CubeMX</a> is a graphical tool that allows a very easy configuration of STM32 microcontrollers and microprocessors, as well as the generation of the corresponding initialization C code for the Arm® Cortex®-M core or a partial Linux® Device Tree for Arm® Cortex®-A core, through a step-by-step process.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeCLT" label="STM32CubeCLT">
                <p><b><Link to="/docs/stm32cubeclt">STM32CubeCLT</Link> is an all-in-one multi-OS command-line toolset, which is part of the STM32Cube ecosystem.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubeclt.html#get-software" target="_blank">STM32CubeCLT</a>  includes GNU C/C++ for Arm® toolchain executables, GDB debugger, and STM32CubeProgrammer (STM32CubeProg) utility. It provides system view descriptors for the entire STM32 MCU portfolio and associate each STM32 MCU and development board with the appropriate SVD.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="ST-MCU-FINDER" label="ST-MCU-FINDER">
                <p><b>STM32 and STM8 product finder for desktops.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/st-mcu-finder-pc.html#get-software" target="_blank">ST-MCU-FINDER-PC</a> allows exploring and connecting to the complete portfolio of STM32 Arm® Cortex®-M, STM32 Arm® Cortex®-A7, and STM8 microcontrollers, microprocessors, development boards and examples directly from the developer’s desktop environment.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeProg" label="STM32CubeProg">
                <p><b><Link to="/docs/stm32cubeprg">STM32CubeProg</Link> is an all-in-one multi-OS software tool for programming STM32 products.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubeprog.html#get-software" target="_blank">STM32CubeProg</a> provides an easy-to-use and efficient environment for reading, writing, and verifying device memory through both the debug interface (JTAG and SWD) and the bootloader interface (UART and USB DFU, I2C, SPI, and CAN). STM32CubeProgrammer is delivered in GUI (graphical user interface) and CLI (command-line interface) versions.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeMonitor" label="STM32CubeMonitor">
                <p><b><Link to="/docs/stm32cubemon">STM32CubeMonitor</Link> is a Monitoring tool to test STM32 applications at run-time.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubemonitor.html#get-software" target="_blank">STM32CubeMonitor</a> family of tools helps to fine-tune and diagnose STM32 applications at run-time by reading and visualizing their variables in real-time. With non-intrusive monitoring, STM32CubeMonitor preserves the real-time behavior of applications, and perfectly complements traditional debugging tools to perform application profiling.
                    </li>
                </ul>
            </TabItem>
        </Tabs>
    );
}




// import {STM32ToolsFull} from '@site/src/components/InstructionsSite';
// <!-- List of STM32Cube Tools -->
// <STM32ToolsFull />
export function STM32ToolsFull() {
    return (
        <Tabs>
            <TabItem value="STM32CubeMX" label="STM32CubeMX" default>
                <p><b>STM32Cube initialization code generator.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubemx.html#get-software" target="_blank">STM32CubeMX</a> is a graphical tool that allows a very easy configuration of STM32 microcontrollers and microprocessors, as well as the generation of the corresponding initialization C code for the Arm® Cortex®-M core or a partial Linux® Device Tree for Arm® Cortex®-A core, through a step-by-step process.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeCLT" label="STM32CubeCLT">
                <p><b>STM32CubeCLT is an all-in-one multi-OS command-line toolset, which is part of the STM32Cube ecosystem.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubeclt.html#get-software" target="_blank">STM32CubeCLT</a>  includes GNU C/C++ for Arm® toolchain executables, GDB debugger, and STM32CubeProgrammer (STM32CubeProg) utility. It provides system view descriptors for the entire STM32 MCU portfolio and associate each STM32 MCU and development board with the appropriate SVD.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="ST-MCU-FINDER" label="ST-MCU-FINDER">
                <p><b>STM32 and STM8 product finder for desktops.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/st-mcu-finder-pc.html#get-software" target="_blank">ST-MCU-FINDER-PC</a> allows exploring and connecting to the complete portfolio of STM32 Arm® Cortex®-M, STM32 Arm® Cortex®-A7, and STM8 microcontrollers, microprocessors, development boards and examples directly from the developer’s desktop environment.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeProg" label="STM32CubeProg">
                <p><b>STM32CubeProg is an all-in-one multi-OS software tool for programming STM32 products.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubeprog.html#get-software" target="_blank">STM32CubeProg</a> provides an easy-to-use and efficient environment for reading, writing, and verifying device memory through both the debug interface (JTAG and SWD) and the bootloader interface (UART and USB DFU, I2C, SPI, and CAN). STM32CubeProgrammer is delivered in GUI (graphical user interface) and CLI (command-line interface) versions.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeMonitor" label="STM32CubeMonitor">
                <p><b>Monitoring tool to test STM32 applications at run-time.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubemonitor.html#get-software" target="_blank">STM32CubeMonitor</a> family of tools helps to fine-tune and diagnose STM32 applications at run-time by reading and visualizing their variables in real-time. With non-intrusive monitoring, STM32CubeMonitor preserves the real-time behavior of applications, and perfectly complements traditional debugging tools to perform application profiling.
                    </li>
                </ul>
            </TabItem>
            <TabItem value="STM32CubeIDE" label="STM32CubeIDE">
                <p><b>Integrated Development Environment for STM32.</b></p>
                <ul>
                    <li><a href="https://www.st.com/en/development-tools/stm32cubeide.html#get-software" target="_blank">STM32CubeIDE</a> is an advanced C/C++ development platform with peripheral configuration, code generation, code compilation, and debug features for STM32 microcontrollers and microprocessors. It is based on the Eclipse®/CDT™ framework and GCC toolchain for the development, and GDB for the debugging.
                    </li>
                </ul>
            </TabItem>
        </Tabs>
    );
}

// import {DevTools} from '@site/src/components/InstructionsSite';
// <!-- List of Dev Tools -->
// <DevTools />
export function DevTools() {
    return (
        <Tabs>
            <TabItem value="git-scm" label="Git SCM" default>
                <p><b><Link to="/docs/git">Git</Link> is the most widely used source-code management tool among professional developers.</b></p>
                <ul>
                    <li><a href="https://git-scm.com/downloads/win" target="_blank">Git</a> is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
                    </li>
                </ul>
                <ThemeCodeBlock className="language-bash">
                    winget install --id Git.Git -e --source winget
                </ThemeCodeBlock>
                <p>Configurações do <Link to="/docs/git">git</Link>:</p>
                <ThemeCodeBlock className="language-bash">
                    git config --list --show-origin
                </ThemeCodeBlock>
            </TabItem>
            <TabItem value="gh" label="GitHub CLI">
                <p><b><Link to="/docs/github-cli">GitHub CLI</Link> brings GitHub to your terminal.</b></p>
                <ul>
                    <li><a href="https://cli.github.com/" target="_blank">GitHub CLI</a> is a command line tool that allows you to interact with GitHub from the command line. It is available for Windows, macOS, and Linux.
                    </li>
                </ul>
                <ThemeCodeBlock className="language-bash">
                    winget install --id GitHub.cli -e --source winget
                </ThemeCodeBlock>
                <p>Status de login do <Link to="/docs/github-cli">GitHub CLI</Link>:</p>
                <ThemeCodeBlock className="language-bash">
                    gh auth status
                </ThemeCodeBlock>
            </TabItem>
            <TabItem value="vscode" label="VS Code">
                <p><b><Link to="/docs/vs-code">Visual Studio Code</Link>: IDE and Code Editor for Software Development.</b></p>
                <ul>
                    <li><a href="https://code.visualstudio.com/download" target="_blank">VS Code</a> is a free source-code editor made by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.
                    </li>
                </ul>
                <ThemeCodeBlock className="language-bash">
                    winget install --id Microsoft.VisualStudioCode -e --source winget
                </ThemeCodeBlock>
                <p>Extensões instaladas do <Link to="/docs/vs-code">Visual Studio Code</Link> para o perfil STM32:</p>
                <ThemeCodeBlock className="language-bash">
                    code --list-extensions --profile "STM32"
                </ThemeCodeBlock>
            </TabItem>
        </Tabs>
    );
}




