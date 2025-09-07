# Google Search Console Setup Guide

## Step 1: Verify Your Website

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property" and select "URL prefix"
3. Enter your domain: `https://neopixellab.com`
4. Choose "HTML tag" verification method
5. Copy the verification code from the meta tag
6. Replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in `index.html` with your actual code

## Step 2: Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps" in the left sidebar
2. Click "Add a new sitemap"
3. Enter: `sitemap.xml`
4. Click "Submit"

## Step 3: Set Up Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Replace `GA_MEASUREMENT_ID` in `index.html` with your actual ID
5. Also update the ID in `src/utils/analytics.ts`

## Step 4: Request Indexing

1. In Google Search Console, use the "URL Inspection" tool
2. Enter your main pages:
   - `https://neopixellab.com/`
   - `https://neopixellab.com/about`
   - `https://neopixellab.com/contact`
3. Click "Request Indexing" for each page

## Step 5: Monitor Performance

- Check "Performance" tab for search queries and clicks
- Monitor "Coverage" for indexing issues
- Review "Enhancements" for structured data validation
- Set up email alerts for critical issues

## Additional Search Engines

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your site and verify using the meta tag
3. Replace `YOUR_BING_WEBMASTER_VERIFICATION_CODE` in `index.html`

### Yandex Webmaster
1. Go to [Yandex Webmaster](https://webmaster.yandex.com/)
2. Add your site and verify using the meta tag
3. Replace `YOUR_YANDEX_VERIFICATION_CODE` in `index.html`

## Key Metrics to Track

- **Impressions**: How often your site appears in search results
- **Clicks**: How many users click through to your site
- **CTR**: Click-through rate (clicks/impressions)
- **Average Position**: Your average ranking position
- **Core Web Vitals**: Page experience metrics

## Important Notes

- It may take 24-48 hours for verification to complete
- Sitemap processing can take several days
- New content typically gets indexed within 1-7 days
- Monitor the "Coverage" report for any crawling issues
