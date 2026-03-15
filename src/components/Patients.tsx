import React, { useState } from 'react';

function Patients({ onNavigate }: { onNavigate: (view: string, id?: string) => void }) {
    // Sort heavily mocked data by criticality (critical -> warning -> stable)
    const [patients, setPatients] = useState([
        { id: 'P001', name: 'Michael Chang', criticality: 'critical', age: 68, lastUpdate: '10 mins ago', metrics: { hr: 110, bp: '155/95', spo2: 94 } },
        { id: 'P005', name: 'David Kim', criticality: 'critical', age: 72, lastUpdate: '2 mins ago', metrics: { hr: 60, bp: '180/100', spo2: 92 } },
        { id: 'P002', name: 'Sarah Connor', criticality: 'warning', age: 45, lastUpdate: '45 mins ago', metrics: { hr: 85, bp: '120/80', spo2: 96 } },
        { id: 'P003', name: 'James Wilson', criticality: 'warning', age: 54, lastUpdate: '2 hrs ago', metrics: { hr: 95, bp: '135/88', spo2: 97 } },
        { id: 'P004', name: 'Emma Thompson', criticality: 'stable', age: 31, lastUpdate: '5 hrs ago', metrics: { hr: 72, bp: '115/75', spo2: 99 } },
        { id: 'P006', name: 'Robert Fox', criticality: 'stable', age: 59, lastUpdate: '1 hr ago', metrics: { hr: 78, bp: '125/82', spo2: 98 } }
    ]);

    return (
        <div className="dashboard-grid">
            <div className="col-span-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Patients Directory</h1>
                    <p className="text-muted">Total Active Patients: {patients.length}</p>
                </div>
                <button className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    Add New Patient
                </button>
            </div>

            <div className="col-span-12 glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>Sorted by Criticality Level</h3>
                    <div className="input-group" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <input type="text" className="input-field" placeholder="Search patients..." style={{ width: '250px' }} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {patients.map(patient => (
                        <div
                            key={patient.id}
                            className="patient-item"
                            onClick={() => onNavigate('patient_detail', patient.id)}
                        >
                            <div className="patient-info">
                                <div style={{ position: 'relative' }}>
                                    <div className="patient-avatar">{patient.name.split(' ').map(n => n[0]).join('')}</div>
                                    <div className={`pulse-dot ${patient.criticality}`} style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--bg-primary)', padding: '2px', border: 'none' }}></div>
                                </div>
                                <div className="patient-details">
                                    <span className="patient-name">{patient.name}</span>
                                    <span className="patient-meta">ID: {patient.id} &bull; Age: {patient.age} &bull; Updated: {patient.lastUpdate}</span>
                                </div>
                            </div>

                            <div className="patient-metrics">
                                <div className="metric-pill">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--status-critical)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                                    <span>{patient.metrics.hr} bpm</span>
                                </div>
                                <div className="metric-pill">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                    <span>{patient.metrics.bp}</span>
                                </div>
                                <div className="metric-pill">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--status-stable)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6Z"></path><path d="M4 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z"></path><path d="M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4V8Z"></path></svg>
                                    <span>{patient.metrics.spo2}% SpO2</span>
                                </div>
                                <div className={`status-badge status-${patient.criticality}`} style={{ width: '80px', justifyContent: 'center' }}>
                                    {patient.criticality}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Patients;
