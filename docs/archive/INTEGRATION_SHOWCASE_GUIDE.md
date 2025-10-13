# Integration Showcase Component - Implementation Guide

## Overview
Two versions of an app integration showcase component for your GaiaOps Astro site:

1. **IntegrationShowcase.astro** - Full 3D isometric grid effect (like the reference image)
2. **IntegrationShowcaseSimple.astro** - Simplified 2D cards with better performance

## Quick Start

### Option 1: Simple Version (Recommended)
Best for most use cases - easier to maintain, better performance, still visually appealing.

```astro
---
import IntegrationShowcaseSimple from '../components/IntegrationShowcaseSimple.astro';
---

<IntegrationShowcaseSimple 
  title="Seamlessly Integrate Your Existing Tools"
  subtitle="We work with the platforms your team already uses"
/>
```

### Option 2: 3D Version
More visually impressive but requires more resources and testing.

```astro
---
import IntegrationShowcase from '../components/IntegrationShowcase.astro';
---

<IntegrationShowcase 
  title="Connect Your Tech Stack"
  subtitle="Works with all your favorite tools"
/>
```

## Adding Real App Logos

### Method 1: Use Simple Icons CDN
Replace the color blocks with actual SVG logos from Simple Icons:

```astro
const integrations = [
  { 
    name: 'Slack', 
    icon: 'https://cdn.simpleicons.org/slack/4A154B',
    color: '#4A154B' 
  },
  { 
    name: 'Google Drive', 
    icon: 'https://cdn.simpleicons.org/googledrive/4285F4',
    color: '#4285F4' 
  },
  // Add more...
];
```

Then update the template:
```astro
<div class="app-icon-placeholder" style={`background: white;`}>
  <img src={app.icon} alt={app.name} class="w-12 h-12" />
</div>
```

### Method 2: Use Your Own Logo Files
Store logos in `/public/images/integrations/` and reference them:

```astro
const integrations = [
  { 
    name: 'Slack', 
    icon: '/images/integrations/slack.svg',
    color: '#4A154B' 
  },
];
```

## Customization Options

### Change Colors
Update the brand colors to match GaiaOps theme:

```astro
<section class="py-20 bg-gradient-to-br from-teal-50 via-white to-navy-50">
```

### Adjust Grid Layout
Change the number of columns:

```css
.integration-grid {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); /* Larger cards */
  /* or */
  grid-template-columns: repeat(5, 1fr); /* Fixed 5 columns */
}
```

### Add More Apps
Simply add to the integrations array:

```astro
const integrations = [
  // existing apps...
  { 
    name: 'Asana', 
    color: '#F06A6A', 
    delay: 1.4,
    icon: 'https://cdn.simpleicons.org/asana/F06A6A'
  },
];
```

### Feature Specific Apps
Make certain apps stand out:

```astro
{ 
  name: 'ClickUp', 
  color: '#7B68EE', 
  featured: true,  // ← Larger, has border
  delay: 0.7 
},
```

## Integration with GaiaOps Brand

### Use Brand Colors
Update to use your established color palette:

```astro
<a 
  href="/contact" 
  class="inline-flex items-center px-8 py-4 bg-teal-600 text-white..."
>
```

Replace with:
```astro
<a 
  href="/contact" 
  class="inline-flex items-center px-8 py-4 bg-[#4F8FC8] text-white..."
>
```

### Add to Homepage
Place after your features section and before testimonials:

```astro
---
import Hero from '../components/Hero.astro';
import Features from '../components/Features.astro';
import IntegrationShowcaseSimple from '../components/IntegrationShowcaseSimple.astro';
import Testimonials from '../components/Testimonials.astro';
---

<Layout>
  <Hero />
  <Features />
  <IntegrationShowcaseSimple />
  <Testimonials />
</Layout>
```

## Performance Tips

1. **Lazy load images** if using real logos:
```astro
<img src={app.icon} alt={app.name} loading="lazy" />
```

2. **Limit animations on mobile**:
```css
@media (prefers-reduced-motion: reduce) {
  .integration-card {
    animation: none;
    opacity: 1;
  }
}
```

3. **Use CSS containment**:
```css
.integration-card {
  contain: layout style paint;
}
```

## Example with Real Logos

Here's a complete example using Simple Icons CDN:

```astro
---
const integrations = [
  { 
    name: 'Slack', 
    icon: 'https://cdn.simpleicons.org/slack',
    color: '#4A154B',
    delay: 0 
  },
  { 
    name: 'Google Drive', 
    icon: 'https://cdn.simpleicons.org/googledrive',
    color: '#4285F4',
    delay: 0.1 
  },
  { 
    name: 'Notion', 
    icon: 'https://cdn.simpleicons.org/notion',
    color: '#000000',
    delay: 0.2 
  },
  { 
    name: 'Microsoft Teams', 
    icon: 'https://cdn.simpleicons.org/microsoftteams',
    color: '#6264A7',
    delay: 0.3 
  },
  { 
    name: 'Zoom', 
    icon: 'https://cdn.simpleicons.org/zoom',
    color: '#2D8CFF',
    delay: 0.4 
  },
  { 
    name: 'Salesforce', 
    icon: 'https://cdn.simpleicons.org/salesforce',
    color: '#00A1E0',
    delay: 0.5 
  },
  { 
    name: 'Stripe', 
    icon: 'https://cdn.simpleicons.org/stripe',
    color: '#008CDD',
    delay: 0.6 
  },
  { 
    name: 'ClickUp', 
    icon: 'https://cdn.simpleicons.org/clickup',
    color: '#7B68EE',
    delay: 0.7,
    featured: true 
  },
];
---
```

## Troubleshooting

### Icons not loading
- Check CDN availability
- Verify icon names at https://simpleicons.org
- Use fallback colors if images fail

### Layout issues on mobile
- Test on actual devices, not just browser DevTools
- Adjust `minmax()` values in grid-template-columns
- Consider hiding some cards on mobile

### Performance concerns
- Use the Simple version instead of 3D version
- Reduce number of visible cards on mobile
- Add `will-change: transform` only on hover

## Next Steps

1. Choose which version to use (Simple recommended)
2. Collect your app logos or use Simple Icons CDN
3. Customize colors to match GaiaOps brand
4. Test on mobile devices
5. Add to your homepage or services page

Need help? The components are fully customizable - just adjust the arrays and CSS variables!
