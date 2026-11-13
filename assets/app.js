/**
 * ============================================================================
 * Website Resmi Sin Tradisional (sintradisional.com) - Katalog End-User,
 * Pembanding Harga Toko vs Aplikasi Online, Stok Live POS & Info Snack Box PO
 * ============================================================================
 */

const POS_PUBLIC_STOK_URL =
  'https://script.google.com/macros/s/AKfycbyCBySvO-HcLsmnmchp1RL4WC8AKSQ2iMxru2OZMoJKteyqZjvcnvCY9d4IiC_Y2ur-/exec?action=public_stok';

const WA_KASIR_PHONE = '62895330012673';
const WA_MANAGER_PHONE = '62895412228351';

const UTM_SOURCE_STORAGE_KEY = 'sintra_utm_source';
const UTM_SOURCE_LABELS = {
  ojol: 'Kartu Sisipan Ojol',
  toko: 'Stiker Kemasan Toko'
};

function captureUtmSource() {
  try {
    const search = (window.location && window.location.search) || '';
    let utm = '';
    if (typeof URLSearchParams !== 'undefined') {
      utm = (new URLSearchParams(search).get('utm_source') || '').trim().toLowerCase();
    } else {
      const m = search.match(/[?&]utm_source=([^&]+)/i);
      utm = m ? decodeURIComponent(m[1]).trim().toLowerCase() : '';
    }
    if (utm) {
      sessionStorage.setItem(UTM_SOURCE_STORAGE_KEY, utm);
    }
  } catch (e) {
    // Abaikan jika sessionStorage tidak tersedia
  }
}

function getUtmSourceLabel() {
  try {
    const saved = (sessionStorage.getItem(UTM_SOURCE_STORAGE_KEY) || '').trim().toLowerCase();
    return UTM_SOURCE_LABELS[saved] || '';
  } catch (e) {
    return '';
  }
}

function appendUtmSourceNote(message) {
  const label = getUtmSourceLabel();
  if (!label) return message;
  return message + '\n\nSumber Katalog: ' + label;
}

function decorateWaLinksWithUtm() {
  const utmLabel = getUtmSourceLabel();
  if (!utmLabel) return;
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
    try {
      const url = new URL(link.href);
      const baseText = url.searchParams.get('text') || 'Halo Sin Tradisional (Jl. Situ No. 41),';
      if (baseText.indexOf('Sumber Katalog:') === -1) {
        url.searchParams.set('text', baseText + '\n\nSumber Katalog: ' + utmLabel);
        link.href = url.toString();
      }
    } catch (e) {}
  });
}

// Katalog visual harian & paket acara dari 4 folder aktif (regular, kue kue, Spesial, paket)
const PRODUCTS = [
  // ==================== KATEGORI REGULAR ====================
  {
    id: 'bugis',
    sku: 'INT-KB-BGS-B1K',
    name: 'Kue Bugis',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-bugis-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    alt: 'Kue Bugis bungkus daun pisang tanpa pengawet Sin Tradisional Bandung',
    desc: 'Kue ketan hitam/hijau kenyal dengan isian unti kelapa gula aren asli, dibungkus daun pisang segar.',
    featured: true
  },
  {
    id: 'nagasari',
    sku: 'INT-KB-NAG-B1K',
    name: 'Nagasari',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-nagasari-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue pisang lembut berbalut tepung beras santan wangi pandan dan daun pisang kukus.'
  },
  {
    id: 'bubur-lolos',
    sku: 'INT-KB-BBL-B1K',
    name: 'Bubur Lolos',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-bubur-lolos-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Bubur sumsum gurih berpadu kinca gula merah legit, lembut dibungkus daun pisang.'
  },
  {
    id: 'dadar-gulung',
    sku: 'KSN-KB-DDG-B2',
    name: 'Dadar Gulung',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika (Isi 2)',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/regular/foto-produk-dadar-gulung-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kulit dadar pandan berpori halus berisi kelapa parut manis gula merah. Kemasan mika isi 2 pcs.'
  },
  {
    id: 'talam-pandan',
    sku: 'INT-KB-TLP-B1K',
    name: 'Talam Pandan',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-talam-pandan-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Perpaduan lapisan pandan hijau harum dan santan putih gurih yang lembut lumer.'
  },
  {
    id: 'talam-ubi',
    sku: 'INT-KB-TLU-B1K',
    name: 'Talam Ubi',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-talam-ubi-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue talam berbahan ubi pilihan yang legit dan gurih, 100% tanpa pengawet.'
  },
  {
    id: 'talam-pisang',
    sku: 'INT-KB-TPG-B1',
    name: 'Talam Pisang',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-talam-pisang-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue talam manis dengan irisan pisang raja wangi, tekstur kenyal dan lembut.'
  },
  {
    id: 'talam-ebi',
    sku: 'INT-KB-TLE-B1',
    name: 'Talam Ebi (Asin)',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-talam-asin-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Talam gurih klasik dengan taburan tumisan ebi wangi & bawang goreng renyah.',
    featured: true
  },
  {
    id: 'lupis',
    sku: 'INT-KB-LPS-B1',
    name: 'Kue Lupis',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 porsi + gula merah',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-lupis-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Lupis ketan segitiga kenyal dengan kelapa parut gurih dan siraman kinca gula aren.'
  },
  {
    id: 'putri-noong',
    sku: 'INT-KB-PTN-B1K',
    name: 'Putri Noong',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika',
    hargaToko: 5000,
    hargaOnline: 6000,
    img: 'assets/img/regular/foto-produk-putri-noong-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue tradisional singkong parut balut pisang manis di tengahnya dengan taburan kelapa segar.'
  },
  {
    id: 'putu-mayang',
    sku: 'INT-KB-PTM-B1',
    name: 'Putu Mayang',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika + kinca',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-putu-mayang-hijau-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    variants: [
      { label: 'Hijau Pandan', img: 'assets/img/regular/foto-produk-putu-mayang-hijau-kue-basah-bandung-sin-tradisional-261113-01.jpg' },
      { label: 'Merah Muda', img: 'assets/img/regular/foto-produk-putu-mayang-pink-kue-basah-bandung-sin-tradisional-261113-01.jpg' },
      { label: 'Putih Ori', img: 'assets/img/regular/foto-produk-putu-mayang-putih-kue-basah-bandung-sin-tradisional-261113-01.jpg' }
    ],
    desc: 'Putu mayang tradisional tersedia pilihan warna hijau pandan, pink, dan putih, lengkap dengan kuah kinca santan gula merah.'
  },
  {
    id: 'serabi-kinca',
    sku: 'KSN-KB-SRB-B1',
    name: 'Serabi Kinca',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika + kinca',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-serabi-kinca-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Serabi pandan empuk khas Bandung disajikan dengan kuah kinca gula merah santan gurih.'
  },
  {
    id: 'serabi-oncom',
    sku: 'KSN-KB-SRO-B1',
    name: 'Serabi Oncom',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-serabi-oncom-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Serabi gurih khas Bandung dengan topping tumisan oncom berbumbu pedas gurih sedap.'
  },
  {
    id: 'kelepon',
    sku: 'KSN-KB-KLP-B2',
    name: 'Kelepon',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika',
    hargaToko: 5000,
    hargaOnline: 6000,
    img: 'assets/img/regular/foto-produk-kelepon-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Bola ketan kenyal isi gula merah lumer saat digigit, dibalut parutan kelapa muda.'
  },
  {
    id: 'ongol-ongol',
    sku: 'KSN-KB-ONG-B2',
    name: 'Ongol-Ongol',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika (Isi 2)',
    hargaToko: 5000,
    hargaOnline: 6000,
    img: 'assets/img/regular/foto-produk-ongol-ongol-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue sagu gula merah kenyal manis dengan baluran kelapa parut kukus.'
  },
  {
    id: 'kue-ijo',
    sku: 'INT-KB-KIJ-B1',
    name: 'Kue Ijo',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-kue-basah-bandung-sin-tradisional-05.jpg',
    desc: 'Kue basah panggang/kukus aroma pandan wangi beralas daun pisang segar.'
  },
  {
    id: 'cantik-manis',
    sku: 'KSN-KB-CTM-B1',
    name: 'Cantik Manis',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/regular/foto-produk-cantik-manis-kue-basah-bandung-sin-tradisional-16.jpeg',
    desc: 'Hunkwe lembut manis gurih dengan taburan sagu mutiara warna-warni.'
  },
  {
    id: 'ketimus',
    sku: 'INT-KB-KTM-B2K',
    name: 'Ketimus',
    category: 'regular',
    posCat: 'Regular',
    unit: '1 mika (Isi 2)',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Olahan singkong parut manis gula aren dan kelapa muda, dibungkus daun pisang kukus.'
  },

  // ==================== KATEGORI SPESIAL ====================
  {
    id: 'bugis-mandi-4',
    sku: 'INT-KB-BGM-B4',
    name: 'Bugis Mandi',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup (Isi 4)',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/Spesial/foto-produk-bugis-mandi-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue Bugis lembut disiram vla santan putih kental gurih dalam kemasan cup praktis isi 4 pcs.',
    featured: true
  },
  {
    id: 'bugis-mandi-6',
    sku: 'INT-KB-BGM-B6',
    name: 'Bugis Mandi',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup (Isi 6)',
    hargaToko: 15000,
    hargaOnline: 18500,
    img: 'assets/img/Spesial/foto-produk-bugis-mandi-kue-basah-bandung-sin-tradisional-261113-02.jpg',
    desc: 'Porsi keluarga isi 6 pcs Kue Bugis lembut dengan siraman vla santan kental gurih nikmat.'
  },
  {
    id: 'biji-salak-sagu',
    sku: 'INT-KB-BJS-B1',
    name: 'Biji Salak Sagu',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/Spesial/foto-produk-kue-kue-biji-salak-sagu-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Biji salak kenyal dengan kuah gula merah kental manis legit dalam cup siap santap.'
  },
  {
    id: 'lapis-coklat',
    sku: 'INT-KB-LPC-B1',
    name: 'Lapis Coklat (Cup)',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/Spesial/foto-produk-lapis-coklat-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue lapis basah lembut dengan perpaduan rasa coklat legit dan santan gurih.'
  },
  {
    id: 'lapis-hijau',
    sku: 'INT-KB-LPH-B1',
    name: 'Lapis Hijau (Cup)',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/Spesial/foto-produk-lapis-hijau-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue lapis pandan hijau berlapis rapi, wangi pandan asli dan kenyal lembut.'
  },
  {
    id: 'pelita',
    sku: 'INT-KB-PLT-B1',
    name: 'Kue Pelita (Cup)',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/Spesial/foto-produk-pelita-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Lapisan santan putih lembut di atas sari pandan gula merah yang manis wangi.'
  },
  {
    id: 'kolak-pisang',
    sku: 'INT-KB-KPG-B1',
    name: 'Kolak Pisang',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup',
    hargaToko: 10000,
    hargaOnline: 12500,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Pisang manis legit dengan kuah santan gula merah harum pandan dalam kemasan cup.'
  },
  {
    id: 'singkong-bangkok',
    sku: 'INT-KB-SKB-B1',
    name: 'Singkong Bangkok',
    category: 'spesial',
    posCat: 'Spesial',
    unit: '1 cup',
    hargaToko: 15000,
    hargaOnline: 18500,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Singkong empuk legit bersiram saus santan kental gurih dalam kemasan cup siap santap.'
  },

  // ==================== KATEGORI KUE & GURIH (kue kue) ====================
  {
    id: 'otak-otak',
    sku: 'KSN-KB-OTK-B5',
    name: 'Otak-Otak',
    category: 'kue',
    posCat: 'Kue',
    badgeLabel: 'Gurih',
    unit: '1 bungkus (Isi 5)',
    hargaToko: 20000,
    hargaOnline: 30000,
    img: 'assets/img/kue kue/foto-produk-kue-kue-otak-otak-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Otak-otak ikan bakar bungkus daun pisang lengkap dengan sambal kacang. Jauh lebih murah beli langsung Harga Toko (hemat Rp 10.000 dibanding Ojol!).',
    featured: true
  },
  {
    id: 'risoles-ragout',
    sku: 'KSN-KB-RSR-B2',
    name: 'Risoles Ragout',
    category: 'kue',
    posCat: 'Kue',
    badgeLabel: 'Gurih',
    unit: '1 mika (Isi 2)',
    hargaToko: 11000,
    hargaOnline: 16500,
    img: 'assets/img/kue kue/foto-produk-kue-kue-risoles-ety-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Risoles goreng renyah isi ragout ayam & sayuran creamy plus cabai rawit.',
    featured: true
  },
  {
    id: 'lemper-ayam',
    sku: 'PTS-KB-LPA-B1',
    name: 'Lemper Ayam',
    category: 'kue',
    posCat: 'Kue',
    badgeLabel: 'Gurih',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/kue kue/foto-produk-lemper-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Ketan pulen gurih berisi suwiran daging ayam berbumbu rempah tradisional.'
  },
  {
    id: 'soes-mini',
    sku: 'PTS-KB-SOS-B3',
    name: 'Soes Mini',
    category: 'kue',
    posCat: 'Kue',
    unit: '1 mika (Isi 3)',
    hargaToko: 5000,
    hargaOnline: 6500,
    img: 'assets/img/kue kue/foto-produk-soes-mini-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue sus mini lembut berisi vla vanila manis creamy, praktis isi 3 pcs per mika.'
  },
  {
    id: 'mochi',
    sku: 'KSN-KB-MCH-B1',
    name: 'Mochi Pandan Kacang',
    category: 'kue',
    posCat: 'Kue',
    unit: '1 mika',
    hargaToko: 8000,
    hargaOnline: 13000,
    img: 'assets/img/kue kue/foto-produk-kue-kue-mochi-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Mochi kenyal lembut isi kacang tanah manis gurih.'
  },
  {
    id: 'bolu-pisang',
    sku: 'KSN-KB-BLP-B1',
    name: 'Bolu Pisang',
    category: 'kue',
    posCat: 'Kue',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 7000,
    img: 'assets/img/kue kue/foto-produk-kue-kue-bolu-pisang-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Bolu pisang panggang empuk dan harum aroma pisang matang.'
  },
  {
    id: 'cucur',
    sku: 'KSN-KB-CCR-B1',
    name: 'Kue Cucur',
    category: 'kue',
    posCat: 'Kue',
    unit: '1 pcs',
    hargaToko: 4000,
    hargaOnline: 5500,
    img: 'assets/img/kue kue/foto-produk-kue-kue-cucur-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue cucur gula merah bersarang cantik dengan pinggiran renyah dan tengah empuk.'
  },
  {
    id: 'lapis-cianjur',
    sku: 'KSN-KB-LPJ-B1',
    name: 'Lapis Cianjur',
    category: 'kue',
    posCat: 'Kue',
    unit: '1 pcs',
    hargaToko: 5000,
    hargaOnline: 7000,
    img: 'assets/img/kue kue/foto-produk-kue-kue-lapis-cianjur-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Kue lapis tradisional kenyal manis khas rumahan, tersedia varian lapis warna & pepe coklat.'
  },
  {
    id: 'baso-goreng',
    sku: 'KSN-KB-BSG-B1',
    name: 'Baso Goreng',
    category: 'kue',
    posCat: 'Kue',
    badgeLabel: 'Gurih',
    unit: '1 porsi',
    hargaToko: 8000,
    hargaOnline: 13000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Baso goreng renyah gurih siap santap untuk camilan harian di toko.'
  },
  {
    id: 'siomay-goreng',
    sku: 'KSN-KB-SMG-B2',
    name: 'Siomay Goreng',
    category: 'kue',
    posCat: 'Kue',
    badgeLabel: 'Gurih',
    unit: '1 mika (Isi 2)',
    hargaToko: 12000,
    hargaOnline: 20000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Siomay goreng renyah gurih kemasan mika isi 2 pcs.'
  },
  {
    id: 'ketan-bumbu',
    sku: 'KSN-KB-KTB-B1',
    name: 'Ketan Bumbu',
    category: 'kue',
    posCat: 'Kue',
    badgeLabel: 'Gurih',
    unit: '1 pcs',
    hargaToko: 6000,
    hargaOnline: 9000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Ketan pulen gurih dengan taburan serundeng bumbu khas tradisional.'
  },

  // ==================== KATEGORI KERINGAN ====================
  {
    id: 'peyek-kacang',
    sku: 'PTS-SN-PYK-B1',
    name: 'Peyek Kacang',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 toples/bungkus',
    hargaToko: 22000,
    hargaOnline: 27000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Rempeyek kacang tanah renyah gurih berbumbu daun jeruk.'
  },
  {
    id: 'peyek-teri',
    sku: 'PTS-SN-PYT-B1',
    name: 'Peyek Teri',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 toples/bungkus',
    hargaToko: 22000,
    hargaOnline: 28000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Rempeyek ikan teri gurih renyah, cocok sebagai lauk maupun camilan.'
  },
  {
    id: 'gabus-keju',
    sku: 'PTS-SN-GBK-B1',
    name: 'Gabus Keju',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 bungkus',
    hargaToko: 18000,
    hargaOnline: 22000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Stik gabus keju renyah gurih dengan rasa keju yang terasa.'
  },
  {
    id: 'sale-pisang',
    sku: 'PTS-SN-SLP-B1',
    name: 'Sale Pisang',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 bungkus',
    hargaToko: 13000,
    hargaOnline: 16000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Sale pisang manis alami renyah khas jajanan tradisional.'
  },
  {
    id: 'samosa-kering',
    sku: 'PTS-SN-SMS-B1',
    name: 'Samosa Kering',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 toples/bungkus',
    hargaToko: 20000,
    hargaOnline: 25000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Samosa mini kering renyah gurih dalam kemasan toples/bungkus praktis.'
  },
  {
    id: 'spring-roll-kering',
    sku: 'PTS-SN-SPR-B1',
    name: 'Spring Roll Kering',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 toples/bungkus',
    hargaToko: 20000,
    hargaOnline: 25000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Lumpia mini kering renyah gurih siap santap untuk camilan keluarga.'
  },
  {
    id: 'popcorn-caramel',
    sku: 'PTS-SN-PPC-B1',
    name: 'Popcorn Caramel',
    category: 'keringan',
    posCat: 'Keringan',
    unit: '1 bungkus',
    hargaToko: 20000,
    hargaOnline: 25000,
    img: 'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg',
    desc: 'Popcorn renyah berbalut karamel manis gurih.'
  },

  // ==================== KATEGORI PAKET ACARA (PRE-ORDER) ====================
  {
    id: 'kue-tampah',
    sku: null,
    name: 'Kue Tampah Tradisional',
    category: 'paket',
    posCat: 'Paket PO',
    isPreOrder: true,
    unit: 'Custom Isi & Ukuran',
    hargaToko: null,
    hargaOnline: null,
    img: 'assets/img/paket/foto-produk-tampah-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Nampan tampah bambu hias daun pisang isi aneka jajanan pasar pilihan. Cocok untuk syukuran, lamaran & acara kantor (Pre-Order WA Manager PO).',
    featured: true
  },
  {
    id: 'kue-tray',
    sku: null,
    name: 'Kue Tray Hantaran',
    category: 'paket',
    posCat: 'Paket PO',
    isPreOrder: true,
    unit: 'Custom Isi & Ukuran',
    hargaToko: null,
    hargaOnline: null,
    img: 'assets/img/paket/foto-produk-tray-kue-basah-bandung-sin-tradisional-261113-01.jpg',
    desc: 'Sajian kue basah tertata rapi di tray praktis tutup transparan untuk suguhan rapat & hantaran keluarga (Pre-Order WA Manager PO).'
  }
];

// Penampung dinamis jika ada SKU baru dari API POS (?action=public_stok) yang belum masuk ke PRODUCTS
const EXTRA_STORE_ITEMS = [];

// Showcase informasi menu rekomendasi Snack Box (Pre-Order saja, TIDAK dijual harian di toko & TANPA harga)
const SNACKBOX_SHOWCASE = [
  { id: 'sb-risoles-1', name: 'Risoles Ragout Satuan', img: 'assets/img/Snack box/foto-produk-kue-kue-risoles-ety-kue-basah-bandung-sin-tradisional-261113-02.jpg', desc: 'Kemasan satuan plastik higienis lengkap dengan cabai rawit untuk isian snack box.' },
  { id: 'sb-risoles-3', name: 'Risoles Segitiga', img: 'assets/img/Snack box/foto-produk-kue-kue-risoles-segitiga-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Risoles lipat segitiga isi ragout gurih dengan cabai rawit segar.' },
  { id: 'sb-lontong', name: 'Lontong Daging', img: 'assets/img/Snack box/foto-produk-kue-kue-lontong-daging-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Lontong isi olahan daging berbumbu nikmat & mengenyangkan untuk rapat/acara.' },
  { id: 'sb-pukis', name: 'Pukis Keju', img: 'assets/img/Snack box/foto-produk-kue-kue-pukis-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Kue pukis empuk wangi vanila dengan potongan keju gurih.' },
  { id: 'sb-sus', name: 'Kue Sus Vla', img: 'assets/img/Snack box/foto-produk-kue-basah-bandung-sin-tradisional-37.jpg', desc: 'Kue sus klasik kulit lembut berisi vla susu manis creamy.' },
  { id: 'sb-pie-coklat', name: 'Pie Coklat', img: 'assets/img/Snack box/kue-kue-kue-basah-bandung-sin-tradisional-11.jpg', desc: 'Tartlet pie renyah dengan isian coklat lumer manis.' },
  { id: 'sb-pie-keju', name: 'Pie Keju', img: 'assets/img/Snack box/kue-kue-kue-basah-bandung-sin-tradisional-12.jpg', desc: 'Tartlet pie renyah dengan vla susu & parutan keju gurih.' },
  { id: 'sb-donat', name: 'Donat Coklat Meises', img: 'assets/img/Snack box/kue-kue-kue-basah-bandung-sin-tradisional-03.jpg', desc: 'Donat empuk bertabur coklat meises klasik favorit segala usia.' },
  { id: 'sb-brownies', name: 'Brownies Coklat', img: 'assets/img/Snack box/kue-kue-kue-basah-bandung-sin-tradisional-01.jpg', desc: 'Brownies potong lembut beraroma coklat pekat.' },
  { id: 'sb-brownies-kacang', name: 'Brownies Panggang Kacang', img: 'assets/img/Snack box/foto-produk-kue-basah-bandung-sin-tradisional-23.jpg', desc: 'Brownies panggang shiny crust dengan taburan kacang gurih.' },
  { id: 'sb-combro', name: 'Combro Oncom', img: 'assets/img/Snack box/foto-produk-kue-kue-combro-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Singkong goreng gurih berisi sambal oncom pedas khas Sunda.' },
  { id: 'sb-bakwan', name: 'Bakwan Udang + Sambal', img: 'assets/img/Snack box/foto-produk-kue-kue-bakwan-goreng-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Bakwan goreng garing dengan udang utuh & saus sambal kacang.' },
  { id: 'sb-cilok', name: 'Cilok Bumbu Kacang', img: 'assets/img/Snack box/foto-produk-kue-kue-cilok-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Cilok kenyal dalam plastik rapi bersiram saus kacang gurih pedas.' },
  { id: 'sb-lumpia', name: 'Lumpia Goreng', img: 'assets/img/Snack box/foto-produk-kue-basah-bandung-sin-tradisional-18.jpg', desc: 'Lumpia goreng renyah lengkap dengan saus cocol.' },
  { id: 'sb-kroket', name: 'Kroket Panir', img: 'assets/img/Snack box/foto-produk-kue-basah-bandung-sin-tradisional-36.jpg', desc: 'Kroket kentang berbumbu dibalut tepung panir garing.' },
  { id: 'sb-clorot', name: 'Kue Clorot', img: 'assets/img/Snack box/foto-produk-kue-kue-clorot-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Kue tradisional gula merah kenyal dalam lilitan janur kerucut unik.' },
  { id: 'sb-cente-manis', name: 'Cente Manis Plastik', img: 'assets/img/Snack box/foto-produk-kue-kue-cente-manis-kue-basah-bandung-sin-tradisional-261113-03.jpg', desc: 'Hunkwe sagu mutiara dibungkus rapi satuan untuk snack box.' },
  { id: 'sb-bolu-mekar', name: 'Bolu Kukus Mekar Coklat', img: 'assets/img/Snack box/foto-produk-kue-kue-kue-mangkok-coklat-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Bolu kukus mekar lembut kombinasi warna putih dan coklat.' },
  { id: 'sb-mangkok-gumer', name: 'Kue Mangkok Gula Merah', img: 'assets/img/Snack box/foto-produk-kue-kue-kue-mangkok-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Kue mangkok mekar lembut manis legit gula aren.' },
  { id: 'sb-talam-bunga', name: 'Talam Pandan Bunga', img: 'assets/img/Snack box/foto-produk-kue-kue-talam-pandan-bunga-kue-basah-bandung-sin-tradisional-261113-01.jpg', desc: 'Kue pandan santan cetak bunga cantik untuk suguhan eksklusif.' }
];

const CATEGORY_LABELS = {
  all: 'Semua Menu Harian & Paket Toko',
  regular: 'Jajanan Pasar Regular',
  spesial: 'Kue Cup Spesial',
  kue: 'Aneka Kue & Gorengan Gurih',
  keringan: 'Keringan Toples & Camilan Renyah',
  paket: 'Paket Kue Tampah & Tray (Pre-Order)'
};

const ELIGIBLE_DISCOUNT_CATS = new Set(['Regular', 'Spesial', 'Kue']);

let currentFilter = 'all';
let searchQuery = '';
let onlyReadyFilter = false;
let cart = {}; // { itemId: qty }

let liveStockStatus = 'loading'; // 'loading' | 'live' | 'fallback'
let liveStockMeta = { tanggalStok: '', waktuStok: '', totalReady: 0 };
let liveStockBySku = {}; // { [sku]: { stok, hargaToko, hargaOnline, nama, kategori } }

let activeModalItemId = null;
let activeModalVariantIdx = 0;
let modalQty = 1;

function imgUrl(path) {
  return encodeURI(path);
}

function formatRp(num) {
  const n = Math.round(Number(num) || 0);
  return 'Rp ' + n.toLocaleString('id-ID');
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getAllOrderableItems() {
  return PRODUCTS.concat(EXTRA_STORE_ITEMS);
}

function findItemById(id) {
  return getAllOrderableItems().find(function (item) {
    return item.id === id;
  }) || null;
}

function getEffectivePrices(item) {
  if (item.isPreOrder) {
    return { hargaToko: null, hargaOnline: null };
  }
  const live = item.sku ? liveStockBySku[item.sku] : null;
  const hargaToko = (live && live.hargaToko > 0) ? live.hargaToko : item.hargaToko;
  const hargaOnline = (live && live.hargaOnline > 0) ? live.hargaOnline : item.hargaOnline;
  return { hargaToko: hargaToko, hargaOnline: hargaOnline };
}

function getLiveStockInfo(item) {
  if (item.isPreOrder) {
    return { state: 'po', qty: null, label: 'Pre-Order' };
  }
  if (liveStockStatus !== 'live' || !item.sku) {
    return { state: 'check', qty: null, label: 'Stok Toko: Tanya Kasir' };
  }
  const live = liveStockBySku[item.sku];
  const qty = live ? Math.max(0, Math.floor(Number(live.stok) || 0)) : 0;
  if (qty <= 0) {
    return { state: 'empty', qty: 0, label: 'Habis Hari Ini' };
  }
  if (qty <= 5) {
    return { state: 'low', qty: qty, label: 'Sisa ' + qty + ' di Toko' };
  }
  return { state: 'ready', qty: qty, label: 'Ready: ' + qty + ' stok' };
}

function renderStockBadgeHtml(info) {
  if (info.state === 'po') {
    return '<span class="stock-pill stock-po">📋 Pre-Order</span>';
  }
  if (info.state === 'ready') {
    return '<span class="stock-pill stock-ready">● ' + escapeHtml(info.label) + '</span>';
  }
  if (info.state === 'low') {
    return '<span class="stock-pill stock-low">🔥 ' + escapeHtml(info.label) + '</span>';
  }
  if (info.state === 'empty') {
    return '<span class="stock-pill stock-empty">Habis Hari Ini</span>';
  }
  return '<span class="stock-pill stock-check">● Stok Harian Toko</span>';
}

function renderPriceHtml(item) {
  if (item.isPreOrder) {
    return (
      '<div class="price-box">' +
        '<div class="price-po-text">Harga disesuaikan isi kue • Pre-Order via Manager PO</div>' +
      '</div>'
    );
  }
  const prices = getEffectivePrices(item);
  if (!prices.hargaToko) return '';
  const hasOnline = prices.hargaOnline && prices.hargaOnline > prices.hargaToko;
  const diff = hasOnline ? (prices.hargaOnline - prices.hargaToko) : 0;
  const pct = hasOnline ? Math.round((diff / prices.hargaOnline) * 100) : 0;

  return (
    '<div class="price-box">' +
      '<div class="price-row">' +
        (hasOnline ? '<s class="price-online-strike">' + formatRp(prices.hargaOnline) + '</s>' : '') +
        '<strong class="price-toko-now">' + formatRp(prices.hargaToko) + '</strong>' +
      '</div>' +
      (diff > 0
        ? '<span class="price-save-tag">Hemat ' + formatRp(diff) + ' (' + pct + '%)</span>'
        : '<span class="price-save-tag">Harga Asli Toko</span>') +
    '</div>'
  );
}

// Periksa status buka toko (06:30 - 17:00 WIB)
function updateStoreOpenBadge() {
  const badge = document.getElementById('store-open-status');
  if (!badge) return;
  try {
    const now = new Date();
    const wibStr = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour12: false });
    const parts = wibStr.split(':');
    const mins = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    if (mins >= 390 && mins <= 1020) {
      badge.textContent = '🟢 Toko Buka (06.30–17.00 WIB)';
    } else {
      badge.textContent = '🌙 Di Luar Jam Buka • Kasir Buka 06.30 WIB';
    }
  } catch (e) {
    badge.textContent = '🟢 Buka Setiap Hari 06.30–17.00 WIB';
  }
}

// Render Status Stok POS Panel
function renderStockStatusBar() {
  const dot = document.getElementById('stock-live-dot');
  const title = document.getElementById('stock-status-title');
  const sub = document.getElementById('stock-status-sub');
  const refreshBtn = document.getElementById('btn-refresh-stock');
  if (!dot || !title || !sub) return;

  dot.className = 'stock-live-dot ' + liveStockStatus;
  if (refreshBtn) refreshBtn.disabled = (liveStockStatus === 'loading');

  if (liveStockStatus === 'loading') {
    title.textContent = 'Menghubungkan ke stok kasir POS Toko...';
    sub.textContent = 'Sinkronisasi langsung Jl. Situ No. 41, Bandung';
    return;
  }

  if (liveStockStatus === 'live') {
    const readyCount = Object.values(liveStockBySku).filter(function (v) { return (v.stok || 0) > 0; }).length;
    title.textContent = 'Terhubung ke POS Kasir Toko • ' + readyCount + ' Menu Ready Saat Ini';
    const waktuText = liveStockMeta.waktuStok
      ? liveStockMeta.tanggalStok + ' pkl ' + liveStockMeta.waktuStok.slice(0, 5) + ' WIB'
      : (liveStockMeta.tanggalStok || 'Hari Ini');
    sub.textContent = 'Update terakhir dari kasir: ' + waktuText + ' (Klik "+ Pesan" lalu konfirmasi ke WA Kasir)';
    return;
  }

  title.textContent = 'Katalog Harga Toko Resmi Aktif (Hemat s.d. 38% vs Ojol)';
  sub.textContent = 'Stok live sedang menunggu sinkronisasi server POS — ketuk "Segarkan Stok" atau tanya langsung ke WA Kasir 0895-3300-12673';
}

// Fetch live JSON stok dari POS_Sintra (tanpa data sensitif agen/reseller/HPP)
async function fetchLivePosStock() {
  liveStockStatus = 'loading';
  renderStockStatusBar();

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(function () { controller.abort(); }, 8000) : null;

  try {
    const url = POS_PUBLIC_STOK_URL + '&_t=' + Date.now();
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller ? controller.signal : undefined
    });
    if (timeoutId) clearTimeout(timeoutId);
    if (!res.ok) throw new Error('HTTP ' + res.status);

    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    const text = await res.text();
    if (contentType.indexOf('html') !== -1 || text.trim().charAt(0) === '<') {
      throw new Error('Endpoint JSON POS belum di-deploy ke versi terbaru');
    }

    const data = JSON.parse(text);
    if (!data || data.ok !== true || !Array.isArray(data.items)) {
      throw new Error('Format respons POS tidak sesuai');
    }

    const nextMap = {};
    const knownSkus = new Set();
    getAllOrderableItems().forEach(function (it) {
      if (it.sku) knownSkus.add(it.sku);
    });

    data.items.forEach(function (row) {
      if (!row || !row.sku) return;
      nextMap[row.sku] = {
        sku: row.sku,
        nama: row.nama,
        kategori: row.kategori,
        hargaToko: Number(row.hargaToko) || 0,
        hargaOnline: Number(row.hargaOnline) || 0,
        stok: Math.max(0, Math.floor(Number(row.stok) || 0))
      };

      // Tambahkan otomatis jika ada SKU baru di POS Master_Produk jalur Toko
      if (!knownSkus.has(row.sku) && row.hargaToko > 0 && row.kategori !== 'Minuman' && row.kategori !== 'Dus') {
        EXTRA_STORE_ITEMS.push({
          id: 'dyn-' + row.sku.toLowerCase().replace(/[^a-z0-9]/g, ''),
          sku: row.sku,
          name: row.nama,
          posCat: row.kategori || 'Kue',
          unit: '1 porsi',
          hargaToko: Number(row.hargaToko),
          hargaOnline: Number(row.hargaOnline) || 0
        });
        knownSkus.add(row.sku);
      }
    });

    liveStockBySku = nextMap;
    liveStockMeta = {
      tanggalStok: data.tanggalStok || '',
      waktuStok: data.waktuStok || '',
      totalReady: Object.values(nextMap).filter(function (v) { return v.stok > 0; }).length
    };
    liveStockStatus = 'live';
  } catch (err) {
    if (timeoutId) clearTimeout(timeoutId);
    liveStockStatus = 'fallback';
  }

  renderStockStatusBar();
  renderFeatured();
  renderCatalog();
  renderExtraStoreItems();
  syncCartUI();
}

// Render 4 kartu sorotan menu hemat & andalan
function renderFeatured() {
  const container = document.getElementById('featured-grid');
  if (!container) return;

  const featuredProducts = PRODUCTS.filter(function (p) { return p.featured; });
  container.innerHTML = featuredProducts.map(function (item) {
    const qty = cart[item.id] || 0;
    const stockInfo = getLiveStockInfo(item);
    const prices = getEffectivePrices(item);

    let ctaLabel = qty > 0 ? ('✓ ' + qty + ' di Keranjang') : '+ Pesan Harga Toko';
    if (item.isPreOrder) {
      ctaLabel = qty > 0 ? ('✓ ' + qty + ' Paket Dipilih') : '📋 Pilih Paket PO';
    } else if (stockInfo.state === 'empty') {
      ctaLabel = 'Habis • Tanya Kasir';
    }

    let priceText = 'Pre-Order • Konsultasi Manager';
    if (!item.isPreOrder && prices.hargaToko) {
      const onlinePart = prices.hargaOnline > prices.hargaToko ? ('<s class="inline-strike">' + formatRp(prices.hargaOnline) + '</s> ') : '';
      priceText = onlinePart + '<strong>' + formatRp(prices.hargaToko) + '</strong>';
    }

    return (
      '<article class="featured-card">' +
        '<div class="featured-img-wrap" onclick="openProductModal(\'' + item.id + '\')">' +
          '<img src="' + imgUrl(item.img) + '" width="400" height="500" alt="' + escapeHtml(item.alt || (item.name + ' kue basah tradisional tanpa pengawet Sin Tradisional Bandung')) + '" loading="lazy">' +
        '</div>' +
        '<div class="featured-body">' +
          '<div class="featured-badges">' +
            '<span class="featured-tag">' + escapeHtml(item.posCat) + '</span>' +
            renderStockBadgeHtml(stockInfo) +
          '</div>' +
          '<h3 class="featured-title" onclick="openProductModal(\'' + item.id + '\')">' + escapeHtml(item.name) + '</h3>' +
          '<p class="featured-desc">' + priceText + '</p>' +
          '<button type="button" class="featured-cta-btn" onclick="' +
            (stockInfo.state === 'empty'
              ? 'askKasirAboutProduct(\'' + item.id + '\')'
              : 'changeQty(\'' + item.id + '\', 1)') + '">' +
            ctaLabel +
          '</button>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

// Render Grid Katalog Utama 2 Kolom
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  const countLabel = document.getElementById('catalog-count');
  const heading = document.getElementById('catalog-heading');
  if (!grid) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = PRODUCTS.filter(function (p) {
    const matchCat = currentFilter === 'all' || p.category === currentFilter;
    const matchQuery = !q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.posCat.toLowerCase().includes(q);
    let matchReady = true;
    if (onlyReadyFilter && liveStockStatus === 'live') {
      const stockInfo = getLiveStockInfo(p);
      matchReady = stockInfo.state === 'ready' || stockInfo.state === 'low';
    }
    return matchCat && matchQuery && matchReady;
  });

  if (heading) {
    heading.textContent = q
      ? 'Hasil Pencarian: "' + searchQuery.trim() + '"'
      : (CATEGORY_LABELS[currentFilter] || 'Semua Menu Toko');
  }
  if (countLabel) {
    countLabel.textContent = filtered.length + ' menu ditampilkan';
  }

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="empty-catalog-box">' +
        '<p>Menu yang Anda cari belum cocok atau sedang tidak tersedia pada filter saat ini.</p>' +
        '<button type="button" class="btn-reset-filter" onclick="resetCatalogFilters()">Tampilkan Semua Menu Toko</button>' +
      '</div>';
    return;
  }

  grid.innerHTML = filtered.map(function (p) {
    const qty = cart[p.id] || 0;
    const stockInfo = getLiveStockInfo(p);
    const isSoldOut = stockInfo.state === 'empty';

    let actionControl = '';
    if (qty > 0) {
      actionControl =
        '<div class="card-stepper">' +
          '<button type="button" class="step-btn" onclick="changeQty(\'' + p.id + '\', -1)" aria-label="Kurangi ' + escapeHtml(p.name) + '">−</button>' +
          '<span class="step-qty">' + qty + ' pcs</span>' +
          '<button type="button" class="step-btn" onclick="changeQty(\'' + p.id + '\', 1)" aria-label="Tambah ' + escapeHtml(p.name) + '">+</button>' +
        '</div>';
    } else if (isSoldOut) {
      actionControl =
        '<button type="button" class="add-btn-plus add-btn-soldout" onclick="askKasirAboutProduct(\'' + p.id + '\')">' +
          '💬 Habis • Tanya Kasir' +
        '</button>';
    } else if (p.isPreOrder) {
      actionControl =
        '<button type="button" class="add-btn-plus add-btn-po" onclick="changeQty(\'' + p.id + '\', 1)">' +
          '📋 Pilih Paket PO' +
        '</button>';
    } else {
      actionControl =
        '<button type="button" class="add-btn-plus" onclick="changeQty(\'' + p.id + '\', 1)">' +
          '+ Pesan' +
        '</button>';
    }

    return (
      '<article class="card' + (qty > 0 ? ' in-cart' : '') + (isSoldOut ? ' is-out-of-stock' : '') + '">' +
        '<div class="card-img-wrap" onclick="openProductModal(\'' + p.id + '\')">' +
          '<img src="' + imgUrl(p.img) + '" width="400" height="500" alt="' + escapeHtml(p.alt || (p.name + ' (' + p.unit + ') kue basah tradisional tanpa pengawet Sin Tradisional Bandung')) + '" loading="lazy" onerror="this.onerror=null;this.src=\'assets/img/kombinasi-kue-basah-bandung-sin-tradisional-09.jpg\';">' +
          '<span class="card-badge-top">' + escapeHtml(p.badgeLabel || p.posCat) + '</span>' +
          '<span class="card-zoom-hint"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Detail</span>' +
        '</div>' +
        '<div class="card-body">' +
          '<div class="card-meta-row">' +
            renderStockBadgeHtml(stockInfo) +
            '<span class="card-unit-note">' + escapeHtml(p.unit) + '</span>' +
          '</div>' +
          '<h3 class="card-title" onclick="openProductModal(\'' + p.id + '\')">' + escapeHtml(p.name) + '</h3>' +
          '<p class="card-desc">' + escapeHtml(p.desc) + '</p>' +
          renderPriceHtml(p) +
          '<div class="card-footer">' + actionControl + '</div>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

// Render Daftar Ringkas Dinamis (hanya muncul jika ada SKU baru dari API POS yang belum di PRODUCTS)
function renderExtraStoreItems() {
  const panel = document.getElementById('stok-lainnya');
  const container = document.getElementById('extra-stock-grid');
  if (!container) return;

  if (EXTRA_STORE_ITEMS.length === 0) {
    if (panel) panel.hidden = true;
    container.innerHTML = '';
    return;
  }
  if (panel) panel.hidden = false;

  const q = searchQuery.trim().toLowerCase();
  const visibleExtras = EXTRA_STORE_ITEMS.filter(function (item) {
    const matchQuery = !q || item.name.toLowerCase().includes(q) || item.posCat.toLowerCase().includes(q);
    if (!matchQuery) return false;
    if (onlyReadyFilter && liveStockStatus === 'live') {
      const info = getLiveStockInfo(item);
      return info.state === 'ready' || info.state === 'low';
    }
    return true;
  });

  if (visibleExtras.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1;color:var(--muted);font-size:0.88rem;">Tidak ada menu Keringan/lainnya yang cocok dengan filter saat ini.</p>';
    return;
  }

  container.innerHTML = visibleExtras.map(function (item) {
    const qty = cart[item.id] || 0;
    const stockInfo = getLiveStockInfo(item);
    const prices = getEffectivePrices(item);
    const isSoldOut = stockInfo.state === 'empty';

    let actionBtn = '';
    if (qty > 0) {
      actionBtn =
        '<div class="card-stepper">' +
          '<button type="button" class="step-btn" onclick="changeQty(\'' + item.id + '\', -1)">−</button>' +
          '<span class="step-qty">' + qty + '</span>' +
          '<button type="button" class="step-btn" onclick="changeQty(\'' + item.id + '\', 1)">+</button>' +
        '</div>';
    } else if (isSoldOut) {
      actionBtn =
        '<button type="button" class="add-btn-plus add-btn-soldout" onclick="askKasirAboutProduct(\'' + item.id + '\')">' +
          '💬 Tanya Kasir' +
        '</button>';
    } else {
      actionBtn =
        '<button type="button" class="add-btn-plus" onclick="changeQty(\'' + item.id + '\', 1)">' +
          '+ Pesan' +
        '</button>';
    }

    const onlinePart = prices.hargaOnline > prices.hargaToko
      ? '<s class="price-online-strike">' + formatRp(prices.hargaOnline) + '</s> '
      : '';

    return (
      '<article class="extra-card' + (qty > 0 ? ' in-cart' : '') + '">' +
        '<div class="extra-card-top">' +
          '<div>' +
            '<div class="extra-card-title">' + escapeHtml(item.name) + '</div>' +
            '<div class="extra-card-cat">' + escapeHtml(item.posCat) + ' • ' + escapeHtml(item.unit) + '</div>' +
          '</div>' +
          renderStockBadgeHtml(stockInfo) +
        '</div>' +
        '<div class="extra-card-bottom">' +
          '<div class="price-row">' + onlinePart + '<strong class="price-toko-now">' + formatRp(prices.hargaToko) + '</strong></div>' +
          '<div class="extra-card-actions">' + actionBtn + '</div>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

// Render Showcase Informasi Snack Box (KHUSUS PRE-ORDER, TANPA HARGA)
function renderSnackboxShowcase() {
  const grid = document.getElementById('snackbox-grid');
  if (!grid) return;

  grid.innerHTML = SNACKBOX_SHOWCASE.map(function (item) {
    return (
      '<article class="snackbox-card" onclick="openSnackboxInfoModal(\'' + item.id + '\')">' +
        '<div class="snackbox-img-wrap">' +
          '<img src="' + imgUrl(item.img) + '" width="400" height="300" alt="Inspirasi Snack Box ' + escapeHtml(item.name) + ' tanpa pengawet Sin Tradisional Bandung" loading="lazy">' +
          '<span class="snackbox-po-badge">Pre-Order</span>' +
        '</div>' +
        '<div class="snackbox-card-body">' +
          '<h3>' + escapeHtml(item.name) + '</h3>' +
          '<span>Khusus Snack Box • Tanya via WA</span>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

function resetCatalogFilters() {
  currentFilter = 'all';
  searchQuery = '';
  onlyReadyFilter = false;
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');
  const readyBtn = document.getElementById('btn-only-ready');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.hidden = true;
  if (readyBtn) readyBtn.setAttribute('aria-pressed', 'false');
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
  });
  renderCatalog();
  renderExtraStoreItems();
}

function changeQty(itemId, delta) {
  const next = (cart[itemId] || 0) + delta;
  if (next <= 0) {
    delete cart[itemId];
  } else {
    cart[itemId] = next;
  }
  renderFeatured();
  renderCatalog();
  renderExtraStoreItems();
  syncCartUI();
}

function clearCart() {
  cart = {};
  const notesEl = document.getElementById('order-notes');
  if (notesEl) notesEl.value = '';
  renderFeatured();
  renderCatalog();
  renderExtraStoreItems();
  syncCartUI();
}

function calculateCartMetrics() {
  const entries = Object.entries(cart);
  let totalItems = 0;
  let subtotalToko = 0;
  let subtotalOnline = 0;
  let eligibleSubtotal = 0;
  let hasCustomPo = false;

  entries.forEach(function (pair) {
    const id = pair[0];
    const qty = pair[1];
    const item = findItemById(id);
    if (!item || qty <= 0) return;

    totalItems += qty;
    if (item.isPreOrder) {
      hasCustomPo = true;
      return;
    }

    const prices = getEffectivePrices(item);
    const tok = (prices.hargaToko || 0) * qty;
    const onl = (prices.hargaOnline && prices.hargaOnline > prices.hargaToko ? prices.hargaOnline : (prices.hargaToko || 0)) * qty;

    subtotalToko += tok;
    subtotalOnline += onl;
    if (ELIGIBLE_DISCOUNT_CATS.has(item.posCat)) {
      eligibleSubtotal += tok;
    }
  });

  // Aturan diskon bertingkat POS_Sintra (hanya Regular, Spesial, Kue)
  let discountPct = 0;
  if (eligibleSubtotal >= 300000) discountPct = 10;
  else if (eligibleSubtotal >= 250000) discountPct = 7.5;
  else if (eligibleSubtotal >= 150000) discountPct = 5;

  const discountAmount = Math.round((eligibleSubtotal * discountPct) / 100);
  const grandTotal = subtotalToko - discountAmount;
  const directOnlineSaving = Math.max(0, subtotalOnline - grandTotal);

  return {
    entries: entries,
    totalItems: totalItems,
    subtotalToko: subtotalToko,
    subtotalOnline: subtotalOnline,
    eligibleSubtotal: eligibleSubtotal,
    discountPct: discountPct,
    discountAmount: discountAmount,
    grandTotal: grandTotal,
    directOnlineSaving: directOnlineSaving,
    hasCustomPo: hasCustomPo
  };
}

function syncCartUI() {
  const m = calculateCartMetrics();
  const stickyBar = document.getElementById('sticky-cart-bar');
  const stickyBadge = document.getElementById('sticky-cart-badge');
  const stickyTitle = document.getElementById('sticky-cart-title');
  const summaryBox = document.getElementById('cart-summary-box');
  const summaryCount = document.getElementById('cart-summary-count');
  const summaryList = document.getElementById('cart-items-list');
  const totalsBox = document.getElementById('cart-totals-box');
  const notesEl = document.getElementById('order-notes');
  const orderTypeSelect = document.getElementById('order-type');

  if (m.entries.length === 0) {
    if (stickyBar) stickyBar.hidden = true;
    if (summaryBox) summaryBox.hidden = true;
    return;
  }

  if (stickyBar) stickyBar.hidden = false;
  if (stickyBadge) stickyBadge.textContent = m.totalItems + ' pcs';
  if (stickyTitle) {
    if (m.grandTotal > 0) {
      stickyTitle.textContent =
        formatRp(m.grandTotal) +
        (m.directOnlineSaving > 0 ? ' (Hemat ' + formatRp(m.directOnlineSaving) + ')' : '');
    } else {
      stickyTitle.textContent = m.entries.length + ' Paket Pre-Order Dipilih';
    }
  }

  if (summaryBox && summaryList && summaryCount) {
    summaryBox.hidden = false;
    summaryCount.textContent = m.entries.length;
    summaryList.innerHTML = m.entries.map(function (pair) {
      const id = pair[0];
      const qty = pair[1];
      const item = findItemById(id);
      if (!item) return '';
      const prices = getEffectivePrices(item);
      const lineTotal = item.isPreOrder ? 'Pre-Order' : formatRp((prices.hargaToko || 0) * qty);
      return (
        '<div class="cart-chip">' +
          '<span>' + escapeHtml(item.name) + ' <strong>x' + qty + '</strong> (' + lineTotal + ')</span>' +
          '<button type="button" onclick="changeQty(\'' + id + '\', -1)" aria-label="Kurangi ' + escapeHtml(item.name) + '">−</button>' +
          '<button type="button" onclick="changeQty(\'' + id + '\', 1)" aria-label="Tambah ' + escapeHtml(item.name) + '">+</button>' +
        '</div>'
      );
    }).join('');
  }

  if (totalsBox) {
    let rowsHtml = '';
    if (m.subtotalToko > 0) {
      rowsHtml += '<div class="cart-total-row"><span>Subtotal Harga Toko</span><span>' + formatRp(m.subtotalToko) + '</span></div>';
      if (m.discountAmount > 0) {
        rowsHtml +=
          '<div class="cart-total-row" style="color:#166534;">' +
            '<span>Diskon Otomatis (' + m.discountPct + '%)</span>' +
            '<span>-' + formatRp(m.discountAmount) + '</span>' +
          '</div>';
      }
      rowsHtml +=
        '<div class="cart-total-row grand">' +
          '<span>Estimasi Total Bayar Langsung</span>' +
          '<span>' + formatRp(m.grandTotal) + (m.hasCustomPo ? ' + Paket PO' : '') + '</span>' +
        '</div>';
      if (m.directOnlineSaving > 0) {
        rowsHtml +=
          '<div class="cart-saving-highlight">' +
            '🎉 Lebih hemat ' + formatRp(m.directOnlineSaving) + ' dibanding pesan lewat App Online (' + formatRp(m.subtotalOnline) + ')! (Walk-in 14.00–17.00 WIB dapat Happy Hour 15%)' +
          '</div>';
      }
    } else if (m.hasCustomPo) {
      rowsHtml += '<div class="cart-saving-highlight">📋 Paket Tampah / Tray diproses Pre-Order — kirim rincian ke WA Manager PO (0895-4122-28351).</div>';
    }
    totalsBox.innerHTML = rowsHtml;
  }

  if (orderTypeSelect && m.hasCustomPo) {
    orderTypeSelect.value = 'Kue Tampah / Tray Syukuran (Pre-Order Manager)';
  }

  if (notesEl) {
    const lines = m.entries.map(function (pair) {
      const item = findItemById(pair[0]);
      if (!item) return '';
      const prices = getEffectivePrices(item);
      if (item.isPreOrder) return '- ' + item.name + ' x' + pair[1] + ' (Pre-Order)';
      return '- ' + item.name + ' x' + pair[1] + ' (' + formatRp((prices.hargaToko || 0) * pair[1]) + ')';
    }).filter(Boolean);

    if (m.grandTotal > 0) {
      lines.push('---');
      lines.push('Estimasi Total Harga Toko: ' + formatRp(m.grandTotal) + (m.discountAmount > 0 ? ' (Diskon ' + m.discountPct + '%)' : ''));
    }
    notesEl.value = lines.join('\n');
  }
}

function scrollToOrderForm() {
  const el = document.getElementById('pesan-wa');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Modal Detail Produk Toko
function openProductModal(itemId) {
  const p = findItemById(itemId);
  if (!p) return;

  activeModalItemId = itemId;
  activeModalVariantIdx = 0;
  modalQty = cart[itemId] || 1;

  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCat = document.getElementById('modal-cat-badge');
  const modalStock = document.getElementById('modal-stock-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalPriceBox = document.getElementById('modal-price-compare');
  const modalVariants = document.getElementById('modal-variants');
  const modalDesc = document.getElementById('modal-desc');
  const modalNote = document.getElementById('modal-price-note');
  const qtyControls = document.querySelector('.modal-qty-control');
  const qtyVal = document.getElementById('modal-qty-val');
  const addBtn = document.getElementById('modal-add-btn');

  const stockInfo = getLiveStockInfo(p);
  const prices = getEffectivePrices(p);
  const initialImg = p.variants && p.variants.length ? p.variants[0].img : p.img;

  if (modalImg) {
    modalImg.src = imgUrl(initialImg);
    modalImg.alt = p.alt || (p.name + ' kue basah tradisional tanpa pengawet Sin Tradisional Bandung');
  }
  if (modalCat) modalCat.textContent = p.posCat + ' • ' + p.unit;
  if (modalStock) {
    modalStock.className = 'modal-badge-stock stock-' + stockInfo.state;
    modalStock.textContent = stockInfo.label;
  }
  if (modalTitle) modalTitle.textContent = p.name;
  if (modalDesc) modalDesc.textContent = p.desc;

  if (modalPriceBox) {
    if (p.isPreOrder) {
      modalPriceBox.innerHTML = '<strong>Pre-Order Paket Acara</strong> • Isi kue & harga disesuaikan kebutuhan via WhatsApp Manager PO.';
    } else if (prices.hargaToko) {
      const diff = prices.hargaOnline > prices.hargaToko ? (prices.hargaOnline - prices.hargaToko) : 0;
      modalPriceBox.innerHTML =
        (prices.hargaOnline > prices.hargaToko ? '<s class="price-online-strike">App Online: ' + formatRp(prices.hargaOnline) + '</s>' : '') +
        '<strong class="price-toko-now">Harga Toko: ' + formatRp(prices.hargaToko) + '</strong>' +
        (diff > 0 ? '<span class="price-save-tag">Hemat ' + formatRp(diff) + '</span>' : '');
    } else {
      modalPriceBox.innerHTML = '';
    }
  }

  if (modalVariants) {
    if (p.variants && p.variants.length > 0) {
      modalVariants.hidden = false;
      modalVariants.innerHTML = p.variants.map(function (v, idx) {
        return '<button type="button" class="variant-chip' + (idx === 0 ? ' active' : '') + '" onclick="selectModalVariant(' + idx + ')">' + escapeHtml(v.label) + '</button>';
      }).join('');
    } else {
      modalVariants.hidden = true;
      modalVariants.innerHTML = '';
    }
  }

  if (modalNote) {
    modalNote.innerHTML =
      '💡 <strong>Keuntungan Beli Langsung (Harga Toko):</strong> Jauh lebih hemat dibanding GoFood/GrabFood/ShopeeFood + berlaku diskon bertingkat hingga 10% (dan Happy Hour 15% walk-in pkl 14.00–17.00 WIB).';
  }

  if (qtyControls) qtyControls.hidden = false;
  if (qtyVal) qtyVal.textContent = modalQty;

  if (addBtn) {
    if (stockInfo.state === 'empty') {
      addBtn.textContent = '💬 Stok Habis — Cek Jam Restok via WA Kasir';
      addBtn.onclick = function () {
        closeProductModal();
        askKasirAboutProduct(p.id);
      };
    } else if (p.isPreOrder) {
      addBtn.textContent = '📋 Konsultasi Pre-Order via WA Manager';
      addBtn.onclick = function () {
        changeQty(p.id, modalQty - (cart[p.id] || 0));
        closeProductModal();
        scrollToOrderForm();
      };
    } else {
      addBtn.textContent = '+ Masukkan ke Pesanan WA (' + formatRp((prices.hargaToko || 0) * modalQty) + ')';
      addBtn.onclick = function () {
        if (!activeModalItemId) return;
        cart[activeModalItemId] = modalQty;
        renderFeatured();
        renderCatalog();
        renderExtraStoreItems();
        syncCartUI();
        closeProductModal();
      };
    }
  }

  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

// Modal Info Snack Box (TANPA HARGA, khusus tanya / Pre-Order Manager PO)
function openSnackboxInfoModal(sbId) {
  const sb = SNACKBOX_SHOWCASE.find(function (s) { return s.id === sbId; });
  if (!sb) return;

  activeModalItemId = null;
  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCat = document.getElementById('modal-cat-badge');
  const modalStock = document.getElementById('modal-stock-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalPriceBox = document.getElementById('modal-price-compare');
  const modalVariants = document.getElementById('modal-variants');
  const modalDesc = document.getElementById('modal-desc');
  const modalNote = document.getElementById('modal-price-note');
  const qtyControls = document.querySelector('.modal-qty-control');
  const addBtn = document.getElementById('modal-add-btn');

  if (modalImg) {
    modalImg.src = imgUrl(sb.img);
    modalImg.alt = sb.name + ' - Inspirasi Snack Box tanpa pengawet Sin Tradisional Bandung';
  }
  if (modalCat) modalCat.textContent = 'Rekomendasi Snack Box';
  if (modalStock) {
    modalStock.className = 'modal-badge-stock stock-po';
    modalStock.textContent = 'Pre-Order Saja';
  }
  if (modalTitle) modalTitle.textContent = sb.name;
  if (modalPriceBox) {
    modalPriceBox.innerHTML = '📋 <strong>Belum Dijual Harian di Toko</strong> — Hanya tersedia untuk pesanan Pre-Order Snack Box acara.';
  }
  if (modalVariants) {
    modalVariants.hidden = true;
    modalVariants.innerHTML = '';
  }
  if (modalDesc) modalDesc.textContent = sb.desc;
  if (modalNote) {
    modalNote.innerHTML = '💬 Ingin menanyakan pilihan kombinasi isi dus atau estimasi pesanan dengan menu <strong>' + escapeHtml(sb.name) + '</strong>? Silakan hubungi WhatsApp Manager PO.';
  }
  if (qtyControls) qtyControls.hidden = true;
  if (addBtn) {
    addBtn.textContent = '📋 Tanya Info / Pre-Order via WA Manager';
    addBtn.onclick = function () {
      const msg = appendUtmSourceNote(
        'Halo Manager Sin Tradisional (Jl. Situ No. 41),\n' +
        'Saya melihat website dan ingin menanyakan informasi Pre-Order Snack Box (tertarik dengan menu tambahan: ' + sb.name + '). Terima kasih.'
      );
      window.open('https://wa.me/' + WA_MANAGER_PHONE + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    };
  }

  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

function selectModalVariant(idx) {
  if (!activeModalItemId) return;
  const p = findItemById(activeModalItemId);
  if (!p || !p.variants || !p.variants[idx]) return;
  activeModalVariantIdx = idx;
  const modalImg = document.getElementById('modal-img');
  if (modalImg) modalImg.src = imgUrl(p.variants[idx].img);
  document.querySelectorAll('#modal-variants .variant-chip').forEach(function (btn, i) {
    btn.classList.toggle('active', i === idx);
  });
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.hidden = true;
  document.body.style.overflow = '';
  activeModalItemId = null;
}

function askKasirAboutProduct(itemId) {
  const item = findItemById(itemId);
  const itemName = item ? item.name : 'kue basah';
  const msg = appendUtmSourceNote(
    'Halo Kasir Sin Tradisional (Jl. Situ No. 41),\n' +
    'Saya cek di website stok "' + itemName + '" sedang habis / belum ter-update. Apakah masih ada atau kapan ready lagi hari ini? Terima kasih.'
  );
  window.open('https://wa.me/' + WA_KASIR_PHONE + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
}

// Kirim pesan WhatsApp terformat ke Admin 2 (Kasir) atau Admin 1 (Manager PO)
function sendWhatsApp(phone, roleLabel) {
  const name = (document.getElementById('cust-name')?.value || '').trim();
  const orderType = document.getElementById('order-type')?.value || 'Ambil Sendiri di Toko';
  const notes = (document.getElementById('order-notes')?.value || '').trim();

  const lines = [
    'Halo ' + (roleLabel === 'Kasir' ? 'Kasir Toko' : 'Manager PO') + ' Sin Tradisional (Jl. Situ No. 41 Bandung),',
    'Saya ingin cek stok / memesan kue lewat website sintradisional.com (Harga Toko):',
    ''
  ];

  if (name) lines.push('*Nama Pemesan:* ' + name);
  lines.push('*Jenis Pesanan:* ' + orderType);

  if (notes) {
    lines.push('*Rincian Pesanan:*');
    lines.push(notes);
  } else {
    lines.push('*Rincian:* Mohon informasi stok kue basah yang ready hari ini di toko.');
  }

  lines.push('');
  lines.push('Terima kasih.');

  const finalMessage = appendUtmSourceNote(lines.join('\n'));
  window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(finalMessage), '_blank', 'noopener');
}

document.addEventListener('DOMContentLoaded', function () {
  captureUtmSource();
  decorateWaLinksWithUtm();
  updateStoreOpenBadge();
  renderStockStatusBar();
  renderFeatured();
  renderCatalog();
  renderExtraStoreItems();
  renderSnackboxShowcase();
  fetchLivePosStock();

  // Filter Tabs
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderCatalog();
    });
  }

  // Pencarian Real-Time
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value;
      if (clearBtn) clearBtn.hidden = searchQuery.length === 0;
      renderCatalog();
      renderExtraStoreItems();
    });
  }
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.hidden = true;
      renderCatalog();
      renderExtraStoreItems();
      searchInput.focus();
    });
  }

  // Toggle "Ready Hari Ini Saja"
  const readyBtn = document.getElementById('btn-only-ready');
  if (readyBtn) {
    readyBtn.addEventListener('click', function () {
      onlyReadyFilter = !onlyReadyFilter;
      readyBtn.setAttribute('aria-pressed', onlyReadyFilter ? 'true' : 'false');
      renderCatalog();
      renderExtraStoreItems();
    });
  }

  // Tombol Segarkan Stok Live
  const refreshBtn = document.getElementById('btn-refresh-stock');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', function () {
      fetchLivePosStock();
    });
  }

  // Tombol + / - di dalam Modal Produk
  const modalMinus = document.getElementById('modal-minus-btn');
  const modalPlus = document.getElementById('modal-plus-btn');
  const qtyVal = document.getElementById('modal-qty-val');

  function updateModalButtonPrice() {
    if (!activeModalItemId) return;
    const item = findItemById(activeModalItemId);
    const addBtn = document.getElementById('modal-add-btn');
    if (!item || !addBtn || item.isPreOrder) return;
    const stockInfo = getLiveStockInfo(item);
    if (stockInfo.state === 'empty') return;
    const prices = getEffectivePrices(item);
    addBtn.textContent = '+ Masukkan ke Pesanan WA (' + formatRp((prices.hargaToko || 0) * modalQty) + ')';
  }

  if (modalMinus && qtyVal) {
    modalMinus.addEventListener('click', function () {
      if (modalQty > 1) {
        modalQty--;
        qtyVal.textContent = modalQty;
        updateModalButtonPrice();
      }
    });
  }
  if (modalPlus && qtyVal) {
    modalPlus.addEventListener('click', function () {
      modalQty++;
      qtyVal.textContent = modalQty;
      updateModalButtonPrice();
    });
  }

  const modalBackdrop = document.getElementById('product-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeProductModal();
  });
});
