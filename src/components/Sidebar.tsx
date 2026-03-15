import React from 'react';

function Sidebar({ currentView, onNavigate }: { currentView: string; onNavigate: (view: string) => void }) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> },
        { id: 'patients', label: 'Patients', icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> },
        { id: 'devices', label: 'Devices', icon: <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect> },
        { id: 'analytics', label: 'Analytics', icon: <path d="M3 3v18h18"></path> },
        { id: 'alerts', label: 'Alerts', icon: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path> },
        { id: 'emergency', label: 'Emergency Ward', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> },
        { id: 'history', label: 'History', icon: <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path> }
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo-icon">AH</div>
                <div className="sidebar-title">AuraHealth</div>
            </div>

            <nav className="nav-menu" style={{ flex: 1, marginTop: '1rem' }}>
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className={`nav-item ${currentView === item.id || (currentView === 'patient_detail' && item.id === 'patients') ? 'active' : ''}`}
                        onClick={() => onNavigate(item.id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {item.icon}
                            {item.id === 'patients' && <circle cx="9" cy="7" r="4"></circle>}
                            {item.id === 'devices' && <path d="M12 18h.01"></path>}
                            {item.id === 'analytics' && <path d="m19 9-5 5-4-4-3 3"></path>}
                            {item.id === 'alerts' && <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>}
                            {item.id === 'history' && <path d="M3 3v5h5"></path>}
                            {item.id === 'history' && <path d="M12 7v5l4 2"></path>}
                        </svg>
                        {item.label}
                    </div>
                ))}
            </nav>

            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => console.log('Open Chatbot')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
                    AI Assistant
                </button>
                <button className="btn" style={{ width: '100%', color: 'var(--text-secondary)' }} onClick={() => onNavigate('login')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
