// ============================================================
//  engine.js — Algoritma Information Retrieval
//  TF-IDF + Cosine Similarity
//  Mata Kuliah Information Retrieval — UNUGHA Cilacap
// ============================================================

// ── Stopwords Bahasa Indonesia ──────────────────────────────
const STOPWORDS = new Set([
  'yang','dan','di','ke','dari','dengan','untuk','ini','itu',
  'pada','dalam','adalah','oleh','juga','karena','bisa','akan',
  'telah','sudah','tidak','saat','setelah','agar','serta','para',
  'lebih','secara','sebagai','menurut','antara','namun','bagi',
  'bahwa','persen','tersebut','mereka','kita','ada','per','atas',
  'kini','masih','hanya','selain','sehingga','hingga','ketika',
  'yaitu','menjadi','sangat','baik','lain','sebuah','hal','dapat',
  'atau','semua','sama','pun','tapi','tetapi','sedang','baru',
  'lagi','oleh','saya','kami','kamu','anda','dia','ia','nya',
  'lah','si','sang','juta','miliar','ribu','rp','tahun','bulan',
  'hari','dua','tiga','empat','lima','enam','tujuh','delapan',
  'sembilan','sepuluh','pertama','kedua','ketiga','besar','kecil',
]);

// ── State Global ────────────────────────────────────────────
let corpus   = [];   // dokumen yang sudah diproses
let idfTable = {};   // IDF tiap term
let tfidfVecs = [];  // vektor TF-IDF tiap dokumen
let isReady  = false;

// ── 1. Tokenizer ─────────────────────────────────────────────
/**
 * Ubah teks menjadi array token bersih
 * - lowercase
 * - hapus tanda baca & angka
 * - buang stopword
 * - minimal 3 karakter
 */
function tokenize(teks) {
  return teks
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')   // hapus non-huruf
    .split(/\s+/)
    .filter(w => w.length >= 3 && !STOPWORDS.has(w));
}

// ── 2. Hitung TF (Term Frequency) ────────────────────────────
/**
 * TF(t, d) = count(t di d) / max_count(semua term di d)
 * Normalisasi agar nilai antara 0-1
 */
function hitungTF(tokens) {
  const freq = {};
  tokens.forEach(t => { freq[t] = (freq[t] || 0) + 1; });
  const maxF = Math.max(...Object.values(freq), 1);
  const tf = {};
  Object.entries(freq).forEach(([t, c]) => {
    tf[t] = c / maxF;
  });
  return tf;
}

// ── 3. Hitung IDF (Inverse Document Frequency) ───────────────
/**
 * IDF(t) = log((N+1) / (df(t)+1)) + 1   (smooth IDF)
 * N    = total dokumen
 * df   = jumlah dokumen yang mengandung term t
 */
function hitungIDF(semuaTF, N) {
  const df = {};
  semuaTF.forEach(tf => {
    Object.keys(tf).forEach(t => {
      df[t] = (df[t] || 0) + 1;
    });
  });
  const idf = {};
  Object.entries(df).forEach(([t, d]) => {
    idf[t] = Math.log((N + 1) / (d + 1)) + 1;
  });
  return idf;
}

// ── 4. Hitung TF-IDF Vektor ──────────────────────────────────
/**
 * tfidf(t, d) = TF(t,d) × IDF(t)
 */
function hitungTFIDF(tf, idf) {
  const vec = {};
  Object.entries(tf).forEach(([t, tfVal]) => {
    vec[t] = tfVal * (idf[t] || 0);
  });
  return vec;
}

// ── 5. Cosine Similarity ─────────────────────────────────────
/**
 * sim(Q, D) = (Q · D) / (||Q|| × ||D||)
 * Nilai antara 0 (tidak relevan) dan 1 (sangat relevan)
 */
function cosineSimilarity(vecQ, vecD) {
  let dotProduct = 0;
  let normQ = 0;
  let normD = 0;

  // Dot product: hanya hitung term yang ada di query (efisien)
  Object.entries(vecQ).forEach(([t, qVal]) => {
    dotProduct += qVal * (vecD[t] || 0);
    normQ += qVal * qVal;
  });

  // Norm dokumen
  Object.values(vecD).forEach(v => { normD += v * v; });

  if (!normQ || !normD) return 0;
  return dotProduct / (Math.sqrt(normQ) * Math.sqrt(normD));
}

// ── 6. Build Index ───────────────────────────────────────────
/**
 * Proses seluruh corpus sekali di awal (indexing phase)
 * Dipanggil 1x saat halaman dimuat
 */
function buildIndex(data) {
  const N = data.length;
  const semuaTF = [];

  // Hitung TF tiap dokumen
  // Judul diberi bobot 2x dengan mengulang token judul
  data.forEach(doc => {
    const tokenJudul = tokenize(doc.title);
    const tokenIsi   = tokenize(doc.isi);
    const tokens = [...tokenJudul, ...tokenJudul, ...tokenIsi]; // judul 2x
    const tf = hitungTF(tokens);
    semuaTF.push(tf);
    corpus.push({ ...doc, tokens });
  });

  // Hitung IDF global
  idfTable = hitungIDF(semuaTF, N);

  // Buat vektor TF-IDF tiap dokumen
  semuaTF.forEach(tf => {
    tfidfVecs.push(hitungTFIDF(tf, idfTable));
  });

  isReady = true;
  console.log(`[IR Engine] Index selesai: ${N} dokumen, ${Object.keys(idfTable).length} kata unik`);
  return {
    jumlahDokumen: N,
    jumlahKata: Object.keys(idfTable).length,
    jumlahKategori: [...new Set(data.map(d => d.kategori))].length,
  };
}

// ── 7. Search / Retrieval ────────────────────────────────────
/**
 * Fungsi utama pencarian
 * @param {string} query    - kata kunci dari pengguna
 * @param {string} filter   - filter kategori ('all' atau nama kategori)
 * @returns {Array}         - daftar dokumen terurut by relevansi
 */
function cariBerita(query, filter = 'all') {
  if (!isReady) return [];

  // Buat vektor TF-IDF untuk query
  const qTokens = tokenize(query);
  if (!qTokens.length) return [];

  const qTF  = hitungTF(qTokens);
  const qVec = hitungTFIDF(qTF, idfTable);

  // Hitung cosine similarity tiap dokumen
  const hasil = corpus
    .map((doc, i) => {
      // Filter kategori
      if (filter !== 'all' && doc.kategori !== filter) return null;

      const skor = cosineSimilarity(qVec, tfidfVecs[i]);
      return { ...doc, skor };
    })
    .filter(r => r !== null && r.skor > 0);

  // Urutkan: skor tertinggi dulu
  hasil.sort((a, b) => b.skor - a.skor);
  return hasil;
}

// Ekspor ke global scope (untuk dipakai main.js / index.html)
window.IREngine = { buildIndex, cariBerita, tokenize };
