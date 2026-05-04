# Estudio Jurídico Escribana Eliana Frías

Sitio web institucional del estudio notarial de la Escribana Pública **Eliana Frías**, ubicado en **Maldonado, Uruguay**.

> **Estado:** DEMO — en desarrollo activo. El contenido y los estilos pueden cambiar antes del lanzamiento.

---

## Descripción

Landing page de una sola página (SPA-style scroll) que presenta los servicios notariales del estudio, información sobre la profesional, reseñas de clientes y datos de contacto. El sitio está orientado a personas y empresas de Maldonado y la zona este del Uruguay.

**Slogan:** *Resultados que dan confianza.*

---

## Estructura del proyecto

```
index.html        # Página principal
css/
  styles.css      # Hoja de estilos (CSS variables, layout, componentes)
js/
  main.js         # Lógica: navbar, carrusel de reseñas, modal de servicios, animaciones
img/              # Recursos visuales (logo, video de fondo, foto)
```

---

## Secciones

| Sección | ID | Descripción |
|---|---|---|
| Inicio / Hero | `#inicio` | Video de fondo, título, slogan y CTAs principales |
| Servicios | `#servicios` | Grid de 8 tarjetas con modal de detalle |
| Nosotros | `#nosotros` | Perfil de la escribana y valores del estudio |
| Reseñas | `#resenas` | Carrusel de opiniones de Google (5.0 ★) |
| Contacto | `#contacto` | Datos de contacto, horarios y mapa |

---

## Servicios ofrecidos

- **Compraventa de Inmuebles** — escrituración, revisión dominial, trámites ante organismos estatales
- **Poderes Notariales** — generales, especiales, de administración; apostillas de La Haya
- **Sucesiones y Herencias** — declaratoria de herederos, inventario, liquidación y adjudicación
- **Certificaciones y Autenticaciones** — firmas, copias, legalizaciones, apostilla de La Haya
- **Contratos y Asesoramiento** — hipotecas, prendas, fideicomisos, contratos civiles y comerciales
- **Arrendamientos** — contratos de alquiler residencial y comercial conforme normativa uruguaya
- **Préstamos Hipotecarios** — constitución y cancelación de hipotecas
- **Ejecuciones y Remates** — tramitación de ejecuciones de créditos y remates judiciales

---

## Contacto del estudio

| Canal | Dato |
|---|---|
| WhatsApp / Teléfono | 095 780 613 |
| Email | escribanaelianafrias@outlook.com |
| Dirección | Zelmar Michelini 941, Maldonado |
| Horario | Lunes a Viernes, 13:30 – 17:30 |

---

## Stack técnico

- HTML5 semántico
- CSS3 con variables custom (sin frameworks)
- JavaScript vanilla
- [Lucide Icons](https://lucide.dev/) (iconografía SVG)
- Google Fonts — Inter
- Video de fondo en hero (`.mp4`)

---

## TODO

- [ ] **Optimización SEO completa** — meta tags definitivos, Open Graph con imagen real, Schema.org (LocalBusiness), sitemap.xml y robots.txt. *Pendiente para cuando el sitio esté en su versión final.*
- [ ] Reemplazar placeholder de foto por imagen real de la escribana
- [ ] Completar/verificar reseñas de Google y score final
- [ ] Definir URL de producción y agregar `og:url` + canonical
- [ ] Revisar copys y textos finales con la cliente
- [ ] Agregar favicon definitivo