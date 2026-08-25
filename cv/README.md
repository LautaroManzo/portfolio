# CV

`cv.html` es la fuente del CV. El PDF publicado (`public/cv-lm.pdf`) se genera desde acá.

## Cómo exportar el PDF

1. Abrir `cv.html` en Chrome.
2. `Ctrl + P` → **Destino:** Guardar como PDF.
3. **Tamaño:** A4 · **Márgenes:** Predeterminado · **Escala:** Predeterminada.
4. Destildar "Encabezados y pies de página" y tildar "Gráficos de fondo".
5. Guardar y reemplazar `public/cv-lm.pdf`.

Los márgenes reales los define `@page` dentro del HTML (12 mm). El bloque
`@media screen` solo sirve para previsualizar la hoja en el navegador y no
afecta la impresión.
