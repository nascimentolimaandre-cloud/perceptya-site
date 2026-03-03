/* ═══════════════════════════════════════════════════════
   PERCEPTYA — VIDEO COVER
   Makes Cloudinary iframe behave like object-fit:cover
   Video aspect ratio: 16:9
══════════════════════════════════════════════════════ */

(function coverVideo() {
  const RATIO  = 16 / 9;
  const iframe = document.querySelector('.video-bg iframe');
  if (!iframe) return;

  function resize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let w, h;

    if (vw / vh > RATIO) {
      // Wider than 16:9 (landscape / ultrawide) — fit width
      w = vw;
      h = vw / RATIO;
    } else {
      // Taller than 16:9 (portrait / mobile) — fit height
      h = vh;
      w = vh * RATIO;
    }

    w = Math.ceil(w) + 2;
    h = Math.ceil(h) + 2;

    iframe.style.width     = w + 'px';
    iframe.style.height    = h + 'px';
    iframe.style.top       = Math.round((vh - h) / 2) + 'px';
    iframe.style.left      = Math.round((vw - w) / 2) + 'px';
    iframe.style.transform = 'none';
  }

  resize();
  window.addEventListener('resize', resize);
})();
