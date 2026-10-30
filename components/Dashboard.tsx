// Orion Pax Prime - Cybertron Vanguard Live Deck UI Matrix (v0-Ready)
import React from 'react';

export default function OrionPaxPrimeDashboard() {
  const metrics = {
    status: "ONLINE",
    project: "Orion Pax Prime",
    chassis: "Cybertron Vanguard Sentinel Interface",
    height: 10,
    lastUpdated: "2026-10-30T15:32:09.630537+00:00"
  };

  return (
    <div style={{ padding: '2rem', background: '#0B0F19', color: '#00F0FF', fontFamily: 'monospace', minHeight: '100vh' }}>
      <header style={{ borderBottom: '2px solid #00F0FF', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '2px' }}>🌌 {metrics.project}</h1>
        <p style={{ color: '#6A7B95', margin: '0.5rem 0 0 0' }}>Live Platform Framework Telemetry Matrix</p>
      </header>
      
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: '#131A2E', padding: '1.5rem', borderRadius: '4px', border: '1px solid #1F2A45' }}>
          <h3 style={{ color: '#6A7B95', marginTop: 0 }}>SYSTEM CHASSIS</h3>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>{metrics.chassis}</p>
        </div>

        <div style={{ background: '#131A2E', padding: '1.5rem', borderRadius: '4px', border: '1px solid #1F2A45' }}>
          <h3 style={{ color: '#6A7B95', marginTop: 0 }}>LEDGER STATUS</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#00FF66' }}>● {metrics.status}</p>
        </div>

        <div style={{ background: '#131A2E', padding: '1.5rem', borderRadius: '4px', border: '1px solid #1F2A45' }}>
          <h3 style={{ color: '#6A7B95', marginTop: 0 }}>BLOCK HEIGHT</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>[{metrics.height.toString().padStart(4, '0')}]</p>
        </div>
      </main>

      <footer style={{ marginTop: '3rem', color: '#4A5568', fontSize: '0.8rem', borderTop: '1px solid #1A202C', paddingTop: '1rem' }}>
        Synchronized UTC Frame: {metrics.lastUpdated}
      </footer>
    </div>
  );
}
