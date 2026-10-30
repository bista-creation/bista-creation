# SEO & Google Indexing

## What is already in place

- Canonical URLs for every public page
- `robots.txt` (API routes disallowed, sitemap linked)
- `sitemap.xml` with all public pages
- Per-page titles, descriptions, Open Graph and Twitter metadata
- Generated 1200×630 social preview at `/opengraph-image`
- Organization, WebSite, Service, VideoObject, FAQPage, AboutPage, ContactPage and BreadcrumbList structured data
- Semantic headings, breadcrumb navigation and internal links
- Build-time self-hosted fonts (`next/font`) for faster rendering
- `max-image-preview:large` and full snippet settings for Googlebot
- Web app manifest and SVG favicon

## Verify the site in Google Search Console

1. Open <https://search.google.com/search-console>.
2. Choose **Add property** → **URL prefix**.
3. Enter `https://bista-creation.vercel.app/` and continue.
4. Choose **HTML tag** verification. Copy only the `content` value from the meta tag Google shows.
5. Add it as a Vercel environment variable named `GOOGLE_SITE_VERIFICATION` for Production, then redeploy. The site already reads this variable in `src/app/layout.tsx`.
6. Return to Search Console and click **Verify**.

Alternative: place the Google HTML verification file in `public/` and redeploy.

## Submit the sitemap

1. In Search Console, open **Indexing → Sitemaps**.
2. Submit `https://bista-creation.vercel.app/sitemap.xml`.
3. Use **URL Inspection** on `/`, `/work`, `/services`, `/commission` and `/about`, then click **Request indexing**.

Indexing normally takes a few days to a few weeks. Requesting indexing does not guarantee an immediate result.

## Ongoing checklist

- Publish one useful page or case study per month (process, story, release notes).
- Link every YouTube video description back to the matching page on the site.
- Add the site URL to Instagram, Facebook and YouTube profile links.
- Keep the studio name, email, WhatsApp number and links consistent everywhere.
- Earn genuine links: collaborators, wedding vendors, local directories, music blogs.
- Do not buy links or publish AI-generated filler pages; both can hurt rankings.
- Re-run the build and resubmit the sitemap after adding or renaming pages.

## Useful checks

```powershell
# Production sitemap
curl.exe -s https://bista-creation.vercel.app/sitemap.xml

# Robots rules
curl.exe -s https://bista-creation.vercel.app/robots.txt

# Canonical + social metadata for a page
curl.exe -s https://bista-creation.vercel.app/work | Select-String "canonical|og:image|application/ld"
```
