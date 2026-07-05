// ============================================================
//  DATA BERITA — 50 artikel berita Indonesia
//  Mata Kuliah Information Retrieval
//  Jihan Galuh Putri — NIM 23EO10034 — Informatika UNUGHA
// ============================================================

const BERITA = [

  // ── EKONOMI (10 artikel) ──────────────────────────────────
  {
    id: 1,
    title: "BI Pertahankan Suku Bunga Acuan 6,25 Persen demi Stabilkan Rupiah",
    isi: "Bank Indonesia memutuskan mempertahankan suku bunga acuan BI Rate di level 6,25 persen dalam Rapat Dewan Gubernur bulan ini. Keputusan ini diambil untuk menjaga stabilitas nilai tukar rupiah yang belakangan mengalami tekanan akibat penguatan dolar AS. Gubernur BI menyatakan kebijakan ini juga bertujuan mengendalikan inflasi agar tetap berada dalam target 2,5 plus minus 1 persen.",
    kategori: "Ekonomi",
    sumber: "Kompas.com",
    tanggal: "23 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 2,
    title: "IHSG Ditutup Menguat 1,2 Persen Didorong Saham Perbankan",
    isi: "Indeks Harga Saham Gabungan (IHSG) ditutup menguat 1,2 persen ke level 7.420 pada perdagangan hari ini. Penguatan dipimpin oleh saham sektor perbankan besar seperti BRI, BCA, dan Mandiri. Analis menilai sentimen positif datang dari data inflasi yang lebih rendah dari ekspektasi dan sinyal pelonggaran kebijakan moneter global.",
    kategori: "Ekonomi",
    sumber: "Bisnis.com",
    tanggal: "22 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 3,
    title: "Investasi Asing di Sektor Digital Indonesia Capai Rp120 Triliun Semester I 2025",
    isi: "Badan Koordinasi Penanaman Modal (BKPM) mencatat investasi asing langsung di sektor digital Indonesia mencapai Rp120 triliun pada semester pertama 2025, naik 34 persen dibandingkan periode yang sama tahun lalu. Lonjakan ini didorong masuknya investasi dari perusahaan teknologi Amerika Serikat dan Korea Selatan yang membangun pusat data di Batam dan Karawang.",
    kategori: "Ekonomi",
    sumber: "Kontan.co.id",
    tanggal: "21 Jun 2025",
    url: "https://kontan.co.id"
  },
  {
    id: 4,
    title: "Kartu Prakerja Gelombang 70 Dibuka, Insentif Naik Jadi Rp4,2 Juta",
    isi: "Pemerintah melalui Kementerian Ketenagakerjaan resmi membuka pendaftaran Kartu Prakerja gelombang ke-70 dengan total insentif yang dinaikkan menjadi Rp4,2 juta per peserta. Program ini menyasar 200 ribu penerima manfaat dari seluruh Indonesia dengan prioritas pada daerah dengan tingkat pengangguran tinggi.",
    kategori: "Ekonomi",
    sumber: "Detik.com",
    tanggal: "20 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 5,
    title: "Ekspor Kelapa Sawit Indonesia Naik 18 Persen pada Kuartal Pertama 2025",
    isi: "Badan Pusat Statistik melaporkan ekspor kelapa sawit dan turunannya naik 18 persen pada kuartal pertama 2025 dibandingkan kuartal yang sama tahun sebelumnya. Kenaikan didorong permintaan tinggi dari India dan China serta membaiknya harga minyak sawit mentah atau CPO di pasar global.",
    kategori: "Ekonomi",
    sumber: "Reuters Indonesia",
    tanggal: "19 Jun 2025",
    url: "https://reuters.com"
  },
  {
    id: 6,
    title: "Pemerintah Turunkan Harga BBM Pertalite Mulai Juli 2025",
    isi: "Pemerintah mengumumkan penurunan harga Bahan Bakar Minyak jenis Pertalite sebesar Rp200 per liter mulai 1 Juli 2025. Keputusan ini didasari turunnya harga minyak mentah dunia dan penguatan rupiah terhadap dolar AS. Pertamina memastikan pasokan BBM bersubsidi mencukupi di seluruh wilayah Indonesia.",
    kategori: "Ekonomi",
    sumber: "Kompas.com",
    tanggal: "18 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 7,
    title: "OJK Catat Kredit Macet Perbankan Turun ke Level Terendah dalam 5 Tahun",
    isi: "Otoritas Jasa Keuangan (OJK) mencatat rasio kredit macet atau NPL perbankan nasional turun ke 2,1 persen, level terendah dalam lima tahun terakhir. Perbaikan kualitas kredit ini didorong pemulihan ekonomi pascapandemi, peningkatan kemampuan bayar debitur, dan ketatnya seleksi kredit baru oleh bank.",
    kategori: "Ekonomi",
    sumber: "Bisnis.com",
    tanggal: "17 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 8,
    title: "Rupiah Menguat ke Rp15.800 per Dolar AS Usai Data Inflasi AS Melandai",
    isi: "Nilai tukar rupiah menguat ke posisi Rp15.800 per dolar AS pada perdagangan hari ini, terapresiasi 0,8 persen dari posisi kemarin. Penguatan rupiah dipicu oleh data inflasi Amerika Serikat yang lebih rendah dari ekspektasi pasar, sehingga memunculkan spekulasi bahwa The Fed akan segera menurunkan suku bunga.",
    kategori: "Ekonomi",
    sumber: "Kontan.co.id",
    tanggal: "16 Jun 2025",
    url: "https://kontan.co.id"
  },
  {
    id: 9,
    title: "Startup Fintech GoPay Luncurkan Fitur Tabungan Emas Digital",
    isi: "GoPay resmi meluncurkan fitur tabungan emas digital yang memungkinkan pengguna membeli emas mulai dari Rp5.000. Fitur ini hadir dalam aplikasi Gojek dan mengintegrasikan layanan Pegadaian sebagai mitra penyimpanan fisik emas. Dalam 24 jam pertama, lebih dari 500 ribu pengguna telah membuka rekening emas digital.",
    kategori: "Ekonomi",
    sumber: "Techinasia.com",
    tanggal: "15 Jun 2025",
    url: "https://techinasia.com"
  },
  {
    id: 10,
    title: "Indonesia Resmi Jadi Anggota Penuh OECD, Buka Peluang Investasi Baru",
    isi: "Indonesia secara resmi diterima sebagai anggota penuh Organisasi untuk Kerja Sama Ekonomi dan Pembangunan atau OECD setelah menyelesaikan seluruh proses aksesi. Keanggotaan ini diperkirakan meningkatkan kepercayaan investor asing dan membuka akses ke pasar serta teknologi dari negara-negara anggota OECD.",
    kategori: "Ekonomi",
    sumber: "Kompas.com",
    tanggal: "14 Jun 2025",
    url: "https://kompas.com"
  },

  // ── TEKNOLOGI (10 artikel) ────────────────────────────────
  {
    id: 11,
    title: "Apple Umumkan iPhone 17 dengan Chip M4 dan Fitur AI Bahasa Indonesia",
    isi: "Apple resmi mengumumkan seri iPhone 17 yang hadir dengan chip M4 terbaru dan kamera periskop 5x untuk semua model. Fitur Apple Intelligence kini tersedia dalam bahasa Indonesia, memungkinkan pengguna berinteraksi dengan asisten AI dalam bahasa lokal. Perangkat ini dijadwalkan masuk pasar Indonesia mulai September 2025.",
    kategori: "Teknologi",
    sumber: "Kompas.com",
    tanggal: "23 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 12,
    title: "Kominfo Blokir 2.500 Situs Judi Online dalam Operasi Bersih Nusantara",
    isi: "Kementerian Komunikasi dan Informatika memblokir 2.500 situs judi online dalam operasi Bersih Nusantara 2025 bersama Bareskrim Polri. Operasi ini juga berhasil menangkap 47 tersangka operator judi online yang beroperasi dari dalam dan luar negeri. Masyarakat diminta segera melaporkan situs judi online yang masih aktif melalui portal aduankonten.id.",
    kategori: "Teknologi",
    sumber: "Detik.com",
    tanggal: "22 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 13,
    title: "Startup AI Indonesia SahabatAI Raih Pendanaan Seri A 15 Juta Dolar",
    isi: "SahabatAI, startup kecerdasan buatan asal Indonesia, berhasil meraih pendanaan Seri A senilai 15 juta dolar AS dari konsorsium investor Asia Tenggara. Model bahasa besar yang dikembangkan SahabatAI diklaim unggul dalam pemahaman konteks budaya dan bahasa daerah Indonesia dibandingkan model global. Dana akan digunakan untuk ekspansi ke Vietnam dan Thailand.",
    kategori: "Teknologi",
    sumber: "Techinasia.com",
    tanggal: "21 Jun 2025",
    url: "https://techinasia.com"
  },
  {
    id: 14,
    title: "Pemerintah Siapkan Regulasi AI Nasional untuk Lindungi Data Pribadi Warga",
    isi: "Kementerian Komunikasi dan Informatika tengah menyusun regulasi kecerdasan buatan nasional yang mencakup perlindungan data pribadi, transparansi algoritma, dan akuntabilitas sistem AI. Regulasi ini dijadwalkan rampung pada akhir 2025 dan akan menjadi dasar hukum penggunaan AI di sektor pemerintahan, kesehatan, dan keuangan.",
    kategori: "Teknologi",
    sumber: "Bisnis.com",
    tanggal: "20 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 15,
    title: "Google Bangun Pusat Data Terbesar di Indonesia Senilai 2 Miliar Dolar",
    isi: "Google mengumumkan pembangunan pusat data terbesar di Indonesia yang berlokasi di Karawang, Jawa Barat, dengan nilai investasi mencapai 2 miliar dolar AS. Pusat data ini akan beroperasi penuh pada 2027 dan menggunakan 100 persen energi terbarukan dari panel surya dan angin. Pembangunan ini menciptakan ribuan lapangan kerja langsung dan tidak langsung.",
    kategori: "Teknologi",
    sumber: "Kompas.com",
    tanggal: "19 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 16,
    title: "Telkom Luncurkan Layanan Internet Satelit LEO untuk Daerah Terpencil",
    isi: "PT Telkom Indonesia resmi meluncurkan layanan internet berbasis satelit orbit rendah atau LEO untuk menjangkau daerah-daerah terpencil yang belum terlayani jaringan fiber optik. Layanan ini mampu memberikan kecepatan internet hingga 150 Mbps dengan latensi rendah. Tahap pertama menyasar 500 titik di Papua, Kalimantan Utara, dan kepulauan terluar.",
    kategori: "Teknologi",
    sumber: "Detik.com",
    tanggal: "18 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 17,
    title: "Hacker Curi Data 10 Juta Pengguna Platform E-Commerce Lokal",
    isi: "Sebuah platform e-commerce lokal Indonesia mengalami kebocoran data yang mempengaruhi 10 juta akun pengguna. Data yang bocor meliputi nama, alamat email, nomor telepon, dan riwayat pembelian. Badan Siber dan Sandi Negara (BSSN) telah menurunkan tim untuk menginvestigasi insiden ini dan membantu perusahaan memperkuat sistem keamanannya.",
    kategori: "Teknologi",
    sumber: "Bisnis.com",
    tanggal: "17 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 18,
    title: "Samsung Galaxy S26 Resmi Masuk Indonesia dengan Fitur AI Terjemahan Real-Time",
    isi: "Samsung resmi memasarkan Galaxy S26 di Indonesia dengan harga mulai Rp14 juta. Fitur unggulan perangkat ini adalah AI terjemahan real-time yang mendukung 30 bahasa termasuk Bahasa Indonesia dan beberapa bahasa daerah. Preorder dibuka mulai besok dengan bonus aksesoris senilai Rp1,5 juta.",
    kategori: "Teknologi",
    sumber: "Techinasia.com",
    tanggal: "16 Jun 2025",
    url: "https://techinasia.com"
  },
  {
    id: 19,
    title: "Universitas Indonesia Kembangkan Robot Bedah Berbasis AI Pertama di Asia Tenggara",
    isi: "Tim peneliti Universitas Indonesia berhasil mengembangkan prototipe robot bedah berbasis kecerdasan buatan yang diklaim sebagai yang pertama di Asia Tenggara. Robot ini mampu melakukan prosedur laparoskopi dengan presisi lebih tinggi dan risiko kesalahan lebih rendah dibandingkan tangan manusia. Uji klinis pada manusia dijadwalkan mulai akhir tahun 2025.",
    kategori: "Teknologi",
    sumber: "Kompas.com",
    tanggal: "15 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 20,
    title: "5G di Indonesia Kini Menjangkau 50 Kota, Kecepatan Rata-rata 850 Mbps",
    isi: "Jaringan 5G Indonesia kini telah menjangkau 50 kota besar dengan kecepatan rata-rata 850 Mbps berdasarkan laporan Opensignal terbaru. Telkomsel memimpin dengan cakupan terluas, diikuti XL Axiata dan Indosat Ooredoo Hutchison. Pemerintah menargetkan 5G tersedia di seluruh ibu kota provinsi sebelum akhir 2026.",
    kategori: "Teknologi",
    sumber: "Detik.com",
    tanggal: "14 Jun 2025",
    url: "https://detik.com"
  },

  // ── POLITIK (8 artikel) ───────────────────────────────────
  {
    id: 21,
    title: "DPR Sahkan RUU Pemilu dengan Ambang Batas Parlemen Tetap 4 Persen",
    isi: "DPR RI resmi mengesahkan Revisi Undang-Undang Pemilu dalam sidang paripurna yang berlangsung hingga dini hari. Ambang batas parlemen dipertahankan di angka 4 persen setelah perdebatan panjang antar fraksi. Partai oposisi menyatakan akan mengajukan judicial review ke Mahkamah Konstitusi terkait beberapa pasal yang dianggap bermasalah.",
    kategori: "Politik",
    sumber: "Kompas.com",
    tanggal: "23 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 22,
    title: "Presiden Prabowo Tandatangani Perpres Pembentukan Badan Otorita IKN Baru",
    isi: "Presiden Prabowo Subianto menandatangani Peraturan Presiden tentang pembentukan struktur baru Badan Otorita Ibu Kota Nusantara. Kepala otorita baru yang ditunjuk adalah mantan Gubernur Kalimantan Timur yang akan dilantik pekan depan. Struktur baru ini diharapkan mempercepat pembangunan IKN yang sempat melambat akibat kendala pendanaan.",
    kategori: "Politik",
    sumber: "Detik.com",
    tanggal: "22 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 23,
    title: "KPU Tetapkan Jadwal Pilkada Serentak 2025 di 37 Provinsi",
    isi: "Komisi Pemilihan Umum menetapkan jadwal resmi Pilkada Serentak 2025 yang akan digelar di 37 provinsi dan lebih dari 500 kabupaten atau kota. Tahapan pencalonan dibuka mulai Agustus, kampanye pada Oktober hingga November, dan pemungutan suara pada 27 November 2025. KPU meminta partai politik segera menyiapkan bakal calon kepala daerah.",
    kategori: "Politik",
    sumber: "Kompas.com",
    tanggal: "21 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 24,
    title: "KPK Tetapkan Mantan Menteri sebagai Tersangka Kasus Korupsi Proyek Jalan",
    isi: "Komisi Pemberantasan Korupsi menetapkan mantan menteri pekerjaan umum sebagai tersangka dalam kasus dugaan korupsi proyek pembangunan jalan di tiga provinsi dengan kerugian negara mencapai Rp2,7 triliun. Tersangka diduga menerima suap dari kontraktor yang memenangkan tender secara melawan hukum.",
    kategori: "Politik",
    sumber: "Detik.com",
    tanggal: "20 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 25,
    title: "Indonesia dan Australia Perkuat Kerja Sama Pertahanan dan Keamanan Siber",
    isi: "Menteri Pertahanan Indonesia dan Australia menandatangani perjanjian kerja sama baru yang mencakup bidang pertahanan, intelijen, dan keamanan siber. Kedua negara sepakat meningkatkan latihan militer bersama dan berbagi informasi ancaman siber lintas batas. Perjanjian ini berlaku selama 10 tahun dan dapat diperpanjang.",
    kategori: "Politik",
    sumber: "Bisnis.com",
    tanggal: "19 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 26,
    title: "Mahkamah Konstitusi Tolak Gugatan Batas Usia Calon Gubernur",
    isi: "Mahkamah Konstitusi menolak seluruh gugatan yang mempersoalkan ketentuan batas usia minimum calon gubernur dalam UU Pilkada. Majelis hakim menilai regulasi yang ada sudah konstitusional dan tidak bertentangan dengan hak warga negara. Putusan ini bersifat final dan mengikat, sehingga tidak dapat digugat kembali.",
    kategori: "Politik",
    sumber: "Kompas.com",
    tanggal: "18 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 27,
    title: "DPR Setujui Anggaran Pertahanan 2026 Naik 20 Persen Jadi Rp400 Triliun",
    isi: "Dewan Perwakilan Rakyat menyetujui alokasi anggaran pertahanan tahun 2026 sebesar Rp400 triliun, naik 20 persen dari tahun sebelumnya. Peningkatan anggaran ini akan digunakan untuk modernisasi alutsista, peningkatan kesejahteraan prajurit, dan penguatan pertahanan siber nasional.",
    kategori: "Politik",
    sumber: "Detik.com",
    tanggal: "17 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 28,
    title: "Pemerintah Umumkan Pemindahan ASN ke IKN Dimulai Oktober 2025",
    isi: "Menteri Pendayagunaan Aparatur Negara mengumumkan bahwa pemindahan Aparatur Sipil Negara tahap pertama ke Ibu Kota Nusantara akan dimulai Oktober 2025. Sebanyak 12.000 ASN dari kementerian koordinator dan kementerian prioritas akan menjadi gelombang pertama relokasi ini. Hunian dan fasilitas pendukung diklaim sudah 80 persen siap.",
    kategori: "Politik",
    sumber: "Bisnis.com",
    tanggal: "16 Jun 2025",
    url: "https://bisnis.com"
  },

  // ── KESEHATAN (8 artikel) ─────────────────────────────────
  {
    id: 29,
    title: "Menkes Luncurkan Vaksinasi Dengue Gratis 1 Juta Anak Usia Sekolah",
    isi: "Menteri Kesehatan meluncurkan program vaksinasi dengue gratis bagi satu juta anak usia sekolah sembilan hingga enam belas tahun di seluruh Indonesia. Program ini menargetkan 200 kabupaten dan kota endemis demam berdarah. Vaksin yang digunakan adalah Dengvaxia yang telah mendapat persetujuan Badan POM dan terbukti aman serta efektif.",
    kategori: "Kesehatan",
    sumber: "Detik.com",
    tanggal: "23 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 30,
    title: "BPOM Cabut Izin Edar 38 Kosmetik Mengandung Merkuri dan Hidroquinon Ilegal",
    isi: "Badan Pengawas Obat dan Makanan mencabut izin edar 38 produk kosmetik yang terbukti mengandung merkuri dan hidroquinon melebihi batas aman. Produk berbahaya ini ditemukan beredar di marketplace online dan salon kecantikan di berbagai kota. BPOM meminta konsumen segera menghentikan penggunaan dan melaporkan efek samping yang dirasakan.",
    kategori: "Kesehatan",
    sumber: "Kompas.com",
    tanggal: "22 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 31,
    title: "Studi UI dan IPB: Konsumsi Tempe Turunkan Risiko Diabetes Tipe 2 hingga 30 Persen",
    isi: "Penelitian kolaborasi Universitas Indonesia dan Institut Pertanian Bogor menemukan bahwa konsumsi tempe secara rutin minimal tiga kali seminggu dapat menurunkan risiko diabetes tipe 2 hingga 30 persen. Senyawa isoflavon dan peptida bioaktif hasil fermentasi kedelai terbukti meningkatkan sensitivitas insulin dan memperbaiki metabolisme glukosa.",
    kategori: "Kesehatan",
    sumber: "Bisnis.com",
    tanggal: "21 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 32,
    title: "Kasus TBC di Indonesia Turun 15 Persen Berkat Program DOTS Nasional",
    isi: "Kementerian Kesehatan melaporkan kasus tuberkulosis di Indonesia turun 15 persen dalam dua tahun terakhir berkat penerapan program DOTS (Directly Observed Treatment Short-course) secara masif. Indonesia kini berada di jalur yang tepat untuk mencapai target eliminasi TBC pada 2030 sesuai komitmen global.",
    kategori: "Kesehatan",
    sumber: "Detik.com",
    tanggal: "20 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 33,
    title: "BPJS Kesehatan Perluas Manfaat, Operasi Jantung Kini Tanpa Antrian Panjang",
    isi: "BPJS Kesehatan mengumumkan perluasan manfaat layanan yang memangkas waktu tunggu operasi jantung dari rata-rata enam bulan menjadi maksimal dua bulan. Kebijakan ini didukung kerja sama dengan 50 rumah sakit jantung swasta yang bergabung sebagai mitra BPJS baru. Peserta JKN dapat mengakses layanan ini dengan surat rujukan dari dokter spesialis.",
    kategori: "Kesehatan",
    sumber: "Kompas.com",
    tanggal: "19 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 34,
    title: "Peneliti Indonesia Temukan Vaksin Malaria dari Bahan Herbal Lokal",
    isi: "Tim peneliti dari Universitas Hasanuddin Makassar berhasil mengembangkan kandidat vaksin malaria berbasis ekstrak tanaman herbal lokal Kalimantan. Uji praklinis menunjukkan efektivitas 78 persen dalam mencegah infeksi Plasmodium falciparum. Penelitian ini mendapat dukungan dana dari WHO dan akan memasuki fase uji klinis tahap satu tahun depan.",
    kategori: "Kesehatan",
    sumber: "Bisnis.com",
    tanggal: "18 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 35,
    title: "Prevalensi Stunting di Indonesia Turun ke 14,8 Persen, Capai Target Lebih Cepat",
    isi: "Survei Status Gizi Indonesia 2025 mencatat prevalensi stunting atau gagal tumbuh anak turun ke angka 14,8 persen, melampaui target pemerintah sebesar 18 persen lebih awal dari jadwal. Penurunan drastis ini hasil dari program Posyandu aktif, pemberian makanan tambahan, dan intervensi 1000 hari pertama kehidupan di seluruh daerah.",
    kategori: "Kesehatan",
    sumber: "Kompas.com",
    tanggal: "17 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 36,
    title: "Rumah Sakit Indonesia Mulai Terapkan Rekam Medis Elektronik Terintegrasi Nasional",
    isi: "Sebanyak 500 rumah sakit di Indonesia mulai menerapkan sistem rekam medis elektronik terintegrasi nasional yang memungkinkan dokter mengakses riwayat kesehatan pasien dari fasilitas berbeda. Platform ini dibangun oleh Kementerian Kesehatan dengan standar keamanan data sesuai UU Perlindungan Data Pribadi. Target seluruh rumah sakit terhubung pada 2027.",
    kategori: "Kesehatan",
    sumber: "Detik.com",
    tanggal: "16 Jun 2025",
    url: "https://detik.com"
  },

  // ── OLAHRAGA (8 artikel) ──────────────────────────────────
  {
    id: 37,
    title: "Timnas Indonesia U-23 Lolos Final Piala AFF Usai Kalahkan Thailand 2-1",
    isi: "Timnas Indonesia U-23 berhasil melaju ke babak final Piala AFF U-23 setelah mengalahkan Thailand 2-1 dalam pertandingan semifinal yang berlangsung dramatis di Stadion Gelora Bung Karno. Gol kemenangan dicetak striker muda Hokky Caraka pada menit ke-89 melalui tendangan bebas yang membelok. Indonesia akan menghadapi Vietnam di final.",
    kategori: "Olahraga",
    sumber: "Detik.com",
    tanggal: "23 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 38,
    title: "Kevin/Marcus Juara All England Kelima Kali, Ukir Rekor Baru Bulu Tangkis Dunia",
    isi: "Pasangan ganda putra Indonesia Kevin Sanjaya Sukamuljo dan Marcus Fernaldi Gideon berhasil memenangkan turnamen All England untuk kelima kalinya setelah mengalahkan pasangan China dalam final tiga set yang berlangsung selama 78 menit. Prestasi ini menjadikan mereka pasangan dengan gelar All England terbanyak sepanjang sejarah.",
    kategori: "Olahraga",
    sumber: "Kompas.com",
    tanggal: "22 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 39,
    title: "Liga 1 2025 Resmi Dibuka, Persib dan Bali United Jadi Favorit Juara",
    isi: "PT Liga Indonesia Baru resmi membuka kompetisi Liga 1 2025 yang diikuti 18 klub. Laga pembuka mempertemukan juara bertahan Bali United dengan Persib Bandung di Stadion Kapten I Wayan Dipta dan berakhir imbang 1-1. Analis menilai persaingan juara musim ini akan berlangsung ketat antara Persib, Bali United, dan PSM Makassar.",
    kategori: "Olahraga",
    sumber: "Bisnis.com",
    tanggal: "21 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 40,
    title: "Petinju Indonesia Sena Utoyo Raih Gelar Juara Dunia WBO Kelas Bulu",
    isi: "Petinju Indonesia Sena Utoyo berhasil merebut gelar juara dunia WBO kelas bulu dengan mengalahkan juara bertahan asal Meksiko melalui keputusan unanimus dalam pertarungan 12 ronde yang berlangsung di Las Vegas. Sena menjadi petinju Indonesia kedua yang meraih gelar dunia WBO dalam sejarah tinju nasional.",
    kategori: "Olahraga",
    sumber: "Detik.com",
    tanggal: "20 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 41,
    title: "Indonesia Resmi Ditunjuk Tuan Rumah Piala Asia U-20 2027",
    isi: "Konfederasi Sepak Bola Asia secara resmi menunjuk Indonesia sebagai tuan rumah Piala Asia U-20 pada tahun 2027. Turnamen akan digelar di lima stadion yaitu GBK Jakarta, GBLA Bandung, Manahan Solo, Batakan Balikpapan, dan Jakabaring Palembang. Penunjukan ini menjadi momentum pembinaan sepak bola muda Indonesia.",
    kategori: "Olahraga",
    sumber: "Kompas.com",
    tanggal: "19 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 42,
    title: "Atlet Renang Indonesia Pecahkan Rekor SEA Games di Nomor 100 Meter Gaya Bebas",
    isi: "Atlet renang Indonesia Azzahra Permatahani memecahkan rekor SEA Games di nomor 100 meter gaya bebas putri dengan catatan waktu 53,44 detik, melampaui rekor sebelumnya yang dipegang perenang Singapura selama 8 tahun. Azzahra juga memastikan diri lolos ke Olimpiade Paris berdasarkan standar waktu yang ditetapkan FINA.",
    kategori: "Olahraga",
    sumber: "Bisnis.com",
    tanggal: "18 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 43,
    title: "PSSI Tunjuk Pelatih Asal Belanda untuk Pimpin Timnas Senior Indonesia",
    isi: "Persatuan Sepak Bola Seluruh Indonesia resmi menunjuk pelatih asal Belanda Ronald de Boer sebagai pelatih kepala Timnas Senior Indonesia. Kontrak ditandatangani untuk dua tahun dengan opsi perpanjangan. De Boer menyatakan target pertamanya adalah membawa Indonesia lolos Piala Dunia 2030 melalui kualifikasi zona Asia.",
    kategori: "Olahraga",
    sumber: "Detik.com",
    tanggal: "17 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 44,
    title: "Lifter Indonesia Raih Tiga Medali Emas di Kejuaraan Angkat Besi Asia",
    isi: "Tim angkat besi Indonesia meraih tiga medali emas dalam Kejuaraan Angkat Besi Asia yang berlangsung di Seoul, Korea Selatan. Nurul Akmal tampil dominan di kelas 87 kg putri dengan mencetak rekor angkatan total baru Asia. Pencapaian ini memperkuat posisi Indonesia sebagai kekuatan angkat besi terdepan di Asia Tenggara.",
    kategori: "Olahraga",
    sumber: "Kompas.com",
    tanggal: "16 Jun 2025",
    url: "https://kompas.com"
  },

  // ── PENDIDIKAN (8 artikel) ────────────────────────────────
  {
    id: 45,
    title: "Kemendikbud Wajibkan Coding dan AI sebagai Pelajaran SMP Mulai 2026",
    isi: "Kementerian Pendidikan dan Kebudayaan mengumumkan bahwa mata pelajaran pemrograman komputer atau coding dan kecerdasan buatan akan diwajibkan di seluruh SMP negeri mulai tahun ajaran 2026. Guru-guru akan mendapat pelatihan intensif selama tiga bulan. Kurikulum baru ini mengadopsi standar digital literacy dari Singapura dan Finlandia.",
    kategori: "Pendidikan",
    sumber: "Kompas.com",
    tanggal: "23 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 46,
    title: "UI dan ITB Masuk 200 Besar QS World University Rankings 2026",
    isi: "Universitas Indonesia dan Institut Teknologi Bandung berhasil masuk dalam 200 besar QS World University Rankings 2026. UI berada di peringkat 185 sementara ITB di posisi 192 secara global. Pencapaian ini merupakan lompatan besar dari tahun sebelumnya dan menempatkan Indonesia di antara negara dengan universitas terbaik di Asia Tenggara.",
    kategori: "Pendidikan",
    sumber: "Detik.com",
    tanggal: "22 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 47,
    title: "LPDP 2025 Buka 6.000 Beasiswa termasuk Jalur Afirmasi Santri Pesantren",
    isi: "Lembaga Pengelola Dana Pendidikan membuka seleksi beasiswa tahun 2025 dengan total kuota 6.000 penerima manfaat. Tahun ini hadir jalur afirmasi khusus santri pondok pesantren yang mendapat 500 kuota tersendiri. Pendaftaran dibuka hingga 31 Juli 2025 melalui laman lpdp.kemenkeu.go.id dan dapat diajukan untuk studi magister dan doktoral di dalam maupun luar negeri.",
    kategori: "Pendidikan",
    sumber: "Bisnis.com",
    tanggal: "21 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 48,
    title: "Siswa SMA Indonesia Raih Medali Emas Olimpiade Matematika Internasional",
    isi: "Tim Indonesia berhasil meraih satu medali emas, dua perak, dan tiga perunggu dalam Olimpiade Matematika Internasional atau IMO yang berlangsung di Bath, Inggris. Emas diraih oleh Reza Auliya, siswa kelas 11 asal Bandung yang berhasil memperoleh nilai sempurna di dua soal termudah. Indonesia menempati peringkat ke-12 dari 112 negara peserta.",
    kategori: "Pendidikan",
    sumber: "Kompas.com",
    tanggal: "20 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 49,
    title: "Pemerintah Naikkan Tunjangan Profesi Guru Non-ASN Jadi Rp2 Juta Per Bulan",
    isi: "Pemerintah mengumumkan kenaikan tunjangan profesi guru non-ASN yang bersertifikat pendidik menjadi Rp2 juta per bulan, naik dari sebelumnya Rp1,5 juta. Kebijakan ini berlaku mulai Juli 2025 dan mencakup sekitar 1,2 juta guru honorer bersertifikat di seluruh Indonesia. Dana diambil dari Dana Alokasi Umum yang diberikan ke daerah.",
    kategori: "Pendidikan",
    sumber: "Detik.com",
    tanggal: "19 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 50,
    title: "Politeknik Negeri Semarang Buka Prodi Baru Keamanan Siber dan Forensik Digital",
    isi: "Politeknik Negeri Semarang resmi membuka program studi baru Keamanan Siber dan Forensik Digital mulai tahun ajaran 2025. Program ini menjawab kebutuhan industri akan tenaga ahli keamanan informasi yang masih sangat langka di Indonesia. Kurikulum dirancang bersama Badan Siber dan Sandi Negara serta perusahaan teknologi nasional.",
    kategori: "Pendidikan",
    sumber: "Bisnis.com",
    tanggal: "18 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 51,
    title: "Dana BOS Naik 10 Persen di 2026, Sekolah Bisa Beli Perangkat Digital",
    isi: "Kementerian Pendidikan mengumumkan kenaikan Dana Bantuan Operasional Sekolah sebesar 10 persen mulai tahun anggaran 2026. Perubahan regulasi juga memperbolehkan sekolah menggunakan BOS untuk membeli perangkat digital seperti tablet, laptop, dan proyektor interaktif. Kebijakan ini menyasar 260 ribu sekolah dasar dan menengah di seluruh Indonesia.",
    kategori: "Pendidikan",
    sumber: "Kompas.com",
    tanggal: "17 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 52,
    title: "Program Merdeka Belajar Kampus Merdeka Diperluas ke 500 Perguruan Tinggi Swasta",
    isi: "Kemendikbud memperluas program Merdeka Belajar Kampus Merdeka ke 500 perguruan tinggi swasta di seluruh Indonesia. Program ini memungkinkan mahasiswa mengambil 40 SKS di luar program studi dan kampus asal, termasuk magang di industri, pertukaran mahasiswa, dan proyek kemanusiaan. Lebih dari 200 ribu mahasiswa telah mendaftar dalam tahun pertama perluasan.",
    kategori: "Pendidikan",
    sumber: "Detik.com",
    tanggal: "16 Jun 2025",
    url: "https://detik.com"
  },

  // ── LINGKUNGAN (6 artikel) ────────────────────────────────
  {
    id: 53,
    title: "Indonesia Tanam 1 Miliar Pohon Mangrove, Terluas di Dunia",
    isi: "Program penanaman mangrove nasional Indonesia berhasil menanam lebih dari satu miliar pohon mangrove sepanjang 2024, menjadikan Indonesia sebagai negara dengan area rehabilitasi mangrove terluas di dunia dalam satu tahun. Kawasan hutan mangrove Indonesia kini mencapai 3,3 juta hektare yang melindungi garis pantai dari abrasi dan menyerap karbon.",
    kategori: "Lingkungan",
    sumber: "Kompas.com",
    tanggal: "23 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 54,
    title: "Kebakaran Hutan di Kalimantan Tengah Hanguskan 50.000 Hektare Lahan Gambut",
    isi: "Kebakaran hutan dan lahan gambut di Kalimantan Tengah telah menghanguskan lebih dari 50.000 hektare dalam dua minggu terakhir. Kabut asap pekat menyelimuti beberapa kota dan memaksa penutupan sekolah serta bandara. Badan Nasional Penanggulangan Bencana mengerahkan 15 helikopter water bombing untuk memadamkan api.",
    kategori: "Lingkungan",
    sumber: "Detik.com",
    tanggal: "22 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 55,
    title: "Energi Surya Indonesia Capai 10 Gigawatt, Lampaui Target 2025",
    isi: "Kapasitas energi surya terpasang di Indonesia resmi melampaui 10 gigawatt, melampaui target pemerintah tahun 2025 sebesar 8,2 gigawatt. Lonjakan ini didorong masifnya pembangunan PLTS atap di gedung pemerintah, pabrik, dan perumahan bersubsidi. Pemerintah menetapkan target baru 25 gigawatt energi surya pada 2030.",
    kategori: "Lingkungan",
    sumber: "Bisnis.com",
    tanggal: "21 Jun 2025",
    url: "https://bisnis.com"
  },
  {
    id: 56,
    title: "Peneliti Temukan Spesies Baru Ikan Karang di Laut Raja Ampat",
    isi: "Tim peneliti dari LIPI dan Universitas California menemukan tiga spesies ikan karang baru di perairan Raja Ampat, Papua Barat. Ketiga spesies yang diberi nama ilmiah Synchiropus rajaampatensis, Pseudochromis aurantiacus, dan Trimma papuanum ini hanya hidup di kedalaman 30-60 meter di terumbu karang Raja Ampat. Penemuan ini menegaskan kekayaan biodiversitas laut Indonesia.",
    kategori: "Lingkungan",
    sumber: "Kompas.com",
    tanggal: "20 Jun 2025",
    url: "https://kompas.com"
  },
  {
    id: 57,
    title: "Jakarta Targetkan Zero Waste 2030, Bangun 10 Fasilitas Daur Ulang Baru",
    isi: "Pemerintah Provinsi DKI Jakarta mengumumkan rencana ambisius Zero Waste 2030 dengan membangun sepuluh fasilitas daur ulang dan pengolahan sampah baru. Program ini mencakup pemilahan sampah wajib di sumber, pengurangan kantong plastik sekali pakai, dan konversi sampah organik menjadi kompos dan biogas.",
    kategori: "Lingkungan",
    sumber: "Detik.com",
    tanggal: "19 Jun 2025",
    url: "https://detik.com"
  },
  {
    id: 58,
    title: "Harimau Sumatera Kini Bertambah 120 Ekor Berkat Program Konservasi",
    isi: "Program konservasi intensif harimau Sumatera yang dijalankan KLHK bersama WWF berhasil menambah populasi harimau sebanyak 120 ekor dalam tiga tahun terakhir. Total populasi harimau Sumatera kini diperkirakan 920 ekor di alam liar, naik dari 800 ekor pada 2022. Keberhasilan ini berkat perlindungan habitat, patroli anti-perburuan, dan program koridor satwa.",
    kategori: "Lingkungan",
    sumber: "Bisnis.com",
    tanggal: "18 Jun 2025",
    url: "https://bisnis.com"
  },

];

// Ekspor untuk digunakan di engine.js
// (Jika tidak pakai module, variabel BERITA otomatis global)
