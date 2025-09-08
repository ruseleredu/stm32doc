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
        templateHrefi: "/labs/template00",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB00",

        start: "18-Aug-2025",
        end: "25-Aug-2025",
        conteudo: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
    {
        tarefa: "LAB01",
        hrefi: "/labs/lab01", // internal page
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1748058", // external

        templateLabel: "Template 01",
        templateHrefi: "/labs/template01",
        templateHrefe: "https://github.com/ELT73A-LAB-TPL/LAB01",

        start: "18-Aug-2025",
        end: "25-Aug-2025",
        conteudo: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
];
