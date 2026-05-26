# Rédito Studio — Portfolio

Portafolio profesional de desarrollo web.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy en Vercel

1. Subí el repo a GitHub
2. Importá el proyecto en [vercel.com](https://vercel.com)
3. Vercel detecta Vite automáticamente — no hace falta configurar nada
4. Deploy automático en cada push a `main`

## Agregar un proyecto nuevo

Editá el array `projects` en `src/components/Projects.tsx`:

```ts
{
  name: 'Nombre del proyecto',
  type: 'E-commerce',          // E-commerce | Landing page | Catálogo
  desc: 'Descripción breve.',
  url: 'https://...',
  live: true,                  // true = Live | false = En desarrollo
}
```
