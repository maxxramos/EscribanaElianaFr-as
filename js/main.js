/* ═══════════════════════════════════════════════════════════
   ESCRIBANA ELIANA FRÍAS — Main JS
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Inicializar Lucide Icons ──────────────────────────────
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ── Referencias DOM ────────────────────────────────────────
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  const navLinks  = navMenu.querySelectorAll('a');
  const fadeEls   = document.querySelectorAll('.fade-in');

  // ── Reviews Carousel ──────────────────────────────────────
  const reviewsCarousel  = document.getElementById('reviewsCarousel');
  const reviewsWindow    = reviewsCarousel.querySelector('.reviews-carousel__window');
  const reviewsTrack     = document.getElementById('reviewsTrack');
  const reviewsPrev      = document.getElementById('reviewsPrev');
  const reviewsNext      = document.getElementById('reviewsNext');
  const reviewCards      = reviewsTrack.querySelectorAll('.review-card');
  const totalReviews     = reviewCards.length;

  let reviewIndex      = 0;
  let reviewCardStep   = 0;
  let reviewsPerView   = 3;
  let reviewAutoplay   = null;
  let reviewResizeTmr  = null;

  // ── Service Modal ──────────────────────────────────────────
  const serviceModal    = document.getElementById('serviceModal');
  const modalClose      = document.getElementById('modalClose');
  const modalTitle      = document.getElementById('modalTitle');
  const modalText       = document.getElementById('modalText');
  const modalIconWrap   = document.getElementById('modalIconWrap');
  const serviceCards    = document.querySelectorAll('.service-card');

  // ─────────────────────────────────────────────────────────
  // SERVICE DATA
  // ─────────────────────────────────────────────────────────
  const serviceData = {
    compraventa: {
      icon: 'home',
      title: 'Compraventa de Inmuebles',
      detail: 'Brindamos acompañamiento integral en la compra y venta de propiedades, desde la revisión de antecedentes dominiales hasta la firma de escrituras. Verificamos la titulación, gestionamos los trámites ante organismos estatales y garantizamos la seguridad jurídica de cada operación para todas las partes. También asesoramos en permutas y adjudicaciones de bienes inmuebles.'
    },
    poderes: {
      icon: 'file-text',
      title: 'Poderes Notariales',
      detail: 'Elaboramos poderes generales, especiales y de administración con plena validez legal. Asesoramos sobre el tipo de poder más adecuado para cada situación, ya sea para gestiones bancarias, compraventas, trámites migratorios o cualquier otra diligencia. Tramitamos legalizaciones y apostillas de La Haya para validez internacional.'
    },
    sucesiones: {
      icon: 'users',
      title: 'Sucesiones y Herencias',
      detail: 'Gestionamos la totalidad del proceso sucesorio: declaratoria de herederos, inventario de bienes, liquidación de la herencia y adjudicación a cada heredero. Trabajamos para que la distribución del patrimonio se realice de forma ordenada, transparente y conforme a derecho, acompañando a la familia en cada etapa y minimizando posibles conflictos.'
    },
    certificaciones: {
      icon: 'badge-check',
      title: 'Certificaciones y Autenticaciones',
      detail: 'Certificamos firmas en documentos privados y públicos, autenticamos copias de documentos originales y realizamos legalizaciones requeridas por organismos públicos y privados nacionales e internacionales. También tramitamos la apostilla de La Haya para documentos uruguayos que deban tener validez en el exterior.'
    },
    contratos: {
      icon: 'pen-line',
      title: 'Contratos y Asesoramiento',
      detail: 'Elaboramos y revisamos todo tipo de contratos: compraventas, permutas, comodatos, contratos de obra, hipotecas, prendas y fideicomisos. Asesoramos a personas físicas y jurídicas en la negociación y redacción de acuerdos, protegiendo los intereses de cada parte con claridad y precisión jurídica en cada cláusula.'
    },
    arrendamientos: {
      icon: 'key',
      title: 'Arrendamientos',
      detail: 'Redactamos y certificamos contratos de arrendamiento de inmuebles y locales comerciales conforme a la normativa uruguaya vigente. Asesoramos sobre las garantías más convenientes, cláusulas de rescisión y los derechos y obligaciones de arrendadores e inquilinos. También tramitamos novaciones, cesiones y renovaciones contractuales.'
    },
    hipotecas: {
      icon: 'banknote',
      title: 'Préstamos Hipotecarios',
      detail: 'Asesoramos en la constitución de garantías hipotecarias para préstamos entre particulares o con entidades financieras. Tramitamos la inscripción y cancelación de hipotecas en los registros correspondientes, garantizando la seguridad y validez de cada operación para el acreedor y el deudor hipotecario con total transparencia.'
    },
    ejecuciones: {
      icon: 'gavel',
      title: 'Ejecuciones y Remates',
      detail: 'Representamos a nuestros clientes en procesos de ejecución hipotecaria y de créditos, acciones posesorias y remates judiciales. Brindamos asesoramiento integral a acreedores y deudores, gestionando todas las etapas del proceso con eficiencia y profesionalismo hasta la escrituración judicial final de los bienes.'
    }
  };

  // ──────────────────────────────────────────────────────────
  // 1. NAVBAR — sticky + scroll effect
  // ──────────────────────────────────────────────────────────
  function handleNavbarScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ──────────────────────────────────────────────────────────
  // 2. MOBILE MENU — hamburger toggle
  // ──────────────────────────────────────────────────────────
  function openMenu() {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // ──────────────────────────────────────────────────────────
  // 3. SMOOTH SCROLL (fallback)
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ──────────────────────────────────────────────────────────
  // 4. SERVICE MODAL
  // ──────────────────────────────────────────────────────────
  function openServiceModal(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    // Populate content safely
    modalTitle.textContent = data.title;
    modalText.textContent  = data.detail;

    // Set icon using Lucide
    modalIconWrap.innerHTML = '';
    const iconEl = document.createElement('i');
    iconEl.setAttribute('data-lucide', data.icon);
    modalIconWrap.appendChild(iconEl);
    if (typeof lucide !== 'undefined') {
      lucide.createIcons({ nodes: [modalIconWrap] });
    }

    serviceModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    requestAnimationFrame(() => modalClose.focus());
  }

  function closeServiceModal() {
    serviceModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Open on card click
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      openServiceModal(card.dataset.service);
    });

    // Keyboard: Enter or Space opens modal
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openServiceModal(card.dataset.service);
      }
    });
  });

  // Close button
  modalClose.addEventListener('click', closeServiceModal);

  // Click outside modal box closes it
  serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeServiceModal();
  });

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal.classList.contains('is-open')) {
      closeServiceModal();
    }
  });

  // ──────────────────────────────────────────────────────────
  // 5. REVIEWS CAROUSEL — multi-card, responsive, autoplay
  // ──────────────────────────────────────────────────────────
  function getReviewsPerView() {
    const w = window.innerWidth;
    if (w <= 640)  return 1;
    if (w <= 900)  return 2;
    return 3;
  }

  function initReviewsCarousel() {
    reviewsPerView = getReviewsPerView();
    const gap           = 20; // 1.25rem
    const containerW    = reviewsWindow.offsetWidth;
    const cardW         = Math.floor((containerW - gap * (reviewsPerView - 1)) / reviewsPerView);

    reviewCardStep = cardW + gap;

    reviewCards.forEach(card => {
      card.style.width = cardW + 'px';
    });

    const maxIdx = Math.max(0, totalReviews - reviewsPerView);
    if (reviewIndex > maxIdx) reviewIndex = maxIdx;

    reviewsTrack.style.transition = 'none';
    reviewsTrack.style.transform  = `translateX(-${reviewIndex * reviewCardStep}px)`;

    requestAnimationFrame(() => {
      reviewsTrack.style.transition = '';
    });

    updateReviewButtons();
    updateReviewCounter();

    if (reviewsPerView === 1) {
      requestAnimationFrame(() => {
        const h = reviewCards[reviewIndex].offsetHeight;
        if (h > 0) reviewsWindow.style.height = h + 'px';
      });
    } else {
      reviewsWindow.style.height = '';
    }
  }

  function updateReviewButtons() {
    const maxIdx                 = Math.max(0, totalReviews - reviewsPerView);
    reviewsPrev.style.opacity    = reviewIndex <= 0      ? '0.35' : '1';
    reviewsPrev.style.pointerEvents = reviewIndex <= 0   ? 'none'  : 'auto';
    reviewsNext.style.opacity    = reviewIndex >= maxIdx ? '0.35' : '1';
    reviewsNext.style.pointerEvents = reviewIndex >= maxIdx ? 'none' : 'auto';
  }

  function updateReviewCounter() {
    const counter = document.getElementById('reviewsCounter');
    if (counter) {
      counter.textContent = `${reviewIndex + 1} / ${totalReviews}`;
    }
  }

  function updateReviewWindowHeight() {
    if (reviewsPerView !== 1) {
      reviewsWindow.style.height = '';
      return;
    }
    requestAnimationFrame(() => {
      const h = reviewCards[reviewIndex].offsetHeight;
      if (h > 0) reviewsWindow.style.height = h + 'px';
    });
  }

  function goToReview(index) {
    const maxIdx        = Math.max(0, totalReviews - reviewsPerView);
    reviewIndex         = Math.max(0, Math.min(index, maxIdx));
    reviewsTrack.style.transform = `translateX(-${reviewIndex * reviewCardStep}px)`;
    updateReviewButtons();
    updateReviewCounter();
    updateReviewWindowHeight();
  }

  function nextReview() { goToReview(reviewIndex + 1); }
  function prevReview() { goToReview(reviewIndex - 1); }

  reviewsNext.addEventListener('click', () => { nextReview(); resetReviewAutoplay(); });
  reviewsPrev.addEventListener('click', () => { prevReview(); resetReviewAutoplay(); });

  function startReviewAutoplay() {
    stopReviewAutoplay();
    reviewAutoplay = setInterval(() => {
      const maxIdx = Math.max(0, totalReviews - reviewsPerView);
      goToReview(reviewIndex >= maxIdx ? 0 : reviewIndex + 1);
    }, 4500);
  }

  function stopReviewAutoplay()  { clearInterval(reviewAutoplay); }
  function resetReviewAutoplay() { startReviewAutoplay(); }

  // Touch / swipe
  let touchStartX = 0;
  reviewsTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  reviewsTrack.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? nextReview() : prevReview();
      resetReviewAutoplay();
    }
  }, { passive: true });

  // Pause on hover
  reviewsCarousel.addEventListener('mouseenter', stopReviewAutoplay);
  reviewsCarousel.addEventListener('mouseleave', startReviewAutoplay);

  // Resize
  window.addEventListener('resize', () => {
    clearTimeout(reviewResizeTmr);
    reviewResizeTmr = setTimeout(initReviewsCarousel, 150);
  });

  // Init reviews
  initReviewsCarousel();
  startReviewAutoplay();

  // ──────────────────────────────────────────────────────────
  // 6. FADE-IN on scroll — Intersection Observer
  // ──────────────────────────────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.045}s`;
    observer.observe(el);
  });

});
