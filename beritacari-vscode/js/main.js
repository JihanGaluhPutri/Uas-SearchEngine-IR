// ── State ────────────────────────────────────────────────────
let activeFilter = 'all';
let lastQuery    = '';

const CAT_COLOR = {
  Ekonomi    : '#1a73e8',
  Teknologi  : '#7b1fa2',
  Politik    : '#c62828',
  Kesehatan  : '#2e7d32',
  Olahraga   : '#e65100',
  Pendidikan : '#00838f',
  Lingkungan : '#558b2f',
};

// ── DOM Refs ─────────────────────────────────────────────────
const $  = id => document.getElementById(id);
const inputEl    = () => $('queryInput');
const resultsEl  = () => $('resultsBox');
const statsEl    = () => $('statsLine');

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Build index dari dataset
  const info = IREngine.buildIndex(BERITA);

  // Tampilkan statistik index
  $('statDocs').textContent  = info.jumlahDokumen;
  $('statVocab').textContent = info.jumlahKata;
  $('statCat').textContent   = info.jumlahKategori;

  // Enter key untuk search
  inputEl().addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
});

// ── Fungsi Pencarian ──────────────────────────────────────────
function doSearch() {
  const query = inputEl().value.trim();
  if (!query) return;

  lastQuery = query;
  const t0  = performance.now();
  const res = IREngine.cariBerita(query, activeFilter);
  const ms  = Math.round(performance.now() - t0);

  renderHasil(res, query, ms);
}

// Pencarian cepat dari tombol saran
function quickSearch(q) {
  inputEl().value = q;
  doSearch();
}

// ── Filter Kategori ───────────────────────────────────────────
function setFilter(kat, btn) {
  activeFilter = kat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (lastQuery) doSearch();
}

// ── Navigasi Halaman ──────────────────────────────────────────
function showPage(p) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  document.getElementById('nav-' + p).classList.add('active');
  window.scrollTo(0, 0);
}

// ── Render Hasil ──────────────────────────────────────────────
function renderHasil(hasil, query, ms) {
  const rb = resultsEl();
  const sl = statsEl();

  if (!hasil.length) {
    sl.style.display = 'none';
    rb.innerHTML = `
      <div class="empty-state">
        <div class="icon">😕</div>
        <p>Tidak ada hasil untuk "<strong>${escHtml(query)}</strong>"</p>
        <p style="font-size:13px;margin-top:8px;">Coba kata kunci lain atau hapus filter kategori.</p>
      </div>`;
    return;
  }

  sl.style.display = 'block';
  sl.innerHTML = `Ditemukan <b>${hasil.length} berita</b> untuk "<b>${escHtml(query)}</b>"
    &nbsp;·&nbsp; ${ms}ms
    &nbsp;·&nbsp; TF-IDF + Cosine Similarity`;

  const topSkor = hasil[0].skor;

  rb.innerHTML = hasil.map((r, i) => {
    const pct   = Math.round((r.skor / topSkor) * 100);
    const color = CAT_COLOR[r.kategori] || '#888';
    return `
      <a class="result-card" href="${r.url}" target="_blank" rel="noopener noreferrer">
        <div class="card-meta">
          <span class="rank-badge">${i + 1}</span>
          <span class="cat-dot" style="background:${color}">${r.kategori[0]}</span>
          <span class="card-source">
            <strong>${escHtml(r.sumber)}</strong>
            &nbsp;·&nbsp; ${r.kategori}
            &nbsp;·&nbsp; ${r.tanggal}
          </span>
        </div>
        <div class="card-title">${highlight(r.title, query)}</div>
        <div class="card-snippet">${highlight(potongIsi(r.isi, 180), query)}</div>
        <div class="card-footer">
          <span class="rank-pos">#${i + 1} dari ${hasil.length}</span>
          <div class="score-wrap">
            <span>Relevansi</span>
            <div class="score-track">
              <div class="score-fill" style="width:${pct}%"></div>
            </div>
            <span>${pct}%</span>
          </div>
          <span class="skor-teks">Skor: ${r.skor.toFixed(4)}</span>
        </div>
      </a>`;
  }).join('');
}

// ── Helper Functions ──────────────────────────────────────────

// Highlight kata yang cocok dengan query
function highlight(teks, query) {
  const words = IREngine.tokenize(query);
  if (!words.length) return escHtml(teks);
  const re = new RegExp(
    '(' + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')',
    'gi'
  );
  return escHtml(teks).replace(re, '<mark>$1</mark>');
}

// Potong isi artikel agar tidak terlalu panjang di snippet
function potongIsi(teks, maks) {
  if (teks.length <= maks) return teks;
  return teks.slice(0, maks).replace(/\s\S*$/, '') + '...';
}

// Escape HTML agar aman dari XSS
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
