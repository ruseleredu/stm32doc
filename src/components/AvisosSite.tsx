
import React from 'react';
// import Tabs from "@theme/Tabs";
// import TabItem from "@theme/TabItem";
// import ThemeCodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
// import Details from '@theme/Details';

// import { LABsIncomplete, EaDIncomplete } from '@site/src/components/AvisosSite';

// import {LABsIncomplete} from '@site/src/components/AvisosSite';
// <LABsIncomplete />
export function LABsIncomplete() {
    return (
        <>
            <Admonition type="warning" title="Atividade em Construção">
                <p>A documentação desta atividade de laboratório está em <b>processo de construção</b> e por isso pode estar incompleta.</p>
                <p>Utilize como base a descrição apresentada no <a href="https://moodle.utfpr.edu.br/course/view.php?id=29540">Moodle da disciplina</a>.</p>
            </Admonition>
        </>
    );
}

// import {LABsApoio} from '@site/src/components/AvisosSite';
// <LABsApoio />
export function LABsApoio() {
    return (
        <>
            <Admonition type="info" title="Documentação de Apoio para Atividade de Laboratório">
                <p>A documentação desta atividade de laboratório é <b>complementar</b> a documentação principal da disciplina.</p>
                <p>Utilize como base a descrição apresentada no <a href="https://moodle.utfpr.edu.br/course/view.php?id=29540">Moodle da disciplina</a>.</p>
            </Admonition>
        </>
    );
}

// import {EaDIncomplete} from '@site/src/components/AvisosSite';
// <EaDIncomplete />
export function EaDIncomplete() {
    return (
        <>
            <Admonition type="warning" title="Atividade de EaD em Construção">
                <p>A documentação desta atividade de EaD está em <b>processo de construção</b> e por isso pode estar incompleta.</p>
                <p>Utilize como base a descrição apresentada no <a href="https://moodle.utfpr.edu.br/course/view.php?id=29540">Moodle da disciplina</a>.</p>
            </Admonition>
        </>
    );
}


// import {UserStatus} from '@site/src/components/AvisosSite';
// <UserStatus status="online" />
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