# Product Requirement Document (PRD)
## Personal Portfolio Website — Hadin Nazmi (Feature & Functional Specification)

---

## 1. Executive Summary & Objective

Dokumen ini merupakan **Product Requirement Document (PRD)** yang berfokus murni pada **fitur, konten, struktur informasi, dan fungsionalitas** untuk personal portfolio website **Hadin Nazmi**. Dokumen ini dirancang bebas dari spesifikasi visual (warna, tema, gaya tipografi, atau styling) agar desain antarmuka dapat dieksplorasi secara bebas di platform desain (seperti Stitch).

Tujuan utama website adalah menyajikan portofolio personal yang **authentic, fungsional, dan kredibel** bagi recruiter, tech lead, maupun klien global, dengan menonjolkan identitas sebagai **Full Stack Web & Mobile Developer** tanpa klaim fiktif.

---

## 2. Global Architecture & Page Structure

Website dirancang sebagai **Single Page Application (SPA)** yang responsif dengan navigasi sticky dan smooth scrolling.

### Urutan Komponen Halaman:
1. **Intro / Splash Screen** (Sapaan pembuka multibahasa)
2. **Navbar** (Navigasi atas + Language Switcher)
3. **Hero Section** (Headline + Potret Developer + Tech Stack Card + Availability Card)
4. **About Me / "Who Am I?"** (Snapshots Pencapaian + Bio Profesional + Riwayat Pendidikan)
5. **Skills & Capabilities** (Sorotan Kemampuan Teknis + Grid Kategori Keahlian)
6. **Featured Projects** (Filter Kategori + Grid Card Proyek)
7. **Experience & Leadership Timeline** (Timeline Pengalaman + Modal Galeri Foto)
8. **Contact & Footer** (Informasi Kontak Langsung, Availability Status, Formulir Kontak, & Footer)

---

## 3. Detailed Feature & Section Specifications

### 3.1 Intro Splash Screen
- **Fungsi**: Muncul sesaat saat halaman pertama kali dibuka, lalu bertransisi masuk ke halaman utama.
- **Konten**: Teks sapaan multibahasa berganti cepat (*Hello*, *Halo*, *Bonjour*, *Hola*, *こんにちは*, dll.).

---

### 3.2 Sticky Navbar
- **Komponen & Fungsionalitas**:
  - **Navigasi Menu**: Tautan langsung (smooth scroll) menuju seksi `ABOUT ME`, `SKILLS`, `PROJECTS`, `EXPERIENCE`.
  - **Language Switcher (`ID / EN`)**: Pengalih bahasa global (Bahasa Indonesia ↔ English).
  - **CTA Button (`CONTACT`)**: Tombol pintas menuju seksi kontak.

---

### 3.3 Hero Section
- **Role Badge**: Penanda peran utama: `⌨ Full Stack Web & Mobile Developer`.
- **Headline**: Sapaan personal (`I'm Hadin Nazmi` / `Halo, Saya Hadin Nazmi`).
- **Tagline**: Ringkasan value proposition engineer.
- **CTA Actions**:
  - Tombol Primer: `MY PROJECTS` / `LIHAT PROYEK` (scroll ke seksi proyek).
  - Tombol Sekunder: `Download Resume` / `Unduh Resume` (trigger download file CV/Resume).

#### 3.3.1 Hero 3-Element Information:
- **Tech Stack Card**:
  - Menampilkan ringkasan teknologi per lapisan arsitektur:
    1. `Web UI`: React · Next.js · Tailwind
    2. `Web API`: Laravel · Node · Express
    3. `Mobile`: Flutter · Kotlin
    4. `Database`: PostgreSQL · MongoDB
    5. `DevOps`: Docker · Nginx
- **Foto/Potret Developer**: Area display foto Hadin Nazmi.
- **Availability Card**:
  - Status ketersediaan: `● OPEN TO WORK` / `● SIAP BEKERJA`.
  - Informasi detail:
    - *Role*: Full Stack / Mobile Dev
    - *Location*: Indonesia · Remote OK
    - *Type*: Fulltime · Freelance

---

### 3.4 About Section ("Who Am I?")
- **Snapshots Pencapaian**:
  - Menampilkan 3 pencapaian/prestasi terverifikasi:
    1. *Juara 1 • KMIPN 7 2025*
    2. *Juara 1 Data Analyst • Permikomnas*
    3. *Inovasi Terbaik • SIC 2024*
- **Bio & Riwayat Pendidikan**:
  - **Bio**:
    - Headline: `Architecting High-Throughput Digital Products`
    - Subtitle: `Senior Full-Stack & Native Mobile Specialist`
    - Narasi: Mahasiswa D4 Teknik Informatika Politeknik Caltex Riau, fokus clean architecture, Android native (Kotlin), web platform (React/Laravel), dan keandalan sistem.
  - **Riwayat Pendidikan**:
    - Item 1: **Politeknik Caltex Riau** (2023 – Sekarang) — D4 Teknik Informatika · IPK 3.76 / 4.00.
    - Item 2: **MAN 3 Pekanbaru** (2020 – 2023) — MIPA · Nilai Rata-rata 92.85 / 100.

---

### 3.5 Skills & Capabilities Section
- **Highlight Kemampuan**: Penjelasan eksekusi teknis dengan tag sorotan: `Microservices • Full Stack` dan `Native Android • CI/CD`.
- **Pengelompokan Keahlian (3 Kategori)**:
  1. **Frontend Web**:
     - HTML5, CSS3 / Tailwind, JavaScript ES6+, React.js, Next.js.
  2. **Mobile & Backend**:
     - Kotlin, Jetpack Compose, Flutter, Python, FastAPI, Node.js, Laravel.
  3. **Database & Cloud / Tools**:
     - Supabase, PostgreSQL, Docker, Git & GitHub, Firebase, Postman, Figma.

---

### 3.6 Featured Projects Section
- **Filter Kategori**: Tab filter untuk menyaring proyek: `All` / `Semua`, `Web`, `Mobile`, `ML / Data`.
- **Card Proyek**:
  - **Thumbnail**: Preview visual proyek beserta tag kategori (`Mobile Native`, `Web Platform`, `Web Dashboard`, `ML / AI`).
  - **Daftar Stack**: Badge teknologi yang digunakan pada masing-masing proyek.
  - **Judul & Deskripsi**: Penjelasan masalah, solusi, dan fitur utama proyek.
  - **Aksi**:
    - Tautan `Live Demo` (atau status `In Development` jika belum dipublikasikan).
    - Tautan ke source code repository GitHub.

#### Daftar 8 Proyek Unggulan:
1. **Bank Jatah Indonesia — E-Wallet App** (Mobile Native - Kotlin, Compose, Supabase)
2. **Bank Jatah Indonesia — Company Profile** (Web Platform - React, Supabase, Tailwind)
3. **Bank Jatah Indonesia — Web Admin** (Web Dashboard - React, Supabase, REST API)
4. **Sigap — Deteksi Dini Penyakit** (ML/AI - Python, Flask, React, RAG LLM)
5. **Prediksi Curah Hujan Ekstrem Indonesia** (Machine Learning - Python, Random Forest)
6. **Peatland Hero — SIC 2024** (Web Platform - Next.js, Tailwind)
7. **Game 3D — Petualangan 3 Dunia** (3D Interactive - Unity, C#)
8. **Company Profile — Dimensi Hair Studio** (Web App - Laravel, PHP, MySQL)

---

### 3.7 Experience & Career Path Section
- **Timeline Pengalaman**:
  - Menampilkan rekam jejak kerja dan organisasi secara berurutan.
  - **Informasi per Item**:
    - Role title, Nama Organisasi/Instansi, Periode tahun.
    - Poin kontribusi dan pencapaian konkret.
    - Tombol Galeri Dokumentasi (menampilkan indikator jumlah foto kegiatan).
- **Lightbox / Modal Galeri Foto**:
  - Klik tombol galeri → membuka modal pop-up berisi dokumentasi foto kegiatan bersangkutan.

#### Daftar Pengalaman:
1. **Koordinator Kaderisasi dan Pembinaan** — UKMI Politeknik Caltex Riau (2024 – 2025)
2. **Anggota Divisi Riset dan Teknologi** — ITSA (2025 – 2026)
3. **Ketua Pelaksana Grand Opening SII** — UKMI Politeknik Caltex Riau (2024)
4. **Supervisor & Pendamping Matrikulasi** — Beasiswa SDM Sawit BPDPKS (2024)
5. **Pementor Studi Islam Intensif** — UKMI Politeknik Caltex Riau (2024)
6. **Koordinator Publikasi Mubes ITSA** — ITSA (2024)

---

### 3.8 Contact Section & Footer
- **Bagian Kontak**:
  - **Informasi Langsung**:
    - Email: `hadinnazmi21@gmail.com`
    - Lokasi: `Pekanbaru, Riau / Remote Worldwide`
    - Availability Beacon: Status ketersediaan untuk proyek & kolaborasi.
    - Tautan Media Sosial: GitHub, LinkedIn, Email.
  - **Formulir Kontak (Interactive Contact Form)**:
    - Input Fields: Nama Lengkap, Email, Subjek / Tawaran Peluang, Pesan.
    - Tombol Kirim / Submit dengan feedback indikator status berhasil.
- **Footer**:
  - Banner ajakan kolaborasi (*Let's Work Together*).
  - Profil ringkas, tautan unduh CV, Quick Links navigasi, dan kontak.
  - Hak cipta & tombol kembali ke atas (*Back to top*).

---

## 4. Functional & System Requirements

1. **Bilingual Engine (ID/EN)**:
   - Penggantian bahasa dinamis (Bahasa Indonesia ↔ English) untuk seluruh teks antarmuka.
   - Pilihan bahasa tersimpan di penyimpanan lokal (`localStorage`).
2. **Interaktivitas Halaman**:
   - Transisi kemunculan konten saat di-scroll (scroll reveal).
   - Feedback interaktif pada elemen card, link, dan tombol saat disentuh/di-hover.
3. **Dukungan Responsif**:
   - Mendukung tampilan perangkat Mobile, Tablet, dan Desktop.
