import fs from 'node:fs';
import path from 'node:path';

const GITHUB_EMOJI_API = 'https://api.github.com/emojis';
const OUTPUT_FILE = path.join(process.cwd(), 'docs', 'emojis.mdx');

async function run() {
    try {
        console.log('📡 Fetching emoji icons...');
        const response = await fetch(GITHUB_EMOJI_API);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const emojis = await response.json();
        const names = Object.keys(emojis).sort();

        const header = [
            '---',
            'title: Emoji Reference',
            'sidebar_label: 🎭 Emoji List',
            '---',
            '',
            "import EmojiTable from '@site/src/components/EmojiTable';",
            '',
            '# 🎭 Emoji Reference',
            '',
            'Click an icon to copy the emoji or click the name to copy the shortcode.',
            '',
            '<EmojiTable>',
            '',
            '| Icon | Name | URL (for reference) |',
            '| :---: | :--- | :--- |',
        ].join('\n');

        const rows = names
            .map((name) => `| <img src="${emojis[name]}" width="25" /> | \`${name}\` | [link](${emojis[name]}) |`)
            .join('\n');

        fs.writeFileSync(OUTPUT_FILE, header + '\n' + rows + '\n\n</EmojiTable>');

        console.log(`✅ Success! Created ${names.length} emojis in ${OUTPUT_FILE}`);
    } catch (err) {
        console.error('❌ Failed:', err.message);
    }
}

run();
