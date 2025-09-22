// src/data/labData.ts
export type LabRow = {
    tarefa: string;

    // internal/external lab links
    hrefi?: string; // internal
    hrefe?: string; // external

    // internal/external template links
    templateLabel: string;
    templateHrefi?: string;
    templateHrefe?: string;

    start: string;
    end: string;
    conteudo: string;
};

export const labData: LabRow[] = [
    {
        tarefa: "LAB00",
        hrefi: "/labs/lab00", // internal page
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1748058", // external

        templateLabel: "Template 00",
        templateHrefi: "/tpls/tpl00",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB00",

        start: "18-Aug-2025",
        end: "25-Aug-2025",
        conteudo: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
    {
        tarefa: "LAB01",
        hrefi: "/labs/lab01",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1948813", // external
        templateLabel: "Template 01",
        templateHrefi: "/tpls/tpl01",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB01",

        start: "25-Aug-2025",
        end: "01-Sep-2025",
        conteudo: "Revisão da programação em C;",
    },
    {
        tarefa: "LAB02",
        hrefi: "/labs/lab02",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1761057", // external

        templateLabel: "Template 02",
        templateHrefi: "/tpls/tpl02",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB02",

        start: "01-Sep-2025",
        end: "08-Sep-2025",
        conteudo: "Processo de compilação, gravação e commit de código;",
    },
    {
        tarefa: "LAB03",
        hrefi: "/labs/lab03",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1769726", // external
        templateLabel: "Template 03",
        templateHrefi: "/tpls/tpl03",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB03",

        start: "15-Sep-2025",
        end: "22-Sep-2025",
        conteudo: "Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);",
        //  conteudo: "Interrupções via GPIO e Temporizadores (Timers);",
    },
    {
        tarefa: "LAB04",
        hrefi: "/labs/lab04",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1770581", // external
        templateLabel: "Template 04",
        templateHrefi: "/tpls/tpl04",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB04",

        start: "22-Sep-2025",
        end: "29-Sep-2025",
        conteudo: "Interrupções via GPIO e Temporizadores (Timers);",
        //   conteudo: "Módulo PWM; Conversor ADC;",
    },
    {
        tarefa: "LAB05",
        hrefi: "/labs/lab05",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1773187", // external
        templateLabel: "Template 05",
        templateHrefi: "/tpls/tpl05",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB05",

        start: "29-Sep-2025",
        end: "06-Oct-2025",
        conteudo: "Módulo PWM; Conversor ADC;",
        // conteudo: "DMA: Direct memory access (Acesso direto à memória);",
    },
    {
        tarefa: "LAB06",
        hrefi: "/labs/lab06",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1776628", // external
        templateLabel: "Template 06",
        templateHrefi: "/tpls/tpl06",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB06",

        start: "06-Oct-2025",
        end: "13-Oct-2025",
        //conteudo: "Uso do STM32CubeMonitor; Visualização de variáveis;",
        conteudo: "DMA: Direct memory access (Acesso direto à memória);",
    },
    {
        tarefa: "LAB07",
        hrefi: "/labs/lab07",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1782502", // external
        templateLabel: "Template 07",
        templateHrefi: "/tpls/tpl07",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB07",

        start: "13-Oct-2025",
        end: "20-Oct-2025",
        conteudo: "Uso do STM32CubeMonitor; Visualização de variáveis;",
        // conteudo: "Uso do STM32CubeMonitor; MQTT, IoT;",
    },
    {
        tarefa: "LAB08",
        hrefi: "/labs/lab08",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1783994", // external
        templateLabel: "Template 08",
        templateHrefi: "/tpls/tpl08",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB08",

        start: "03-Nov-2025",
        end: "10-Nov-2025",
        conteudo: "Uso do STM32CubeMonitor; MQTT, IoT;",
        // conteudo: "Uso do STM32CubeMonitor; InfluDB;",
    },
    {
        tarefa: "LAB09",
        hrefi: "/labs/lab09",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1889891", // external
        templateLabel: "Template 09",
        templateHrefi: "/tpls/tpl09",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB09",

        start: "10-Nov-2025",
        end: "17-Nov-2025",
        // conteudo: "Uso do STM32CubeMonitor; InfluDB;",
        conteudo: "Introdução ao FreeRTOS;",
        // conteudo: "FreeRTOS: Tarefas, Filas e Semáforos;",
    },

];
// src/components/LabTable.tsx