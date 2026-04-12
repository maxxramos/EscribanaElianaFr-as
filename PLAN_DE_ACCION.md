# PLAN DE ACCIÓN — Estudio Jurídico Escribana Eliana Frías

---

## Prompt de Contexto para el Agente

Eres un desarrollador web experto. Debes construir una landing page profesional, minimalista y 100% responsive para el **Estudio Jurídico Escribana Eliana Frías**, ubicado en Maldonado, Uruguay.

**Stack:** HTML5 · CSS3 vanilla · JavaScript vanilla (sin frameworks ni librerías externas, salvo Lucide Icons CDN para íconos SVG).

**Paleta de colores:**
- Principal: `#B366AA` (violeta/morado)
- Secundario: `#FFFFFF` (blanco)
- Neutro: `#7E7E7E` (gris medio)

**Modelo de referencia:** La carpeta `/ejemplo/escribanaScrollini-main/` contiene un proyecto 100% funcional y responsive que sirve de guía estructural, de componentes y de patrones CSS. **No se debe modificar nada dentro de `/ejemplo/`.**

**Assets disponibles:**
- Logo: `img/logo.png`
- Video hero: `img/video.mp4`

**Estructura de salida:** Un único `index.html` en la raíz, con `css/styles.css` y `js/main.js` en sus respectivas carpetas. Misma arquitectura que el ejemplo.

---

## Fases de Desarrollo

### Fase 1 — Scaffolding y base del proyecto
- Crear estructura de carpetas: `/css/`, `/js/`
- Crear `index.html` con `<head>` completo: meta SEO, Open Graph, viewport, Google Fonts (Inter), Lucide Icons CDN, link al CSS y al JS
- Crear `css/styles.css` con variables CSS (`--primary`, `--white`, `--gray`), reset, utilidades (`.container`, `.section`, `.btn`, `.fade-in`) y tipografía base
- Crear `js/main.js` vacío (se irá poblando por fase)

---

### Fase 2 — NavBar
- Logo a la izquierda (`img/logo.png`)
- Links de navegación a la derecha: Inicio · Servicios · Nosotros · Reseñas · Contacto
- Botón WhatsApp CTA en la navbar (escritorio)
- Hamburger menu (3 líneas) visible solo en mobile, con animación a "X" al abrir
- Menú desplegable en mobile, overlay y cierre al hacer click en link
- Clase `.scrolled` aplicada por JS al hacer scroll (sombra sutil)
- Responsive: breakpoint a 768px

---

### Fase 3 — Hero / Inicio
- Fondo: `<video>` autoplay, muted, loop, playsinline (`img/video.mp4`)
- Overlay semitransparente oscuro sobre el video
- Contenido centrado: título `Estudio Jurídico Escribana Eliana Frías` + slogan `Resultados que dan confianza.`
- Dos botones CTA: "Consultanos" (→ #contacto) y "Nuestros Servicios" (→ #servicios)
- Animación fade-in al cargar

---

### Fase 4 — Sección Servicios
Servicios a generar (con ícono Lucide, título y descripción corta en card, descripción larga en popup):

| # | Servicio | Ícono |
|---|----------|-------|
| 1 | Compraventa de Inmuebles | `home` |
| 2 | Poderes Notariales | `file-text` |
| 3 | Sucesiones y Herencias | `users` |
| 4 | Certificaciones y Autenticaciones | `badge-check` |
| 5 | Contratos y Asesoramiento | `pen-line` |
| 6 | Arrendamientos | `key` |
| 7 | Préstamos Hipotecarios | `banknote` |
| 8 | Ejecuciones y Remates | `gavel` |

**Comportamiento de las cards:**
- Click → abre modal/popup con título, descripción ampliada generada, y botón "Consultar por WhatsApp" (`wa.me/59895780613`)
- El popup debe ser responsive: scroll interno si el contenido supera la pantalla, texto legible en mobile
- Overlay oscuro al fondo, cierre con botón "X" o click fuera del modal
- Grid de cards: 4 columnas en desktop → 2 en tablet → 1 en mobile

---

### Fase 5 — Sección Nosotros
- Dos columnas: texto a la izquierda, foto placeholder a la derecha (div con borde redondeado `border-radius: 50%` o grande, con texto "Foto próximamente")
- Título: `Escribana Eliana Frías`
- Descripción breve generada: trayectoria, compromiso, zona de actuación (Maldonado, Punta del Este)
- 3 valores destacados con ícono (ej: `scale` Compromiso Legal · `award` Experiencia · `handshake` Atención Personalizada)
- Responsive: columnas se apilan en mobile, foto encima del texto

---

### Fase 6 — Sección Reseñas (Carrusel)
Reseñas a incluir (todas 5 estrellas ★★★★★):

1. **Mónica** — *"Muy amable y eficiente"*
2. **Erika Guerra** (Local Guide) — *"Excelente atención, súper calificada, muy eficiente."*
3. **Venecia Cayetano** — *"Exelente trabajo, muy atenta y una genia! rápido y accesible!!!"*
4. **Kfe Eventos / Fabián** — *"Muy eficiente y ágil. La recomiendo."*
5. **Carlos Piriz** (Local Guide) — *"Escribana de confianza y muy eficiente, totalmente recomendable"*

**Comportamiento:**
- Carrusel automático (auto-play cada ~4s) con botones prev/next
- Indicadores de puntos (dots) al pie
- Una card visible en desktop, una en mobile
- Texto legible y sin superposición en mobile
- Transición suave (CSS transform/transition)

---

### Fase 7 — Sección Contacto
- **Llamadas:** 095 780 613
- **WhatsApp:** 095 780 613 → link `wa.me/59895780613`
- **Mail:** escribanaelianafrias@outlook.com → link `mailto:`
- **Dirección:** Zelmar Michelini 941, 20000 Maldonado
- **Horarios:** Lunes a Viernes 13:30–17:30 / Sábado y Domingo Cerrado
- **Mapa:** `<iframe>` embed de Google Maps con la ubicación del estudio
- Layout: dos columnas (info izquierda + mapa derecha) → columna única en mobile

---

### Fase 8 — Footer
- Izquierda: logo + nombre de la empresa + slogan `Resultados que dan confianza.`
- Derecha: lista de links internos (Inicio · Servicios · Nosotros · Reseñas · Contacto)
- Todo bien centrado verticalmente
- Fondo oscuro/neutro, texto claro
- Responsive: columnas se apilan en mobile, centrado

---

### Fase 9 — Botón flotante WhatsApp
- Botón fijo en esquina inferior derecha (`position: fixed; bottom: 1.5rem; right: 1.5rem`)
- Ícono SVG de WhatsApp, color verde (#25D366)
- Link a `wa.me/59895780613`
- Tooltip "Escribinos" al hover
- Animación de pulso sutil para llamar atención
- Z-index alto, visible en todas las secciones

---

### Fase 10 — JavaScript / Interactividad
Funcionalidades a implementar en `js/main.js`:
- Navbar: scroll listener (clase `.scrolled`) + hamburger toggle
- Fade-in: Intersection Observer para animar elementos `.fade-in` al entrar al viewport
- Servicios: abrir/cerrar modales de servicio + trap focus en modal accesible
- Carrusel de reseñas: auto-play, prev/next, dots, touch/swipe en mobile
- Smooth scroll para links internos (respaldo para navegadores sin `scroll-behavior`)

---

### Fase 11 — Revisión final y QA
- Validar responsividad en: 320px, 375px, 768px, 1024px, 1440px
- Verificar todos los links (WhatsApp, mail, secciones internas, mapa)
- Verificar que el video hero no bloquee el texto en mobile
- Verificar que los popups de servicios no corten texto en mobile
- Verificar que el carrusel no superponga texto en mobile
- Revisión de accesibilidad básica: `alt`, `aria-label`, `role`, `tabindex`
- Verificar que no haya vulnerabilidades OWASP (ej: no innerHTML con datos externos)

---

## Estructura de archivos resultante

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    ├── logo.png
    └── video.mp4
```

---

*Listo para iniciar la Fase 1 cuando lo indiques.*
