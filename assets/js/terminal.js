/* ═══════════════════════════════════════════════════════
   PERCEPTYA — TERMINAL ANIMATION
   Call initTerminal(containerId) to start.
══════════════════════════════════════════════════════ */

const TERMINAL_LINES = [
  { type: 'prompt',  text: 'run ai-value-discovery --client=enterprise' },
  { type: 'blank' },
  { type: 'section', text: '> Initializing PERCEPTYA AI VALUE SYSTEM™...' },
  { type: 'blank' },
  { type: 'section', text: '> Phase 1: AI Value Discovery' },
  { type: 'check',   label: 'Executive alignment',    value: 'complete' },
  { type: 'check',   label: 'AI Maturity Score',      value: '2.4 / 5.0', accent: '→ Gap analysis ready' },
  { type: 'check',   label: 'Use cases identified',   value: '23' },
  { type: 'check',   label: 'Top 7 prioritized',      value: 'by economic impact' },
  { type: 'check',   label: 'Financial Impact Model', value: '$4.2M potential value', accent: '(12 months)' },
  { type: 'check',   label: 'Architecture Blueprint', value: 'Data Foundation + Agent Layer' },
  { type: 'check',   label: '18-month Roadmap',       value: 'sequenced · costed · board-ready' },
  { type: 'blank' },
  { type: 'success', text: 'SUCCESS: AI Value Discovery complete.' },
  { type: 'output',  label: 'Output →', value: 'Executive_Roadmap_v1.pdf | Impact_Model.xlsx' },
  { type: 'blank' },
  { type: 'cursor',  text: '> Ready to industrialize. Run Phase 2? [Y/n]: ' },
];

function initTerminal(containerId) {
  const body = document.getElementById(containerId);
  if (!body) return;

  let cur = 0;

  function buildLine(d) {
    const el = document.createElement('div');
    el.className = 't-line';

    if (d.type === 'blank') { el.className = 't-line t-blank'; return el; }

    if (d.type === 'prompt') {
      el.innerHTML = `<span class="t-prompt">user@perceptya:~$</span><span class="t-cmd"> ${d.text}</span>`;
    } else if (d.type === 'section') {
      el.innerHTML = `<span class="t-section">${d.text}</span>`;
    } else if (d.type === 'check') {
      let h = `<span class="t-check">  [✓]</span><span class="t-label"> ${d.label}: </span><span class="t-value">${d.value}</span>`;
      if (d.accent) h += `<span class="t-accent"> ${d.accent}</span>`;
      el.innerHTML = h;
    } else if (d.type === 'success') {
      el.innerHTML = `<span class="t-success">  ${d.text}</span>`;
    } else if (d.type === 'output') {
      el.innerHTML = `<span class="t-output">  ${d.label} </span><span class="t-output-val">${d.value}</span>`;
    } else if (d.type === 'cursor') {
      el.innerHTML = `<span class="t-section">${d.text}</span><span class="cursor"></span>`;
    }
    return el;
  }

  function next() {
    if (cur >= TERMINAL_LINES.length) { setTimeout(restart, 4500); return; }
    const d = TERMINAL_LINES[cur];
    const el = buildLine(d);
    body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('visible'));
    cur++;
    const delay = d.type==='blank' ? 55
                : d.type==='prompt' ? 420
                : d.type==='success' ? 300
                : d.type==='cursor' ? 0
                : 130;
    setTimeout(next, delay);
  }

  function restart() {
    body.querySelectorAll('.t-line').forEach(l => {
      l.style.transition = 'opacity 0.35s';
      l.style.opacity = '0';
    });
    setTimeout(() => {
      body.innerHTML = '';
      cur = 0;
      setTimeout(next, 400);
    }, 500);
  }

  setTimeout(next, 900);
}
