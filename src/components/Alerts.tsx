export default function Alerts({ onNavigate }: { onNavigate?: (view: string) => void }) {
    return (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
            <h2>System Alerts Module</h2>
            <p className="text-muted" style={{ marginTop: '1rem' }}>This module is currently being built and connected to Firestore DB.</p>
            {onNavigate && (
                <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => onNavigate('dashboard')}>
                    Return to Dashboard
                </button>
            )}
        </div>
    );
}
