---
name: web-sintra-cloudflare
description: >-
  Asisten pengelola website resmi Sin Tradisional (sintradisional.com) berbasis kode statis (HTML, CSS, JS) di GitHub dan Cloudflare Pages (Rp 0/bulan). Dirancang khusus dengan UI ramah usia 40-60 tahun (teks besar, kontras jelas, navigasi 1 klik ke WhatsApp), menampilkan perbandingan Harga Asli Toko vs Harga Aplikasi Online (hemat hingga 40%-60%), aturan diskon bertingkat toko/website, banner promo gratis ongkir, pencatatan database pesanan pelanggan via Webhook Google Sheets terpisah dari POS Kasir utama, serta standar SEO/GEO (@sintra-seo) dan foto produk (@foto-ig-sintra).
---

# Web Sintra Cloudflare (web-sintra-cloudflare)

Skill khusus untuk membangun, memperbarui, dan memelihara website resmi **Sin Tradisional Bandung** (`sintradisional.com`) dengan arsitektur statis mandiri (`index.html`, `assets/styles.css`, `assets/app.js`, `robots.txt`, `sitemap.xml`, dan `assets/img/`) yang di-hosting gratis (Rp 0/bulan) melalui integrasi **GitHub** dan **Cloudflare Pages**.

## Kapan Digunakan

- Memperbarui kode sumber website `sintradisional.com` (`index.html`, `assets/styles.css`, `assets/app.js`, `robots.txt`, `sitemap.xml`).
- Menambahkan atau mengubah daftar kue basah, harga, deskripsi, aturan diskon toko, keringan toples, atau paket Snack Box dan Kue Tampah di katalog website.
- Mengintegrasikan foto produk dari folder lokal `assets/img/` maupun `assets/img/foto_produk/` dengan penamaan `rename-seo` (`-gmn-`) dan injeksi metadata ExifTool.
- Mengatur ulang tautan saluran pemesanan resmi (WhatsApp Admin 1 & 2, GoFood, GrabFood, ShopeeFood, dan Google Business Profile).
- Memandu sinkronisasi Git dari Mac Mini ke repositori GitHub, manajemen DNS/Nameserver Hostinger ke Cloudflare, serta troubleshooting deployment di Cloudflare Pages.

## 1. Spesifikasi Infrastruktur, Domain, DNS & Cloudflare

Selalu gunakan parameter infrastruktur aktual berikut saat memberikan panduan teknis atau skrip:

- **Domain Resmi:** `https://sintradisional.com` dan `https://www.sintradisional.com` (menggantikan landing page lama `sintradisional.carrd.co`).
- **Registrar Domain:** Hostinger (`hpanel.hostinger.com`).
- **Detail Akun & Zona Cloudflare:**
  - **Akun Cloudflare:** `Sintradisionaljapas@gmail.com`
  - **Account ID:** `534e332718c23a0822fff9e6ff05575d`
  - **Zone ID (`sintradisional.com`):** `35fbfcf5f6052cc29db3d7bcb3dd5e09`
  - **Workers Subdomain:** `sintradisionaljapas.workers.dev`
  - **Paket Cloudflare:** **Free Plan ($0/bulan)** (Unlimited static sites di Cloudflare Pages, Universal SSL, Global CDN, Workers 100.000 requests/hari).
- **Nameserver Cloudflare Aktif (Diatur di Hostinger):**
  - **Nameserver 1:** `damian.ns.cloudflare.com`
  - **Nameserver 2:** `daphne.ns.cloudflare.com`
  - *(Nameserver lama Hostinger `apollo.dns-parking.com` & `athena.dns-parking.com` serta record A `2.57.91.91` dan AAAA `2a02:4780:84::32` milik Carrd telah dihapus).*
- **Konfigurasi Proyek Cloudflare Pages:**
  - **Nama Proyek:** `sintradisional-web`
  - **URL Staging / Pratinjau Instan:** `https://sintradisional-web.pages.dev`
  - **Custom Domains Terhubung (Status: Active & SSL enabled):**
    1. `sintradisional.com` -> DNS Record `CNAME @` mengarah ke `sintradisional-web.pages.dev` (Proxied, TTL Auto).
    2. `www.sintradisional.com` -> DNS Record `CNAME www` mengarah ke `sintradisional-web.pages.dev` (Proxied, TTL Auto).
  - **Build & Deployment Settings:**
    - **Git Repository:** `sintradisionaljapas-svg/sintradisional-web`
    - **Production Branch:** `main` (Automatic deployments: `Enabled`, Build watch paths: `*`)
    - **Build System Version:** `Version 3` (Build command, Build output, dan Root directory dikosongkan agar langsung menayangkan `index.html` dari root repositori).
- **Konfigurasi AI Crawl Control & Bot Policy Cloudflare:**
  - **Search, Training, dan Agents** (Claude Duet/Anthropic, dots/OpenAI, Gemini Spark/Google, Muse/Meta): **Allow (do not block)**.
  - **Enable Bot Preference Sync:** **On** (mendukung optimasi GEO agar konten katalog dan profil Sin Tradisional mudah diekstrak oleh mesin pencari AI).

## 2. Direktori Lokal Mac Mini & Struktur File Proyek

- **User & Host Mac Mini:** `hanshans@Hanss-Mac-mini`
- **Path Direktori Proyek Lokal:** `/Users/hanshans/sintradisional-web` (`~/sintradisional-web`)
- **Struktur File Wajib:**
  - `~/sintradisional-web/index.html` *(Wajib berada langsung di root directory agar tidak menyebabkan error 404 Not Found)*.
  - `~/sintradisional-web/robots.txt` & `~/sintradisional-web/sitemap.xml` *(Untuk indeksasi Google Search Console)*.
  - `~/sintradisional-web/assets/styles.css` *(Stylesheet utama, ramah pengguna usia 40-60 tahun dengan teks jelas, kontras tinggi, dan grid foto 4:5)*.
  - `~/sintradisional-web/assets/app.js` *(Array `PRODUCTS`, filter kategori menu, dan fungsi penyusun pesanan WhatsApp otomatis)*.
  - `~/sintradisional-web/assets/img/` *(Direktori utama aset foto katalog dan logo)*.
  - `~/sintradisional-web/assets/img/foto_produk/` *(Subfolder berisi ~54 file koleksi foto produk tambahan)*.

## 3. Daftar Aset Foto di `assets/img/`

Berikut adalah inventaris file gambar yang tersimpan di `/Users/hanshans/sintradisional-web/assets/img/`:

- **Logo Resmi:** `logo-sin-tradisional.png`
- **Daftar 28 File Foto Produk Katalog:**
  1. `bubur-lolos-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Bubur Lolos
  2. `bugis-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Kue Bugis *(Catatan audit visual: pastikan menampilkan Kue Bugis bungkus daun pisang berbentuk kotak/cubit pinggang, bukan foto Bugis Mandi berkuah santan di mangkuk)*
  3. `bugis-mandi-kue-basah-bandung-sin-tradisional-10.jpg` — Kue Bugis Mandi
  4. `cantik-manis-kue-basah-bandung-sin-tradisional-01.jpeg` — Cantik Manis
  5. `dadar-gulung-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Dadar Gulung
  6. `imlek-2024-kue-basah-bandung-sin-tradisional-88.jpg` — Paket Spesial Imlek / Hari Raya
  7. `klepon-kue-basah-bandung-sin-tradisional-11.jpg` — Klepon Ketan
  8. `kombinasi-kue-basah-bandung-sin-tradisional-09.jpg` — Paket Kombinasi Kue Basah
  9. `kue-ijo-kue-basah-bandung-sin-tradisional-05.jpeg` — Kue Ijo
  10. `lapis-coklat-kue-basah-bandung-sin-tradisional-01.jpeg` — Lapis Coklat
  11. `lapis-hijau-kue-basah-bandung-sin-tradisional-01.jpeg` — Lapis Hijau
  12. `lupis-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Lupis Ketan
  13. `nagasari-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Nagasari Pisang
  14. `paket-natal-kue-basah-bandung-sin-tradisional-100.jpg` — Hampers & Paket Spesial
  15. `pelita-kue-basah-bandung-sin-tradisional-01.jpeg` — Kue Pelita
  16. `putri-noong-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Putri Noong
  17. `putu-mayang-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Putu Mayang Kinca
  18. `serabi-kinca-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Serabi Kinca
  19. `serabi-oncom-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Serabi Oncom
  20. `singkong-bangkok-kue-basah-bandung-sin-tradisional-02.jpg` — Singkong Bangkok
  21. `snack-box-kue-basah-bandung-sin-tradisional-09.jpg` — Paket Snack Box
  22. `talam-ebi-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Talam Ebi
  23. `talam-pandan-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Talam Pandan
  24. `talam-pisang-kue-basah-bandung-sin-tradisional-01.jpeg` — Talam Pisang
  25. `talam-ubi-kue-basah-bandung-sin-tradisional-gmn-01.jpg` — Talam Ubi
  26. `tampah-kue-basah-bandung-sin-tradisional-53.jpg` — Kue Tampah Klasik
  27. `tampah-kue-basah-bandung-sin-tradisional-70.jpg` — Kue Tampah Spesial
  28. `tray-kue-basah-bandung-sin-tradisional-04.jpg` — Paket Tray Kue Basah

## 4. Data Konstan, Tautan Resmi & Aturan Promo Toko

Selalu gunakan parameter resmi berikut saat memodifikasi kode website:

- **Nama Entitas:** Sin Tradisional (berdiri sejak 1978, produsen kue basah tradisional 100% tanpa pengawet di Bandung).
- **Lokasi Komersial Tunggal:** Jl. Situ No. 41, Bandung, Jawa Barat (Koordinat GPS: `-6.9214986, 107.5834971`). Dilarang keras mencantumkan alamat rumah pribadi di kode HTML, JSON-LD, maupun teks halaman.
- **WhatsApp Admin 1 (Manager — Slow Respon, khusus Pre-Order / Snack Box / Kue Tampah / Paket Lainnya):** `0895412228351` (`62895412228351`)
- **WhatsApp Admin 2 (Kasir Toko — Fast Respon selama jam buka toko 06.30–17.00 WIB untuk pesanan harian):** `0895330012673` (`62895330012673`)
- **GoFood Resmi:** `https://gofood.co.id/bandung/restaurant/kue-basah-jajanan-pasar-sin-tradisional-situ-pagarsih-98e333df-ab1d-4175-8664-202dda8088ac`
- **GrabFood Resmi:** `https://r.grab.com/g/6-20240818_072101_bb5fce275d36cc16_MEXMPS-6-C6M1MFBTJ4BKJ2`
- **ShopeeFood Resmi:** `https://shopeefood.co.id/bandung/restaurant/sin-tradisional-situ-21756149`
- **Google Business Profile Resmi:** `https://www.google.com/search?q=Sin+Tradisional&stick=H4sIAAAAAAAA_-NgU1I1qDBKNbNINTcwMLA0TzRKTUqyMqgwMzVJNjYwS0w2TrUwN0lLWsTKH5yZpxBSlJiSWZyZn5eYAwDO9uHDOwAAAA&hl=id&mat=Cd2v8ZsnyfdsElcBzAmVZsWQ0N_YMec_c-jGOkxrwqcZR789Wa1fB-4lcBWQycarEmz299-D7OdVhg2b5hL9J6ET6DY_n6kqO-wEVt2wBfrgyYjJm6n0MhrOZ-O90B1g-zs&authuser=0&ved=1t:350944`
- **Aturan Diskon Pembelian Toko (Jl. Situ No. 41):**
  - Berlaku khusus kategori **Regular, Spesial, dan Kue** (tidak berlaku untuk kategori Keringan dan Minuman):
    - Pembelian di atas Rp 150.000: **Diskon 5%**
    - Pembelian di atas Rp 250.000: **Diskon 7,5%**
    - Pembelian di atas Rp 300.000: **Diskon 10%**
    - Pembelian pukul 14.00–17.00 WIB: **Diskon 15%**
- **Produk Keringan Kemasan Toples (Opsional Katalog):** Peyek Teri, Peyek Kacang, Popcorn Caramel, Gabus Keju, Sale Pisang, Samosa, dan Spring Roll.

## 5. Langkah-Langkah Operasional (SOP)

1. **Integrasi SEO & GEO (`@sintra-seo`):**
   - Pertahankan struktur JSON-LD `@type: "Bakery"` di dalam `<head>` yang memuat `address` (Jl. Situ No. 41, Bandung), `geo`, `telephone`, dan array `sameAs` berisi tautan Google Business Profile, GoFood, GrabFood, dan ShopeeFood.
   - Gunakan teks standar `bio1` dan `bio2` pada bagian profil/tentang kami agar mesin pencari AI (Gemini, ChatGPT, Meta AI) mengekstrak spesifikasi entitas secara akurat.
   - Pastikan file `robots.txt` dan `sitemap.xml` selalu ada di root directory untuk mendukung Google Search Console.

2. **Integrasi Aset Foto Katalog 4:5 (`@foto-ig-sintra`):**
   - Simpan seluruh foto produk di dalam folder `assets/img/` dengan rasio potret `4:5` (`aspect-ratio: 4 / 5` di CSS) dan ukuran file terkompresi (< 250 KB) agar kecepatan muat setara fitur Pro tanpa biaya bulanan.
   - Pasang atribut `onerror` pada elemen `<img>` di setiap kartu produk agar otomatis menampilkan fallback visual jika ada nama file foto yang belum sesuai.
   - Jalankan skrip `./sync-foto-exif-git.sh` di Mac Mini sebelum melakukan `git push` untuk menyuntikkan metadata GPS Jl. Situ No. 41 dan hak cipta 1978 ke seluruh foto JPG.

3. **Integrasi Pengarah Kanal Order Hemat Margin (`@promo-sintra`):**
   - Arahkan pesanan jumlah besar, **Paket Snack Box**, **Kue Tampah**, dan **Kemitraan Grosir B2B (Agen Gang Luna)** ke fitur **Penyusun Pesanan WhatsApp** (0% potongan komisi aplikasi, hemat 40%–60% dibanding harga aplikasi online) untuk melindungi margin HPP kue basah.
   - Sediakan tombol langsung ke **GoFood, GrabFood, dan ShopeeFood** khusus bagi pelanggan ritel yang membutuhkan pengiriman satuan instan pada hari yang sama.

4. **Alur Update, Deployment & Troubleshooting (Mac Mini -> GitHub -> Cloudflare Pages):**
   - **Perintah Push Pembaruan dari Terminal Mac Mini:**
     ```bash
     cd ~/sintradisional-web
     git add .
     git commit -m "Update katalog website"
     git push origin main
     ```
   - **Cek Pratinjau Instan (Bebas Cache DNS):** Buka `https://sintradisional-web.pages.dev` (tunggu 15–30 detik setelah `git push`) dan tekan `Cmd + Shift + R` di Firefox Mac.
   - **Rollback Cepat:** Jika perubahan tampilan kurang pas, buka dashboard Cloudflare (`Workers & Pages > sintradisional-web > Deployments`), klik ikon titik tiga (`•••`) pada deployment sebelumnya, lalu pilih **Rollback to this deployment**.
   - **Flush DNS Cache macOS (Jika browser masih memuat cache lama):**
     ```bash
     sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
     ```

## Gotchas (Pantangan)

- **Jangan Biarkan `index.html` Berada di Dalam Subfolder:** File `index.html` wajib berada langsung di `/Users/hanshans/sintradisional-web/index.html` (root directory). Jika masuk ke dalam subfolder atau terhapus, Cloudflare Pages akan mengembalikan error *404 Not Found*.
- **Jangan Hotlink URL Google Drive Langsung di `<img src>`:** Server Google Drive membatasi pemuatan gambar langsung di website publik dan memperlambat kecepatan halaman. Selalu gunakan path lokal `assets/img/[nama-file].jpg` yang disajikan lewat CDN Cloudflare Pages.
- **Jangan Upgrade ke Paket Cloudflare Pro ($20/bulan):** Paket **Free ($0/bulan)** sudah mencakup Universal SSL, Global CDN, dan Unlimited Static Sites. Optimasi gambar dilakukan secara lokal di Mac Mini sebelum di-push ke GitHub.
- **Jaga Privasi Lokasi:** Hanya tampilkan Jl. Situ No. 41, Bandung sebagai satu-satunya lokasi komersial dan titik pengambilan pesanan.
