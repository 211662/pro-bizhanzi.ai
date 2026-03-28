# 📋 Onpage SEO Checklist — hanzii.net

> **Website:** https://hanzii.net  
> **Date:** 2026-03-28  
> **Auditor:** BizHan Team

---

## Base

| STT | Checklist | Content | Status |
|-----|-----------|---------|--------|
| 1 | Install Google Tag Manager | GTM ID: `GTM-T7DLMWMZ` — installed in `<head>` and `<body>` (noscript) | ✅ Done |
|  | Install Google Analytics | No standalone GA code found — likely configured via GTM | ⚠️ Need to verify in GTM |
|  | Install Google Search Console | No `google-site-verification` meta tag found in source. Verification may be done via DNS or GTM | ⚠️ Need to verify |
|  | Install Bing Webmaster | No `msvalidate.01` meta tag found in source | ❌ Not yet |
| 2 | Add proper title tags to all pages (unique) | All pages share the same title: `Từ điển Trung - Anh, Trung - Việt Online` — NOT unique per page | ❌ Not yet |
| 3 | Add meta descriptions to all pages (unique) | All pages share the same description: `Từ điển Trung Việt, Trung Anh online miễn phí Hanzii, tra cứu chữ hán theo bộ, nét vẽ, hình ảnh...` — NOT unique per page | ❌ Not yet |
| 4 | Add canonical URLs (self-referencing) | No `<link rel="canonical">` tag found on any page | ❌ Not yet |
| 5 | Add Open Graph tags | OG tags present on homepage: `og:title`, `og:url`, `og:site_name`, `og:description`, `og:image`, `og:type`. `fb:app_id` is empty. Missing `og:locale` | ⚠️ Partial |
| 6 | Add Twitter Card tags | No `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` tags found | ❌ Not yet |
| 7 | Add basic structured data (WebSite, Organization) | `WebSite` schema present with `SearchAction`. No `Organization` schema found | ⚠️ Partial |
| 8 | Heading structure (H1, H2, H3…) | SPA (Angular) — headings rendered client-side, not visible in initial HTML source. Need to verify rendered DOM | ⚠️ Need to verify |
| 9 | Add FAQ schema | No FAQ structured data found | ❌ Not yet |
| 10 | Optimize all images (alt text, compression) | SPA — images loaded dynamically. Static images use `ic_hanzii1024x1024.png` as OG image. Alt text needs audit on rendered pages | ⚠️ Need to verify |
| 11 | Add hreflang tags for multilingual | Site supports vi, en, ja, ko, ru (via `?hl=` param). No `<link rel="alternate" hreflang="...">` tags found | ❌ Not yet |
| 12 | Review and improve internal linking | Footer has links to: Introduction, Privacy Policy, Terms, Help, Guides. Navigation: Home, Translate, Test, Notebook, Community, Upgrade | ⚠️ Need to verify |
| 13 | Add related content sections | Topics section exists (HSK vocab, themed topics). Community section with user contributions | ⚠️ Partial |
| 14 | Create privacy policy page | Available at `/other/privacy-policy` | ✅ Done |
| 15 | Create terms of service page | Available at `/other/term` | ✅ Done |
| 16 | Social media channels | Facebook: `facebook.com/tudientrungviet.hanzii` · Instagram: `instagram.com/hanzii.chinesedict_` · TikTok: `tiktok.com/@hanzii.official` · Zalo: `zalo.me/0976696764` | ✅ Done |

---

## Homepage

| STT | Checklist | Content | Status |
|-----|-----------|---------|--------|
| 1 | Title tag | `Từ điển Trung - Anh, Trung - Việt Online` (39 chars) — should be more keyword-rich and include brand | ⚠️ Needs improvement |
| 2 | Meta description | `Từ điển Trung Việt, Trung Anh online miễn phí Hanzii, tra cứu chữ hán theo bộ, nét vẽ, hình ảnh. Tổng hợp đầy đủ cấu trúc ngữ pháp, mẫu câu và ví dụ minh họa` (155 chars) | ✅ Done |
| 3 | Canonical URL | Missing — should be `https://hanzii.net/` | ❌ Not yet |
| 4 | H1 tag | SPA rendered — need to verify in browser. Likely the search heading or logo text | ⚠️ Need to verify |
| 5 | OG tags | `og:title`: ✅ · `og:url`: `https://hanzii.net` ✅ · `og:image`: `ic_hanzii1024x1024.png` ✅ · `og:type`: `website` ✅ · `fb:app_id`: empty ⚠️ · `og:locale`: missing ❌ | ⚠️ Partial |
| 6 | Schema markup | `WebSite` with `SearchAction` ✅ · `Organization`: missing ❌ · `SoftwareApplication`: missing ❌ | ⚠️ Partial |
| 7 | Keywords meta | Long keyword list present (Vietnamese + Chinese learning related) | ✅ Done |
| 8 | Robots meta | `index,follow` | ✅ Done |
| 9 | Language meta | `<html lang="vi">` + `<meta name="language" content="vi">` | ✅ Done |
| 10 | Favicon | `assets/images/ic_logo.ico` | ✅ Done |
| 11 | Manifest (PWA) | `manifest.json` linked | ✅ Done |
| 12 | DMCA protection | DMCA badge script loaded + verification meta tag present | ✅ Done |

---

## Technical SEO

| STT | Checklist | Content | Status |
|-----|-----------|---------|--------|
| 1 | robots.txt | Present — `User-agent: * Allow: /` with sitemap reference | ✅ Done |
| 2 | sitemap.xml | Sitemap index at `/sitemap.xml` → 5 language sitemaps (vi, en, ja, ko, ru). Each has sub-sitemaps: page, dict, community | ✅ Done |
| 3 | SSL / HTTPS | HTTPS active via Cloudflare. No HSTS header (`Strict-Transport-Security`) found | ⚠️ Partial |
| 4 | Server | Cloudflare CDN | ✅ Done |
| 5 | Cache-Control | `no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0` — very aggressive no-cache policy, may hurt performance | ⚠️ Needs improvement |
| 6 | Rendering | Angular SPA (client-side rendering). Content not in initial HTML source — harmful for SEO crawling | ❌ Critical issue |
| 7 | HTTP security headers | No `X-Frame-Options`, `Content-Security-Policy`, `X-Content-Type-Options` headers found | ❌ Not yet |
| 8 | Preload / Modulepreload | Multiple `<link rel="modulepreload">` for JS chunks | ✅ Done |
| 9 | Mobile viewport | `<meta name="viewport" content="width=device-width, initial-scale=1">` | ✅ Done |
| 10 | Noscript fallback | `<meta http-equiv="refresh" content="0; url=/nojs/splash">` — redirects to splash page for no-JS | ✅ Done |

---

## Page-by-Page Audit

### Main Pages

| Page | URL | Unique Title | Unique Desc | Canonical | OG Tags | Schema |
|------|-----|:---:|:---:|:---:|:---:|:---:|
| Homepage | `hanzii.net/` | ❌ | ❌ | ❌ | ⚠️ | ⚠️ |
| Translate | `hanzii.net/translate` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Test (Mock Exam) | `hanzii.net/test` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Notebook | `hanzii.net/notebook` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Community | `hanzii.net/community` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Upgrade | `hanzii.net/upgrade` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Introduction | `hanzii.net/other/introduction` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Privacy Policy | `hanzii.net/other/privacy-policy` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Terms | `hanzii.net/other/term` | ❌ | ❌ | ❌ | ⚠️ | ❌ |
| Help | `hanzii.net/other/help` | ❌ | ❌ | ❌ | ⚠️ | ❌ |

### HSK / TOCFL Pages

| Page | URL | Unique Title | Unique Desc | Canonical |
|------|-----|:---:|:---:|:---:|
| HSK 1 | `hanzii.net/notebook/detail/HSK-1` | ❌ | ❌ | ❌ |
| HSK 2 | `hanzii.net/notebook/detail/HSK-2` | ❌ | ❌ | ❌ |
| HSK 3 | `hanzii.net/notebook/detail/HSK-3` | ❌ | ❌ | ❌ |
| HSK 4 | `hanzii.net/notebook/detail/HSK-4` | ❌ | ❌ | ❌ |
| HSK 5 | `hanzii.net/notebook/detail/HSK-5` | ❌ | ❌ | ❌ |
| HSK 6 | `hanzii.net/notebook/detail/HSK-6` | ❌ | ❌ | ❌ |
| TOCFL 1–5 | `hanzii.net/notebook/detail/TOCFL-*` | ❌ | ❌ | ❌ |

### Grammar Pages

| Page | URL | Unique Title | Unique Desc | Canonical |
|------|-----|:---:|:---:|:---:|
| Grammar A1 | `hanzii.net/search/grammar/A1` | ❌ | ❌ | ❌ |
| Grammar A2 | `hanzii.net/search/grammar/A2` | ❌ | ❌ | ❌ |
| Grammar B1 | `hanzii.net/search/grammar/B1` | ❌ | ❌ | ❌ |
| Grammar B2 | `hanzii.net/search/grammar/B2` | ❌ | ❌ | ❌ |
| Grammar C1 | `hanzii.net/search/grammar/C1` | ❌ | ❌ | ❌ |
| Grammar C2 | `hanzii.net/search/grammar/C2` | ❌ | ❌ | ❌ |

### Guide / Policy Pages

| Page | URL |
|------|-----|
| Online Payment Guide | `hanzii.net/guide/online-payment` |
| Payment Policy | `hanzii.net/guide/payment-policy` |
| Check Goods Policy | `hanzii.net/guide/check-goods` |
| Personal Info Security | `hanzii.net/guide/personal-information-security` |
| Shipping & Receiving | `hanzii.net/guide/shipping-receiving-policy` |
| Complaints Process | `hanzii.net/guide/resolve-complaints` |
| Exchange & Refund | `hanzii.net/guide/exchange-refund` |

---

## 🔴 Critical Issues Summary

| Priority | Issue | Impact |
|----------|-------|--------|
| 🔴 P0 | **Angular SPA — no SSR/SSG** | Google may not index content properly. All content loaded client-side | 
| 🔴 P0 | **All pages share the same title** | Google cannot differentiate pages. Kills ranking for all sub-pages |
| 🔴 P0 | **All pages share the same meta description** | Low CTR in search results, poor relevance signals |
| 🔴 P0 | **No canonical URLs** | Risk of duplicate content (with `?hl=` params) |
| 🔴 P0 | **No hreflang tags** | 5 languages served via query param — Google cannot identify language versions |
| 🟠 P1 | **No Twitter Card tags** | Poor social sharing on Twitter/X |
| 🟠 P1 | **No Organization schema** | Missing brand knowledge graph signals |
| 🟠 P1 | **No FAQ schema** | Missing SERP rich results opportunity |
| 🟠 P1 | **fb:app_id empty** | OG tags incomplete |
| 🟠 P1 | **No security headers** | Missing HSTS, X-Frame-Options, CSP |
| 🟡 P2 | **Aggressive no-cache policy** | May hurt Core Web Vitals for returning visitors |
| 🟡 P2 | **No Bing Webmaster verification** | Missing Bing search visibility |

---

## ✅ Recommendations

1. **Implement SSR/SSG (Pre-rendering)** — Use Angular Universal or a pre-rendering service to serve HTML to crawlers
2. **Unique title & description per page** — Each page needs its own optimized title (50-60 chars) and description (150-160 chars)
3. **Add canonical URLs** — Self-referencing canonical on every page, handle `?hl=` parameter properly
4. **Add hreflang tags** — Map all language versions: `vi`, `en`, `ja`, `ko`, `ru`
5. **Add Twitter Card tags** — `summary_large_image` with proper title, description, image
6. **Add Organization schema** — Name, logo, social profiles, contact point
7. **Add FAQ schema** — On relevant pages (Help, Introduction)
8. **Register Bing Webmaster** — Add `msvalidate.01` meta tag
9. **Add security headers** — HSTS, X-Frame-Options, X-Content-Type-Options via Cloudflare
10. **Optimize cache policy** — Allow caching for static assets (images, CSS, JS)
