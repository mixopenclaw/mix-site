mix-site — Next.js + TypeScript + Tailwind (Kodex autopilot)

How to run locally:
1. git clone https://github.com/mixopenclaw/mix-site.git
2. cd mix-site
3. npm install
4. npm run dev

Production readiness changes in this branch:
- .github/workflows/ci.yml — CI: install + build, and a non-fatal lint step
- pages/api/contact.ts — serverless contact endpoint (SendGrid-compatible via SENDGRID_API_KEY)

Environment variables (set in Vercel dashboard or via `vercel env add`):
- SENDGRID_API_KEY — your SendGrid API key (for the contact form)
- SENDGRID_FROM — sender email (optional)
- CONTACT_TO_EMAIL — recipient email for contact messages (optional)

Deploy
- The repo is connected to Vercel; pushing to main will trigger a production deploy.

Next steps I can take:
- Add automated tests (Jest) and a full lint pipeline.
- Replace placeholder images and refine styles.
- Configure a custom domain on Vercel.
