# Realtor Pipeline Recovery — Conversion V2

Branch: `feat/conversion-v2` (the existing `main` is unchanged).

## What changed
- Single focused free-Pipeline-Snapshot funnel with a clear service explanation and responsive form.
- Removed unverified testimonials, invented client outcome metrics, misleading ROI figures, and the old staged-only submission interface from the active homepage.
- Simplified branding to Reale Revenue Systems midnight / cobalt / mint.
- Straightforward FAQ and transparent optional next steps ($997 pilot and custom implementation).
- New `/api/lead` serverless handler. This is designed for **Vercel** deployments. Static-only hosting **will not** run this function.
- Error handling only displays success after the server acknowledges delivery.

## Deploy setup (must complete before taking live traffic)
1. Deploy this branch with Vercel, using the Vite framework preset. The `api/lead.ts` serverless function must be deployed alongside the Vite site.
2. Set server-only environment variable `LEAD_WEBHOOK_URL` to an **HTTPS** destination that accepts a POST with JSON fields `lead` and `receivedAt`. This can be an n8n production webhook, or a controlled endpoint that writes to your CRM.
3. Optional: set server-only `LEAD_WEBHOOK_TOKEN` and require it in the destination's Authorization header. Never place credentials in `VITE_*` variables or frontend code.
4. Configure the destination to store/notify leads safely, protect the endpoint, and return a 2xx response only when the request is durably accepted.
5. Submit a test with a dedicated test contact. Confirm it reaches the destination and that deliberate webhook failure produces a visible error, not a false success.
6. Add a public, business-specific privacy notice, verified contact channel, and appropriate outreach/consent disclosures before launch. Avoid posting client CRM records into this request form.
7. Configure a public domain and canonical URL, an authentic OG image, a robots/sitemap strategy, and Analytics after testing.
8. Add edge rate limiting / bot protection (e.g. Turnstile verified server-side) before running paid ads or high-volume traffic.

## Development
```bash
npm install
npm run lint
npm run build
```

Local `vite` development does **not** run `/api/lead`; use `vercel dev` or a deployed Vercel preview to test the function.

## Important scope notes
- The 24-hour delivery and commission promises were removed because they were not verified.
- The $997 pilot on V2 reflects the previously discussed offer ladder; reconfirm the commercial pricing before publishing.
- This branch replaces the **active homepage**. Existing components and offer pages remain in the repository but are not linked by V2.
- Hash-based offer routes and multi-page SEO are intentionally deferred until the primary lead funnel is validated.
- This is source implementation, not a verified production deployment.
