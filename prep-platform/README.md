# Prep Platform (Design-first MVP)

A learning and assessment platform to prepare for company-specific tests (TCS NQT, Wipro, etc.). Built with Next.js (App Router) and Tailwind CSS.

## MVP Scope
- Auth & roles (student, admin) [stub]
- Learn hub (topics, lessons) [scaffolded]
- Question bank & tags [stub]
- Assessments with sections, timing, scoring [stub]
- Company tracks for TCS NQT and Wipro [scaffolded]
- Admin CMS [stub]

## Getting Started
```bash
npm install
npm run dev
```

## Routes
- `/` home
- `/learn`
- `/tracks`, `/tracks/tcs-nqt`, `/tracks/wipro`
- `/assessments`
- `/admin`

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

Next milestones: add Prisma schema, NextAuth, question bank models, assessment flow, and seed data for TCS/Wipro.