/* ==========================================================================
   Dr. Gabriel Belnuovo - comportamento da pagina
   Sem dependencias externas.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------ Header ao rolar */
  var header = document.getElementById('header');
  if (header) {
    var applyStuck = function () {
      header.classList.toggle('is-stuck', window.scrollY > 24);
    };
    applyStuck();
    window.addEventListener('scroll', applyStuck, { passive: true });
  }

  /* ------------------------------------------------ Menu mobile */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    var closeNav = function () {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menu');
    };

    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { closeNav(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        burger.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) { return; }
      if (!nav.contains(e.target) && !burger.contains(e.target)) { closeNav(); }
    });
  }

  /* ------------------------------------------------ Revelacao ao rolar */
  var revealables = document.querySelectorAll('.reveal');

  if (document.documentElement.classList.contains('js-reveal')) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentElement.children);
        var index = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(index, 5) * 70 + 'ms';
        el.classList.add('is-visible');
        revealObserver.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealables.forEach(function (el) { revealObserver.observe(el); });

    /* Rede de seguranca: se o observer nao reportar nada, o conteudo aparece. */
    window.setTimeout(function () {
      if (document.querySelector('.reveal.is-visible')) { return; }
      document.documentElement.classList.remove('js-reveal');
    }, 1400);
  }

  /* ------------------------------------------------ Link ativo na navegacao */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__list a[href^="#"]'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ------------------------------------------------ FAQ: um item aberto por vez */
  var faqList = document.getElementById('faqList');
  if (faqList) {
    var items = Array.prototype.slice.call(faqList.querySelectorAll('details'));
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) { return; }
        items.forEach(function (other) {
          if (other !== item) { other.open = false; }
        });
      });
    });
  }

  /* ------------------------------------------------ Placeholder de video */
  document.querySelectorAll('.media__play').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var figure = btn.closest('figure') || btn.parentElement;
      var label = btn.getAttribute('aria-label') || 'Video';
      figure.setAttribute('data-video-pending', label);
      btn.disabled = true;
      btn.setAttribute('aria-label', label + ' (video ainda nao publicado)');
      btn.style.opacity = '.45';
      btn.style.cursor = 'not-allowed';
    });
  });

  /* ------------------------------------------------ Ano no rodape */
  var ano = document.getElementById('ano');
  if (ano) { ano.textContent = String(new Date().getFullYear()); }
})();
