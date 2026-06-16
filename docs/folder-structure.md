# Folder Structure

```text
Nevai/
├─ prisma/
│  └─ schema.prisma
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  └─ auth/
│  │  │     └─ [...nextauth]/
│  │  │        └─ route.ts
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components/
│  │  ├─ providers/
│  │  │  └─ app-providers.tsx
│  │  └─ ui/
│  ├─ features/
│  │  ├─ auth/
│  │  │  ├─ components/
│  │  │  ├─ schemas/
│  │  │  │  └─ sign-in-schema.ts
│  │  │  └─ server/
│  │  ├─ documents/
│  │  │  ├─ components/
│  │  │  ├─ schemas/
│  │  │  │  └─ document-schema.ts
│  │  │  └─ server/
│  │  ├─ email/
│  │  │  ├─ server/
│  │  │  │  └─ send-email.ts
│  │  │  └─ templates/
│  │  └─ pdf/
│  │     ├─ server/
│  │     │  └─ render-pdf.tsx
│  │     └─ templates/
│  ├─ lib/
│  │  ├─ auth.ts
│  │  ├─ prisma.ts
│  │  ├─ resend.ts
│  │  └─ utils.ts
│  ├─ middleware.ts
│  └─ types/
│     └─ next-auth.d.ts
├─ .env.example
├─ .gitignore
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ prettier.config.mjs
├─ README.md
└─ tsconfig.json
```

