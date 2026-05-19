# Security Notes

This restaurant site is designed as a static GitHub Pages site. It has no server-side code, database, login, payment flow, or admin area.

## Current Controls

- Uses HTTPS when served through GitHub Pages.
- Uses a restrictive Content Security Policy in `index.html`.
- Loads JavaScript, CSS, and images from this repository only.
- Does not send reservation form data to a server.
- Writes form feedback with `textContent`, not `innerHTML`.
- Avoids third-party scripts, tracking pixels, analytics, and remote fonts.

## GitHub Pages Limitations

GitHub Pages does not allow this project to define custom HTTP response headers from the repository. For that reason, headers such as `Strict-Transport-Security`, `X-Content-Type-Options`, and full `frame-ancestors` enforcement cannot be configured here the same way they could be on Cloudflare Pages, Netlify, Vercel, or a custom server.

## If Real Reservations Are Added

Do not collect real customer data with only this static form. Add a backend or hosted form provider that supports:

- Server-side validation and output encoding.
- CSRF protection where session cookies are used.
- Rate limiting and abuse monitoring.
- Spam protection that does not expose secrets in the browser.
- Secure storage and retention rules for personal data.
- Logging and alerting for suspicious behavior.

## OWASP Alignment

This project should be reviewed against the current OWASP Top 10 before adding any backend features, authentication, payment processing, or customer data storage.
