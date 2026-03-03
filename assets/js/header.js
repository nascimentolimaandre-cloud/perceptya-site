/* ═══════════════════════════════════════════════════════
   PERCEPTYA — HEADER SCRIPT
   Hamburger · Mobile nav · Scroll opacity
══════════════════════════════════════════════════════ */

(function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const header    = document.querySelector('header');

  /* ── Hamburger toggle ───────────────────────────── */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ── Lang toggle ────────────────────────────────── */
  document.querySelectorAll('.lang-toggle span').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-toggle span').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── Active nav link ────────────────────────────── */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
