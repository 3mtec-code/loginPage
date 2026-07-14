import React, { useState } from 'react'
import { login } from './auth'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const user = await login(email.trim(), password, remember)
      if (onLogin) onLogin(user)
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="brand">Welcome Back</h1>
        <p className="subtitle">Sign in to continue</p>

        <label className="input-label">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>

        <label className="input-label">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </label>

        <div className="row">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{' '}
            Remember me
          </label>
          <a className="forgot" href="#">Forgot?</a>
        </div>

        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
        {error && <div className="error">{error}</div>}

        <div className="divider">or continue with</div>
        <div className="socials">
          <button type="button" className="btn social">Google</button>
          <button type="button" className="btn social">GitHub</button>
        </div>

        <p className="signup">Don't have an account? <a href="#">Sign up</a></p>
      </form>
    </div>
  )
}
