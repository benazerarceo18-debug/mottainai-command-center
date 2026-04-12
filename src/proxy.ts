import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname === '/' || pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  const token = request.cookies.get('mcc-auth')?.value
  if (token === process.env.AUTH_SECRET) {
    return NextResponse.next()
  }

  const landingUrl = new URL('/', request.url)
  return NextResponse.redirect(landingUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)'],
}
