import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { password } = await request.json()
  const secret = process.env.AUTH_SECRET

  if (!secret) {
    return NextResponse.json({ error: 'Auth not configured' }, { status: 500 })
  }

  if (password !== secret) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set('mcc-auth', secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return response
}
