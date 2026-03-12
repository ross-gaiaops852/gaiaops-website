import type { APIRoute } from 'astro';
import { getEnvironmentConfig } from '../config/environment';

export const GET: APIRoute = ({ site, url }) => {
  const config = getEnvironmentConfig(url);

  let robotsContent: string;

  if (config.shouldIndex) {
    // Production: Allow indexing with targeted disallow rules
    robotsContent = `# GaiaOps Production Robots
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_private/
Disallow: /thank-you/

Sitemap: ${(site || url.origin).toString().replace(/\/$/, '')}/sitemap-index.xml
`;
  } else {
    // Development/Staging: Comprehensive blocking
    robotsContent = `# GaiaOps Development - NO INDEXING ALLOWED
# Hostname: ${url.hostname}
# Environment: ${config.isProduction ? 'production' : 'development'}

User-agent: *
Disallow: /

# Major search engine crawlers - explicit blocking
User-agent: Googlebot
Disallow: /

User-agent: Bingbot
Disallow: /

User-agent: Slurp
Disallow: /

User-agent: DuckDuckBot
Disallow: /

User-agent: facebookexternalhit
Disallow: /

User-agent: Twitterbot
Disallow: /

User-agent: LinkedInBot
Disallow: /

User-agent: Applebot
Disallow: /

# AI crawlers
User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: PerplexityBot
Disallow: /

# DO NOT INDEX - This is a development/staging environment
# Production site: https://gaiaops.io
# Contact: For the live GaiaOps site, visit gaiaops.io
`;
  }

  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': config.shouldIndex
        ? 'all'
        : 'noindex, nofollow, noarchive, nosnippet',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
