import { defineMiddleware } from 'astro:middleware';
import { getEnvironmentConfig } from './config/environment';

export const onRequest = defineMiddleware(async ({ url }, next) => {
  const response = await next();
  const config = getEnvironmentConfig(url);
  
  // Add X-Robots-Tag header for additional protection
  if (!config.shouldIndex) {
    response.headers.set(
      'X-Robots-Tag', 
      'noindex, nofollow, noarchive, nosnippet, noimageindex'
    );
    
    // Additional security headers for development environments
    response.headers.set('X-Environment', config.isProduction ? 'production' : 'development');
    response.headers.set('X-SEO-Protection', 'active');
    
    // Cache control for development - prevent caching of dev content
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  } else {
    // Production environment headers
    response.headers.set('X-Robots-Tag', 'all');
    response.headers.set('X-Environment', 'production');
    response.headers.set('X-SEO-Protection', 'disabled');
  }
  
  // Add common security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
});