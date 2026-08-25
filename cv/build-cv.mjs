// Genera public/cv-lm.pdf a partir de cv/cv.html usando Chrome en modo headless.
// Es el mismo motor que "Imprimir > Guardar como PDF", asi que el resultado es
// identico a exportarlo a mano desde el navegador.
//
//   npm run cv

import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const entrada = join(raiz, 'cv', 'cv.html')
const salida = join(raiz, 'public', 'cv-lm.pdf')

// Rutas habituales de Chrome en Windows (con barras normales para no pelear con
// los escapes). Si lo tenes en otro lado, pasalo por variable de entorno:
// CHROME_PATH="..." npm run cv
const candidatos = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env.LOCALAPPDATA
    ? join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe')
    : null,
].filter(Boolean)

const chrome = candidatos.find((ruta) => existsSync(ruta))

if (!chrome) {
  console.error('No encontre chrome.exe. Proba con: CHROME_PATH="ruta/a/chrome.exe" npm run cv')
  process.exit(1)
}

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${salida}`,
  pathToFileURL(entrada).href,
], { stdio: 'inherit' })

console.log(`CV generado: ${salida}`)
