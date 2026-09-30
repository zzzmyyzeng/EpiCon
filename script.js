(() => {
  const config = window.EPICON_CONFIG || {};
  const connect = (id, url, label) => {
    if (!url) return;
    const a = document.getElementById(id);
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.removeAttribute('aria-disabled'); a.classList.remove('unavailable');
    a.textContent = label + ' ↗';
  };
  connect('paper-link', config.paperUrl || (config.arxivId ? 'https://arxiv.org/abs/' + config.arxivId : ''), 'Paper');
  connect('github-link', config.githubUrl, 'GitHub');
  const bib = document.getElementById('bibtex');
  if (config.arxivId) {
    bib.textContent = bib.textContent
      .replace(/eprint\s*= \{[^}]*\}/, 'eprint        = {' + config.arxivId + '}')
      .replace(/url\s*= \{[^}]*\}/, 'url           = {https://arxiv.org/abs/' + config.arxivId + '}');
  }
  if (config.year) bib.textContent = bib.textContent.replace(/year\s*= \{\d{4}\}/, 'year          = {' + config.year + '}');
  document.querySelectorAll('.config-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.config-button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      document.querySelectorAll('.result-panel').forEach(p => p.hidden = p.id !== button.dataset.panel);
    });
  });
  document.getElementById('copy-bib').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(bib.textContent);
      else {
        const area = document.createElement('textarea'); area.value = bib.textContent;
        area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area);
        area.select(); const ok = document.execCommand('copy'); area.remove();
        if (!ok) throw new Error('Copy unavailable');
      }
      status.textContent = 'BibTeX copied.';
    } catch {
      const range = document.createRange(); range.selectNodeContents(bib);
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
})();
