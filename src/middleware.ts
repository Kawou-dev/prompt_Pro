import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Routes protégées
const isProtectedRoute = createRouteMatcher([
  '/profile',
  '/chat',
  '/prompts',
  '/inbox',
  '/events',
  '/dashboard',
])

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth()
  const role = sessionClaims?.metadata?.role
  const url = new URL(req.url)

  // 1️⃣ Protection des routes
  if (isProtectedRoute(req)) {
    await auth.protect()
  }

  // 2️⃣ Après sign-in ou sign-up → Clerk envoie vers "/"
  // On redirige dynamiquement selon le rôle
  if (url.pathname === '/' && req.headers.get("referer")?.includes("/sign-in")) {
    if (role === 'kawou_promptpro') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    } else {
      return NextResponse.redirect(new URL('/chat', req.url))
    }
  }

  if (url.pathname === '/' && req.headers.get("referer")?.includes("/sign-up")) {
    if (role === 'kawou_promptpro') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    } else {
      return NextResponse.redirect(new URL('/chat', req.url))
    }
  }

  // 3️⃣ Empêcher un non-admin d’accéder au dashboard
  if (url.pathname.startsWith('/dashboard') && role !== 'kawou_promptpro') {
    return NextResponse.redirect(new URL('/chat', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
