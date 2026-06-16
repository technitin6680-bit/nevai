# Nevai

Production-ready Next.js scaffold using the App Router, TypeScript, Tailwind CSS, Prisma, PostgreSQL, NextAuth Google sign-in, React Hook Form, Zod, PDF generation, and Resend email.

No application pages have been built yet. The scaffold includes only the root layout, global styles, auth API route, and integration foundations.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
cp .env.example .env
```

3. Fill in PostgreSQL, Google OAuth, NextAuth, and Resend values in `.env`.

4. Generate the Prisma client:

```bash
npm run db:generate
```

5. Create the first migration:

```bash
npm run db:migrate -- --name init
```

6. Start development:

```bash
npm run dev
```

## Useful Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run db:studio
```

