import React, { useState } from 'react';

function Login({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setLoading(false);
            onLogin();
        }, 1200);
    };

    return (
        <div className="login-container">
            <div className="login-bg"></div>

            <div className="login-card glass-panel">
                <div className="login-header">
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--accent-gradient)', borderRadius: '1rem', marginBottom: '1.5rem', boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                    </div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>AuraHealth</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Remote Patient Monitoring System</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="input-group" style={{ marginBottom: 0 }}>
                        <label className="input-label">Email Address / Doctor ID</label>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="dr.jenkins@aura.health"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="input-label">Password</label>
                            <a href="#" style={{ fontSize: '0.875rem' }}>Forgot?</a>
                        </div>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={loading}>
                        {loading ? 'Authenticating...' : 'Secure Login'}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Secured by <strong>Firebase Auth</strong>
                </div>
            </div>
        </div>
    );
}

export default Login;
