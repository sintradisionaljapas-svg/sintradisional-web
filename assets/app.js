const PRODUCTS = [
  // KUE BASAH TRADISIONAL (MANIS)
  {
    id: "kue-bugis",
    name: "Kue Bugis (Bungkus Daun)",
    cat: "manis",
    badge: "Terlaris 1978",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-12.jpg",
    desc: "Kue ketan lembut isi unti kelapa gula merah asli, dibungkus daun pisang segar berbentuk lipat persegi klasik."
  },
  {
    id: "bugis-mandi",
    name: "Kue Bugis Mandi",
    cat: "manis",
    badge: "Favorit",
    img: "bugis-mandi-kue-basah-bandung-sin-tradisional-10.jpg",
    desc: "Bola ketan isi unti kelapa manis yang disiram saus fla santan kental gurih di dalam cup mika higienis."
  },
  {
    id: "nagasari-pisang",
    name: "Nagasari Pisang",
    cat: "manis",
    badge: "Terlaris 1978",
    img: "nagasari-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Olahan tepung beras dan santan lembut dengan potongan pisang pilihan, dikukus wangi dalam balutan daun pisang."
  },
  {
    id: "dadar-gulung",
    name: "Dadar Gulung Pandan",
    cat: "manis",
    badge: "Favorit",
    img: "dadar-gulung-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Kulit dadar pandan asli yang wangi dan lembut dengan isian unti kelapa gula merah manis legit."
  },
  {
    id: "bubur-lolos",
    name: "Bubur Lolos",
    cat: "manis",
    badge: "Khas Bandung",
    img: "bubur-lolos-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Kue tradisional khas Bandung bertekstur sangat lembut dengan perpaduan gula merah aren dan santan gurih."
  },
  {
    id: "talam-pandan",
    name: "Talam Pandan",
    cat: "manis",
    badge: "Resep 1978",
    img: "talam-pandan-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Perpaduan harmonis lapisan bawah pandan manis wangi dan lapisan atas santan gurih lembut."
  },
  {
    id: "talam-ubi",
    name: "Talam Ubi Kuning",
    cat: "manis",
    badge: "Resep 1978",
    img: "talam-ubi-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Kue talam dari ubi kuning asli pilihan dengan lapisan atas santan kental yang gurih dan lembut."
  },
  {
    id: "talam-pisang",
    name: "Talam Pisang",
    cat: "manis",
    badge: "Lembut",
    img: "talam-pisang-kue-basah-bandung-sin-tradisional-01.jpeg",
    desc: "Kue talam manis gurih dengan potongan pisang matang di dalamnya dan lapisan santan segar."
  },
  {
    id: "lupis-ketan",
    name: "Lupis Ketan Gula Aren",
    cat: "manis",
    badge: "Terlaris",
    img: "lupis-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Ketan pulen kukus berbalut kelapa parut segar, disajikan dengan siraman kinca gula aren kental."
  },
  {
    id: "putri-noong",
    name: "Putri Noong",
    cat: "manis",
    badge: "Khas Sunda",
    img: "putri-noong-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Jajanan pasar khas Sunda dari singkong parut warna-warni berisi pisang manis dan taburan kelapa parut."
  },
  {
    id: "ketimus",
    name: "Ketimus Singkong",
    cat: "manis",
    badge: "Tradisional",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-13.jpg",
    desc: "Olahan singkong parut, kelapa, dan gula merah pilihan yang dikukus matang di dalam daun pisang."
  },
  {
    id: "putu-mayang",
    name: "Putu Mayang Kinca",
    cat: "manis",
    badge: "Favorit",
    img: "putu-mayang-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Putu mayang tepung beras lembut disajikan bersama kuah kinca santan gula merah yang harum."
  },
  {
    id: "klepon-ketan",
    name: "Klepon Ketan Gula Merah",
    cat: "manis",
    badge: "Segar Subuh",
    img: "klepon-kue-basah-bandung-sin-tradisional-11.jpg",
    desc: "Bola ketan pandan kenyal dengan isian gula merah cair yang lumer di mulut dan balutan kelapa parut."
  },
  {
    id: "serabi-kinca",
    name: "Serabi Kinca Gula Merah",
    cat: "manis",
    badge: "Hangat & Lembut",
    img: "serabi-kinca-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Serabi Bandung bertekstur empuk berpori dengan siraman kuah kinca santan gula aren asli."
  },
  {
    id: "kue-ijo",
    name: "Kue Ijo (Kue Lumpang)",
    cat: "manis",
    badge: "Pandan Asli",
    img: "kue-ijo-kue-basah-bandung-sin-tradisional-05.jpeg",
    desc: "Kue tradisional berlesung pipit dari daun pandan asli, kenyal lembut dengan taburan kelapa parut."
  },
  {
    id: "cantik-manis",
    name: "Cantik Manis (Cente Manis)",
    cat: "manis",
    badge: "Lembut",
    img: "cantik-manis-kue-basah-bandung-sin-tradisional-01.jpeg",
    desc: "Olahan tepung hunkwe lembut dan santan segar dengan taburan mutiara sagu yang manis."
  },
  {
    id: "kue-pelita",
    name: "Kue Pelita Daun Pandan",
    cat: "manis",
    badge: "Harum Pandan",
    img: "pelita-kue-basah-bandung-sin-tradisional-01.jpeg",
    desc: "Kue lembut dua lapis pandan dan santan yang disajikan di dalam takir daun pandan wangi."
  },
  {
    id: "lapis-hijau",
    name: "Kue Lapis Hijau Pandan",
    cat: "manis",
    badge: "Klasik",
    img: "lapis-hijau-kue-basah-bandung-sin-tradisional-01.jpeg",
    desc: "Kue lapis beras kenyal berlapis-lapis dengan aroma pandan alami tanpa bahan pengawet."
  },
  {
    id: "lapis-coklat",
    name: "Kue Lapis Coklat",
    cat: "manis",
    badge: "Klasik",
    img: "lapis-coklat-kue-basah-bandung-sin-tradisional-01.jpeg",
    desc: "Kue lapis tradisional perpaduan rasa coklat dan santan gurih yang disukai seluruh anggota keluarga."
  },
  {
    id: "singkong-bangkok",
    name: "Singkong Thailand / Bangkok",
    cat: "manis",
    badge: "Spesial",
    img: "singkong-bangkok-kue-basah-bandung-sin-tradisional-02.jpg",
    desc: "Singkong empuk pilihan yang dimasak manis lembut dengan siraman vla santan gurih kental."
  },
  {
    id: "ongol-ongol",
    name: "Ongol-Ongol Gula Merah",
    cat: "manis",
    badge: "Tradisional",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Kue kenyal lembut dari gula aren asli dengan balutan kelapa parut kukus yang gurih."
  },
  {
    id: "kolak-candil",
    name: "Kolak Biji Salak & Candil",
    cat: "manis",
    badge: "Segar",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-47.jpg",
    desc: "Biji salak ubi kuning kenyal dan kolang-kaling dalam kuah gula merah aren serta santan gurih."
  },
  {
    id: "kue-sus-vla",
    name: "Kue Sus Vla Vanila",
    cat: "manis",
    badge: "Favorit Snack Box",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-37.jpg",
    desc: "Kulit sus panggang lembut dengan isian vla susu vanila yang manis pas dan segar."
  },
  {
    id: "bolu-kukus",
    name: "Bolu Kukus Mekar",
    cat: "manis",
    badge: "Favorit Snack Box",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-39.jpg",
    desc: "Bolu kukus mekar bertekstur empuk dan wangi, cocok untuk isian Snack Box maupun teman minum teh."
  },

  // GURIH & ASIN
  {
    id: "serabi-oncom",
    name: "Serabi Oncom Pedas Gurih",
    cat: "gurih",
    badge: "Terlaris Gurih",
    img: "serabi-oncom-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Serabi Bandung hangat dengan taburan tumis oncom bumbu kencur khas Sunda dan irisan cabai rawit."
  },
  {
    id: "talam-ebi",
    name: "Talam Ebi Spesial",
    cat: "gurih",
    badge: "Khas Sin 1978",
    img: "talam-ebi-kue-basah-bandung-sin-tradisional-gmn-01.jpg",
    desc: "Kue talam santan gurih dengan taburan ebi sangrai berbumbu harum di bagian atasnya."
  },
  {
    id: "lemper-ayam",
    name: "Lemper Ayam Spesial",
    cat: "gurih",
    badge: "Favorit Rapat",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-38.jpg",
    desc: "Ketan kukus santan pulen berisi suwiran daging ayam bumbu rempah gurih dalam balutan daun pisang."
  },
  {
    id: "risoles-ragout",
    name: "Risoles Ragout Ayam Sayur",
    cat: "gurih",
    badge: "Terlaris Gurih",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-20.jpg",
    desc: "Risoles goreng keemasan dengan kulit lembut dan isian ragout ayam wortel kentang yang creamy."
  },
  {
    id: "pastel-risoles-segitiga",
    name: "Risoles & Pastel Segitiga",
    cat: "gurih",
    badge: "Gurih Renyah",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-40.jpg",
    desc: "Gorengan gurih renyah lengkap dengan cabai rawit hijau segar untuk sajian rapat dan acara."
  },
  {
    id: "kroket-panada",
    name: "Kroket / Roti Goreng Isi",
    cat: "gurih",
    badge: "Mengenyangkan",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-36.jpg",
    desc: "Olahan roti/kentang goreng berbalut tepung panir keemasan dengan isian gurih lezat."
  },
  {
    id: "bakwan-udang",
    name: "Bakwan Udang Spesial",
    cat: "gurih",
    badge: "Lengkap Saus",
    img: "foto_produk/foto-produk-kue-basah-bandung-sin-tradisional-32.jpg",
    desc: "Bakwan sayur udang renyah gurih disajikan dengan saus sambal dalam kemasan higienis."
  },

  // PAKET SNACK BOX & KUE TAMPAH
  {
    id: "paket-snack-box",
    name: "Paket Snack Box Acara & Rapat",
    cat: "paket",
    badge: "Hemat s.d. 40% via WA",
    featured: true,
    hotBadge: "🔥 Terlaris Acara",
    img: "snack-box-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Paket kustom isi 3–5 kue basah segar (kombinasi manis & gurih) untuk rapat kantor, pengajian, seminar & syukuran."
  },
  {
    id: "kue-tampah-klasik",
    name: "Kue Tampah Tradisional Klasik",
    cat: "paket",
    badge: "Hemat s.d. 40% via WA",
    featured: true,
    hotBadge: "👑 Favorit Hantaran",
    img: "tampah-kue-basah-bandung-sin-tradisional-53.jpg",
    desc: "Sajian aneka jajanan pasar warna-warni ditata rapi di atas tampah bambu beralas daun pisang untuk syukuran & arisan."
  },
  {
    id: "kue-tampah-spesial",
    name: "Kue Tampah Spesial Besar",
    cat: "paket",
    badge: "Acara Besar",
    img: "tampah-kue-basah-bandung-sin-tradisional-70.jpg",
    desc: "Paket tampah ukuran besar dengan variasi lengkap kue basah manis dan gurih untuk jamuan tamu VIP & keluarga."
  },
  {
    id: "paket-kombinasi",
    name: "Paket Kombinasi Varian Terlaris",
    cat: "paket",
    badge: "Harga Toko Terbaik",
    featured: true,
    hotBadge: "🏅 Terlaris 1978",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Kombinasi kue basah paling dicari (Serabi Oncom, Bugis, Nagasari, Dadar Gulung, Putri Noong & Talam) siap saji."
  },
  {
    id: "paket-tray",
    name: "Paket Tray Jajanan Pasar",
    cat: "paket",
    badge: "Praktis & Rapi",
    img: "tray-kue-basah-bandung-sin-tradisional-04.jpg",
    desc: "Kemasan nampan/tray modern yang praktis dibawa sebagai buah tangan, hantaran keluarga, atau suguhan rapat."
  },
  {
    id: "paket-hampers",
    name: "Hampers & Paket Hari Raya",
    cat: "paket",
    badge: "Edisi Spesial",
    img: "paket-natal-kue-basah-bandung-sin-tradisional-100.jpg",
    desc: "Paket hantaran eksklusif berisi kue basah pilihan untuk bingkisan Lebaran, Natal, Imlek, dan hari spesial."
  },
  {
    id: "paket-imlek",
    name: "Paket Spesial Imlek & Syukuran",
    cat: "paket",
    badge: "Pre-Order WA",
    img: "imlek-2024-kue-basah-bandung-sin-tradisional-88.jpg",
    desc: "Rangkaian kue tradisional pilihan penuh makna untuk perayaan keluarga dan hantaran kerabat."
  },

  // KERINGAN KEMASAN TOPLES
  {
    id: "peyek-teri",
    name: "Peyek Teri Renyah (Toples)",
    cat: "keringan",
    badge: "Keringan Toples",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Rempeyek tipis renyah dengan taburan ikan teri pilihan dan aroma daun jeruk dalam kemasan toples."
  },
  {
    id: "peyek-kacang",
    name: "Peyek Kacang Tanah (Toples)",
    cat: "keringan",
    badge: "Keringan Toples",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Rempeyek kacang tanah gurih dan renyah tahan lama, cocok untuk stok camilan rumah maupun oleh-oleh."
  },
  {
    id: "gabus-keju",
    name: "Telur Gabus Keju (Toples)",
    cat: "keringan",
    badge: "Keringan Toples",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Camilan stik gabus keju yang gurih, renyah, dan lumer di mulut dalam kemasan praktis."
  },
  {
    id: "sale-pisang",
    name: "Sale Pisang Manis Renyah",
    cat: "keringan",
    badge: "Oleh-Oleh Bandung",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Olahan sale pisang khas Bandung yang manis alami dan renyah untuk buah tangan keluarga."
  },
  {
    id: "popcorn-caramel",
    name: "Popcorn Caramel (Toples)",
    cat: "keringan",
    badge: "Keringan Toples",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Popcorn renyah berbalut karamel manis legit dalam kemasan toples kedap udara."
  },
  {
    id: "samosa-springroll",
    name: "Samosa & Spring Roll Renyah",
    cat: "keringan",
    badge: "Camilan Gurih",
    img: "kombinasi-kue-basah-bandung-sin-tradisional-09.jpg",
    desc: "Kulit lumpia/samosa renyah dengan isian gurih berbumbu rempah khas."
  }
];

const CATEGORY_LABELS = {
  all: "Semua Menu Kue Basah & Paket",
  manis: "Kue Basah Tradisional (Manis)",
  gurih: "Jajanan Pasar Gurih & Asin",
  paket: "Paket Snack Box, Tampah & Hantaran",
  keringan: "Keringan Kemasan Toples & Oleh-Oleh"
};

let currentFilter = "all";
let currentSearch = "";
let cart = {}; // { [id]: qty }
let activeModalProductId = null;
let modalTempQty = 1;

// 1. CEK STATUS JAM BUKA TOKO (06.30 - 17.00 WIB)
function updateStoreOpenBadge() {
  const badge = document.getElementById("store-open-status");
  if (!badge) return;
  try {
    const nowWIB = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const mins = nowWIB.getHours() * 60 + nowWIB.getMinutes();
    const openMins = 6 * 60 + 30;  // 06:30
    const closeMins = 17 * 60;     // 17:00
    if (mins >= openMins && mins < closeMins) {
      badge.textContent = "🟢 Sedang Buka (06.30–17.00 WIB)";
      badge.style.background = "#dcfce7";
      badge.style.color = "#14532d";
    } else {
      badge.textContent = "🕒 Buka Setiap Pagi (06.30–17.00 WIB)";
      badge.style.background = "#fef9c3";
      badge.style.color = "#854d0e";
    }
  } catch (e) {
    badge.textContent = "🟢 Buka Setiap Hari (06.30–17.00 WIB)";
  }
}

// 2. RENDER SEKSI SOROTAN "MENU ANDALAN & PAKET ACARA"
function renderFeatured() {
  const featuredContainer = document.getElementById("featured-grid");
  if (!featuredContainer) return;
  const featuredItems = PRODUCTS.filter(p => p.featured);
  featuredContainer.innerHTML = featuredItems.map(item => `
    <article class="featured-card">
      <div class="featured-img-wrap" onclick="openProductModal('${item.id}')">
        <img
          src="assets/img/${item.img}"
          alt="${item.name} - Sin Tradisional Bandung Jl. Situ No. 41"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/img/logo-sin-tradisional.png';"
        >
      </div>
      <div class="featured-body">
        <div>
          <div class="featured-badges">
            <span class="badge-hot">${item.hotBadge || "🔥 Terlaris"}</span>
            <span class="badge-save">${item.badge}</span>
          </div>
          <h3 class="featured-title" onclick="openProductModal('${item.id}')">${item.name}</h3>
          <p class="featured-desc">${item.desc}</p>
        </div>
        <button type="button" class="featured-cta-btn" onclick="changeQty('${item.id}', 1)">
          + Pilih Paket Ini
        </button>
      </div>
    </article>
  `).join("");
}

// 3. RENDER KATALOG UTAMA (FILTER KATEGORI + PENCARIAN REAL-TIME)
function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  const heading = document.getElementById("catalog-heading");
  const countEl = document.getElementById("catalog-count");
  if (!grid) return;

  const q = currentSearch.trim().toLowerCase();
  const filtered = PRODUCTS.filter(item => {
    const matchCat = currentFilter === "all" || item.cat === currentFilter;
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (heading) {
    heading.textContent = q
      ? `Hasil Pencarian: "${currentSearch}"`
      : (CATEGORY_LABELS[currentFilter] || "Semua Menu");
  }
  if (countEl) {
    countEl.textContent = `${filtered.length} Menu`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; background:#fff; padding:28px; border-radius:14px; text-align:center; border:1px solid #e7e5e4;">
        <p style="font-size:1.05rem; font-weight:700; color:#14532d; margin-bottom:6px;">Menu "${currentSearch}" belum ditemukan di daftar ini.</p>
        <p style="font-size:0.9rem; color:#57534e; margin-bottom:14px;">Silakan tanyakan langsung ketersediaan kue kepada Kasir Toko kami via WhatsApp:</p>
        <button type="button" class="featured-cta-btn" onclick="resetSearchAndFilter()">Tampilkan Semua Menu</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const qty = cart[item.id] || 0;
    const inCartClass = qty > 0 ? "in-cart" : "";
    const actionHtml = qty > 0
      ? `
        <div class="card-stepper" aria-label="Pengatur jumlah ${item.name}">
          <button type="button" class="step-btn" onclick="changeQty('${item.id}', -1)" aria-label="Kurangi ${item.name}">−</button>
          <span class="step-qty">${qty} dipilih</span>
          <button type="button" class="step-btn" onclick="changeQty('${item.id}', 1)" aria-label="Tambah ${item.name}">+</button>
        </div>
      `
      : `
        <button type="button" class="add-btn-plus" onclick="changeQty('${item.id}', 1)">
          <span>+</span> Pesan
        </button>
      `;

    return `
      <article class="card ${inCartClass}">
        <div class="card-img-wrap" onclick="openProductModal('${item.id}')">
          <img
            src="assets/img/${item.img}"
            alt="${item.name} - Kue Basah Sin Tradisional Bandung"
            loading="lazy"
            onerror="this.outerHTML='<div style=\\'padding:16px;text-align:center;color:#14532d;font-weight:700;\\'>🥮<br>${item.name}<br><small style=\\'font-weight:400;color:#57534e\\'>Sin Tradisional 1978</small></div>'"
          >
          <span class="card-badge-top">${item.badge || "Segar Setiap Hari"}</span>
          <span class="card-zoom-hint">🔍 Detail</span>
        </div>
        <div class="card-body">
          <div>
            <h3 class="card-title" onclick="openProductModal('${item.id}')">${item.name}</h3>
            <p class="card-desc">${item.desc}</p>
          </div>
          <div class="card-footer">
            ${actionHtml}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function resetSearchAndFilter() {
  currentSearch = "";
  currentFilter = "all";
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.hidden = true;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === "all");
  });
  renderCatalog();
}

// 4. MANAJEMEN KERANJANG PESANAN & SINKRONISASI FORM WA
function changeQty(productId, delta) {
  const current = cart[productId] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = next;
  }
  syncCartUI();
  renderCatalog();
}

function clearCart() {
  cart = {};
  const notes = document.getElementById("order-notes");
  if (notes) notes.value = "";
  syncCartUI();
  renderCatalog();
}

function syncCartUI() {
  const ids = Object.keys(cart);
  const totalTypes = ids.length;
  const totalPcs = ids.reduce((acc, id) => acc + cart[id], 0);

  // Update Sticky Bottom Cart Bar
  const stickyBar = document.getElementById("sticky-cart-bar");
  const stickyBadge = document.getElementById("sticky-cart-badge");
  const stickyTitle = document.getElementById("sticky-cart-title");
  if (stickyBar) {
    if (totalTypes > 0) {
      stickyBar.hidden = false;
      if (stickyBadge) stickyBadge.textContent = `${totalPcs} Item`;
      if (stickyTitle) stickyTitle.textContent = `${totalTypes} Jenis Kue Dipilih`;
    } else {
      stickyBar.hidden = true;
    }
  }

  // Update Ringkasan Keranjang di Seksi #pesan-wa
  const summaryBox = document.getElementById("cart-summary-box");
  const summaryCount = document.getElementById("cart-summary-count");
  const itemsList = document.getElementById("cart-items-list");
  if (summaryBox && itemsList) {
    if (totalTypes > 0) {
      summaryBox.hidden = false;
      if (summaryCount) summaryCount.textContent = totalTypes;
      itemsList.innerHTML = ids.map(id => {
        const prod = PRODUCTS.find(p => p.id === id);
        const name = prod ? prod.name : id;
        const qty = cart[id];
        return `
          <div class="cart-row">
            <span class="cart-row-name">${name}</span>
            <div class="cart-row-controls">
              <button type="button" class="step-btn" onclick="changeQty('${id}', -1)">−</button>
              <span class="step-qty">${qty}</span>
              <button type="button" class="step-btn" onclick="changeQty('${id}', 1)">+</button>
            </div>
          </div>
        `;
      }).join("");
    } else {
      summaryBox.hidden = true;
      itemsList.innerHTML = "";
    }
  }

  // Sinkronkan ke Textarea #order-notes
  const notes = document.getElementById("order-notes");
  if (notes) {
    const lines = ids.map(id => {
      const prod = PRODUCTS.find(p => p.id === id);
      return `- ${prod ? prod.name : id}: ${cart[id]} pcs/paket`;
    });
    notes.value = lines.join("\n");
  }
}

function scrollToOrderForm() {
  const el = document.getElementById("pesan-wa");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// 5. MODAL DETAIL PRODUK (RAMAH USIA 40-60 TAHUN)
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  activeModalProductId = productId;
  modalTempQty = cart[productId] || 1;

  const modal = document.getElementById("product-modal");
  const img = document.getElementById("modal-img");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const catBadge = document.getElementById("modal-cat-badge");
  const qtyVal = document.getElementById("modal-qty-val");
  const addBtn = document.getElementById("modal-add-btn");

  if (img) {
    img.src = `assets/img/${prod.img}`;
    img.alt = `${prod.name} - Sin Tradisional Bandung`;
    img.onerror = function () {
      this.src = "assets/img/logo-sin-tradisional.png";
    };
  }
  if (title) title.textContent = prod.name;
  if (desc) desc.textContent = prod.desc;
  if (catBadge) catBadge.textContent = prod.badge || "Menu Sin Tradisional";
  if (qtyVal) qtyVal.textContent = modalTempQty;
  if (addBtn) {
    addBtn.textContent = cart[productId]
      ? `Simpan Jumlah (${modalTempQty})`
      : `+ Masukkan ke Pesanan WA (${modalTempQty})`;
  }

  if (modal) modal.hidden = false;
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.hidden = true;
  activeModalProductId = null;
}

// 6. KIRIM KE WHATSAPP (ADMIN 2 KASIR FAST RESPON vs ADMIN 1 MANAGER PO)
function sendWhatsApp(phone, roleLabel) {
  const name = (document.getElementById("cust-name").value || "").trim() || "Pelanggan Sin Tradisional";
  const type = document.getElementById("order-type").value;
  const notes = (document.getElementById("order-notes").value || "").trim() || "- Mohon info menu kue basah yang tersedia hari ini";

  const greeting = roleLabel === "Kasir"
    ? "Halo Kasir Toko Sin Tradisional (Jl. Situ No. 41),"
    : "Halo Manager Pre-Order Sin Tradisional (Jl. Situ No. 41),";

  const text = `${greeting}\n\nNama Pemesan: ${name}\nJenis Pesanan: ${type}\n\nDaftar Kue & Jumlah:\n${notes}\n\nMohon info ketersediaan & total Harga Toko-nya. Terima kasih!`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

// 7. EVENT LISTENERS (FILTER, SEARCH, MODAL)
document.addEventListener("DOMContentLoaded", () => {
  updateStoreOpenBadge();
  renderFeatured();
  renderCatalog();

  // Filter Kategori
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderCatalog();
    });
  });

  // Pencarian Instan Real-Time
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value;
      if (clearBtn) clearBtn.hidden = !currentSearch;
      renderCatalog();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      currentSearch = "";
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      clearBtn.hidden = true;
      renderCatalog();
    });
  }

  // Modal Stepper & Add Button
  const minusBtn = document.getElementById("modal-minus-btn");
  const plusBtn = document.getElementById("modal-plus-btn");
  const qtyVal = document.getElementById("modal-qty-val");
  const modalAddBtn = document.getElementById("modal-add-btn");
  const modalBackdrop = document.getElementById("product-modal");

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      if (modalTempQty > 1) {
        modalTempQty--;
        if (qtyVal) qtyVal.textContent = modalTempQty;
        if (modalAddBtn) modalAddBtn.textContent = `+ Masukkan ke Pesanan WA (${modalTempQty})`;
      }
    });
  }
  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      modalTempQty++;
      if (qtyVal) qtyVal.textContent = modalTempQty;
      if (modalAddBtn) modalAddBtn.textContent = `+ Masukkan ke Pesanan WA (${modalTempQty})`;
    });
  }
  if (modalAddBtn) {
    modalAddBtn.addEventListener("click", () => {
      if (activeModalProductId) {
        cart[activeModalProductId] = modalTempQty;
        syncCartUI();
        renderCatalog();
      }
      closeProductModal();
    });
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", e => {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeProductModal();
  });
});
