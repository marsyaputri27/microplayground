// app.js
// Data is provided globally by data.js loaded before this script.

// ===== NAVBAR & ACTIVE STATE =====
const toggle = document.querySelector('#nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle && menu) toggle.onclick = () => menu.classList.toggle('open');
const path = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(a => {
  const href = a.getAttribute('href');
  if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) a.classList.add('active');
});

// Normalize nav menu across pages to icon-only (Components, Projects, Learn)
function setActive() {
  // bersihkan dulu
  document.querySelectorAll('nav a.navicon.active').forEach(a => a.classList.remove('active'));
  // cari anchor yang href-nya match path sekarang
  document.querySelectorAll('nav a.navicon').forEach(a => {
    const href = a.getAttribute('href') || '';
    // treat root sebagai index.html
    const isIndex = (path === '' || path === 'index.html') && href.endsWith('index.html');
    if (isIndex || href.endsWith(path)) a.classList.add('active');
  });
}

// Normalize nav menu across pages to icon-only (Components, Projects, Learn)
(function normalizeNav(){
  // Hanya normalisasi (ganti ke ikon-only) jika diaktifkan eksplisit.
  // Secara default, JANGAN ubah markup navbar yang sudah ada di HTML.
  const enableIconNav = document.body?.dataset?.nav === 'icons';
  const nav = document.querySelector('nav .nav-inner');
  const menu = document.querySelector('#nav-menu');
  const btn = document.querySelector('#nav-toggle');
  if (!nav || !menu) return;
  if (!enableIconNav) { setActive(); return; }

  const svgChip = `
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <defs>
        <linearGradient id="navGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="50%" stop-color="#7c3aed"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="14" height="14" rx="2.5" fill="none" stroke="url(#navGrad1)" stroke-width="1.6"/>
      <rect x="8" y="8" width="8" height="8" rx="1.6" fill="#0d1436" stroke="#5f78ff" stroke-width="1"/>
      <g fill="#5f78ff">
        <rect x="11.5" y="3" width="1" height="3"/>
        <rect x="11.5" y="18" width="1" height="3"/>
        <rect x="3" y="11.5" width="3" height="1"/>
        <rect x="18" y="11.5" width="3" height="1"/>
      </g>
    </svg>`;
  const svgCube = `
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <defs>
        <linearGradient id="navGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="50%" stop-color="#7c3aed"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
      </defs>
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" fill="#0d1436" stroke="url(#navGrad2)" stroke-width="1.6"/>
      <path d="M12 7l3.5 2-3.5 2-3.5-2z" fill="#5f78ff"/>
    </svg>`;
  const svgBook = `
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <defs>
        <linearGradient id="navGrad3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="50%" stop-color="#7c3aed"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
      </defs>
      <path d="M3 7l9-3 9 3-9 3-9-3z" fill="#0d1436" stroke="url(#navGrad3)" stroke-width="1.6"/>
      <path d="M6 10v6c0 1.1 3 2 6 2s6-.9 6-2v-6" fill="#0d1436" stroke="#364878"/>
    </svg>`;

  // rebuild ke ikon-only dan sisipkan label hover
  menu.className = 'menu icons';
  menu.setAttribute('aria-label','Primary');
  menu.innerHTML = `
    <a class="navicon" href="components.html" aria-label="Chips">${svgChip}<span class="nav-txt">Chips<i aria-hidden="true"></i></span></a>
    <a class="navicon" href="projects.html" aria-label="Projects">${svgCube}<span class="nav-txt">Projects<i aria-hidden="true"></i></span></a>
    <a class="navicon" href="learn.html" aria-label="Learn">${svgBook}<span class="nav-txt">Learn<i aria-hidden="true"></i></span></a>
  `;
  if (btn) {
    btn.classList.add('hamburger');
    btn.innerHTML = '<span class="ham" aria-hidden="true"></span>';
    btn.setAttribute('aria-label','Toggle Menu');
  }

  // penting: tandai aktif SETELAH menu dibangun
  setActive();
  // ensure hamburger symbol renders consistently across encodings
  if (btn) {
    btn.classList.add('hamburger');
    btn.innerHTML = '<span class="ham" aria-hidden="true"></span>';
    btn.title = 'Menu';
  }
})();


// ===== UTIL =====
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const copy = async txt => {
  try {
    await navigator.clipboard.writeText(txt);
  } catch(_){}
};
const saveLS = (k,v) => localStorage.setItem(k, JSON.stringify(v));
const getLS = (k,def=[]) => { try{ return JSON.parse(localStorage.getItem(k)) ?? def }catch{ return def } };

// ===== HOME: tombol cepat di index tidak butuh JS tambahan =====

// ===== Landing tagline rails: fit SVG lines to text width =====
(function(){
  const rails = document.getElementById('tag-rails');
  const textWrap = document.querySelector('.tagline .tag-text');
  if (!rails || !textWrap) return;
  const top = rails.querySelector('#rail-top');
  const bot = rails.querySelector('#rail-bot');
  const recalc = () => {
    const r = textWrap.getBoundingClientRect();
    const w = Math.max(160, Math.ceil(r.width));
    const h = Math.max(40, Math.ceil(r.height));
    // Match left padding of .tag-text dynamically across breakpoints
    const padL = parseInt(getComputedStyle(textWrap).paddingLeft, 10) || 30;
    // Keep rails tight to text on phones, slightly extended on larger screens
    const isPhone = (window.innerWidth || document.documentElement.clientWidth || 0) <= 760;
    const extra = isPhone ? 0 : 60;
    const topY = 1;  // bring rails a bit closer to text
    const hookStartX = 8, hookCtrlX = 8, hookMeetX = 22; // left hook geometry
    const bottomY = h + 1; // closer underline gap
    // Size the SVG to cover text + right tail space
    rails.setAttribute('width', w + padL + extra);
    rails.setAttribute('height', h + 24);

    // Top path: hook then straight line to the end of text
    const topD = `M${hookStartX} ${topY+16} Q ${hookCtrlX} ${topY+4} ${hookMeetX} ${topY} H ${w + padL + extra}`;
    top.setAttribute('d', topD);

    // Bottom path: straight underline then small upward notch tail
    const tailLen = Math.min(28, Math.max(18, Math.round(w*0.08)));
    const botEnd = w + padL + extra - 8; // bring in slightly from extreme right
    const botD = `M${padL-12} ${bottomY} H ${botEnd - tailLen} l ${tailLen} -10`;
    bot.setAttribute('d', botD);
  };
  window.addEventListener('resize', recalc);
  // Fonts might load async; recalc a few times
  ['load','DOMContentLoaded'].forEach(e=>window.addEventListener(e,recalc));
  setTimeout(recalc, 50); setTimeout(recalc, 250); setTimeout(recalc, 800);
})();

// ===== HOME: components marquee (auto-scroll 1 bar) =====
(function(){
  if (document.body.dataset.page !== 'home') return;
  const track = document.getElementById('comp-marquee');
  if (!track || !Array.isArray(window.COMPONENTS)) return;

  const srcCandidates = (c) => {
    const MAP = { uno:'assets/Arduino_Uno_R3.webp', nano:'assets/arduino_nano.webp', esp32:'assets/esp32_devkit.jpg', esp8266_nodemcu:'assets/esp8266_nodemcu.jpg' };
    const ALIAS = { bmp280_sensor:'bme280_sensor' };
    const base = ALIAS[c.id] || c.id;
    const list = [];
    if (MAP[c.id]) list.push(MAP[c.id]);
    ['webp','jpg','png','jpeg'].forEach(ext => list.push(`assets/${base}.${ext}`));
    return list;
  };

  const build = (c) => {
    const a = document.createElement('a');
    a.href = `components.html#${c.id}`;
    a.className = 'm-item';
    a.title = c.name;
    const img = new Image();
    img.alt = c.name;
    const cand = srcCandidates(c);
    let i = 0; img.onerror = () => { i++; if (i < cand.length) img.src = cand[i]; else a.style.display='none'; };
    img.src = cand[i];
    a.appendChild(img);
    return a;
  };

  const nodes = COMPONENTS.map(build);
  // duplicate once for seamless scroll reaching -50%
  nodes.forEach(n => track.appendChild(n.cloneNode(true)));
  nodes.forEach(n => track.appendChild(n));
})();

// Page titles: only auto-size on phones (<=760px)
(function(){
  const groups = document.querySelectorAll('.page-title');
  if (!groups.length) return;

  // Simpan nilai asli dari markup untuk restore yang 100% sama
  groups.forEach(group => {
    const rails = group.querySelector('.page-rails');
    const top = rails?.querySelector('.rail-top');
    const bot = rails?.querySelector('.rail-bot');
    if (!rails || !top || !bot) return;
    if (!rails.dataset.w) rails.dataset.w = rails.getAttribute('width') || '';
    if (!rails.dataset.h) rails.dataset.h = rails.getAttribute('height') || '';
    if (!top.dataset.d) top.dataset.d = top.getAttribute('d') || '';
    if (!bot.dataset.d) bot.dataset.d = bot.getAttribute('d') || '';
  });

  const restoreDefault = (group)=>{
    const rails = group.querySelector('.page-rails');
    const top = rails?.querySelector('.rail-top');
    const bot = rails?.querySelector('.rail-bot');
    if (!rails || !top || !bot) return;
    if (rails.dataset.w) rails.setAttribute('width', rails.dataset.w);
    if (rails.dataset.h) rails.setAttribute('height', rails.dataset.h);
    if (top.dataset.d) top.setAttribute('d', top.dataset.d);
    if (bot.dataset.d) bot.setAttribute('d', bot.dataset.d);
  };

  const calcMobile = (group)=>{
    const rails = group.querySelector('.page-rails');
    const top = rails?.querySelector('.rail-top');
    const bot = rails?.querySelector('.rail-bot');
    const textWrap = group.querySelector('.title-text');
    if (!rails || !top || !bot || !textWrap) return;
    const r = textWrap.getBoundingClientRect();
    const w = Math.max(160, Math.ceil(r.width));
    const h = Math.max(40, Math.ceil(r.height));
    const padL = 30; const topY = 2; const bottomY = h + 2; const extra = 0; // phone: pas dengan teks
    rails.setAttribute('width', w + padL + extra);
    rails.setAttribute('height', h + 24);
    top.setAttribute('d', `M${padL-12} ${topY+16} Q ${padL-12} ${topY+4} ${padL+2} ${topY} H ${w + padL + extra}`);
    const tailLen = Math.min(28, Math.max(18, Math.round(w*0.08)));
    const botEnd = w + padL + extra - 8;
    bot.setAttribute('d', `M${padL-12} ${bottomY} H ${botEnd - tailLen} l ${tailLen} -10`);
  };

  const mql = window.matchMedia('(max-width: 640px)'); // hanya ponsel
  const recalcAll = ()=>{
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const isPhone = mql.matches || vw <= 640;
    if (isPhone) groups.forEach(calcMobile);
    else groups.forEach(restoreDefault); // desktop/tablet: kembalikan persis markup
  };
  window.addEventListener('resize', recalcAll, { passive: true });
  mql.addEventListener('change', recalcAll);
  // Jalankan sekali saat load untuk memastikan desktop tidak berubah
  recalcAll();
})();

// scroll-follow behavior removed per request


// ===== COMPONENTS PAGE =====
if (document.body.dataset.page === 'components') {
  const grid = document.querySelector('#comp-grid');
  const fType = document.querySelector('#fType');
  const fIface = document.querySelector('#fIface');
  const fVolt = document.querySelector('#fVolt');
  const modal = document.querySelector('#modal');
  const tabs = document.querySelector('#tabs');
  const tabBody = document.querySelector('#tab-body');
  const close = document.querySelector('#modal-close');

  const BOOK_KEY = 'mp_bookmark_components';
  let bookmarks = new Set(getLS(BOOK_KEY));

  // Ambil ID YouTube dari wiringNotes (robust: watch?v=, youtu.be, shorts, live, embed)
  const ytIdFromNotes = (notes = []) => {
    const normalize = (id='') => (/^[A-Za-z0-9_-]{11}$/.test(id) ? id : '');
    const tryParse = (raw = '') => {
      const str = String(raw).trim();
      if (!str) return '';
      try {
        const url = new URL(str);
        const host = url.hostname.replace(/^www\./, '');
        const segs = url.pathname.split('/').filter(Boolean);
        if (host === 'youtu.be') {
          return normalize(segs[0] || '');
        }
        if (host.endsWith('youtube.com')) {
          const v = url.searchParams.get('v');
          if (v) return normalize(v);
          if (segs[0] === 'shorts' || segs[0] === 'live' || segs[0] === 'embed') return normalize(segs[1] || '');
        }
      } catch (_) {
        // fallback regex if not a valid URL string
        let m = str.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
        if (m) return normalize(m[1]);
        m = str.match(/[?&]v=([A-Za-z0-9_-]{11})/);
        if (m) return normalize(m[1]);
      }
      return '';
    };
    for (const n of notes) {
      if (!/youtube\.com|youtu\.be/i.test(n)) continue;
      const id = tryParse(n);
      if (id) return id;
    }
    return '';
  };

  const tabHtml = (comp) => ({
    overview: `
      <h2>${comp.name}</h2>
      <p>${comp.overview}</p>

      <dl class="kv">
        <dt>Tegangan</dt>
        <dd>
          ${Array.isArray(comp.voltage)
            ? (comp.voltage || []).map(v => `<span class="chip">${v}</span>`).join(' ')
            : (comp.voltage ? `<span class="chip">${comp.voltage}</span>` : '-')}
        </dd>

        <dt>Interface</dt>
        <dd>
          ${(comp.interfaces || []).length
            ? (comp.interfaces || []).map(x => `<span class="chip neutral">${x}</span>`).join(' ')
            : '-'}
        </dd>

        <dt>Risiko Umum</dt>
        <dd>
          ${(comp.risk || []).length
            ? `<ul class="list danger">` + (comp.risk || []).map(r => `<li>${r}</li>`).join('') + `</ul>`
            : '<span class="muted">-</span>'}
        </dd>
      </dl>

      ${comp.pinout ? `<p><a class="btn ghost" target="_blank" href="${comp.pinout}">Lihat Pinout</a></p>`:''}
    `,
    wiring: `
      <h3>Wiring & Tutorial</h3>
      ${(()=>{ const id = ytIdFromNotes(comp.wiringNotes||[]); return id
        ? `<a class="yt-wrap yt-open" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer" style="background-image:url('https://img.youtube.com/vi/${id}/hqdefault.jpg'); background-size:cover; background-position:center;">
             <span class="yt-play" aria-hidden="true"></span>
             <span class="sr-only">Buka video di YouTube</span>
           </a>`
        : '<p class="muted">Video tutorial belum tersedia.</p>' })()}
      ${(() => {
        if (comp.id === 'raspberry_pi_4b' || comp.id === 'rasberry_pi_4b') {
          const href = comp.installUrl || comp.pinout || '#';
          return `<div class="actions" style="margin-top:12px"><a class="btn ghost" target="_blank" href="https://www.raspberrypi.com/software/">Instal Raspberry</a></div>`;
        }
        return `<div class=\"actions\" style=\"margin-top:12px\">\n        <a class=\"btn ghost\" target=\"_blank\" href=\"https://www.tinkercad.com/circuits\">Buka Tinkercad</a>\n        <a class=\"btn\" target=\"_blank\" href=\"https://www.arduino.cc/en/software/\">Download Arduino IDE</a>\n      </div>`;
      })()}
    `,
  });

  function projLink(id){
    const p = PROJECTS.find(x=>x.id===id);
    return p ? `<a href="projects.html#${p.id}" class="btn ghost">${p.title}</a>` : id;
  }

  function openModal(comp){
    modal.classList.add('show');
    const tabsCfg = tabHtml(comp);
    let current = 'overview';
    const renderTab = () => {
      tabs.innerHTML = `
        <button data-t="overview" class="tbtn ${current==='overview'?'active':''}">Overview</button>
        <button data-t="wiring" class="tbtn ${current==='wiring'?'active':''}">Wiring</button>
      `;
      tabBody.innerHTML = tabsCfg[current];

      // tombol copy
      tabBody.querySelectorAll('[data-copy]').forEach(b=>{
        b.onclick = () => copy(b.getAttribute('data-copy'));
      });
    };
    // bookmark tidak tersedia di detail; gunakan ikon bintang di grid
    tabs.onclick = (e)=>{
      const t = e.target?.dataset?.t; if (!t) return;
      current = t; renderTab();
    };
    renderTab();
  }

  function renderGrid(){
    const t = fType.value, iface = fIface.value, volt = fVolt.value;
    grid.innerHTML = '';
    const IMG_MAP = {
      uno: 'assets/Arduino_Uno_R3.webp',
      nano: 'assets/arduino_nano.webp',
      esp32: 'assets/esp32_devkit.jpg',
      esp8266_nodemcu: 'assets/esp8266_nodemcu.jpg'
    };
    COMPONENTS.filter(c =>
      (!t || c.type===t) &&
      (!iface || (c.interfaces||[]).includes(iface)) &&
      (!volt || String(c.voltage||'').includes(volt))
    ).forEach(c=>{
      const div = document.createElement('div');
      div.className = 'card hover';
      div.innerHTML = `
        <h3>${c.name}</h3>
        <p class="muted">${c.type} ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ ${c.voltage||'-'}</p>
        <p>${c.overview}</p>
        <div class="actions">
          <button class="btn">Detail</button>
          <button class="btn ghost" data-book="${c.id}">${bookmarks.has(c.id)?'ÃƒÆ’Ã‚Â¢Ãƒâ€¹Ã…â€œÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦':'ÃƒÆ’Ã‚Â¢Ãƒâ€¹Ã…â€œÃƒÂ¢Ã¢â€šÂ¬Ã‚Â '}</button>
        </div>
      `;
      div.querySelector('.btn').onclick = ()=>openModal(c);
      // Perbaikan teks aneh (mojibake) pada paragraf info dan tombol bookmark
      const mutedP = div.querySelector('p.muted');
      if (mutedP) mutedP.textContent = `${c.type} - ${c.voltage || '-'}`;
      const bookBtn = div.querySelector('[data-book]');
      if (bookBtn) bookBtn.textContent = bookmarks.has(c.id) ? 'Tersimpan' : 'Simpan';
      // (removed older single-insert block to avoid duplicate images)

      div.querySelector('[data-book]').onclick = (e)=>{
        const id = e.target.getAttribute('data-book');
        bookmarks.has(id) ? bookmarks.delete(id) : bookmarks.add(id);
        saveLS(BOOK_KEY, [...bookmarks]); renderGrid();
      };
      // Insert thumbnail image under title (tries multiple extensions and alias)
      try {
        const IMG_MAP = { uno:'assets/Arduino_Uno_R3.webp', nano:'assets/arduino_nano.webp', esp32:'assets/esp32_devkit.jpg' };
        const ALIAS_MAP = { bmp280_sensor:'bme280_sensor' };
        const baseId = (ALIAS_MAP[c.id] || c.id);
        const candidates = [];
        if (IMG_MAP[c.id]) candidates.push(IMG_MAP[c.id]);
        ['webp','jpg','png','jpeg'].forEach(ext => candidates.push(`assets/${baseId}.${ext}`));
        const h3 = div.querySelector('h3');
        const img = new Image();
        img.className = 'thumb';
        img.alt = c.name;
        img.loading = 'lazy';
        let idx = 0;
        img.onerror = () => { idx++; if (idx < candidates.length) img.src = candidates[idx]; else img.style.display='none'; };
        img.src = candidates[idx];
        if (h3) h3.insertAdjacentElement('afterend', img);
      } catch(_){ }
      grid.appendChild(div);
    });
  }

  [fType, fIface, fVolt].forEach(el => el && (el.onchange = renderGrid));
  close.onclick = ()=> modal.classList.remove('show');
  modal.onclick = (e)=>{ if (e.target===modal) modal.classList.remove('show'); };
  renderGrid();
  // Buka modal dari hash (klik gambar dari beranda)
  const openFromHash = () => {
    const id = (location.hash||'').replace('#','');
    if (!id) return;
    const c = COMPONENTS.find(x=>x.id===id);
    if (c) openModal(c);
  };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
}

// ===== PROJECTS PAGE =====
if (false && document.body.dataset.page === 'projects') {
  const wrap = document.querySelector('#proj-list');
  const detail = document.querySelector('#proj-detail');
  const fLevel = document.querySelector('#fLevel');
  const BOARD_KEY = 'mp_board_pref';
  let boardPref = localStorage.getItem(BOARD_KEY) || 'UNO';

  function renderList(){
    const lv = fLevel.value;
    wrap.innerHTML = PROJECTS.filter(p=>!lv || p.level===lv).map(p=>{
      const q = encodeURIComponent(p.title + ' tutorial');
      return `
      <div class="card hover">
        <div class="yt-wrap"><iframe loading="lazy" src="https://www.youtube.com/embed?listType=search&list=${q}" allowfullscreen></iframe></div>
        <h3>${p.title}</h3>
        <p class="muted">Level: ${p.level} ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Board: ${p.boards.join(' / ')}</p>
        <p><b>BOM:</b> ${p.bom.join(', ')}</p>
        <div class="actions">
          <a class="btn" href="#${p.id}">Detail</a>
          <a class="btn ghost" target="_blank" href="${p.simulate||'https://www.tinkercad.com/circuits'}">Simulasikan (Tinkercad)</a>
        </div>
      </div>
      `
    }).join('');
  }

  function renderDetail(){
    const id = location.hash.replace('#','');
    const p = PROJECTS.find(x=>x.id===id);
    detail.innerHTML = '';
    if (!p) return;
    const cur = p.boards.includes(boardPref) ? boardPref : p.boards[0];
    detail.innerHTML = `
      <div class="card">
        <h2>${p.title}</h2>
        <p><b>Langkah:</b></p>
        <ol>${p.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
        <div class="switcher">
          <span>Board:</span>
          ${p.boards.map(b=>`<button class="btn ${b===cur?'active':''}" data-b="${b}">${b}</button>`).join('')}
        </div>
        ${p.wiring?.[cur] ? `<p><b>Wiring (${cur}):</b></p><img src="${p.wiring[cur]}" style="max-width:100%;border-radius:10px;border:1px solid #2a3863">` : '<p class="muted">Wiring image belum tersedia.</p>'}
        ${p.code?.[cur] ? `<h4>Kode (${cur})</h4><pre><code>${esc(p.code[cur])}</code></pre><button class="btn" id="copy-code">Copy Kode</button>`:''}
        ${p.test?.length ? `<h4>Uji Cepat</h4><ul>${p.test.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}
      </div>
    `;
    // events
    detail.querySelectorAll('[data-b]').forEach(b=>{
      b.onclick = ()=>{
        boardPref = b.getAttribute('data-b');
        localStorage.setItem(BOARD_KEY, boardPref);
        renderDetail();
      }
    });
    const copyBtn = detail.querySelector('#copy-code');
    if (copyBtn && p.code?.[cur]) copyBtn.onclick = ()=>copy(p.code[cur]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  fLevel.onchange = renderList;
  renderList();
  window.addEventListener('hashchange', renderDetail);
  renderDetail();
}

// ===== PROJECTS PAGE (modal detail) =====
if (document.body.dataset.page === 'projects') {
  const wrap = document.querySelector('#proj-list');
  const fLevel = document.querySelector('#fLevel');
  const modal = document.querySelector('#proj-modal');
  const modalBody = document.querySelector('#proj-modal-body');
  const modalClose = document.querySelector('#proj-modal-close');
  const projectMap = new Map((PROJECTS || []).map(p => [p.id, p]));
  let currentDetail = '';

  const ytIdFromUrl = (raw='') => {
    const str = String(raw).trim();
    if (!str) return '';
    const norm = id => (/^[A-Za-z0-9_-]{11}$/.test(id) ? id : '');
    try {
      const url = new URL(str);
      const host = url.hostname.replace(/^www\./,'');
      const segs = url.pathname.split('/').filter(Boolean);
      if (host === 'youtu.be') return norm(segs[0]||'');
      if (host.endsWith('youtube.com')) {
        const v = url.searchParams.get('v');
        if (v) return norm(v);
        if (['shorts','live','embed'].includes(segs[0])) return norm(segs[1]||'');
      }
    } catch(_) {
      const m = str.match(/[A-Za-z0-9_-]{11}/);
      if (m) return norm(m[0]);
    }
    return '';
  };

  const escapeHtml = (str='') => String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[s]));

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
    currentDetail = '';
    if (wrap) wrap.querySelectorAll('[data-detail]').forEach(btn => btn.classList.remove('active'));
  };

  const openModal = (project) => {
    if (!modal || !modalBody) return;
    const level = project.level ? `<span class="tag chip">${escapeHtml(project.level)}</span>` : '';
    const desc = project.desc ? `<p>${escapeHtml(project.desc)}</p>` : `<p class="muted">Deskripsi proyek belum ditambahkan.</p>`;
    const tools = (Array.isArray(project.tools) && project.tools.length)
      ? `<ul class="detail-tools">${project.tools.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
      : `<p class="muted">Daftar alat belum tersedia.</p>`;
    const codeBlock = project.code
      ? `<pre class="detail-code"><code>${escapeHtml(project.code)}</code></pre><button class="btn ghost detail-copy" type="button">Copy Code</button>`
      : `<p class="muted">Kode belum diisi.</p>`;
    const id = project.youtube ? ytIdFromUrl(project.youtube) : '';
    const videoBtn = project.youtube
      ? `<a class="btn" target="_blank" rel="noopener" href="${project.youtube}">${id ? 'Tonton Video' : 'Lihat Detail'}</a>`
      : '';
    modalBody.innerHTML = `
      <div class="proj-modal-content">
        <div class="proj-head">
          <div>
            <h2>${escapeHtml(project.title)}</h2>
            ${level}
          </div>
          <div class="proj-actions">
            ${videoBtn}
          </div>
        </div>
        ${desc}
        <div class="proj-meta">
          <div>
            <h4>Alat yang digunakan</h4>
            ${tools}
          </div>
          <div>
            <h4>Code</h4>
            ${codeBlock}
          </div>
        </div>
      </div>
    `;
    const copyBtn = modalBody.querySelector('.detail-copy');
    if (copyBtn && project.code) copyBtn.onclick = () => copy(project.code);
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  };

  if (modalClose) {
    modalClose.onclick = closeModal;
    modalClose.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeModal(); }
    });
  }
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal?.classList.contains('show')) closeModal();
  });

  const normLevel = (s='')=>{
    const t = String(s).trim().toLowerCase();
    if (!t) return '';
    if (['beginner','pemula'].includes(t)) return 'beginner';
    if (['intermediate','menengah'].includes(t)) return 'intermediate';
    if (['advanced','lanjut','lanjutan'].includes(t)) return 'advanced';
    return t;
  };

  function renderList(){
    if (!wrap) return;
    const lv = fLevel ? fLevel.value : '';
    const want = normLevel(lv);
    const html = PROJECTS.filter(p=>!want || normLevel(p.level)===want).map(p=>{
      const id = p.youtube ? ytIdFromUrl(p.youtube) : '';
      const href = id ? `https://www.youtube.com/watch?v=${id}` : (p.youtube || '');
      const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
      const media = href && id
        ? `<a class="yt-wrap yt-open" href="${href}" target="_blank" rel="noopener noreferrer" style="background-image:url('${thumb}'); background-size:cover; background-position:center;">
            <span class="yt-play" aria-hidden="true"></span>
            <span class="sr-only">Buka video di YouTube</span>
          </a>`
        : '';
      return `
      <div class="card hover">
        ${media}
        <h3>${p.title}</h3>
        ${p.level ? `<p class="muted">Level: ${p.level}</p>` : ''}
        <div class="actions">
          <button type="button" class="btn ghost detail-btn" data-detail="${p.id}">Detail</button>
        </div>
      </div>`;
    }).join('');
    wrap.innerHTML = html || '<p class="muted">Proyek tidak ditemukan.</p>';
    wrap.querySelectorAll('[data-detail]').forEach(btn => {
      btn.onclick = () => {
        const proj = projectMap.get(btn.dataset.detail);
        wrap.querySelectorAll('[data-detail]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (proj) {
          currentDetail = proj.id;
          openModal(proj);
        }
      };
    });
  }

  if (fLevel) fLevel.onchange = () => {
    closeModal();
    renderList();
  };
  renderList();
}
// ===== LEARN PAGE =====
if (document.body.dataset.page === 'learn') {
  const vids = document.querySelector('#yt-list');
  const faq = document.querySelector('#faq');
  const quizBtn = document.querySelector('#quiz-start');
  const quizArea = document.querySelector('#quiz-area');
  const quizSummary = document.querySelector('#quiz-summary');
  const quizSection = document.querySelector('#quiz');

  const toPlaylistId = (raw='')=>{
    const s = String(raw||'').trim();
    if (!s) return '';
    try {
      const u = new URL(s);
      return u.searchParams.get('list') || '';
    } catch {
      return s; // assume already an ID like PLxxxx
    }
  };

  const YT = (window.LEARN || []).map(x=>({ title: x.title, id: toPlaylistId(x.playlist), thumb: x.thumb || '' }))
    .filter(x=>x.id);

  // Note: YouTube may return Error 153 if the player is
  // embedded without a valid HTTP(S) origin (e.g., opened
  // from file://) or when referrer/origin is blocked.
  // Fix: only embed when served via HTTP(S) and include
  // the explicit origin parameter. Otherwise show a link.
  const isHttp = /^https?:$/.test(location.protocol);
  const originParam = isHttp ? `&origin=${encodeURIComponent(location.origin)}` : '';
  vids.innerHTML = YT.map(v=>{
    const link = `https://www.youtube.com/playlist?list=${v.id}`;
    return `
    <div class="card hover">
      <a class="yt-wrap yt-open" data-list="${v.id}" data-thumb="${v.thumb ? v.thumb.replace(/"/g,'&quot;') : ''}" href="${link}" target="_blank" rel="noopener noreferrer">
        <span class="yt-play" aria-hidden="true"></span>
        <span class="sr-only">Buka playlist di YouTube</span>
      </a>
      <h3>${v.title}</h3>
      <p class="muted">Playlist YouTube</p>
    </div>`;
  }).join('');

  // Ambil thumbnail playlist via oEmbed dan ganti dengan iframe saat diklik
  (async function initPlaylistThumbs(){
    const wraps = vids.querySelectorAll('.yt-wrap[data-list]');
    for (const wrap of wraps) {
      const id = wrap.getAttribute('data-list');
      const preThumb = wrap.getAttribute('data-thumb');
      if (preThumb) {
        wrap.style.backgroundImage = `url('${preThumb}')`;
        wrap.style.backgroundSize = 'cover';
        wrap.style.backgroundPosition = 'center';
      }
      try {
        const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/playlist?list=${id}&format=json`);
        if (res.ok) {
          const j = await res.json();
          if (j.thumbnail_url) {
            const url = String(j.thumbnail_url).replace(/\?.*$/, '');
            wrap.style.backgroundImage = `url('${url}')`;
            wrap.style.backgroundSize = 'cover';
            wrap.style.backgroundPosition = 'center';
          }
        }
      } catch (_) {
        // biarkan background default
      }

      // Default: biarkan klik membuka YouTube di tab baru.
      // Jika ingin embed di halaman, tambahkan attribute data-embed="1" pada .yt-wrap.
      wrap.addEventListener('click', (ev)=>{
        const wantInline = wrap.getAttribute('data-embed') === '1';
        if (!isHttp || !wantInline) return; // buka YouTube (default)
        ev.preventDefault();
        const src = `https://www.youtube.com/embed/videoseries?list=${id}&rel=0&modestbranding=1${originParam}`;
        wrap.innerHTML = `<iframe width="100%" height="100%" src="${src}" title="YouTube playlist" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="eager"></iframe>`;
        wrap.classList.remove('yt-open');
      }, { once: true });
    }
  })();

  if (faq) {
    faq.innerHTML = TROUBLESHOOT.map(t=>`
      <details class="card">
        <summary><b>${t.q}</b></summary>
        <p>${t.a}</p>
      </details>
    `).join('');
  }

  if (quizBtn && quizArea && quizSummary) {
    const QUIZ_ITEMS = [
      {
        id: 1,
        tag: '🧩 Soal Dasar',
        question: 'Komponen mana di MicroPlayground yang dideskripsikan sebagai "Board klasik untuk pemula, stabil, dukungan library melimpah"?',
        answer: 'B',
        explain: 'Arduino Uno R3 disebut secara eksplisit sebagai board klasik untuk pemula dengan dukungan library yang luas.',
        options: [
          { key: 'A', label: 'ESP32 Devkit' },
          { key: 'B', label: 'Arduino Uno R3' },
          { key: 'C', label: 'Arduino Nano V3' },
          { key: 'D', label: 'STM32 Blue Pill' }
        ]
      },
      {
        id: 2,
        tag: '🧩 Soal Dasar',
        question: 'Sensor mana di daftar COMPONENTS yang memiliki deskripsi "Sensor suhu & kelembapan murah, cukup untuk demo dasar"?',
        answer: 'C',
        explain: 'DHT11 digambarkan sebagai sensor suhu dan kelembapan murah yang cocok untuk demo dasar.',
        options: [
          { key: 'A', label: 'BME280' },
          { key: 'B', label: 'DS18B20 Temperature Sensor' },
          { key: 'C', label: 'DHT11 (Temp/Humidity)' },
          { key: 'D', label: 'Soil Moisture Sensor' }
        ]
      },
      {
        id: 3,
        tag: '🧩 Soal Dasar',
        question: 'Playlist mana di bagian LEARN yang paling cocok untuk pengguna yang baru pertama kali belajar board Arduino?',
        answer: 'B',
        explain: 'Playlist "Arduino Beginners" memang disusun khusus untuk pemula yang baru memegang board Arduino.',
        options: [
          { key: 'A', label: 'IoT For Beginners (Playlist)' },
          { key: 'B', label: 'Arduino Beginners (Playlist)' },
          { key: 'C', label: 'ESP32 Introduction (Playlist)' },
          { key: 'D', label: 'Solder & Breadbrond (Playlist)' }
        ]
      },
      {
        id: 4,
        tag: '🧩 Soal Medium',
        question: 'Berdasarkan data PROJECTS, project "Thermo Watch" menggunakan kombinasi apa?',
        answer: 'B',
        explain: 'Project thermo_oled menyebut NodeMCU ESP8266, OLED 0.96" dan sensor DHT11 dalam daftar tools.',
        options: [
          { key: 'A', label: 'Arduino Uno + LCD 16x2 + DS18B20' },
          { key: 'B', label: 'NodeMCU ESP8266 + OLED 0.96" + DHT11' },
          { key: 'C', label: 'ESP32 Devkit + OLED 0.96" + BME280' },
          { key: 'D', label: 'Raspberry Pi 4 + HDMI monitor + DHT11' }
        ]
      },
      {
        id: 5,
        tag: '🧩 Soal Medium',
        question: 'Dalam project "Automatic Light Control", sensor apa yang dipakai untuk mendeteksi kondisi terang/gelap?',
        answer: 'C',
        explain: 'Project Automatic Light Control memakai sensor LDR untuk membaca tingkat cahaya.',
        options: [
          { key: 'A', label: 'PIR Motion Sensor' },
          { key: 'B', label: 'Rain Detection Sensor' },
          { key: 'C', label: 'LDR (Light Dependent Resistor)' },
          { key: 'D', label: 'IR Infrared Obstacle Sensor' }
        ]
      },
      {
        id: 6,
        tag: '🧩 Soal Medium',
        question: 'Kamu ingin menyimpan data pembacaan sensor ke kartu eksternal untuk log. Module mana yang paling tepat digunakan?',
        answer: 'A',
        explain: 'Micro SD Card Module memang didesain sebagai modul penyimpanan dengan antarmuka SPI untuk logging.',
        options: [
          { key: 'A', label: 'Micro SD Card Module' },
          { key: 'B', label: 'RTC DS1307 / DS3231' },
          { key: 'C', label: 'DFPlayer Mini MP3 Module' },
          { key: 'D', label: 'Bluetooth HC-05 / HC-06' }
        ]
      },
      {
        id: 7,
        tag: '🧩 Soal HOTS',
        question: 'Untuk sistem penyiraman otomatis yang aktif saat tanah kering, kombinasi sensor + referensi project mana yang paling sesuai?',
        answer: 'B',
        explain: 'Soil Moisture Sensor bersama project "Smart Irrigation" memantau kelembapan tanah lalu menghidupkan pompa secara otomatis.',
        options: [
          { key: 'A', label: 'Rain Detection Sensor + Rain Alert' },
          { key: 'B', label: 'Soil Moisture Sensor + Smart Irrigation' },
          { key: 'C', label: 'PIR Motion Sensor + Motion Detection' },
          { key: 'D', label: 'IR Obstacle Sensor + Automatic Trash Can' }
        ]
      },
      {
        id: 8,
        tag: '🧩 Soal HOTS',
        question: 'Kamu ingin membuat jam digital yang menampilkan jam, tanggal, tetap akurat saat listrik mati, dan menampilkan suhu juga. Kombinasi mana yang memenuhi semuanya?',
        answer: 'A',
        explain: 'Project "Digital Clock" memakai modul DS3231 (ada backup baterai + sensor suhu) dan LCD I2C untuk menampilkan jam dan tanggal.',
        options: [
          { key: 'A', label: 'Project "Digital Clock" dengan DS3231 RTC + LCD I2C' },
          { key: 'B', label: 'Project "Traffic Lights" dengan Arduino Uno' },
          { key: 'C', label: 'Project "Clock Digital" dengan efek LED acak' },
          { key: 'D', label: 'Project "Thermo Watch" dengan DHT11 + OLED tanpa RTC' }
        ]
      },
      {
        id: 9,
        tag: '🧩 Soal HOTS',
        question: 'Kamu diminta membuat sistem alarm kebocoran gas di dapur yang membunyikan alarm bila terdeteksi asap/gas. Pasangan komponen + project mana yang paling relevan?',
        answer: 'B',
        explain: 'MQ-2 Gas Sensor dipasangkan dengan referensi project "Smoke Alert" yang memang menghidupkan buzzer saat asap terdeteksi.',
        options: [
          { key: 'A', label: 'BME280 + Thermo Watch' },
          { key: 'B', label: 'MQ-2 Gas Sensor + Smoke Alert' },
          { key: 'C', label: 'Rain Detection Sensor + Rain Alert' },
          { key: 'D', label: 'PIR Motion Sensor + Automatic Fan' }
        ]
      },
      {
        id: 10,
        tag: '🧩 Soal HOTS',
        question: 'Untuk sistem pelacakan posisi jarak jauh ala project "GPS Tracking With Google Maps", modul mana yang menggambarkan arsitekturnya?',
        answer: 'B',
        explain: 'Project GPS tersebut memakai kombinasi GPS Module NEO-6M dan LoRa SX1278 untuk mengirim koordinat ke penerima.',
        options: [
          { key: 'A', label: 'Bluetooth HC-05 + RFID RC522' },
          { key: 'B', label: 'GPS Module NEO-6M + LoRa SX1278 433MHz Module' },
          { key: 'C', label: 'WiFi ESP-01 + SD Card Module' },
          { key: 'D', label: 'SIM800L GSM Module + OLED 0.96"' }
        ]
      }
    ];

    let quizIndex = 0;
    let quizScore = 0;

    const scrollToQuiz = ()=>{
      if (!quizSection) return;
      try {
        quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (_) {
        // ignore
      }
    };

    const renderQuestion = ()=>{
      const q = QUIZ_ITEMS[quizIndex];
      if (!q) return;
      const options = q.options.map(opt=>`
        <button type="button" class="quiz-option" data-key="${opt.key}">
          <span class="quiz-key">${opt.key}.</span>
          <span>${opt.label}</span>
        </button>
      `).join('');
      const nextLabel = quizIndex === QUIZ_ITEMS.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya';
      quizArea.innerHTML = `
        <div class="quiz-card">
          <div class="quiz-head">
            <span class="quiz-tag">${q.tag}</span>
            <span class="quiz-step">Soal ${quizIndex + 1} / ${QUIZ_ITEMS.length}</span>
          </div>
          <p class="quiz-q">${q.question}</p>
          <div class="quiz-options">${options}</div>
          <div class="quiz-feedback" role="status" aria-live="polite"></div>
          <div class="quiz-footer">
            <button type="button" class="btn primary quiz-next" disabled>${nextLabel}</button>
          </div>
        </div>`;

      const optionButtons = quizArea.querySelectorAll('.quiz-option');
      const feedback = quizArea.querySelector('.quiz-feedback');
      const nextBtn = quizArea.querySelector('.quiz-next');
      let answered = false;

      optionButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if (answered) return;
          answered = true;
          const choice = btn.dataset.key;
          const correct = choice === q.answer;
          if (correct) {
            quizScore += 1;
            btn.classList.add('correct');
            feedback.classList.remove('error');
            feedback.classList.add('success');
            feedback.innerHTML = `<span class="quiz-icon success" aria-hidden="true">✓</span><div><strong>Benar!</strong><br>${q.explain}</div>`;
          } else {
            btn.classList.add('wrong');
            const correctBtn = quizArea.querySelector(`.quiz-option[data-key="${q.answer}"]`);
            if (correctBtn) correctBtn.classList.add('correct');
            feedback.classList.remove('success');
            feedback.classList.add('error');
            feedback.innerHTML = `<span class="quiz-icon error" aria-hidden="true">✗</span><div><strong>Tetot! Jawaban belum tepat.</strong><br>${q.explain}</div>`;
          }
          feedback.classList.add('show');
          optionButtons.forEach(o=>o.disabled = true);
          nextBtn.disabled = false;
        });
      });

      nextBtn.addEventListener('click', ()=>{
        quizIndex += 1;
        if (quizIndex >= QUIZ_ITEMS.length) {
          finishQuiz();
        } else {
          renderQuestion();
        }
      });
    };

    const finishQuiz = ()=>{
      quizArea.hidden = true;
      quizArea.innerHTML = '';
      quizSummary.hidden = false;
      quizBtn.hidden = false;
      quizBtn.textContent = 'Mulai Lagi';
      const percent = Math.round((quizScore / QUIZ_ITEMS.length) * 100);
      let message = 'Keren! Kamu siap mengeksplor proyek yang lebih rumit.';
      if (percent < 80 && percent >= 50) message = 'Lumayan! Coba ulangi lagi supaya makin hafal detailnya.';
      if (percent < 50) message = 'Belum pas, tapi tenang, ulangi kuis untuk menguatkan ingatanmu.';
      quizSummary.innerHTML = `
        <div class="quiz-card quiz-result">
          <p class="muted">Hasil akhir</p>
          <div class="quiz-score">${quizScore}</div>
          <p><small>dari ${QUIZ_ITEMS.length} soal (${percent}%).</small></p>
          <p>${message}</p>
          <button type="button" class="btn primary" data-restart="1">Coba Lagi</button>
        </div>`;
      const retry = quizSummary.querySelector('[data-restart]');
      if (retry) retry.addEventListener('click', ()=> startQuiz());
      scrollToQuiz();
    };

    const startQuiz = ()=>{
      quizIndex = 0;
      quizScore = 0;
      quizArea.hidden = false;
      quizSummary.hidden = true;
      quizBtn.hidden = true;
      renderQuestion();
      scrollToQuiz();
    };

    quizBtn.addEventListener('click', startQuiz);
  }
}

// ===== HERO: parallax ringan untuk robot =====
(function(){
  const wrap = document.querySelector('.robot-wrap');
  const svg  = document.querySelector('#iot-robot');
  const glow = document.querySelector('.robot-wrap .glow');
  if (!wrap || !svg) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  function move(x, y){
    // x,y adalah rasio -0.5..0.5
    const rx = y * 6;     // rotasi X kecil
    const ry = -x * 6;    // rotasi Y kecil
    const tz = 10;        // pop-out halus
    svg.style.transform = `translateZ(${tz}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    if (glow) glow.style.transform = `translate(${x*12}px, ${y*12}px)`;
  }

  wrap.addEventListener('pointermove', (e)=>{
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    move(x, y);
  });

  wrap.addEventListener('mouseleave', ()=> {
    svg.style.transform = '';
    if (glow) glow.style.transform = '';
  });

  // Gyro mobile (best-effort)
  window.addEventListener('deviceorientation', (e)=>{
    if (!e.gamma && !e.beta) return;
    const x = Math.max(-1, Math.min(1, (e.gamma||0) / 45)) * 0.5; // -0.5..0.5
    const y = Math.max(-1, Math.min(1, (e.beta||0) / 45))  * 0.5;
    move(x, y);
  }, { passive:true });
})();

// ===== Chat FAB → Slide-in Panel (embed ai-reviewer.html) =====
(function initChatPanel(){
  const fab = document.querySelector('.chat-fab');
  if (!fab) return;

  // Build panel once and reuse
  const backdrop = document.createElement('div');
  backdrop.className = 'chat-backdrop';
  const panel = document.createElement('div');
  panel.className = 'chat-panel';
  panel.innerHTML = `
    <div class="cp-inner">
      <div class="cp-head">
        <div class="cp-title">AI Asisten IoT</div>
        <button class="cp-close" aria-label="Tutup">×</button>
      </div>
      <div class="cp-body">
        <iframe src="ai-reviewer.html?embed=1" title="AI Asisten IoT" loading="lazy"></iframe>
      </div>
    </div>`;
  document.body.appendChild(backdrop);
  document.body.appendChild(panel);

  const closeBtn = panel.querySelector('.cp-close');
  const open = (ev)=>{ if (ev) ev.preventDefault(); panel.classList.add('show'); backdrop.classList.add('show'); };
  const close = ()=> { panel.classList.remove('show'); backdrop.classList.remove('show'); };

  fab.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') close(); }, { passive:true });
})();
