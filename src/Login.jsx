import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder action
    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`)
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

        <button className="btn primary" type="submit">Sign in</button>

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
