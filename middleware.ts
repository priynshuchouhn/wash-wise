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
    const userTypeInCookies = request.cookies.get('userType')?.value || " " as string;
    if (!token && !publicPaths.includes(path)) {
        return NextResponse.redirect(new URL(`/${userType}/auth/login`, request.url))
    }
    if (token && publicPaths.includes(path)) {
        return NextResponse.redirect(new URL(`/${userType}/home/dashboard`, request.url))
    }
    if (token && userTypeInCookies === 'Admin' && !path.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin/home/dashboard', request.url));
    }
    
    // Check if the user is a customer and trying to access other dashboards
    if (token && userTypeInCookies === 'Customer' && !path.startsWith('/customer')) {
        return NextResponse.redirect(new URL('/customer/home/dashboard', request.url));
    }
    
    // Check if the user is a partner and trying to access other dashboards
    if (token && userTypeInCookies === 'Partner' && !path.startsWith('/partner')) {
        return NextResponse.redirect(new URL('/partner/home/dashboard', request.url));
    }
}

export const config = {
    matcher: ['/admin/:path*', '/partner/:path*', '/customer/:path*'],
}