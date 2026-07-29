## Structure

## Structure

```text
06-notehub-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── page.module.css
│   │   ├── loading.tsx
│   │   └── notes/
│   │       ├── page.tsx
│   │       ├── Notes.client.tsx
│   │       ├── error.tsx
│   │       └── [id]/
│   │           ├── page.tsx
│   │           ├── NoteDetails.client.tsx
│   │           └── error.tsx
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── TanStackProvider/
│   │   │   └── TanStackProvider.tsx
│   │   ├── SearchBox/
│   │   ├── Pagination/
│   │   ├── NoteList/
│   │   ├── NoteForm/
│   │   └── Modal/
│   ├── lib/
│   │   └── api.ts
│   └── types/
│       └── note.ts
├── .env.local
└── next.config.mjs
```
