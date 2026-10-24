# Prithvi Raj Kandan — Portfolio

Static portfolio for an AI Engineer and Forward Deployed Engineer. Vite, React, TypeScript, and Tailwind. No backend, no chat widget, no runtime API calls.

Live site: [prithvirajkandan.dev](https://www.prithvirajkandan.dev/)

## Develop

```bash
cd frontend
npm install
npm run dev
```

Production build:

```bash
cd frontend
npm run build
npm run preview
```

## Project previews

Each featured card looks for media in `frontend/public/projects/`:

| Project | Still | Hover video | Hover GIF |
| --- | --- | --- | --- |
| Asta | `asta-preview.png` | `asta-demo.mp4` | `asta-demo.gif` |
| ProductionRAG | `productionrag-preview.png` | `productionrag-demo.mp4` | `productionrag-demo.gif` |
| Field Intelligence | `field-intelligence-preview.png` | `field-intelligence-demo.mp4` | `field-intelligence-demo.gif` |
| LogGuard | `logguard-preview.png` | `logguard-demo.mp4` | `logguard-demo.gif` |

If a file is missing, the card keeps a built-in system diagram. Drop the file in place and the card switches to it on the next load. Hover (or tap the preview) plays a muted looping video when `videoUrl` resolves, otherwise a GIF.

Resume: `frontend/public/Prithvi_Raj_Kandan_Resume.pdf`.
