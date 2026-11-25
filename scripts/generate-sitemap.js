import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const configuredUrl = process.env.SITE_URL
if (!configuredUrl) {
  throw new Error('Set SITE_URL to the production site URL before generating SEO files.')
}

const site = new URL(configuredUrl)
if (!['http:', 'https:'].includes(site.protocol) || site.username || site.password) {
  throw new Error('SITE_URL must be an absolute HTTP or HTTPS URL without credentials.')
}

const basePath = site.pathname.replace(/\/+$/, '')
const siteUrl = `${site.origin}${basePath}/`
const sitemapUrl = `${site.origin}${basePath}/sitemap.xml`
const xmlEscape = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${xmlEscape(siteUrl)}</loc></url>\n</urlset>\n`
const robots = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`

await Promise.all([
  writeFile(path.resolve('public/sitemap.xml'), sitemap),
  writeFile(path.resolve('public/robots.txt'), robots),
])
console.log(`Generated sitemap for ${siteUrl}`)
