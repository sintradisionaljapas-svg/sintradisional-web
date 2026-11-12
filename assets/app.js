const PRODUCTS = [
  { name: "Kue Bugis", cat: "manis", img: "bugis-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Kue ketan lembut isi unti kelapa gula merah dibungkus daun pisang." },
  { name: "Nagasari Pisang", cat: "manis", img: "nagasari-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Olahan tepung beras dan santan lembut dengan potongan pisang pilihan." },
  { name: "Dadar Gulung", cat: "manis", img: "dadar-gulung-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Kulit dadar pandan wangi dengan isian unti kelapa manis legit." },
  { name: "Bubur Lolos", cat: "manis", img: "bubur-lolos-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Kue tradisional khas Bandung bertekstur lembut dengan saus gula merah & santan." },
  { name: "Talam Pandan", cat: "manis", img: "talam-pandan-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Perpaduan lapisan pandan manis dan lapisan santan gurih lembut." },
  { name: "Talam Ubi", cat: "manis", img: "talam-ubi-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Kue talam ubi kuning asli dengan lapisan atas santan kental gurih." },
  { name: "Lupis Ketan", cat: "manis", img: "lupis-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Ketan pulen balut kelapa parut segar dengan siraman kinca gula aren." },
  { name: "Putri Noong", cat: "manis", img: "putri-noong-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Singkong parut pelangi isi pisang manis dibalut kelapa parut." },
  { name: "Ketimus", cat: "manis", img: "ketimus-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Olahan singkong parut dan gula merah dikukus dalam daun pisang." },
  { name: "Putu Mayang Kinca", cat: "manis", img: "putu-mayang-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Putu mayang lembut disajikan dengan kuah kinca santan gula merah." },
  { name: "Serabi Tradisional", cat: "gurih", img: "serabi-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Serabi Bandung hangat dengan pilihan topping oncom pedas gurih atau kinca." },
  { name: "Risoles Ragout", cat: "gurih", img: "risoles-ragout-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Risoles kulit lembut dengan isian ragout sayur dan ayam gurih." },
  { name: "Lemper Ayam", cat: "gurih", img: "lemper-ayam-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Ketan gurih santan dengan isian suwiran ayam bumbu rempah." },
  { name: "Paket Snack Box", cat: "paket", img: "snack-box-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Paket kustom isi 3–5 kue basah segar untuk rapat, pengajian, & acara kantor." },
  { name: "Paket Kue Tampah", cat: "paket", img: "kue-tampah-kue-basah-bandung-sin-tradisional-gmn-01.jpg", desc: "Sajian aneka jajanan pasar ditata rapi di atas tampah bambu untuk syukuran." }
];

function renderCatalog(filter = "all") {
  const grid = document.getElementById("catalog-grid");
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  grid.innerHTML = items.map(item => `
    <article class="card">
      <div class="card-img-wrap">
        <img src="assets/img/${item.img}" alt="${item.name} - Sin Tradisional Bandung" loading="lazy"
             onerror="this.outerHTML='<div style=\\'padding:16px;text-align:center;color:#14532d;font-weight:700;\\'>🥮<br>${item.name}<br><small style=\\'font-weight:400;color:#57534e\\'>Sin Tradisional 1978</small></div>'">
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
        </div>
        <div class="card-footer">
          <button type="button" class="add-btn" onclick="addToOrder('${item.name}')">+ Masukkan ke Pesanan WA</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToOrder(name) {
  const notes = document.getElementById("order-notes");
  notes.value = notes.value ? notes.value + "\n- " + name + " ( ... pcs)" : "- " + name + " ( ... pcs)";
  document.getElementById("pesan-wa").scrollIntoView({ behavior: "smooth" });
}

function sendWhatsApp(phone) {
  const name = document.getElementById("cust-name").value || "Pelanggan";
  const type = document.getElementById("order-type").value;
  const notes = document.getElementById("order-notes").value || "- Mohon info menu yang tersedia hari ini";
  const text = `Halo Admin Sin Tradisional (Jl. Situ No. 41),\n\nNama: ${name}\nJenis Pesanan: ${type}\nRincian Kue:\n${notes}\n\nMohon info ketersediaan & total harganya. Terima kasih!`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCatalog(btn.dataset.filter);
  });
});

renderCatalog();
