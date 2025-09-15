// src/data/quizData.ts
export type QuizRow = {
    quiz: string;

    // internal/external quiz links
    hrefi?: string; // internal (/quiz/quiz00)
    hrefe?: string; // external (Moodle, etc.)

    start: string;
    end: string;
    descricao: string;
};

export const quizData: QuizRow[] = [
    {
        quiz: "Q00",
        hrefi: "/quiz/quiz00",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957579",
        start: "18-Aug-2025",
        end: "25-Aug-2025",
        descricao: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
    {
        quiz: "Q01",
        hrefi: "/quiz/quiz01",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1756081",
        start: "25-Aug-2025",
        end: "01-Sep-2025",
        descricao: "Revisão da programação em C;",
    },
    {
        quiz: "Q02",
        hrefi: "/quiz/quiz02",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1930561",
        start: "01-Sep-2025",
        end: "08-Sep-2025",
        descricao: "Processo de compilação, gravação e commit de código;",
    },
    {
        quiz: "Q03",
        hrefi: "/quiz/quiz03",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957479",
        start: "15-Sep-2025",
        end: "22-Sep-2025",
        descricao: "Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);",
        //  descricao: "Interrupções via GPIO e Temporizadores (Timers);",
    },
    {
        quiz: "Q04",
        hrefi: "/quiz/quiz04",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957484",
        start: "22-Sep-2025",
        end: "29-Sep-2025",
        descricao: "Módulo PWM; Conversor ADC;",
    },
    {
        quiz: "Q05",
        hrefi: "/quiz/quiz05",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957487",
        start: "29-Sep-2025",
        end: "06-Oct-2025",
        descricao: "DMA: Direct memory access (Acesso direto à memória);",
    },
    {
        quiz: "Q06",
        hrefi: "/quiz/quiz06",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957569",
        start: "06-Oct-2025",
        end: "13-Oct-2025",
        descricao: "Uso do STM32CubeMonitor; Visualização de variáveis;",
    },
    {
        quiz: "Q07",
        hrefi: "/quiz/quiz07",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957590",
        start: "13-Oct-2025",
        end: "20-Oct-2025",
        descricao: "Uso do STM32CubeMonitor; MQTT, IoT;",
    },
    {
        quiz: "Q08",
        hrefi: "/quiz/quiz08",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957592",
        start: "03-Nov-2025",
        end: "10-Nov-2025",
        descricao: "Uso do STM32CubeMonitor; InfluDB;",
    },
    {
        quiz: "Q09",
        hrefi: "/quiz/quiz09",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957596",
        start: "10-Nov-2025",
        end: "17-Nov-2025",
        descricao: "Introdução ao FreeRTOS;",
    },
    {
        quiz: "Q10",
        hrefi: "/quiz/quiz10",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957598",
        start: "17-Nov-2025",
        end: "24-Nov-2025",
        descricao: "FreeRTOS;",
    },

];
