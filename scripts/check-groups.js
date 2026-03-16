require('dotenv').config();
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const yearSuffix = args[0] || '2026-1';
const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X'];
const outputPath = path.resolve(__dirname, '../src/data/groupStatus.json');

async function checkOrgs() {
    console.log(`🚀 Iniciando verificação para o sufixo: ${yearSuffix}`);

    // 1. Configuração do Header (UMA única vez)
    const token = process.env.GITHUB_TOKEN;
    const requestOptions = {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        }
    };

    if (token) {
        console.log("✅ Usando GITHUB_TOKEN autenticado.");
    } else {
        console.log("⚠️ Sem GITHUB_TOKEN. Limite de requisições será reduzido.");
    }

    // 2. Carregar dados existentes
    let allData = { semesters: {} };
    if (fs.existsSync(outputPath)) {
        try {
            const fileContent = fs.readFileSync(outputPath, 'utf8');
            const parsed = JSON.parse(fileContent);
            allData = parsed.semesters ? parsed : { semesters: {} };
        } catch (e) {
            console.log("Arquivo JSON inválido, criando novo.");
        }
    }

    const currentResults = {
        lastUpdated: new Date().toISOString(),
        yearSuffix: yearSuffix,
        data: {}
    };

    // 3. Loop de verificação
    for (const letter of groups) {
        const orgName = `ELT73A-S22-${yearSuffix}-${letter}`;
        try {
            // Usamos requestOptions definido no início
            const response = await fetch(`https://api.github.com/orgs/${orgName}`, requestOptions);
            currentResults.data[letter] = response.ok ? 200 : response.status;
            console.log(`- ${orgName}: ${currentResults.data[letter]}`);
        } catch (e) {
            currentResults.data[letter] = 'Erro';
            console.error(`- ${orgName}: Falha na conexão`);
        }
    }

    // 4. Mesclar e Salvar
    allData.semesters[yearSuffix] = currentResults;

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));
    console.log(`\n✨ Sucesso! Dados de ${yearSuffix} salvos em ${outputPath}`);
}

checkOrgs();
