# CHANGELOG & Konteks Lintas Proyek — Website Resmi Sin Tradisional (`sintradisional.com`)

Dokumen ini merangkum seluruh riwayat pembaruan, arsitektur teknis, kurasi aset visual, serta sinkronisasi aturan bisnis antara proyek **`POS_Sintra`** dan proyek website **`sintradisional-web`**. Setiap agen AI di sesi chat baru wajib membaca file ini beserta `.agents/skills/web-sintra-cloudflare/SKILL.md` sebelum melakukan modifikasi.

---

## [v2.0.0] — 2026-11-12
### Perombakan Tampilan Mobile-First Ala Aplikasi Kuliner (ShopeeFood / GrabFood)

#### 1. Perubahan UI/UX (`index.html` & `assets/styles.css`)
- **Hero Banner Kuliner & Kartu Identitas Toko Mengambang (`.hero-banner` & `.store-card`):**
  - Banner foto kuliner lebar penuh (`assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg`, fallback ke `tampah-kue-basah-bandung-sin-tradisional-53.jpg`) dengan tinggi proporsional (`210px` di HP, `275px` di desktop) dan overlay gradasi gelap halus.
  - Kartu Profil Toko putih bersih (`border-radius: 18px`) menumpuk di bagian bawah Hero Banner, menampilkan logo bulat `assets/img/logo-sin-tradisional.png`, judul **Sin Tradisional**, badge **🏅 Warisan Keluarga 1978 • 🌿 100% Tanpa Pengawet**, indikator jam buka real-time WIB (`06.30 – 17.00 WIB`), serta tautan alamat publik **📍 Jl. Situ No. 41, Bandung** ke Google Business Profile.
- **Pemisahan Tegas Fungsi 2 Nomor WhatsApp Resmi:**
  - **WhatsApp Admin 2 (`0895-3300-12673` / `62895330012673`) — Kasir Toko (`Sin Tradisional Kasir`):** Ditandai sebagai **⚡ Fast Respon selama jam buka toko (06.30–17.00 WIB)** untuk pesanan harian, cek stok hari ini, dan pembelian langsung di toko.
  - **WhatsApp Admin 1 (`0895-4122-28351` / `62895412228351`) — Manager PO:** Ditandai sebagai **🍱 Slow Respon — Khusus Pre-Order (PO), Paket Snack Box Acara/Rapat, Kue Tampah, Hantaran, & Kemitraan Grosir B2B**.
  - Baris tombol pengiriman satuan instan via aplikasi ojol (**GoFood**, **GrabFood**, **ShopeeFood**).
- **Strip Kartu Voucher Diskon Geser Horizontal (`.voucher-strip`):**
  - 4 kartu voucher geser horizontal (`overflow-x: auto`, `scroll-snap-type: x mandatory`) dengan warna hijau tua daun (`#14532d`) dan emas (`#ca8a04`), sinkron 100% dengan aturan diskon `POS_Sintra`:
    1. **Diskon 5%** — Belanja > Rp 150.000
    2. **Diskon 7,5%** — Belanja > Rp 250.000
    3. **Diskon 10%** — Belanja > Rp 300.000
    4. **Happy Hour 15%** — Pemesanan pukul 14.00–17.00 WIB (khusus walk-in Toko Jl. Situ No. 41)
  - Keterangan syarat: *"Berlaku khusus pembelian langsung di Toko Jl. Situ No. 41 & WhatsApp Resmi untuk kategori Regular, Spesial, dan Kue (tidak berlaku untuk Keringan & Minuman)."*
- **Seksi Sorotan "Menu Andalan & Paket Acara" (`#featured-grid`):**
  - Menampilkan 3 kartu unggulan di atas katalog utama (**Paket Snack Box Acara & Rapat**, **Kue Tampah Tradisional Klasik**, dan **Paket Kombinasi Varian Terlaris**) dengan badge **"Terlaris"** & **"Hemat s.d. 40% via WA"**.
- **Navigasi Kategori Sticky & Pencarian Cepat (`#sticky-nav`):**
  - Kotak pencarian real-time (`#search-input`) dengan tombol hapus (`#clear-search`) serta pil filter kategori (`Semua Menu`, `Kue Basah`, `Gurih & Asin`, `Snack Box & Tampah`, `Keringan Toples`) yang menempel (`position: sticky; top: 0`) saat halaman digulir.
- **Katalog Mobile-First 2 Kolom, Modal Zoom & Sticky Bottom Cart Bar:**
  - Layar HP (`max-width: 768px`): Grid **2 kolom sejajar** (`grid-template-columns: repeat(2, 1fr); gap: 10px`) dengan rasio foto kompak `4 / 3`.
  - Layar Desktop (`min-width: 769px`): Grid multi-kolom dengan rasio foto potret `4 / 5`.
  - Tombol **`+ Pesan`** hijau kontras pada setiap kartu yang otomatis berubah menjadi pengatur kuantitas (`−` / `qty` / `+`) saat dipilih.
  - **Modal Detail Produk (`#product-modal`):** Popup gambar besar & teks jelas ramah usia 40–60 tahun saat foto atau judul kue diketuk.
  - **Sticky Bottom Cart Bar (`#sticky-cart-bar`):** Bar melayang di bagian bawah layar yang otomatis muncul saat minimal 1 kue dipilih, terhubung langsung ke form `#pesan-wa`.

#### 2. Kurasi Aset Foto & Audit Privasi (`assets/app.js` & `assets/img/`)
- **Perbaikan Foto Kue Bugis vs Bugis Mandi:**
  - Kartu **`Kue Bugis (Bungkus Daun)`** kini menggunakan `assets/img/foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-12.jpg` (bungkus daun pisang hijau lipat persegi rapi), sehingga tidak lagi tertukar dengan foto Bugis Mandi berkuah santan.
  - **`Kue Bugis Mandi`** ditampilkan sebagai menu tersendiri menggunakan `assets/img/bugis-mandi-kue-basah-bandung-sin-tradisional-10.jpg`.
- **Perbaikan Path Foto yang Sebelumnya Tidak Sesuai:**
  - `Ketimus Singkong` -> `foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-13.jpg`
  - `Serabi Oncom Pedas Gurih` -> `serabi-oncom-kue-basah-bandung-sin-tradisional-gmn-01.jpg`
  - `Serabi Kinca Gula Merah` -> `serabi-kinca-kue-basah-bandung-sin-tradisional-gmn-01.jpg`
  - `Lemper Ayam Spesial` -> `foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-38.jpg`
  - `Risoles Ragout Ayam Sayur` -> `foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-20.jpg`
  - `Paket Snack Box Acara & Rapat` -> `snack-box-kue-basah-bandung-sin-tradisional-09.jpg`
  - `Kue Tampah Tradisional Klasik` -> `tampah-kue-basah-bandung-sin-tradisional-53.jpg`
- **Penambahan File SEO & Skill Lokal:**
  - Menambahkan `robots.txt` dan `sitemap.xml` di root directory `/Users/hanshans/sintradisional-web/`.
  - Memasang `.agents/skills/web-sintra-cloudflare/SKILL.md` langsung di dalam repositori `sintradisional-web`.
- **Proteksi Privasi Lokasi (WAJIB DIPATUHI):**
  - Hanya menampilkan **Jl. Situ No. 41, Bandung** di seluruh kode HTML, JSON-LD, dan teks profil (`bio1` & `bio2`).
  - **Peringatan Aset:** Jangan pernah menampilkan file `assets/img/foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-34.jpg` dan `35.jpg` di halaman web karena berisi foto kartu nama lama yang mencantumkan alamat rumah pribadi.

---

## Ringkasan Konteks Sinkronisasi dari Proyek `POS_Sintra` (V2.4.0)

1. **Perbandingan Harga Toko vs Aplikasi Online:**
   - Pembelian langsung di Toko Jl. Situ No. 41 atau melalui WhatsApp Resmi menggunakan **`Harga_Toko` / `Harga_Snackbox` (0% komisi aplikasi)** sehingga pelanggan hemat hingga **40%–60%** dibandingkan harga di GoFood/GrabFood/ShopeeFood (`Harga_Online`).
2. **Aturan Diskon Bertingkat Toko & Snack Box:**
   - Berlaku khusus kategori **Regular, Spesial, dan Kue** (mengecualikan **Keringan**, **Minuman**, dan **Dus**).
   - Tier Diskon: `>= Rp 150.000` (5%), `>= Rp 250.000` (7,5%), `>= Rp 300.000` (10%).
   - Diskon Sore **15%** (pukul 14.00–17.00 WIB) hanya berlaku untuk pembelian walk-in langsung di **Toko Jl. Situ No. 41** (tidak berlaku untuk Snack Box atau aplikasi online).
3. **Alur Deployment Cepat dari Mac Mini ke Cloudflare Pages:**
   ```bash
   cd /Users/hanshans/sintradisional-web
   git add .
   git commit -m "Deskripsi perubahan"
   git push origin main
   ```
   - URL Produksi: `https://sintradisional.com`
   - URL Pratinjau Instan (Bebas Cache DNS): `https://sintradisional-web.pages.dev`
