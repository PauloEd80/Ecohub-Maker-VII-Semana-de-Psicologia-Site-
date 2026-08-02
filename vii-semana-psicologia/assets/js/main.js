/**
 * ==========================================================================
 * assets/js/main.js
 * VII Semana de Psicologia — Universidade Positivo (Campus Londrina-PR)
 * ==========================================================================
 * Consolida toda a interatividade da landing page em módulos independentes:
 *
 *   1. initCountdown()      -> Contador regressivo até o evento
 *   2. initFavoriteButton() -> Favoritar evento (persistido em localStorage)
 *   3. initMobileMenu()     -> Abrir/fechar navegação em telas pequenas
 *   4. initHeaderScroll()   -> Estado visual do header ao rolar a página
 *   5. initFooterYear()     -> Ano corrente no rodapé
 *
 * Os módulos 1-3 são a lógica original, apenas reorganizada. Os módulos
 * 4-5 são pequenos acréscimos que dão suporte ao novo header "flutuante"
 * (Diretriz 1) e evitam manutenção manual do ano no rodapé — nenhuma
 * regra de negócio original foi alterada.
 *
 * Convenções:
 *   - Cada "init*" verifica se seus elementos existem antes de agir (guard
 *     clause) e não lança erro se a seção correspondente não existir.
 *   - Nada é declarado no escopo global: tudo vive dentro da IIFE abaixo,
 *     evitando conflito com outros scripts carregados na página.
 * ==========================================================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initFavoriteButton();
    initMobileMenu();
    initHeaderScroll();
    initFooterYear();
  });

  /**
   * --------------------------------------------------------------------
   * 1. CONTADOR REGRESSIVO
   * Atualiza dias/horas/minutos restantes até EVENT_DATE a cada 30s
   * (a granularidade é de minutos, então não é necessário atualizar a
   * cada segundo).
   * --------------------------------------------------------------------
   */
  function initCountdown() {
    const EVENT_DATE = new Date('2026-08-25T18:00:00-03:00');
    const UPDATE_INTERVAL_MS = 1000 * 30;

    const elements = {
      days: document.getElementById('cd-days'),
      hours: document.getElementById('cd-hours'),
      minutes: document.getElementById('cd-minutes'),
    };

    const hasAllElements = elements.days && elements.hours && elements.minutes;
    if (!hasAllElements) return;

    const pad = (value) => String(value).padStart(2, '0');

    function updateCountdown() {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        elements.days.textContent = '00';
        elements.hours.textContent = '00';
        elements.minutes.textContent = '00';
        return;
      }

      const totalMinutes = Math.floor(diff / 1000 / 60);
      elements.days.textContent = pad(Math.floor(totalMinutes / (60 * 24)));
      elements.hours.textContent = pad(Math.floor((totalMinutes % (60 * 24)) / 60));
      elements.minutes.textContent = pad(totalMinutes % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, UPDATE_INTERVAL_MS);
  }

  /**
   * --------------------------------------------------------------------
   * 2. FAVORITAR EVENTO
   * Persiste a preferência do usuário em localStorage e reflete o estado
   * no atributo aria-pressed (acessível a leitores de tela; também é o
   * gancho usado pelo CSS para estilizar o botão "ativo").
   * --------------------------------------------------------------------
   */
  function initFavoriteButton() {
    const STORAGE_KEY = 'vii-semana-psicologia:favorito';
    const button = document.getElementById('favoriteBtn');
    if (!button) return;

    function applyState(isFavorite) {
      button.setAttribute('aria-pressed', String(isFavorite));
      const label = button.querySelector('.favorite-label');
      if (label) {
        label.textContent = isFavorite ? 'Adicionado aos favoritos' : 'Adicionar aos favoritos';
      }
    }

    const stored = localStorage.getItem(STORAGE_KEY) === 'true';
    applyState(stored);

    button.addEventListener('click', () => {
      const next = button.getAttribute('aria-pressed') !== 'true';
      localStorage.setItem(STORAGE_KEY, String(next));
      applyState(next);
    });
  }

  /**
   * --------------------------------------------------------------------
   * 3. MENU MOBILE
   * Alterna a navegação em telas pequenas e fecha automaticamente ao
   * clicar em qualquer link (evita menu aberto ao trocar de seção).
   * --------------------------------------------------------------------
   */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /**
   * --------------------------------------------------------------------
   * 4. ESTADO DO HEADER AO ROLAR
   * Adiciona a classe .is-scrolled quando a página desce, para o CSS
   * reforçar a sombra do header "flutuante" (efeito vidro fosco).
   * Usa listener passivo por performance (não bloqueia o scroll).
   * --------------------------------------------------------------------
   */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const SCROLL_THRESHOLD = 8;

    function handleScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /**
   * --------------------------------------------------------------------
   * 5. ANO DINÂMICO NO RODAPÉ
   * Evita a manutenção manual do copyright a cada virada de ano.
   * --------------------------------------------------------------------
   */
  function initFooterYear() {
    const yearEl = document.getElementById('currentYear');
    if (!yearEl) return;
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
