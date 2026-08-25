# CLAUDE.md

Portfolio personal: React + Vite + Tailwind v4, desplegado en GitHub Pages bajo
`/portfolio/` (ver `base` en `vite.config.js` y `homepage` en `package.json`).

## CV

La fuente del CV es [`cv/cv.html`](cv/cv.html), no el PDF. El botón "Descargar CV"
del sitio sirve `public/cv-lm.pdf`, que se genera a partir de ese HTML.

Para regenerarlo después de editar `cv/cv.html`:

```bash
npm run cv
```

Esto corre [`cv/build-cv.mjs`](cv/build-cv.mjs), que abre `cv/cv.html` con Chrome
en modo headless (mismo motor que "Imprimir → Guardar como PDF") y pisa
`public/cv-lm.pdf`. Requiere tener Chrome instalado en una ruta estándar de
Windows; si está en otro lado, pasar la ruta con `CHROME_PATH`:

```bash
CHROME_PATH="C:/ruta/a/chrome.exe" npm run cv
```

No hace falta tocar `dist/cv-lm.pdf` a mano: `npm run deploy` corre `predeploy`
(`vite build`) antes, que recopia `public/` entero a `dist/`.
