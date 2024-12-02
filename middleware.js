import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/",               // Home
  "/about",          // Public page
  "/contact",        // Public page
  "/sign-in(.*)",    // Sign-in page
  "/sign-up(.*)",    // Sign-up page
  "/product-detalis/:id",    // Sign-up page
]);

export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl;

  // Allow public routes
  if (isPublicRoute(req)) {
    console.log(`Public route accessed: ${pathname}`);
    return;
  }

  // Protect private routes
  console.log(`Protected route accessed: ${pathname}`);
  return auth.protect();
});

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Include API routes
    "/(api|trpc)(.*)",
  ],
};
