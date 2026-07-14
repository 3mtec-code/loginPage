import React from 'react'

export default function Welcome({ onContinue, toggleTheme, isDark }) {
  return (
    <div className="welcome-page">
      <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark mode">
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="welcome-card">
        <p className="welcome-badge">Welcome</p>
        <h1 className="welcome-title">Stay signed in with ease</h1>
        <p className="welcome-text">
          Access your dashboard in a few simple steps.
        </p>

        <button className="btn primary" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  )
}
