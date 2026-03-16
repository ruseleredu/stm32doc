import React from 'react';
import statusData from '@site/src/data/groupStatus.json';

const GroupTable = ({ yearSuffix = '2026-1' }) => {
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    // Format the ISO date from the JSON
    const lastChecked = new Date(statusData.lastUpdated).toLocaleString('pt-BR');

    return (
        <div style={{ margin: '2rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: 'var(--ifm-color-emphasis-100)' }}>
                        <th style={{ padding: '12px', border: '1px solid var(--ifm-contents-border-color)' }}>Grupo</th>
                        <th style={{ padding: '12px', border: '1px solid var(--ifm-contents-border-color)' }}>Organização</th>
                        <th style={{ padding: '12px', border: '1px solid var(--ifm-contents-border-color)', textAlign: 'center' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((letter) => {
                        const orgName = `ELT73A-S22-${yearSuffix}-${letter}`;
                        const status = statusData.data[letter];
                        const isActive = status === 200;

                        return (
                            <tr key={letter}>
                                <td style={{ padding: '10px', border: '1px solid var(--ifm-contents-border-color)' }}>Grupo S22-{letter}</td>
                                <td style={{ padding: '10px', border: '1px solid var(--ifm-contents-border-color)' }}>
                                    <a href={`https://github.com/${orgName}`} target="_blank"><strong>{orgName}</strong></a>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid var(--ifm-contents-border-color)', textAlign: 'center' }}>
                                    <span style={{
                                        backgroundColor: isActive ? '#def7ec' : '#fde8e8',
                                        color: isActive ? '#03543f' : '#9b1c1c',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {isActive ? 'Ativo' : status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div style={{ textAlign: 'right', fontSize: '0.8rem', opacity: 0.7 }}>
                Dados obtidos durante o build em: {lastChecked}
            </div>
        </div>
    );
};

export default GroupTable;