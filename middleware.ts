import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const publicPaths = [
    '/customer/auth/register',
    '/customer/auth/login',
    '/partner/auth/login',
    '/partner/auth/register',
    '/admin/auth/login',
]

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const token = request.cookies.get('token') || null;
    const userType = path.split('/')[1]
    const userTypeInCookies = request.cookies.get('userType')?.value.toLowerCase() || null
    const isSameUserType = userTypeInCookies == userType
    if (!token && !publicPaths.includes(path) && !isSameUserType) {
        return NextResponse.redirect(new URL(`/${userType}/auth/login`, request.url))
    }
    if (token && publicPaths.includes(path) && isSameUserType) {
        return NextResponse.redirect(new URL(`/${userType}/home/dashboard`, request.url))
    }

}

export const config = {
    matcher: ['/admin/:path*', '/partner/:path*', '/customer/:path*'],
}