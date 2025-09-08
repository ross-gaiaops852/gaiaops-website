// Production domains that SHOULD be indexed
const PRODUCTION_DOMAINS = [
  'gaiaops.com',
  'www.gaiaops.com'
];

// Development/staging patterns that should NEVER be indexed
const DEV_PATTERNS = [
  'localhost',
  '127.0.0.1',
  'sevalla.page',
  'vercel.app',
  'netlify.app',
  'github.io',
  'staging',
  'dev',
  'test'
];

export const getEnvironmentConfig = (url: URL) => {
  const hostname = url.hostname.toLowerCase();
  
  // Explicit production check (whitelist approach)
  const isProduction = PRODUCTION_DOMAINS.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
  
  // Development check (blacklist + patterns)
  const isDevelopment = !isProduction && (
    DEV_PATTERNS.some(pattern => hostname.includes(pattern)) ||
    import.meta.env.DEV === true ||
    import.meta.env.MODE === 'development'
  );
  
  // Default to blocking for unknown domains (fail-safe)
  const shouldIndex = isProduction && !isDevelopment;
  
  // Log for debugging (only in development)
  if (import.meta.env.DEV) {
    console.log('🔍 SEO Protection Config:', {
      hostname,
      isProduction,
      isDevelopment,
      willBeIndexed: shouldIndex,
      matchedPattern: DEV_PATTERNS.find(pattern => hostname.includes(pattern)) || 'none'
    });
  }
  
  return {
    isProduction,
    isDevelopment,
    shouldIndex,
    hostname
  };
};