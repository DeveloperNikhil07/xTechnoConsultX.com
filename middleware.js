import { NextResponse } from 'next/server'

export function middleware(request) {
    const { pathname } = request.nextUrl

    // Define allowed paths without redirect
    const allowedPaths = ['/', '/aboutus', '/contactus']

    // If the pathname is in allowedPaths, continue without redirect
    if (allowedPaths.includes(pathname)) {
        return NextResponse.next()
    }

    // Otherwise redirect to homepage
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/', '/home', '/contactus', '/aboutus', '/ourservices', '/login', '/signup', '/public/:path*'],
}

