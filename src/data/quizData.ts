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
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=10000",
        start: "18-Aug-2025",
        end: "25-Aug-2025",
        descricao: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
    {
        quiz: "Q01",
        hrefi: "/quiz/quiz01",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=10001",
        start: "25-Aug-2025",
        end: "01-Sep-2025",
        descricao: "Revisão da programação em C;",
    },
    {
        quiz: "Q02",
        hrefi: "/quiz/quiz02",
        hrefe: "https://moodle.utfpr.edu.br/mod/quiz/view.php?id=10002",
        start: "01-Sep-2025",
        end: "08-Sep-2025",
        descricao: "Processo de compilação, gravação e commit de código;",
    },
];
