import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Matcher pour les routes protégées
const isProtectedRoute = createRouteMatcher([
  '/profile',
  '/chat',
  '/prompts',
  '/inbox',
  '/events'
])

// Matcher pour la route admin
const isAdminRoute = createRouteMatcher(['/dashboard'])

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth()

  // 1️⃣ Protection des routes standards
  if (isProtectedRoute(req)) {
    await auth.protect()
  }

  // 2️⃣ Gestion de la route admin
  if (isAdminRoute(req)) {
    if (sessionClaims?.metadata?.role !== 'kawou_promptpro') {
      // Non admin → on redirige vers /chat
      const url = new URL('/chat', req.url)
      return NextResponse.redirect(url)
    }
  }else{
   if (isAdminRoute(req)) {
    if (sessionClaims?.metadata?.role === 'kawou_promptpro') {
     
      const url = new URL('/dashboard', req.url)
      return NextResponse.redirect(url)
    }
  }

}


})

export const config = {
  matcher: [
    // On exclut les fichiers statiques
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
