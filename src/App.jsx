import React, { useState, useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { getUser, isAuthenticated } from './auth'

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (isAuthenticated()) setUser(getUser())
  }, [])

  return (
    <div className="app">
      {user ? (
        <Dashboard user={user} onLogout={() => setUser(null)} />
      ) : (
        <Login onLogin={(u) => setUser(u)} />
      )}
    </div>
  )
}
