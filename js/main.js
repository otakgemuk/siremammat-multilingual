// Ticker data
const TICKER = [
  { sym:'ES', price:'5,847.25', change:'+12.50', pos:true },
  { sym:'NQ', price:'20,934', change:'+67.25', pos:true },
  { sym:'MES', price:'5,847.25', change:'+12.50', pos:true },
  { sym:'MNQ', price:'20,934', change:'-18.75', pos:false },
  { sym:'VIX', price:'18.24', change:'-0.84', pos:false },
  { sym:'DXY', price:'104.32', change:'+0.21', pos:true },
  { sym:'GOLD', price:'2,341.4', change:'+8.60', pos:true },
  { sym:'10Y', price:'4.328%', change:'-0.012', pos:false },
];

function buildTicker() {
  const wrap = document.querySelector('.ticker-scroll');
  if (!wrap) return;
  // Duplicate for seamless loop
  const items = [...TICKER, ...TICKER].map(t => `
    <span class="ticker-item">
      <span class="ticker-sym">${t.sym}</span>
      <span class="ticker-price">${t.price}</span>
      <span class="ticker-change ${t.pos ? 'pos' : 'neg'}">${t.change}</span>
    </span>
  `).join('');
  wrap.innerHTML = items;
}

// Mobile nav toggle
function initNav() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// Accordion
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains('open');
      // Close all in same group
      const parent = header.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-header').forEach(h => {
          h.classList.remove('open');
          if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
        });
      }
      if (!isOpen) {
        header.classList.add('open');
        if (body) body.classList.add('open');
      }
    });
  });
}

// Active nav link
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.includes(href) && href !== '/' && href !== '../' && href !== '../../') {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  initNav();
  initAccordions();
  setActiveNav();
});
