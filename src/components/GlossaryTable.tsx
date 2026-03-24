import React from 'react';
import { glossaryData } from '@site/src/data/glossary';

export default function GlossaryTable({ term }) {
    const data = glossaryData[term];

    if (!data) return <p>Term not found: {term}</p>;

    return (
        <div style={{ marginBottom: '2rem' }}>
            <h2 id={term}>{term}</h2>
            <table style={{ width: '100%', display: 'table' }}>
                <thead>
                    <tr>
                        <th>{data.namePt}</th>
                        <th>{data.nameEn}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.descPt}</td>
                        <td>{data.descEn}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
