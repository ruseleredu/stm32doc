import React from 'react';
import statusData from '@site/src/data/groupStatus.json';

const GroupTable = ({ semester = '2026-1' }) => {
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X'];

    // Grab the specific semester data from the JSON
    const semesterInfo = statusData?.semesters?.[semester];

    if (!semesterInfo) {
        return <div className="alert alert--warning">Dados para o semestre {semester} não encontrados.</div>;
    }

    const lastChecked = new Date(semesterInfo.lastUpdated).toLocaleString('pt-BR');

    return (
        <div style={{ margin: '2rem 0' }}>
            <h3>Semestre: {semester}</h3>
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
                        const orgName = `ELT73A-S22-${semester}-${letter}`;
                        const status = semesterInfo.data[letter] || 'Pendente';
                        const isActive = status === 200;

                        return (
                            <tr key={letter}>
                                <td style={{ padding: '10px', border: '1px solid var(--ifm-contents-border-color)' }}>Grupo S22-{letter}</td>
                                <td style={{ padding: '10px', border: '1px solid var(--ifm-contents-border-color)' }}>
                                    <a href={`https://github.com/${orgName}`} target="_blank" rel="noopener noreferrer">
                                        <strong>{orgName}</strong>
                                    </a>
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
            <p style={{ textAlign: 'right', fontSize: '0.8rem', opacity: 0.6 }}>
                Sincronizado em: {lastChecked}
            </p>
        </div>
    );
};

export default GroupTable;
