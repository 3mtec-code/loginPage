// Simple mock auth helper
const TOKEN_KEY = 'app_token'
const USER_KEY = 'app_user'

function fakeServerAuthenticate(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        resolve({
          token: 'mock-jwt-token-123456',
          user: { email }
        })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 500)
  })
}

export async function login(email, password, remember) {
  const resp = await fakeServerAuthenticate(email, password)
  try {
    const storage = remember ? localStorage : sessionStorage
    storage.setItem(TOKEN_KEY, resp.token)
    storage.setItem(USER_KEY, JSON.stringify(resp.user))
  } catch (err) {
    // fallback to localStorage if sessionStorage isn't available
    localStorage.setItem(TOKEN_KEY, resp.token)
    localStorage.setItem(USER_KEY, JSON.stringify(resp.user))
  }
  return resp.user
}

export function logout() {
  try {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(USER_KEY)
  } catch (err) {
    // ignore
  }
}

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (err) {
    return null
  }
}

export function isAuthenticated() {
  try {
    return !!(localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY))
  } catch (err) {
    return false
  }
}

export default { login, logout, getUser, isAuthenticated }
