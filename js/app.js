/* ============================================================
   NAPELL — application logic (router + i18n + modal + nav)
   ============================================================ */
(function () {
  'use strict';

  var I = window.I18N;
  var STORAGE_KEY = 'napell-lang';

  /* ---------- language state ---------- */
  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && I.meta.supported.some(function (l) { return l.code === saved; })) return saved;
    } catch (e) {}
    return I.meta.defaultLang || 'en';
  }
  var lang = detectLang();

  function langMeta(code) {
    for (var i = 0; i < I.meta.supported.length; i++) {
      if (I.meta.supported[i].code === code) return I.meta.supported[i];
    }
    return I.meta.supported[0];
  }

  /* ---------- translation helpers ---------- */
  function lookup(obj, key) {
    return key.split('.').reduce(function (o, k) {
      return (o && o[k] != null) ? o[k] : undefined;
    }, obj);
  }
  function t(key) {
    return lookup(I.ui[lang], key) || lookup(I.ui[I.meta.defaultLang], key) || key;
  }
  function pageText(pageId) {
    var p = I.pages[pageId];
    if (!p) return null;
    return p[lang] || p[I.meta.defaultLang] || null;
  }

  /* ---------- DOM refs ---------- */
  var $ = function (s) { return document.querySelector(s); };
  var contentEl = $('#content');
  var navEl = $('#main-nav');
  var modalEl = $('#lang-modal');
  var langOptionsEl = $('#lang-options');
  var langSwitchEl = $('#lang-switch');
  var backTopEl = $('#back-top');

  /* ---------- apply UI strings ---------- */
  function applyUI() {
    document.documentElement.lang = lang;
    document.documentElement.dir = langMeta(lang).dir || 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = t(el.getAttribute('data-i18n-title'));
    });
    $('#year').textContent = new Date().getFullYear();
  }

  /* ---------- language modal ---------- */
  function buildLangOptions() {
    langOptionsEl.innerHTML = '';
    I.meta.supported.forEach(function (l) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-option' + (l.code === lang ? ' current' : '');
      btn.setAttribute('data-lang', l.code);
      btn.innerHTML =
        '<span class="flag">' + l.flag + '</span>' +
        '<span><span class="native">' + l.native + '</span>' +
        '<span class="english">' + l.name + '</span></span>' +
        '<span class="check">' + (l.code === lang ? '✓' : '') + '</span>';
      btn.addEventListener('click', function () { chooseLang(l.code); });
      langOptionsEl.appendChild(btn);
    });
  }

  function showModal() { modalEl.removeAttribute('hidden'); }
  function hideModal() { modalEl.setAttribute('hidden', ''); }

  function chooseLang(code) {
    lang = code;
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}
    buildLangOptions();
    buildLangSwitch();
    applyUI();
    buildNav();
    route();
    hideModal();
  }

  /* ---------- language switch (header) ---------- */
  function buildLangSwitch() {
    langSwitchEl.innerHTML = '';
    I.meta.supported.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lang-btn' + (l.code === lang ? ' active' : '');
      b.textContent = l.short;
      b.title = l.native;
      b.setAttribute('aria-label', l.name);
      b.addEventListener('click', function () { chooseLang(l.code); });
      langSwitchEl.appendChild(b);
    });
  }

  /* ---------- navigation (hover dropdown) ---------- */
  function buildNav() {
    var activeId = currentPageId();
    var html = '';
    I.nav.groups.forEach(function (g) {
      html += '<div class="nav-item" data-group="' + g.id + '">';
      html += '<a class="nav-link" href="javascript:void(0)">' + esc(g.label[lang]) +
              ' <span class="caret"></span></a>';
      html += '<div class="dropdown">';
      g.items.forEach(function (item, i) {
        html += '<a class="dropdown-item' + (item.id === activeId ? ' active' : '') + '" href="#/' + item.id + '">' +
                '<span class="idx">' + (i + 1) + '</span>' + esc(item.label[lang]) + '</a>';
      });
      html += '</div></div>';
    });
    navEl.innerHTML = html;

    // mobile accordion behavior for dropdowns
    navEl.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 820) {
          e.preventDefault();
          var item = link.parentElement;
          var wasOpen = item.classList.contains('open');
          navEl.querySelectorAll('.nav-item.open').forEach(function (n) { n.classList.remove('open'); });
          if (!wasOpen) item.classList.add('open');
        }
      });
    });
  }

  /* ---------- router ---------- */
  function currentPageId() {
    var h = location.hash.replace(/^#\/?/, '');
    var id = h.split('?')[0].split('/')[0];
    if (!id) id = 'home';
    return I.pages[id] ? id : 'home';
  }

  function route() {
    var id = currentPageId();
    var pt = pageText(id);
    if (!pt) id = 'home', pt = pageText('home');

    // active nav highlight
    document.querySelectorAll('.nav-item').forEach(function (n) { n.classList.remove('active'); });
    document.querySelectorAll('.dropdown-item').forEach(function (n) { n.classList.remove('active'); });
    var activeLink = navEl.querySelector('.dropdown-item[href="#/' + id + '"]');
    if (activeLink) {
      activeLink.classList.add('active');
      var group = activeLink.closest('.nav-item');
      if (group) group.classList.add('active');
    }

    // render page
    var html = '';
    if (id === 'home') {
      html = renderHome(pt);
    } else {
      html = '<section class="prose fade-page">' +
             '<h2><span class="tick"></span>' + esc(pt.title) + '</h2>' +
             (pt.html || '') + '</section>';
    }
    contentEl.innerHTML = html;
    document.title = 'NAPELL · ' + pt.title;

    // close mobile nav after navigation
    navEl.classList.remove('open');
    document.querySelectorAll('.nav-item.open').forEach(function (n) { n.classList.remove('open'); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderHome(pt) {
    var kpis = (I.pages.home.kpis || []).map(function (k) {
      return '<div class="kpi-card"><div class="kpi-value">' + esc(k.value) + '</div>' +
             '<div class="kpi-label">' + esc(k.label[lang]) + '</div></div>';
    }).join('');
    return '<section class="hero fade-page">' +
      '<span class="eyebrow">' + esc(t('home.eyebrow')) + '</span>' +
      '<h1>' + (pt.title || '') + '</h1>' +
      '<p class="lede">' + (pt.subtitle || '') + '</p>' +
      '<div class="hero-actions">' +
        '<a class="btn btn-primary" href="#/executive-summary">' + esc(t('home.ctaPrimary')) + '</a>' +
        '<a class="btn btn-ghost" href="#/financial-model">' + esc(t('home.ctaSecondary')) + '</a>' +
      '</div></section>' +
      '<div class="kpi-grid">' + kpis + '</div>' +
      '<section class="prose fade-page">' + (pt.html || '') + '</section>';
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------- back to top ---------- */
  function initBackTop() {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) backTopEl.classList.add('show');
      else backTopEl.classList.remove('show');
    });
    backTopEl.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- hamburger ---------- */
  function initHamburger() {
    var hb = $('#hamburger');
    hb.addEventListener('click', function () {
      var open = navEl.classList.toggle('open');
      hb.classList.toggle('open', open);
      hb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    applyUI();
    buildLangOptions();
    buildLangSwitch();
    buildNav();
    route();
    initBackTop();
    initHamburger();

    window.addEventListener('hashchange', route);

    // show the language modal on every landing load (center overlay),
    // with the last-selected language pre-highlighted
    showModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
