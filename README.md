# Arcade Ciberseguridad

Abre `index.html` para ver el portal. Turno de Ciberseguridad viene incluido en `juegos/turno/`.

## Cambiar las tarjetas y el aviso

Abre `config.js`. Cada juego tiene `nombre`, `descripcion`, `url`, `imagen`, `alt` y `registra`.

- Para un juego incluido en el repositorio, usa una ruta relativa como `./juegos/juego-2/` y coloca allí su `index.html`. Para un juego externo, pega su dirección HTTPS publicada.
- Deja la URL vacía mientras el juego no esté listo. Una dirección con formato válido debe apuntar a una página publicada. Comprueba el enlace tras subirla.
- Activa `registra: true` solo si ese juego registra decisiones para el estudio.
- Pega el texto completo aprobado por la universidad en `textoEstudio`. Si tiene varios párrafos, usa comillas invertidas para conservar los saltos de línea.

## Publicar en GitHub Pages

1. Descomprime el ZIP y sube su contenido a la raíz de tu repositorio. El `index.html` del portal debe quedar junto a `config.js` y las carpetas `assets` y `juegos`.
2. En el repositorio, abre **Settings → Pages**. En **Source**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` (o la rama donde subiste los archivos) y la carpeta `/(root)`. Pulsa **Save**.
4. Abre la dirección que aparece en **Settings → Pages**.

[Guía oficial de GitHub Pages](https://docs.github.com/en/pages/quickstart)
