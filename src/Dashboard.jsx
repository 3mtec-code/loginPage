import React from 'react'
import { logout } from './auth'

export default function Dashboard({ user, onLogout }) {
  const handleLogout = () => {
    logout()
    if (onLogout) onLogout()
  }

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.email}</h2>
      <p>You are signed in.</p>
      <button className="btn" onClick={handleLogout}>Sign out</button>
    </div>
  )
}
