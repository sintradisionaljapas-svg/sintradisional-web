# CHANGELOG & Konteks Lintas Proyek — Website Resmi Sin Tradisional (`sintradisional.com`)

Dokumen ini merangkum seluruh riwayat pembaruan, arsitektur teknis, kurasi aset visual, serta sinkronisasi aturan bisnis antara proyek **`POS_Sintra`** dan proyek website **`sintradisional-web`**. Setiap agen AI di sesi chat baru wajib membaca file ini beserta `.agents/skills/web-sintra-cloudflare/SKILL.md` sebelum melakukan modifikasi.

---

## 📋 Backlog Perbaikan Berikutnya (Audit Website, SEO/GEO & Ekosistem — 2026-11-17)

Daftar prioritas pekerjaan lanjutan untuk sesi berikutnya (disusun berdasarkan hasil audit kode repo, live site, dan sinkronisasi Google Sheets):

### 1. Aset Visual & Katalog Produk (`assets/app.js`, `assets/img/`)
- [ ] **Lengkapi 13 Foto Produk yang Masih Pakai Placeholder (`kombinasi-...-09.jpg`):**
  - Regular (1): `Ketimus` (`INT-KB-KTM-B2K`)
  - Spesial (2): `Kolak Pisang` (`INT-KB-KPG-B1`), `Singkong Bangkok` (`INT-KB-SKB-B1`)
  - Kue (3): `Baso Goreng` (`KSN-KB-BSG-B1`), `Siomay Goreng` (`KSN-KB-SMG-B2`), `Ketan Bumbu` (`KSN-KB-KTB-B1`)
  - Keringan (7): `Peyek Kacang`, `Peyek Teri`, `Gabus Keju`, `Sale Pisang`, `Samosa Kering`, `Spring Roll Kering`, `Popcorn Caramel`
- [ ] **Seragamkan Foto Gaya Lama:** Perbarui foto `Cantik Manis` (`KSN-KB-CTM-B1`) yang masih memakai `...16.jpeg` ke seri pemotretan terbaru (EXIF GPS Jl. Situ No. 41).
- [ ] **Kurasi 15 Foto Belum Terpakai di `assets/img/Snack box/`:** Tampilkan ke `SNACKBOX_SHOWCASE` jika relevan, atau hapus file duplikat agar ukuran repo tetap ringkas.
- [ ] **Lengkapi Atribut `alt` Unik Per Produk:** Baru 2 dari 46 produk (`Kue Bugis`, `Kue Ijo`) yang memiliki `alt` khusus; sisanya masih memakai template fallback di `renderCatalog()`.

### 2. UI/UX, Keranjang & Fitur Transaksional (`index.html`, `assets/app.js`, `assets/styles.css`)
- [ ] **Kalkulasi Otomatis Subsidi Ongkir (`PRM-06`) & Promo Flyer Ojol (`PRM-07`) di Keranjang:** Tampilkan status otomatis di `syncCartUI()` saat subtotal mencapai `>= Rp 100.000` (memenuhi syarat subsidi ongkir s/d Rp 15.000) dan info promo pelanggan baru Ojol (`?utm_source=ojol`, min. Rp 75.000).
- [ ] **Perbesar Touch Target Mobile (`44px`):** Tingkatkan padding/tinggi minimum tombol `+ Pesan` (`~34px`) dan tab `.filter-btn` (`~36px`) di layar HP agar lebih nyaman untuk pengguna usia 40–60 tahun.
- [ ] **Rapikan Dead Code & File Sampah Git:** Hapus fungsi/panggilan `renderFeatured()` di `assets/app.js` (karena `#featured-grid` sudah dihapus sejak `v3.0.1`), serta tambahkan `.DS_Store` ke `.gitignore` dan keluarkan dari tracking git.
- [ ] **Integrasi Webhook `DB_Pesanan_Website_WA` (Opsional):** Hubungkan form `#pesan-wa` agar otomatis mencatat pesanan website ke tab `DB_Pesanan_Website_WA` pada `04_DB_Master_Promo_Sin_Tradisional_2026` (saat ini masih berisi 5 data sampel Feb 2026).

### 3. SEO Teknis, Schema Markup & GEO (`index.html`, `sitemap.xml`, `robots.txt`)
- [ ] **Seragamkan Domain Kanonikal (`non-www` vs `www`):** Saat ini `canonical`, `og:url`, dan JSON-LD `url` memakai `https://sintradisional.com/`, sedangkan JSON-LD `image`/`logo`, `sitemap.xml`, dan `robots.txt` memakai `https://www.sintradisional.com/`. Seragamkan ke satu URL kanonikal utama.
- [ ] **Perbarui `<lastmod>` pada `sitemap.xml`:** Saat ini masih tertanggal `2026-11-16`, ubah ke tanggal deploy terbaru setiap kali ada pembaruan konten utama.
- [ ] **Tambah JSON-LD `FAQPage` & Lengkapi Properti `Bakery` + Meta Sosial:** Bungkus 4 FAQ di `#faq-pemesanan` ke dalam schema `FAQPage`, tambahkan `"hasMap"` & `"areaServed": "Bandung"` pada schema `Bakery`, serta tambahkan `og:locale`, `og:site_name`, dan `twitter:card`.
- [ ] **Perkuat Kata Kunci Belum Tersitasi AI (`Riset_Keyword_GEO_Bandung`):** Fokuskan optimasi frasa **`kue tampah bandung` (`KW_003`)** dan **`snack box kantor bandung` (`KW_006`)** pada deskripsi katalog, `alt` gambar Tampah/Snack Box, dan FAQ.
- [ ] **Ganti Tautan Panjang Google Maps (`&authuser=0`):** Ubah tautan Google Search/GBP panjang pada tombol peta dan JSON-LD `sameAs` menjadi tautan pendek resmi Google Maps (`https://maps.app.goo.gl/...` atau `?cid=...`) yang bersih tanpa parameter sesi.

### 4. Ekosistem Luar Website (GBP, Search Console & Skill)
- [ ] **Ganti Referensi URL Lama `sintradisional.carrd.co`:** Perbarui link website pada Google Business Profile, Bio Instagram, dan tab `Checklist_Profil_100Pct` / `Kalender_Konten_SEO` (`04_DB_GBP_Auto_Review_Sin_Tradisional_2026`) ke `https://sintradisional.com/`.
- [ ] **Tutup Gap 30% Kelengkapan Profil GBP (`Checklist_Profil_100Pct`):** Lengkapi 6 item profil GBP (foto menu berkala, atribut layanan, jam subuh 04.30 WIB & hari libur, integrasi tautan web/ojol, deskripsi bisnis 750 karakter entity SEO, dan 6 produk di tab *Products* GBP) serta kejar target 20 ulasan organik.
- [ ] **Re-Submit `sitemap.xml` di Google Search Console & Sync Skill:** Setelah domain kanonikal rapi, kirim ulang sitemap di GSC dan perbarui URL ShopeeFood universal terbaru di skill `web-sintra-cloudflare`.

---

## [v3.0.10] — 2026-11-17
### Pembaruan Tautan Universal ShopeeFood
- **Tautan ShopeeFood (`index.html`):**
  - Memperbarui tautan ShopeeFood pada JSON-LD `sameAs` dan tombol kanal order menjadi `https://shopee.co.id/universal-link/now-food/shop/21756149?deep_and_deferred=1` (tanpa parameter `shareChannel`) agar langsung membuka toko Sin Tradisional di aplikasi Shopee maupun browser.

---

## [v3.0.9] — 2026-11-17
### Penambahan Promo Subsidi Ongkir (`PRM-06`) & Perbaikan Overflow UI Desktop/Mobile
- **Promo Subsidi Ongkir Kurir Lokal (`index.html`, `assets/styles.css`):**
  - Menambahkan kartu voucher **`PRM-06` (Subsidi Ongkir s/d Rp 15.000)** untuk minimum belanja Rp 100.000 via Website & WhatsApp Resmi pada `.voucher-strip`, serta memperjelas syarat pada `.promo-terms`.
- **Perbaikan Layout Responsive (`assets/styles.css`, `index.html`):**
  - Mengubah `.voucher-strip` pada viewport desktop (`min-width: 769px`) menjadi CSS Grid (`repeat(auto-fit, minmax(270px, 1fr))`) agar seluruh kartu promo tampil utuh tanpa terpotong horizontal di sisi kanan.
  - Menghapus `white-space: nowrap` pada `.btn-snackbox-wa` dan menambahkan `width: 100%` di mobile (`max-width: 640px`) agar tombol CTA Snack Box tidak melampaui batas kanan kartu di layar HP.
  - Mempersingkat placeholder `#search-input` menjadi `"Cari kue... (Bugis, Talam, Risoles)"` agar tidak terpotong di layar mobile 390px.

---

## [v3.0.8] — 2026-11-17
### Pembaruan Tautan Verifikasi Halal BPJPH
- **Tautan Portal Resmi BPJPH (`index.html`):**
  - Memperbarui tautan verifikasi sertifikat Halal di modal `#halal-modal` dari `https://halal.go.id` menjadi `https://bpjph.halal.go.id/` beserta label tombol `(bpjph.halal.go.id)`.

---

## [v3.0.7] — 2026-11-16
### Penjelasan Bahan Kue Ijo, Talam, Putu Mayang & Pelita
- **Penyempurnaan Deskripsi Produk (`assets/app.js`):**
  - Melengkapi penjelasan bahan utama, tekstur, dan cara penyajian untuk **`Kue Ijo`** (tepung beras, tapioka, sari pandan suji, tekstur kenyal legit + taburan kelapa parut gurih), seluruh varian **`Talam`** (Pandan, Ubi, Pisang, Ebi), **`Putu Mayang`** (untaian tepung beras + kuah kinca santan gula merah), dan **`Kue Pelita`** (tekstur lembut seperti puding dari tepung beras, santan kental, sari pandan & gula merah).

---

## [v3.0.6] — 2026-11-16
### Integrasi Info Sertifikat Halal BPJPH, Koreksi Foto Kue Ijo, Kategori Spesial & Update Deskripsi Lupis
- **Integrasi Halal Indonesia BPJPH Tanpa Ekspos Alamat Pribadi (`index.html`, `assets/styles.css`, `assets/app.js`, `assets/img/logo-halal-indonesia-sin-tradisional.jpg`):**
  - Menambahkan aset logo `assets/img/logo-halal-indonesia-sin-tradisional.jpg` (38 KB, EXIF GPS Jl. Situ No. 41) pada baris badge kartu toko (`.store-card-top`) bersebelahan dengan badge `Warisan Keluarga 1978`.
  - Menambahkan modal informasi sertifikat Halal resmi BPJPH (`#halal-modal`) yang menampilkan nomor sertifikat resmi Kue Basah (`ID32110018971160724`) dan Sari Daun Suji (`ID32110018360180724`) beserta tautan verifikasi ke `https://halal.go.id`, tanpa mempublikasikan file PDF yang memuat alamat rumah pribadi (`Jl. Aksan No. 60`).
- **Koreksi Foto Kue Ijo (`assets/app.js`, `assets/img/regular/foto-produk-kue-ijo-kue-basah-bandung-sin-tradisional-261116-01.jpg`):**
  - Mengganti foto `Kue Ijo` yang sebelumnya tertukar dengan foto Talam Pandan (`foto-produk-kue-basah-bandung-sin-tradisional-05.jpg`) menggunakan foto Kue Ijo terkompresi (206 KB, EXIF GPS Jl. Situ No. 41) sambil mempertahankan rasio `aspect-ratio: 4 / 5` dan fallback `onerror`.
- **Kategori Spesial & Deskripsi Kue Lupis (`assets/app.js`):**
  - Memindahkan `Dadar Gulung` (`KSN-KB-DDG-B2`) dan `Cantik Manis` (`KSN-KB-CTM-B1`) ke `category: 'spesial'` dan `posCat: 'Spesial'` agar tampil pada filter tab `Spesial` sambil tetap masuk kategori eligibel diskon toko.
  - Memperbarui deskripsi `Kue Lupis` (`INT-KB-LPS-B1`) agar menegaskan bentuk lupis Sin Tradisional adalah **persegi**, bukan segitiga.
- **Pembaruan SEO & Pemulihan Skill (`sitemap.xml`, `.agents/skills/web-sintra-cloudflare/SKILL.md`):**
  - Memulihkan file skill lokal `.agents/skills/web-sintra-cloudflare/SKILL.md` dan memperbarui `<lastmod>` pada `sitemap.xml` menjadi `2026-11-16`.

---

## [v3.0.5] — 2026-11-13
### Sinkronisasi Penuh Kategori Keringan, Produk Toko POS & Tier Kemitraan Grosir
- **Kategori `Keringan` & Promosi 13 Produk ke Katalog Utama (`index.html`, `assets/app.js`):**
  - Menambahkan tombol filter **`Keringan`** pada `#filter-bar` di `index.html` serta label kategori `keringan` di `CATEGORY_LABELS` (`assets/app.js`).
  - Memindahkan seluruh 13 item yang sebelumnya di `EXTRA_STORE_ITEMS` ke dalam `PRODUCTS` sesuai kategori POS (`Regular`: Ketimus; `Spesial`: Kolak Pisang, Singkong Bangkok; `Kue`: Baso Goreng, Siomay Goreng, Ketan Bumbu; `Keringan`: Peyek Kacang, Peyek Teri, Gabus Keju, Sale Pisang, Samosa Kering, Spring Roll Kering, Popcorn Caramel).
  - Menyembunyikan panel `#stok-lainnya` secara otomatis ketika tidak ada item dinamis tambahan dari API POS.
- **Informasi Tier Layanan Grosir B2B (`index.html`):**
  - Memperbarui FAQ kemitraan grosir pada `#faq-pemesanan` agar menjelaskan 2 tingkatan layanan grosir Agen Gang Luna: **Tier 1 (Agen)** dan **Tier 2 (Reseller)** tanpa menampilkan harga agen/reseller ke publik.

---

## [v3.0.4] — 2026-11-13
### Deteksi Parameter UTM Otomatis pada Alur Pemesanan WhatsApp
- **Pelacakan `utm_source` (`assets/app.js`):** Menambahkan `captureUtmSource()` yang membaca parameter URL `utm_source` (`ojol` / `toko`) saat halaman dibuka dan menyimpannya ke `sessionStorage` (`sintra_utm_source`).
- **Penyisipan Otomatis Keterangan Sumber Katalog:** Memperbarui `sendWhatsApp()`, `askKasirAboutProduct()`, `openSnackboxInfoModal()`, serta `decorateWaLinksWithUtm()` untuk menambahkan baris `Sumber Katalog: Kartu Sisipan Ojol` (jika `utm_source=ojol`) atau `Sumber Katalog: Stiker Kemasan Toko` (jika `utm_source=toko`) pada seluruh CTA WhatsApp tanpa mengubah format pesan standar untuk pengunjung langsung.

---

## [v3.0.3] — 2026-11-13
### FAQ Transaksional, Optimasi Core Web Vitals & Infrastruktur Indexing
- **Konten Transaksional (`#faq-pemesanan`):** Menambahkan section **Informasi Pemesanan & FAQ** di `index.html` dan `assets/styles.css` dengan kontras hijau tua `#14532d`, font ramah usia 40–60 tahun, mencakup aturan pemesanan H-1 Snack Box & Kue Tampah (100% tanpa pengawet), layanan grosir B2B Agen Gang Luna, serta Harga Asli Toko (0% komisi aplikasi) via WA Admin 1 & 2.
- **Core Web Vitals (`loading="lazy"` & CLS):** Menambahkan `fetchpriority="high"` pada foto Hero Banner agar termuat langsung, serta atribut `width` dan `height` eksplisit bersama `loading="lazy"` dan CSS `aspect-ratio: 4 / 5` pada gambar katalog di `assets/app.js` untuk mencegah layout shift.
- **Infrastruktur Pengindeksan:** Menyelaraskan `sitemap.xml` ke `<loc>https://www.sintradisional.com/</loc>` dengan `<lastmod>2026-11-13</lastmod>` serta `robots.txt` dengan `Sitemap: https://www.sintradisional.com/sitemap.xml`.

---

## [v3.0.2] — 2026-11-13
### Optimasi SEO Teknis, JSON-LD Bakery & GEO (`bio2`)
- **Meta Tags High-Intent (`index.html`):** Memperbarui `<title>` menjadi `Sin Tradisional - Kue Basah, Snack Box & Kue Tampah Bandung Tanpa Pengawet` serta `<meta name="description">` yang menonjolkan jajanan pasar segar tanpa pengawet kimia sejak 1978 di Jl. Situ No. 41.
- **JSON-LD Schema (`@type: "Bakery"`):** Menyelaraskan `image` ke `https://www.sintradisional.com/assets/img/logo-sin-tradisional.png`, `telephone` ke `+62895412228351`, serta menambahkan `servesCuisine: "Kue Basah Tradisional Indonesia"` bersama `streetAddress`, `addressLocality`, dan koordinat `geo`.
- **Audit Atribut `alt` Katalog & Privasi Lokasi:** Memperkaya atribut `alt` seluruh gambar katalog produk, sorotan, dan showcase Snack Box di `assets/app.js` dengan kata kunci deskriptif tanpa pengawet, memastikan seluruh aset dimuat lokal dari `assets/img/`, serta memvalidasi hanya alamat komersial `Jl. Situ No. 41` yang tercantum di HTML/CSS/JS.

---

## [v3.0.1] — 2026-11-13
### Perbaikan UI/UX Mobile, Tabel Komparasi Harga Kompak & Kartu Katalog
- **Tata Letak Kartu Profil Utama:** Memisahkan baris logo + badge status (`Toko Buka (06.30–17.00 WIB)`) di atas, serta memperlebar judul, deskripsi, dan tautan `Jl. Situ No. 41, Bandung` menjadi full-width sambil menghapus baris jam buka yang redundan.
- **Copywriting & Tombol Kanal Pemesanan:** Mengubah label `(Slow Respon)` pada WA Admin 1 Manager PO menjadi `(Layanan Pesanan Besar & H-1)`, serta mengganti ikon bulatan tombol `GoFood`/`GrabFood`/`ShopeeFood` dengan ikon SVG tas belanja putih kontras tinggi.
- **Pemangkasan Scroll Fatigue:** Meringkas perbandingan 3 item (`Kue Regular`, `Risoles`, `Otak-Otak`) menjadi 1 kartu horizontal kompak 3 kolom (`.compare-card`) dan menghapus slider produk duplikat di bawahnya.
- **Panel POS & Kartu Katalog:** Menjajarkan tombol `✓ Ready Hari Ini Saja` dan `↻ Segarkan Stok` berdampingan, menyeragamkan rasio foto katalog `4:5` di semua ukuran layar lengkap dengan fallback `onerror`, mengganti titik putih `Detail` menjadi ikon SVG kaca pembesar, menyesuaikan badge kategori `Gurih` pada `Otak-Otak`, `Risoles Ragout`, dan `Lemper Ayam`, serta menghapus pengulangan `(Isi X)` pada judul produk yang sudah tertulis di subjudul.

---

## [v3.0.0] — 2026-11-13
### Reorganisasi Katalog Foto Baru, Harga Toko vs Harga Online, & Integrasi Stok Live POS
- **Reorganisasi Kategori Foto & Optimasi Aset Web (`assets/img/`):**
  - Menggunakan 1 foto hero utama (`assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg`) dengan fallback valid ke `assets/img/paket/foto-produk-tampah-kue-basah-bandung-sin-tradisional-261113-01.jpg`.
  - Memisahkan katalog jual harian & paket dari 4 folder aktif: `regular/` (17 menu + 3 varian warna Putu Mayang), `Spesial/` (6 menu cup), `kue kue/` (8 menu kue & gurih), dan `paket/` (Kue Tampah & Kue Tray Pre-Order).
  - Mengompres 50 file foto besar hingga `<= 239 KB/foto` (total folder `assets/img` turun dari `193 MB` menjadi `7,1 MB`) dengan tetap menjaga penuh metadata EXIF GPS Jl. Situ No. 41 Bandung dan IPTC/XMP GEO.
  - **Perlindungan Privasi Foto Paket:** Membersihkan kartu nama lama bertuliskan `Jl. Aksan no. 60` pada `paket/foto-produk-tampah-kue-basah-bandung-sin-tradisional-261113-01.jpg` dan `paket/foto-produk-tray-kue-basah-bandung-sin-tradisional-261113-01.jpg` sambil tetap mempertahankan kartu merek hijau Sin Tradisional.
- **Harga Asli Toko vs Harga Aplikasi Online (Fokus Pembeli Akhir / End-User):**
  - Menampilkan perbandingan **Harga Aplikasi Online (GoFood/GrabFood/ShopeeFood) coret** terhadap **Harga Asli Toko** beserta nominal & persentase penghematan (`Master_Produk`, sinkron 44 SKU).
  - Mengecualikan sepenuhnya harga agen, harga reseller, harga modal, maupun daftar harga snack box dari website dan API publik.
  - Menghitung otomatis subtotal Harga Toko, penghematan dibanding aplikasi online, dan diskon bertingkat toko (`>= Rp 150.000` 5%, `>= Rp 250.000` 7,5%, `>= Rp 300.000` 10%) khusus kategori `Regular`, `Spesial`, dan `Kue` (mengecualikan `Keringan`, disertai keterangan Happy Hour 15% walk-in `14.00–17.00 WIB`).
- **Integrasi Stok Toko Real-Time (`POS_Sintra` v2.5.0 <-> `sintradisional.com`):**
  - Menambahkan endpoint JSON publik read-only `?action=public_stok` pada `POS_Sintra/01_Config.gs` dan `getPublicStokTokoPayload()` di `02_Database.gs` (plus timestamp `WAKTU_STOK_TOKO_V2` & invalidasi cache 30 detik di `saveStokTokoHarian`) dengan whitelist ketat Jalur Toko.
  - Menambahkan panel status stok POS, toggle filter **"Ready Hari Ini Saja"**, tombol **"Segarkan Stok"**, badge status per produk (`Ready` / `Sisa X` / `Habis Hari Ini`), panel ringkas **Stok Keringan & Menu Toko Lainnya** untuk item Toko tanpa foto baru, serta fallback tenang mengarah ke WA Kasir Toko (`0895-3300-12673`).
- **Seksi Informasi Menu Tambahan Snack Box (`#snack-box`):**
  - Menampilkan 20 foto pilihan dari `assets/img/Snack box/` sebagai galeri inspirasi Pre-Order acara (tanpa harga dan tidak masuk keranjang kasir harian), terhubung 1 klik ke WhatsApp Admin 1 Manager PO (`0895-4122-28351`).

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
