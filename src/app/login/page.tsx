'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      setError('Incorrect password')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy">
      <div className="w-full max-w-sm mx-4">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">勿</div>
          <h1 className="text-xl font-bold text-white tracking-wide">MOTTAINAI</h1>
          <p className="text-sm text-gray-400 mt-1">Command Center</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-2xl">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Enter access code"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full mt-4 py-3 bg-navy text-white rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Enter'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Nippon Hasha Inc. &copy; 2026 &mdash; Confidential
        </p>
      </div>
    </div>
  )
}
