import React, { useState, useEffect } from 'react'
import Welcome from './Welcome'
import Login from './Login'
import Dashboard from './Dashboard'
import { getUser, isAuthenticated } from './auth'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [user, setUser] = useState(null)
  const [showWelcome, setShowWelcome] = useState(true)

  // 1. የዳርክ ሞድ ምርጫን ከ localStorage ላይ አንብቦ መተግበር
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [])

  // 2. ተጠቃሚው አስቀድሞ Login ማድረጉን ቼክ ማድረግ
  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getUser())
    }
  }, [])

  // 3. የዳርክ ሞድ መቀያየሪያ ተግባር (Toggle function)
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
      {user ? (
        <Dashboard user={user} onLogout={() => setUser(null)} />
      ) : showWelcome ? (
        <Welcome
          onContinue={() => setShowWelcome(false)}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
      ) : (
        <Login
          onLogin={(u) => setUser(u)}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
      )}
    </div>
  )
}