const fs = require('fs');
const path = require('path');

const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X'];
const yearSuffix = '2026-1'; // You can also pass this as an env var

async function checkOrgs() {
    const results = {
        lastUpdated: new Date().toISOString(),
        data: {}
    };

    for (const letter of groups) {
        const orgName = `ELT73A-S22-${yearSuffix}-${letter}`;
        try {
            // Use GITHUB_TOKEN if available to increase rate limits during build
            const response = await fetch(`https://api.github.com/orgs/${orgName}`);
            results.data[letter] = response.ok ? 200 : response.status;
            console.log(`${orgName}: ${results.data[letter]}`);
        } catch (e) {
            results.data[letter] = 'Error';
        }
    }

    const outputPath = path.join(__dirname, '../src/data/groupStatus.json');
    if (!fs.existsSync(path.dirname(outputPath))) fs.mkdirSync(path.dirname(outputPath));

    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
}

checkOrgs();