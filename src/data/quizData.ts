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
        hrefe: "",
        start: "16-Mar-2026",
        end: "23-Mar-2026",
        descricao: "Apresentação da Disicplina; Materiais utilizados na disciplina; Escolha de Grupos;",
    },
    {
        quiz: "Q01",
        hrefi: "/quiz/quiz01",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1756081",
        start: "23-Mar-2026",
        end: "30-Mar-2026",
        descricao: "Revisão da programação em C;",
    },
    {
        quiz: "Q02",
        hrefi: "/quiz/quiz02",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1930561",
        start: "30-Mar-2026",
        end: "06-Apr-2026",
        descricao: "Processo de compilação, gravação e commit de código;",
    },
    {
        quiz: "Q03",
        hrefi: "/quiz/quiz03",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957479",
        start: "06-Apr-2026",
        end: "13-Apr-2026",
        descricao: "Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);",
    },
    {
        quiz: "Q04",
        hrefi: "/quiz/quiz04",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957484",
        start: "13-Apr-2026",
        end: "20-Apr-2026",
        descricao: "Interrupções via GPIO e Temporizadores (Timers);",
    },
    {
        quiz: "Q05",
        hrefi: "/quiz/quiz05",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957487",
        start: "27-Apr-2026",
        end: "04-May-2026",
        descricao: "Módulo PWM; Conversor ADC;",
    },
    {
        quiz: "Q06",
        hrefi: "/quiz/quiz06",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957569",
        start: "04-May-2026",
        end: "11-May-2026",
        descricao: "DMA: Direct memory access (Acesso direto à memória);",
    },
    {
        quiz: "Q07",
        hrefi: "/quiz/quiz07",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957590",
        start: "11-May-2026",
        end: "18-May-2026",
        descricao: "Uso do STM32CubeMonitor; Visualização de variáveis;",
    },
    {
        quiz: "Q08",
        hrefi: "/quiz/quiz08",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957592",
        start: "18-May-2026",
        end: "25-May-2026",
        descricao: "Uso do STM32CubeMonitor; MQTT, IoT;",
    },
    {
        quiz: "Q09",
        hrefi: "/quiz/quiz09",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957596",
        start: "25-May-2026",
        end: "01-Jun-2026",
        descricao: "Uso do STM32CubeMonitor; InfluDB;",
    },
    {
        quiz: "Q10",
        hrefi: "/quiz/quiz10",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957598",
        start: "01-Jun-2026",
        end: "08-Jun-2026",
        descricao: "Introdução ao uso do PlatformIO;",
    },
    {
        quiz: "Q11",
        hrefi: "/quiz/quiz11",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=1957598",
        start: "08-Jun-2026",
        end: "15-Jun-2026",
        descricao: "Uso do display de OLED SSD1306;",
    },
];
