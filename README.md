# SLM Planning and Design

A modern, responsive website for SLM Planning and Design - an urban planning and design firm dedicated to shaping sustainable, vibrant communities. This site showcases our services, portfolio, insights, and provides easy ways for clients to connect and request quotes.

## Project Overview
SLM Planning and Design is a multidisciplinary firm specializing in urban planning, urban design, landscape architecture, and 3D visualization. Our website serves as a digital portfolio, resource hub, and point of contact for clients and collaborators.

## Key Features
- Multi-page layout: Dedicated pages for Urban Planning, Urban Design, Landscape Architecture, and 3D Rendering services.
- Portfolio: Visual showcase of selected projects and case studies.
- Blog/Insights: Dynamic blog powered by Sanity CMS, sharing thought leadership and industry news.
- Contact & Quote Forms: Integrated with Supabase for secure submissions and notifications.
- Newsletter Signup: Visitors can subscribe to updates, with emails stored in Supabase.
- Responsive Design: Fully optimized for mobile, tablet, and desktop.
- Modern UI: Built with TailwindCSS and custom components for a clean, professional look.

## Tech Stack
- Frontend: React, TypeScript, Vite
- Styling: TailwindCSS
- CMS: Sanity.io (for blog and content management)
- Backend/API: Supabase (for contact, quote, and newsletter forms)
- Deployment: Netlify or Vercel (CI/CD ready)

## Folder Structure Overview
- `src/` — Main application code
  - `components/` — Reusable UI components
  - `pages/` — Top-level pages (Home, Services, Blog, Contact, etc.)
  - `lib/` — Utility functions and API clients
  - `api/` — API route handlers (for Vite/SSR or serverless)
  - `Assets/` — Images and static assets
- `public/` — Static files
- `api-server/` — Express backend for Supabase integration (if used)

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd slm-clean
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env.local` and fill in your Supabase and Sanity credentials.
4. Start the development server:
   ```sh
   npm run dev
   ```
5. (If using Express backend for forms/newsletter):
   ```sh
   node api-server/index.js
   ```

## Environment Variables
- VITE_SUPABASE_URL — Your Supabase project URL
- VITE_SUPABASE_ANON_KEY — Supabase anon/public API key
- VITE_SANITY_PROJECT_ID — Sanity project ID
- VITE_SANITY_DATASET — Sanity dataset name
- VITE_SANITY_API_VERSION — Sanity API version (e.g., 2024-01-01)

## Deployment
- Deploy to Netlify or Vercel for seamless CI/CD.
- Set environment variables in your deployment dashboard.
- Ensure your backend (if used) is also deployed and accessible.

## Contributing
We welcome improvements! Please keep code clean, modular, and well-documented. Open a pull request or issue for discussion.

## License
This project is private and intended for internal use by SLM Planning and Design. Contact us for licensing or collaboration inquiries.

