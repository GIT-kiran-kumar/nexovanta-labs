# Nexovanta Labs — Official Website

Premium Android App Development studio website built with Next.js 14, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework, routing, SSR, SEO metadata |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Scroll animations, card reveals, page transitions |
| **GSAP** | Hero text split animation, counter animation |
| **Lenis** | Buttery smooth inertia scrolling |
| **next-themes** | Dark / Light mode toggle |
| **lucide-react** | Icons |

## Getting Started

### 1. Add your logo

Place your logo file in the `/public` folder and name it `logo.png`:

```
public/
  └── logo.png   ← Your Nexovanta Labs logo here
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Deploying to Vercel + nexovantalabs.in

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nexovanta-labs.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up / Log in
2. Click **"Add New Project"** → Import your GitHub repo
3. Vercel auto-detects Next.js → click **Deploy**
4. Your site is live on a `*.vercel.app` URL instantly

### Step 3 — Connect nexovantalabs.in (GoDaddy)

1. In Vercel → Project → **Settings → Domains → Add Domain**
2. Type `nexovantalabs.in` → Add
3. Vercel shows you nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
4. Go to **GoDaddy → My Products → DNS → Nameservers → Change → Custom**
5. Enter Vercel's nameservers → Save
6. Wait 1–24 hours for propagation
7. Back in Vercel → Domains → click **Verify** → HTTPS auto-enables ✅

Also add `www.nexovantalabs.in` as an alias in Vercel for both versions to work.

---

## Customizing Content

| What to change | Where |
|----------------|-------|
| Contact email / phone | `src/components/sections/ContactSection.tsx` |
| Services list | `src/components/sections/ServicesSection.tsx` |
| Portfolio projects | `src/components/sections/PortfolioSection.tsx` |
| Pricing plans | `src/components/sections/PricingSection.tsx` |
| Stats numbers | `src/components/sections/StatsSection.tsx` |
| SEO title/description | `src/app/layout.tsx` |
| Logo | `public/logo.png` |
| Brand colors | `tailwind.config.ts` + `src/app/globals.css` |

---

## Project Structure

```
nexovanta-labs/
├── public/
│   └── logo.png              ← Add your logo here
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← Root layout, fonts, providers
│   │   ├── page.tsx           ← Main page
│   │   └── globals.css        ← Global styles, CSS vars
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   ├── SmoothScrollProvider.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   └── PageTransition.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── StatsSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── ProcessSection.tsx
│   │       ├── PortfolioSection.tsx
│   │       ├── PricingSection.tsx
│   │       ├── CtaBanner.tsx
│   │       └── ContactSection.tsx
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
├── next.config.mjs
├── vercel.json
└── package.json
```
