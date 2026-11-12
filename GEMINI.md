# Aturan Wajib Proyek Website Sin Tradisional (`sintradisional.com`)

1. **Baca Konteks Sebelum Bekerja:**
   - Setiap kali memulai sesi chat baru di workspace `/Users/hanshans/sintradisional-web`, agen **WAJIB** membaca [CHANGELOG.md](./CHANGELOG.md) dan skill [web-sintra-cloudflare](./.agents/skills/web-sintra-cloudflare/SKILL.md) terlebih dahulu agar tidak kehilangan konteks riwayat pembaruan maupun aturan bisnis dari proyek `POS_Sintra`.

2. **Struktur File Wajib di Root (`/Users/hanshans/sintradisional-web`):**
   - `index.html` wajib selalu berada langsung di root directory (dilarang dipindahkan ke subfolder agar tidak memicu *404 Not Found* di Cloudflare Pages).
   - `assets/styles.css`, `assets/app.js`, `robots.txt`, dan `sitemap.xml`.

3. **Aturan Bisnis, Nomor WhatsApp & Privasi Lokasi (DILARANG DILANGGAR):**
   - **Lokasi Komersial Tunggal:** Hanya tampilkan **Jl. Situ No. 41, Bandung** (`-6.9214986, 107.5834971`). Dilarang keras mencantumkan alamat rumah pribadi di kode HTML, JSON-LD, teks halaman, maupun menampilkan foto `assets/img/foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-34.jpg` & `35.jpg`.
   - **Pembagian Peran 2 Nomor WhatsApp Resmi:**
     - **WA Admin 2 (`0895-3300-12673` / `62895330012673`) = Kasir Toko:** Fast Respon selama jam buka toko (`06.30 – 17.00 WIB`) untuk pesanan harian / cek stok toko.
     - **WA Admin 1 (`0895-4122-28351` / `62895412228351`) = Manager PO:** Slow Respon, khusus untuk Pre-Order (PO), Paket Snack Box Acara/Rapat, Kue Tampah, Hantaran, & Kemitraan Grosir B2B.
   - **Aturan Diskon Toko (Sinkron dengan `POS_Sintra`):**
     - Berlaku untuk kategori `Regular`, `Spesial`, dan `Kue` (tidak berlaku untuk `Keringan`, `Minuman`, dan `Dus`):
       - Belanja `>= Rp 150.000`: **Diskon 5%**
       - Belanja `>= Rp 250.000`: **Diskon 7,5%**
       - Belanja `>= Rp 300.000`: **Diskon 10%**
       - Pukul `14.00–17.00 WIB`: **Happy Hour Diskon 15%** (khusus walk-in Toko Jl. Situ No. 41).
   - **Pembaruan Log:** Setiap kali selesai melakukan revisi di proyek ini dan melakukan `git push origin main`, perbarui [CHANGELOG.md](./CHANGELOG.md).
