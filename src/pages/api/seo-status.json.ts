import type { APIRoute } from 'astro';
import { getEnvironmentConfig } from '../../config/environment';

export const GET: APIRoute = ({ url }) => {
  const config = getEnvironmentConfig(url);
  
  return new Response(JSON.stringify({
    hostname: url.hostname,
    environment: config.isProduction ? 'production' : 'development',
    indexingAllowed: config.shouldIndex,
    robotsTxt: config.shouldIndex ? 'Allow: /' : 'Disallow: /',
    metaTags: config.shouldIndex ? 'index, follow' : 'noindex, nofollow, noarchive, nosnippet',
    xRobotsTag: config.shouldIndex ? 'all' : 'noindex, nofollow',
    timestamp: new Date().toISOString(),
    protectionLayers: {
      robotsTxt: true,
      metaTags: !config.shouldIndex,
      httpHeaders: true
    },
    productionDomains: ['gaiaops.com', 'www.gaiaops.com', 'gaiaops.io', 'www.gaiaops.io'],
    devPatterns: ['localhost', '127.0.0.1', 'sevalla.page', 'staging', 'dev', 'test'],
    note: config.shouldIndex ? 
      'This domain is whitelisted for search engine indexing' : 
      'This domain is blocked from search engine indexing. Production: https://gaiaops.io'
  }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'X-Robots-Tag': config.shouldIndex ? 'all' : 'noindex, nofollow',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
};