/* QR Nova — site behaviour */
(function () {
  'use strict';

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- sticky nav shadow ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- reveal on scroll ---- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (!('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- screenshot carousel arrows ---- */
  var carousel = document.getElementById('carousel');
  if (carousel) {
    var step = function () {
      var card = carousel.querySelector('.shot');
      if (!card) return carousel.clientWidth * 0.8;
      var gap = parseInt(getComputedStyle(carousel).columnGap || getComputedStyle(carousel).gap, 10) || 22;
      return card.getBoundingClientRect().width + gap;
    };
    document.querySelectorAll('[data-car]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = btn.getAttribute('data-car') === 'next' ? 1 : -1;
        carousel.scrollBy({ left: dir * step(), behavior: 'smooth' });
      });
    });
  }

  /* ---- changelog search ---- */
  var search = document.getElementById('changelog-search');
  if (search) {
    var releases = Array.prototype.slice.call(document.querySelectorAll('.release'));
    var empty = document.querySelector('.no-results');
    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      var hits = 0;
      releases.forEach(function (rel) {
        var match = !q || rel.textContent.toLowerCase().indexOf(q) !== -1;
        rel.style.display = match ? '' : 'none';
        if (match) hits++;
      });
      if (empty) empty.classList.toggle('show', hits === 0);
    });
  }

  /* ---- current year ---- */
  var year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = year; });
})();
