import React, { useState } from 'react';

function PatientDetail({ patientId, onNavigate }: { patientId: string | null, onNavigate: (v: string) => void }) {
    const [activeTab, setActiveTab] = useState('vitals');

    const patient = {
        id: patientId || 'P001',
        name: 'Michael Chang',
        age: 68,
        bloodType: 'O+',
        phone: '+1 (555) 123-4567',
        email: 'm.chang@example.com',
        address: '123 Pine St, Seattle, WA',
        prefTime: 'Morning (9:00 AM - 11:00 AM)',
        criticality: 'critical',
        devices: [
            { type: 'AuraRing 3', battery: '82%', status: 'online', param: 'Physiological & Temp' },
            { type: 'BioPatch XR', battery: '15%', status: 'online', param: 'Metabolic & Biochem' },
            { type: 'SmartWatch Pro', battery: '0%', status: 'offline', param: 'ECG, HRV, SpO2' }
        ],
        vitals: {
            bp: '155/95',
            hr: '110',
            spo2: '94',
            temp: '38.2',
            glucose: '140',
            sleep: '4.5'
        }
    };

    return (
        <div className="dashboard-grid">
            <div className="col-span-12" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <button className="icon-btn" onClick={() => onNavigate('patients')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
                </button>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {patient.name}
                        <span className={`status-badge status-${patient.criticality}`}>{patient.criticality}</span>
                    </h1>
                    <p className="text-muted">ID: {patient.id} &bull; Age: {patient.age} &bull; {patient.bloodType}</p>
                </div>

                <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-secondary" style={{ color: 'var(--status-stable)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Mark as Recovered / Discharged
                    </button>
                </div>
            </div>

            <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel">
                    <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Phone</span>
                            <div style={{ fontWeight: 500 }}>{patient.phone}</div>
                        </div>
                        <div>
                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Email</span>
                            <div style={{ fontWeight: 500 }}>{patient.email}</div>
                        </div>
                        <div>
                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Address</span>
                            <div style={{ fontWeight: 500 }}>{patient.address}</div>
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />

                    <h3 style={{ marginBottom: '1rem' }}>Communication</h3>
                    <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Preferred Call Time: {patient.prefTime}</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem 0' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Voice Call
                        </button>
                        <button className="btn btn-secondary" style={{ flex: 1, padding: '0.75rem 0' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            Video Call
                        </button>
                    </div>
                </div>

                <div className="glass-panel">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3>Connected Devices</h3>
                        <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                            + Add Bluetooth
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {patient.devices.map((dev, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                                <div>
                                    <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div className={`pulse-dot ${dev.status === 'online' ? 'stable' : 'critical'}`}></div>
                                        {dev.type}
                                    </div>
                                    <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{dev.param}</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <span className={`status-badge status-${dev.battery === '0%' ? 'critical' : dev.battery > '20%' ? 'stable' : 'warning'}`}>{dev.battery}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                <div className="glass-panel">
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                        {['vitals', 'graphs', 'medication'].map(tab => (
                            <div
                                key={tab}
                                style={{
                                    padding: '1rem 2rem',
                                    cursor: 'pointer',
                                    borderBottom: activeTab === tab ? '2px solid var(--accent-primary)' : '2px solid transparent',
                                    color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    fontWeight: activeTab === tab ? 600 : 400,
                                    textTransform: 'capitalize'
                                }}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>

                    {activeTab === 'vitals' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px' }}>
                                <div className="text-muted" style={{ marginBottom: '0.5rem' }}>Blood Pressure</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-critical)' }}>{patient.vitals.bp} <span style={{ fontSize: '1rem', fontWeight: 400 }}>mmHg</span></div>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px' }}>
                                <div className="text-muted" style={{ marginBottom: '0.5rem' }}>Heart Rate</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-critical)' }}>{patient.vitals.hr} <span style={{ fontSize: '1rem', fontWeight: 400 }}>bpm</span></div>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '16px' }}>
                                <div className="text-muted" style={{ marginBottom: '0.5rem' }}>Oxygen (SpO2)</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-stable)' }}>{patient.vitals.spo2} <span style={{ fontSize: '1rem', fontWeight: 400 }}>%</span></div>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '16px' }}>
                                <div className="text-muted" style={{ marginBottom: '0.5rem' }}>Temperature</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-warning)' }}>{patient.vitals.temp} <span style={{ fontSize: '1rem', fontWeight: 400 }}>&deg;C</span></div>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '16px' }}>
                                <div className="text-muted" style={{ marginBottom: '0.5rem' }}>Glucose</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-stable)' }}>{patient.vitals.glucose} <span style={{ fontSize: '1rem', fontWeight: 400 }}>mg/dL</span></div>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '16px' }}>
                                <div className="text-muted" style={{ marginBottom: '0.5rem' }}>Sleep</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--status-warning)' }}>{patient.vitals.sleep} <span style={{ fontSize: '1rem', fontWeight: 400 }}>hrs</span></div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'graphs' && (
                        <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-color)', borderRadius: '16px' }}>
                            <p className="text-muted">Health Trends Chart (BP, HR, SpO2)</p>
                        </div>
                    )}

                    {activeTab === 'medication' && (
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <h3>Current Prescriptions</h3>
                                <button className="btn btn-primary" style={{ padding: '0.4rem 1rem' }}>+ Add Script</button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Lisinopril 10mg</div>
                                    <div className="text-muted" style={{ fontSize: '0.9rem', margin: '0.25rem 0' }}>Take 1 tablet daily in the morning</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.85rem' }}>
                                        <span style={{ color: 'var(--status-stable)' }}>Active</span>
                                        <button className="btn" style={{ padding: 0, color: 'var(--accent-primary)' }}>Edit / Refill</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default PatientDetail;
