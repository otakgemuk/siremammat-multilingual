// Shared nav/footer HTML builder — call buildPage(root) to inject
function navHTML(root) {
  root = root || '';
  return `
<div class="ticker-wrap">
  <div class="ticker-label">DELAYED</div>
  <div class="ticker-scroll"></div>
</div>
<nav class="main-nav">
  <a href="${root}/" class="nav-logo">
    <div class="nav-logo-mark">S</div>
    <div><div class="nav-logo-text">SireMammat</div><div class="nav-logo-sub">Education</div></div>
  </a>
  <ul class="nav-links">
    <li><a href="${root}/">Hub</a></li>
    <li><a href="${root}/#about">About</a></li>
    <li><a href="${root}/indicators/">Indicators</a></li>
    <li><a href="${root}/tools/">Tools</a></li>
    <li><a href="${root}/analysis/">Analysis</a></li>
    <li><a href="${root}/calculator/">Calculator</a></li>
    <li><a href="${root}/#contact">Contact</a></li>
    <li><a href="https://wise.com/pay/me/muhammads5009?utm_source=request_flow" target="_blank" class="nav-cta">☕ Buy Me a Coffee</a></li>
  </ul>
  <button class="nav-mobile-toggle" aria-label="Menu">
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  </button>
</nav>`;
}
