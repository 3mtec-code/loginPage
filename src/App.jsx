import React, { useState, useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { getUser, isAuthenticated } from './auth'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="app">
      <Login toggleTheme={toggleTheme} isDark={isDark} />
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
