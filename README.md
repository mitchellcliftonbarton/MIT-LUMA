# mit-luma

Monorepo containing the marketing/web front end and the Sanity content studio.

## Structure

| Path      | Stack             | Description                          |
| --------- | ----------------- | ------------------------------------ |
| `web/`    | Nuxt 4 (Vue 3)    | Front-end web application            |
| `studio/` | Sanity Studio v6  | Content authoring / CMS              |

The two packages are managed **independently** — each has its own
`package.json`, lockfile, and `node_modules`. Install and run them separately.

## Requirements

- Node `22` (see [`.nvmrc`](.nvmrc) — run `nvm use`)
- npm

## Getting started

### Web (Nuxt)

```bash
cd web
npm install
npm run dev        # dev server
npm run build      # production build
npm run preview    # preview the production build
```

### Studio (Sanity)

```bash
cd studio
npm install
npm run dev        # local studio
npm run build      # build studio
npm run deploy     # deploy studio to Sanity
```
