import { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import PatientDetail from './components/PatientDetail';
import Devices from './components/Devices';
import Analytics from './components/Analytics';
import Alerts from './components/Alerts';
import Emergency from './components/Emergency';
import History from './components/History';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const navigate = (view: string, patientId?: string) => {
    setCurrentView(view);
    if (patientId) {
      setSelectedPatientId(patientId);
    }
  };

  const doctorInfo = {
    name: "Dr. Sarah Jenkins",
    role: "Senior Cardiologist",
    specialization: "Cardiology & Int. Care",
    ward: "Block A - ICU",
    hospital: "City Central Hospital",
    avatar: "SJ"
  };

  if (currentView === 'login') {
    return <Login onLogin={() => navigate('dashboard')} />;
  }

  return (
    <div className="layout-container">
      <Sidebar currentView={currentView} onNavigate={navigate} />

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-title">
            {currentView === 'dashboard' && 'Overview Dashboard'}
            {currentView === 'patients' && 'Patients Overview'}
            {currentView === 'patient_detail' && 'Patient Details'}
            {currentView === 'devices' && 'Connected Devices'}
            {currentView === 'analytics' && 'Health Analytics'}
            {currentView === 'alerts' && 'System Alerts'}
            {currentView === 'emergency' && 'Emergency Ward Operations'}
            {currentView === 'history' && 'Patient History'}
          </div>

          <div className="topbar-actions">
            <button className="icon-btn" title="Alerts">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="notification-badge"></span>
            </button>
            <button className="icon-btn" title="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
            <div className="doctor-profile" onClick={() => navigate('login')}>
              <div className="avatar">{doctorInfo.avatar}</div>
              <div className="doctor-info-sm">
                <span className="doctor-name-sm">{doctorInfo.name}</span>
                <span className="doctor-role-sm">{doctorInfo.role}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="page-content animate-fade-in">
          {currentView === 'dashboard' && <Dashboard doctor={doctorInfo} onNavigate={navigate} />}
          {currentView === 'patients' && <Patients onNavigate={navigate} />}
          {currentView === 'patient_detail' && <PatientDetail patientId={selectedPatientId} onNavigate={navigate} />}
          {currentView === 'devices' && <Devices onNavigate={navigate} />}
          {currentView === 'analytics' && <Analytics onNavigate={navigate} />}
          {currentView === 'alerts' && <Alerts onNavigate={navigate} />}
          {currentView === 'emergency' && <Emergency onNavigate={navigate} />}
          {currentView === 'history' && <History onNavigate={navigate} />}
        </section>
      </main>
    </div>
  );
}

export default App;
