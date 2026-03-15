import React from 'react';

function Dashboard({ doctor, onNavigate }: { doctor: any, onNavigate: (v: string) => void }) {
    const stats = [
        { label: 'Active Patients', value: '24', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', color: 'blue' },
        { label: 'Critical Alerts', value: '3', icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z', color: 'red' },
        { label: 'Devices Online', value: '71', icon: 'M12 18h.01 M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z', color: 'green' },
        { label: 'Emergency Dispatches', value: '1', icon: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', color: 'purple' } // replaced with an ambulance-like or star of life icon path
    ];

    const recentAlerts = [
        { id: 1, patient: 'Michael Chang', type: 'High Blood Pressure', time: '10 mins ago', status: 'critical', value: '155/95 mmHg' },
        { id: 2, patient: 'Sarah Connor', type: 'Low SpO2 Levels', time: '45 mins ago', status: 'warning', value: '92%' },
        { id: 3, patient: 'James Wilson', type: 'Irregular Heartbeat', time: '2 hrs ago', status: 'warning', value: 'Arrhythmia Det.' }
    ];

    return (
        <div className="dashboard-grid">
            <div className="col-span-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Welcome back, {doctor.name.split(' ')[1]}</h1>
                    <p className="text-muted">Here is your clinical overview for today.</p>
                </div>
                <button className="btn btn-primary" onClick={() => onNavigate('patients')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    Add New Patient
                </button>
            </div>

            {stats.map((stat, idx) => (
                <div key={idx} className="col-span-3 glass-panel stat-card">
                    <div className={`stat-icon ${stat.color}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={stat.icon}></path>
                            {stat.color === 'blue' && <circle cx="9" cy="7" r="4"></circle>}
                            {stat.color === 'red' && <>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </>}
                        </svg>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                </div>
            ))}

            <div className="col-span-8 glass-panel" style={{ marginTop: '1rem', minHeight: '350px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3>Patient Vitals Overview</h3>
                    <select className="input-field" style={{ width: 'auto', padding: '0.4rem 1rem' }}>
                        <option>Today</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', border: '1px dashed var(--border-color)', borderRadius: '1rem' }}>
                    <p className="text-muted">Health analytics chart loading...</p>
                </div>
            </div>

            <div className="col-span-4 glass-panel" style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3>Recent Alerts</h3>
                    <button className="btn" style={{ padding: '0', color: 'var(--accent-primary)' }} onClick={() => onNavigate('alerts')}>View All</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {recentAlerts.map(alert => (
                        <div key={alert.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ marginTop: '0.25rem' }}>
                                <div className={`pulse-dot ${alert.status}`}></div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ fontWeight: 600 }}>{alert.patient}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{alert.time}</span>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--status-critical)' }}>{alert.type}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Reading: <span style={{ color: 'var(--text-primary)' }}>{alert.value}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-12 glass-panel" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="avatar" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>{doctor.avatar}</div>
                    <div>
                        <h3 style={{ marginBottom: '0.25rem' }}>{doctor.name} - {doctor.role}</h3>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>{doctor.specialization} &bull; {doctor.hospital} ({doctor.ward})</p>
                    </div>
                </div>
                <button className="btn btn-secondary" onClick={() => alert('Editing Profile is disabled in this demo.')}>
                    Edit Profile
                </button>
            </div>

        </div>
    );
}

export default Dashboard;
