function enlaceJuego(valor) {
  if (typeof valor !== "string" || !valor.trim()) return null;
  try {
    const url = new URL(valor, document.baseURI);
    if (url.protocol === "https:" || url.protocol === "http:") return url.href;
    if (location.protocol === "file:" && /^\.\//.test(valor)) {
      return new URL(valor.endsWith("/") ? valor + "index.html" : valor, document.baseURI).href;
    }
  } catch {
    return null;
  }
  return null;
}

for (const juego of window.ARCADE.juegos) {
  const tarjeta = document.createElement("article");
  const imagen = document.createElement("img");
  imagen.src = juego.imagen;
  imagen.alt = juego.alt;
  imagen.width = 285;
  imagen.height = 198;

  const contenido = document.createElement("div");
  contenido.className = "contenido";
  const titulo = document.createElement("h2");
  titulo.textContent = juego.nombre;
  const descripcion = document.createElement("p");
  descripcion.textContent = juego.descripcion;
  contenido.append(titulo, descripcion);

  if (juego.registra === true) {
    const aviso = document.createElement("p");
    aviso.className = "registro";
    aviso.textContent = "Registra decisiones para el estudio";
    contenido.append(aviso);
  }

  const url = enlaceJuego(juego.url);
  const accion = document.createElement(url ? "a" : "button");
  accion.className = "accion";
  accion.textContent = url ? "JUGAR" : "Próximamente";
  accion.setAttribute("aria-label", url ? "Jugar a " + juego.nombre : juego.nombre + ": próximamente");
  if (url) accion.href = url;
  else accion.disabled = true;
  contenido.append(accion);

  tarjeta.append(imagen, contenido);
  document.querySelector("#juegos").append(tarjeta);
}

document.querySelector("#estudio").textContent = window.ARCADE.textoEstudio.trim() ||
  "El portal no recopila datos. El texto completo del estudio todavía no está disponible en esta página.";
