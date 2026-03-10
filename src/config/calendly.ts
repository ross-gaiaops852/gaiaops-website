export const CALENDLY_BASE_URL = 'https://calendly.com/d/cspg-g8f-tsd';

export function calendlyUrl(utmMedium: string, utmContent: string = 'routing-form'): string {
  return `${CALENDLY_BASE_URL}?utm_source=website&utm_medium=${utmMedium}&utm_campaign=gaiaops-discovery&utm_content=${utmContent}`;
}
