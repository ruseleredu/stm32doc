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

        start: "16-Mar-2026",
        end: "30-Mar-2026",
        conteudo: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
    {
        tarefa: "LAB01",
        hrefi: "/labs/lab01",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1948813", // external
        templateLabel: "Template 01",
        templateHrefi: "/tpls/tpl01",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB01",

        start: "23-Mar-2026",
        end: "30-Mar-2026",
        conteudo: "Ambiente de desenvolvimento VS Code; Uso do git e GitHub;",
    },
    {
        tarefa: "LAB02",
        hrefi: "/labs/lab02",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1761057", // external

        templateLabel: "Template 02",
        templateHrefi: "/tpls/tpl02",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB02",

        start: "30-Mar-2026",
        end: "06-Apr-2026",
        conteudo: "Processo de compilação, gravação e commit de código; STM32 para VSCode;",
    },
    {
        tarefa: "LAB03",
        hrefi: "/labs/lab03",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1769726", // external
        templateLabel: "Template 03",
        templateHrefi: "/tpls/tpl03",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB03",

        start: "06-Apr-2026",
        end: "13-Apr-2026",
        conteudo: "Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);",
    },
    {
        tarefa: "LAB04",
        hrefi: "/labs/lab04",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1770581", // external
        templateLabel: "Template 04",
        templateHrefi: "/tpls/tpl04",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB04",

        start: "13-Apr-2026",
        end: "20-Apr-2026",
        conteudo: "Interrupções via GPIO e Temporizadores (Timers);",
    },
    {
        tarefa: "LAB05",
        hrefi: "/labs/lab05",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1773187", // external
        templateLabel: "Template 05",
        templateHrefi: "/tpls/tpl05",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB05",

        start: "27-Apr-2026",
        end: "04-May-2026",
        conteudo: "Módulo PWM; Conversor ADC;",
    },
    {
        tarefa: "LAB06",
        hrefi: "/labs/lab06",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1776628", // external
        templateLabel: "Template 06",
        templateHrefi: "/tpls/tpl06",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB06",

        start: "04-May-2026",
        end: "11-May-2026",
        conteudo: "Uso do STM32CubeMonitor; Visualização de variáveis;",
    },
    {
        tarefa: "LAB07",
        hrefi: "/labs/lab07",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1782502", // external
        templateLabel: "Template 07",
        templateHrefi: "/tpls/tpl07",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB07",

        start: "11-May-2026",
        end: "18-May-2026",
        conteudo: "DMA: Direct memory access (Acesso direto à memória);",
    },
    {
        tarefa: "LAB08",
        hrefi: "/labs/lab08",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1783994", // external
        templateLabel: "Template 08",
        templateHrefi: "/tpls/tpl08",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB08",

        start: "18-May-2026",
        end: "25-May-2026",
        conteudo: "Uso do STM32CubeMonitor; MQTT, IoT;",
    },
    {
        tarefa: "LAB09",
        hrefi: "/labs/lab09",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1889891", // external
        templateLabel: "Template 09",
        templateHrefi: "/tpls/tpl09",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB09",

        start: "25-May-2026",
        end: "01-Jun-2026",
        conteudo: "Uso do STM32CubeMonitor; InfluDB;",
    },
    {
        tarefa: "LAB10",
        hrefi: "/labs/lab10",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1889891", // external
        templateLabel: "Template 10",
        templateHrefi: "/tpls/tpl10",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB10",

        start: "01-Jun-2026",
        end: "08-Jun-2026",
        conteudo: "Introdução ao uso do PlatformIO;",
    },
    {
        tarefa: "LAB11",
        hrefi: "/labs/lab11",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1889891", // external
        templateLabel: "Template 11",
        templateHrefi: "/tpls/tpl11",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB11",

        start: "08-Jun-2026",
        end: "15-Jun-2026",
        conteudo: "Introdução ao Display OLED SSD1306;",
    },

];
// src/components/LabTable.tsx