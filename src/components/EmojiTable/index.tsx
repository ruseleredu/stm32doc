import React from 'react';

export default function EmojiTable({ children }) {
    const copyToClipboard = async (text, type = "text") => {
        try {
            await navigator.clipboard.writeText(text);
            // Subtle feedback instead of a jarring alert
            console.log(`Copied ${type}: ${text}`);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="emoji-table-container">
            <table onClick={(e) => {
                const target = e.target as HTMLElement;

                // If they click the image, copy the image source/URL 
                if (target.tagName === 'IMG') {
                    const src = (target as HTMLImageElement).src;
                    copyToClipboard(src, "URL");
                    return;
                }

                // If they click the name/code, copy the text
                if (target.tagName === 'CODE' || target.tagName === 'TD') {
                    copyToClipboard(target.innerText.replace(/`/g, ''), "Text");
                }
            }}>
                {children}
            </table>
        </div>
    );
}