/* ==========================================================================
   Dr. Gabriel Belnuovo - VERSAO 3
   Comportamento da pagina. Sem dependencias externas.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------ Topo ao rolar */
  var topo = document.getElementById('topo');
  if (topo) {
    var fixar = function () {
      topo.classList.toggle('fixado', window.scrollY > 24);
    };
    fixar();
    window.addEventListener('scroll', fixar, { passive: true });
  }

  /* ------------------------------------------------ Indice em telas estreitas */
  var sanduiche = document.getElementById('sanduiche');
  var indice = document.getElementById('indice');

  if (sanduiche && indice) {
    var fechar = function () {
      indice.classList.remove('aberto');
      sanduiche.setAttribute('aria-expanded', 'false');
      sanduiche.setAttribute('aria-label', 'Abrir índice');
    };

    sanduiche.addEventListener('click', function () {
      var aberto = indice.classList.toggle('aberto');
      sanduiche.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      sanduiche.setAttribute('aria-label', aberto ? 'Fechar índice' : 'Abrir índice');
    });

    indice.addEventListener('click', function (e) {
      if (e.target.closest('a')) { fechar(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && indice.classList.contains('aberto')) {
        fechar();
        sanduiche.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!indice.classList.contains('aberto')) { return; }
      if (!indice.contains(e.target) && !sanduiche.contains(e.target)) { fechar(); }
    });
  }

  /* ------------------------------------------------ Entrada suave ao rolar */
  var alvos = document.querySelectorAll('.entra');

  if (document.documentElement.classList.contains('js-entra')) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) { return; }
        var el = entrada.target;
        var irmaos = Array.prototype.slice.call(el.parentElement.children);
        el.style.transitionDelay = Math.min(irmaos.indexOf(el), 5) * 55 + 'ms';
        el.classList.add('dentro');
        observador.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    alvos.forEach(function (el) { observador.observe(el); });

    /* Rede de seguranca: se o observador nao reportar, o conteudo aparece. */
    window.setTimeout(function () {
      if (document.querySelector('.entra.dentro')) { return; }
      document.documentElement.classList.remove('js-entra');
    }, 1400);
  }

  /* ------------------------------------------------ Item atual no indice */
  var links = Array.prototype.slice.call(document.querySelectorAll('.indice__lista a[href^="#"]'));
  var secoes = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (secoes.length && 'IntersectionObserver' in window) {
    var vigia = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) { return; }
        links.forEach(function (link) {
          link.classList.toggle('atual', link.getAttribute('href') === '#' + entrada.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    secoes.forEach(function (secao) { vigia.observe(secao); });
  }

  /* ------------------------------------------------ Perguntas: uma por vez */
  var lista = document.getElementById('listaPerguntas');
  if (lista) {
    var itens = Array.prototype.slice.call(lista.querySelectorAll('details'));
    itens.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) { return; }
        itens.forEach(function (outro) {
          if (outro !== item) { outro.open = false; }
        });
      });
    });
  }

  /* ------------------------------------------------ Ano no rodape */
  var ano = document.getElementById('ano');
  if (ano) { ano.textContent = String(new Date().getFullYear()); }
})();
