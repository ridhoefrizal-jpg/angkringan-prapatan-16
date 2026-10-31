/* ==========================================================
   Angkringan Prapatan 16 — script.js
   BAGIAN 1: CONFIG  -> data bisnis yang perlu diisi pemilik
   BAGIAN 2: PRODUCTS -> daftar menu (nama, kategori, harga, foto)
   BAGIAN 3: kode program (tidak perlu diubah)
   ========================================================== */

/* ---------------------------------------------------------
   BAGIAN 1 — CONFIG
   --------------------------------------------------------- */
const CONFIG = {
  businessName: "Angkringan Prapatan 16",

  // Nomor WhatsApp, hanya angka, format internasional tanpa +.
  whatsappNumber: "6285268619385",

  // Alamat tertulis (opsional). Kosong = pengunjung diarahkan ke tombol Google Maps.
  address: "",

  // Jam operasional. Boleh beberapa baris dengan \n.
  hours: "16.00 – 23.00 WIB",

  // Tautan Google Maps. Kosong = tombol "Petunjuk Arah" disembunyikan.
  mapsUrl: "https://maps.app.goo.gl/8hYvBMWACN4o8AKS9",

  // Alamat website setelah diterbitkan, mis. "https://namaanda.github.io/angkringan-prapatan-16/".
  // Dipakai untuk QR code. Kosong = QR belum dibuat.
  siteUrl: "",

  // true  = tampilkan bar "mode pratinjau, harga belum dikonfirmasi" di atas halaman.
  // Ubah ke false setelah pemilik mengonfirmasi semua harga.
  showDraftNotice: true,

  // Teks "Tentang" (boleh diedit setelah disetujui pemilik).
  aboutText:
    "Angkringan Prapatan 16 menyediakan pilihan sate, bakaran, makanan, mie, dan minuman untuk menemani waktu santai Anda."
};

/* ---------------------------------------------------------
   BAGIAN 2 — DATA MENU
   Field:
     id          : unik, huruf kecil, tanpa spasi
     name        : nama menu
     category    : "sate" | "makanan" | "mie" | "minuman"
     price       : harga tetap (angka, tanpa titik)
     priceMin / priceMax : untuk harga bervariasi (jangan isi price)
     priceNote   : keterangan harga, mis. "Harga sesuai pilihan"
     image       : path foto, mis. "assets/nasi-kucing.webp" ("" = pakai placeholder)
     imageAlt    : deskripsi foto (untuk aksesibilitas)
     description : deskripsi singkat ("" = tidak ditampilkan)
   Semua harga = data awal dari foto menu, WAJIB dikonfirmasi pemilik.
   --------------------------------------------------------- */
const CATEGORIES = [
  { id: "semua", label: "Semua Menu" },
  { id: "sate", label: "Sate & Bakaran" },
  { id: "makanan", label: "Makanan" },
  { id: "mie", label: "Mie" },
  { id: "minuman", label: "Minuman" }
];

const PRODUCTS = [
  /* ===== SATE & BAKARAN ===== */
  { id: "sate-frozen", name: "Sate Frozen", category: "sate", priceMin: 1000, priceMax: 5000, priceNote: "Harga sesuai pilihan", image: "", imageAlt: "", description: "Aneka bakaran sosis frozen. Harga mengikuti pilihan." },
  { id: "sate-ati-ampela", name: "Sate Ati/Ampela", category: "sate", price: 2000, image: "", imageAlt: "", description: "" },
  { id: "sate-usus", name: "Sate Usus", category: "sate", price: 2000, image: "", imageAlt: "", description: "" },
  { id: "sate-ceker", name: "Sate Ceker", category: "sate", price: 2000, image: "", imageAlt: "", description: "" },
  { id: "sate-kere", name: "Sate Kere", category: "sate", price: 2000, image: "", imageAlt: "", description: "" },
  { id: "sate-kulit", name: "Sate Kulit", category: "sate", price: 2000, image: "", imageAlt: "", description: "" },
  { id: "sate-telur-puyuh", name: "Sate Telur Puyuh", category: "sate", price: 3000, image: "", imageAlt: "", description: "" },
  { id: "sate-sayap-ayam", name: "Sate Sayap Ayam", category: "sate", price: 3000, image: "", imageAlt: "", description: "" },
  { id: "sate-kepala-ayam", name: "Sate Kepala Ayam", category: "sate", price: 3000, image: "", imageAlt: "", description: "" },
  { id: "sate-tahu-tempe", name: "Sate Tahu/Tempe", category: "sate", price: 2000, image: "", imageAlt: "", description: "" },

  /* ===== MAKANAN ===== */
  { id: "nasi-bakar", name: "Nasi Bakar", category: "makanan", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "nasi-kucing", name: "Nasi Kucing", category: "makanan", price: 3000, image: "", imageAlt: "", description: "" },
  { id: "kentang-goreng", name: "Kentang Goreng", category: "makanan", price: 8000, image: "", imageAlt: "", description: "" },

  /* ===== MIE ===== */
  { id: "mie-original", name: "Mie Original", category: "mie", price: 7000, image: "", imageAlt: "", description: "" },
  { id: "mie-telur", name: "Mie Telur", category: "mie", price: 10000, image: "", imageAlt: "", description: "" },
  { id: "mie-bumbu-warmindo", name: "Mie Bumbu Warmindo", category: "mie", price: 8000, image: "", imageAlt: "", description: "" },
  { id: "mie-telur-bumbu-warmindo", name: "Mie Telur Bumbu Warmindo", category: "mie", price: 12000, image: "", imageAlt: "", description: "" },

  /* ===== MINUMAN ===== */
  { id: "kopi-teh", name: "Kopi/Teh", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "bandrek", name: "Bandrek", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "pop-ice", name: "Pop Ice", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-chocolatos", name: "Es Chocolatos", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-cappuccino", name: "Es Cappuccino", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-beng-beng", name: "Es Beng-beng", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-matcha", name: "Es Matcha", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-mojito", name: "Es Mojito", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-bandrek", name: "Es Bandrek", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-teh", name: "Es Teh", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-jeruk", name: "Es Jeruk", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-kuku-bima", name: "Es Kuku Bima", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" },
  { id: "es-extra-joss", name: "Es Extra Joss", category: "minuman", price: 5000, image: "", imageAlt: "", description: "" }
];

/* ---------------------------------------------------------
   BAGIAN 3 — KODE PROGRAM (umumnya tidak perlu diubah)
   --------------------------------------------------------- */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);

  const state = { category: "semua", query: "" };

  /* ---------- Helper ---------- */
  function formatRupiah(n) {
    return "Rp" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function priceText(p) {
    if (typeof p.price === "number") return formatRupiah(p.price);
    return formatRupiah(p.priceMin) + " – " + formatRupiah(p.priceMax);
  }

  function normalize(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  function categoryLabel(id) {
    const c = CATEGORIES.find((x) => x.id === id);
    return c ? c.label : id;
  }

  function cleanPhone(raw) {
    let d = String(raw || "").replace(/\D/g, "");
    if (!d) return "";
    if (d.startsWith("0")) d = "62" + d.slice(1);
    return d.length >= 9 && d.length <= 15 ? d : "";
  }

  function isHttps(url) {
    return /^https:\/\/[^\s]+$/i.test(String(url || "").trim());
  }

  function isPublicSiteUrl(url) {
    if (!isHttps(url)) return false;
    return !/^https:\/\/(localhost|127\.|10\.|192\.168\.|0\.0\.0\.0)/i.test(url.trim());
  }

  /* ---------- WhatsApp ---------- */
  function productMessage(p) {
    const name = CONFIG.businessName;
    if (typeof p.price === "number") {
      return "Halo " + name + ", saya ingin bertanya tentang menu " + p.name +
        " dengan harga " + formatRupiah(p.price) + ". Apakah tersedia?";
    }
    return "Halo " + name + ", saya ingin bertanya tentang menu " + p.name +
      ". Harganya bervariasi (" + priceText(p) + "), mohon dikonfirmasi harga sesuai pilihan. Apakah tersedia?";
  }

  function generalMessage() {
    return "Halo " + CONFIG.businessName + ", saya ingin bertanya tentang menu dan ketersediaan hari ini.";
  }

  function waUrl(message) {
    const phone = cleanPhone(CONFIG.whatsappNumber);
    if (!phone) return "";
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  }

  let toastTimer;
  function showToast(text) {
    const t = $("#toast");
    t.textContent = text;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 6500);
  }

  function handleWaClick(event, message) {
    const url = waUrl(message);
    if (!url) {
      event.preventDefault();
      showToast("Nomor WhatsApp belum diatur. Pemilik perlu mengisi whatsappNumber di script.js (lihat README).");
    }
    /* Jika nomor sudah diatur, tautan wa.me dibuka biasa (target _blank). */
  }

  function setupWaLink(el, message) {
    const url = waUrl(message);
    el.href = url || "#kontak";
    if (url) {
      el.target = "_blank";
      el.rel = "noopener";
    }
    el.addEventListener("click", (e) => handleWaClick(e, message));
  }

  /* ---------- Placeholder foto ---------- */
  const ICONS = {
    sate: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M8 40L40 8"/><ellipse cx="17" cy="31" rx="5" ry="4" transform="rotate(-45 17 31)" fill="currentColor" fill-opacity=".25"/><ellipse cx="24" cy="24" rx="5" ry="4" transform="rotate(-45 24 24)" fill="currentColor" fill-opacity=".25"/><ellipse cx="31" cy="17" rx="5" ry="4" transform="rotate(-45 31 17)" fill="currentColor" fill-opacity=".25"/></svg>',
    makanan: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22h36a18 18 0 01-36 0z" fill="currentColor" fill-opacity=".2"/><path d="M16 14c0-3 3-3 3-6M24 14c0-3 3-3 3-6M32 14c0-3 3-3 3-6"/></svg>',
    mie: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 24h36a18 18 0 01-36 0z" fill="currentColor" fill-opacity=".2"/><path d="M12 22c3-7 6 5 9-2s6 5 9-2 6 4 6 1"/><path d="M32 6L24 22"/></svg>',
    minuman: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 14h22l-3 28H16z" fill="currentColor" fill-opacity=".2"/><path d="M24 14l5-9h6"/><path d="M15 24h18"/></svg>'
  };

  function buildPlaceholder(p) {
    const ph = document.createElement("div");
    ph.className = "ph ph-" + p.category;
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Foto " + p.name + " belum tersedia");
    ph.innerHTML = '<div>' + (ICONS[p.category] || "") + '<span>Foto menu menyusul</span></div>';
    return ph;
  }

  function buildMedia(p) {
    const wrap = document.createElement("div");
    wrap.className = "card-media";
    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.imageAlt || p.name;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => {
        img.replaceWith(buildPlaceholder(p));
      });
      wrap.appendChild(img);
    } else {
      wrap.appendChild(buildPlaceholder(p));
    }
    return wrap;
  }

  /* ---------- Render katalog ---------- */
  function buildCard(p, index) {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--i", Math.min(index, 12));

    card.appendChild(buildMedia(p));

    const body = document.createElement("div");
    body.className = "card-body";

    const cat = document.createElement("p");
    cat.className = "card-cat";
    cat.textContent = categoryLabel(p.category);

    const h = document.createElement("h3");
    h.textContent = p.name;

    body.appendChild(cat);
    body.appendChild(h);

    if (p.description) {
      const d = document.createElement("p");
      d.className = "card-desc";
      d.textContent = p.description;
      body.appendChild(d);
    }

    const price = document.createElement("p");
    price.className = "card-price";
    price.textContent = priceText(p);
    if (p.priceNote) {
      const note = document.createElement("small");
      note.textContent = p.priceNote;
      price.appendChild(note);
    }
    body.appendChild(price);

    const btn = document.createElement("a");
    btn.className = "btn btn-wa";
    btn.textContent = "Pesan via WhatsApp";
    btn.setAttribute("aria-label", "Pesan " + p.name + " via WhatsApp");
    setupWaLink(btn, productMessage(p));
    body.appendChild(btn);

    card.appendChild(body);
    return card;
  }

  function getFiltered() {
    const q = normalize(state.query);
    return PRODUCTS.filter((p) => {
      const okCat = state.category === "semua" || p.category === state.category;
      const okQuery = !q || normalize(p.name).includes(q);
      return okCat && okQuery;
    });
  }

  function renderCatalog() {
    const grid = $("#menuGrid");
    const empty = $("#emptyState");
    const count = $("#resultCount");
    const list = getFiltered();

    grid.replaceChildren();
    list.forEach((p, i) => grid.appendChild(buildCard(p, i)));

    empty.hidden = list.length > 0;
    grid.hidden = list.length === 0;

    const catPart = state.category === "semua" ? "" : " di " + categoryLabel(state.category);
    count.textContent = list.length
      ? "Menampilkan " + list.length + " menu" + catPart
      : "Tidak ada menu yang cocok";

    $("#searchClear").hidden = !state.query;
  }

  function renderChips() {
    const wrap = $("#categoryChips");
    wrap.replaceChildren();
    CATEGORIES.forEach((c) => {
      const total = c.id === "semua" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c.id).length;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.dataset.category = c.id;
      b.setAttribute("aria-pressed", String(c.id === state.category));
      b.append(c.label);
      const s = document.createElement("small");
      s.textContent = "(" + total + ")";
      b.appendChild(s);
      wrap.appendChild(b);
    });
  }

  function updateChips() {
    document.querySelectorAll(".chip").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.category === state.category));
    });
  }

  function setupCatalogEvents() {
    $("#categoryChips").addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      state.category = b.dataset.category;
      updateChips();
      renderCatalog();
    });

    const input = $("#searchInput");
    input.addEventListener("input", () => {
      state.query = input.value;
      renderCatalog();
    });

    $("#searchClear").addEventListener("click", () => {
      input.value = "";
      state.query = "";
      renderCatalog();
      input.focus();
    });

    $("#resetFilters").addEventListener("click", () => {
      input.value = "";
      state.query = "";
      state.category = "semua";
      updateChips();
      renderCatalog();
    });
  }

  /* ---------- Hero ringkasan (dihitung dari data, bukan klaim) ---------- */
  function renderHeroFacts() {
    const prices = PRODUCTS.map((p) => (typeof p.price === "number" ? p.price : p.priceMin));
    const min = Math.min.apply(null, prices);
    const items = [
      [String(PRODUCTS.length), "pilihan menu"],
      [String(CATEGORIES.length - 1), "kategori"],
      [formatRupiah(min), "harga mulai dari"]
    ];
    const ul = $("#heroFacts");
    items.forEach((it) => {
      const li = document.createElement("li");
      const s = document.createElement("strong");
      s.textContent = it[0];
      li.appendChild(s);
      li.append(it[1]);
      ul.appendChild(li);
    });
  }

  /* ---------- Lokasi, kontak, QR ---------- */
  function renderLocation() {
    const addr = $("#addressText");
    const hours = $("#hoursText");

    if (CONFIG.address.trim()) {
      addr.textContent = CONFIG.address.trim();
    } else if (isHttps(CONFIG.mapsUrl)) {
      addr.textContent = "Lokasi kami ada di Google Maps. Tekan tombol \"Petunjuk Arah\" di bawah.";
    } else {
      addr.textContent = "Informasi alamat akan segera tersedia.";
      addr.classList.add("is-empty");
    }

    if (CONFIG.hours.trim()) {
      hours.textContent = CONFIG.hours.trim();
    } else {
      hours.textContent = "Jam operasional akan segera tersedia.";
      hours.classList.add("is-empty");
    }

    const dir = $("#directionsBtn");
    if (isHttps(CONFIG.mapsUrl)) {
      dir.href = CONFIG.mapsUrl.trim();
      dir.hidden = false;
    } else {
      dir.hidden = true;
    }
  }

  function renderQr() {
    const section = $("#qr");
    const text = $("#qrText");
    const box = $("#qrBox");
    const hasUrl = isPublicSiteUrl(CONFIG.siteUrl);

    if (hasUrl) {
      const url = CONFIG.siteUrl.trim();
      text.textContent = "Pindai dengan kamera HP untuk membuka menu ini. QR code mengarah ke " + url;

      /* QR dibuat oleh layanan gratis api.qrserver.com. Hanya alamat website publik yang dikirim. */
      const src = "https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=10&data=" + encodeURIComponent(url);
      const img = document.createElement("img");
      img.src = src;
      img.width = 300;
      img.height = 300;
      img.alt = "QR code menu Angkringan Prapatan 16 menuju " + url;
      img.loading = "lazy";
      img.addEventListener("error", () => {
        box.replaceChildren();
        const p = document.createElement("p");
        p.textContent = "QR code gagal dimuat. Periksa koneksi internet lalu muat ulang halaman.";
        box.appendChild(p);
      });
      const dl = document.createElement("a");
      dl.className = "btn btn-ghost btn-small";
      dl.href = src;
      dl.target = "_blank";
      dl.rel = "noopener";
      dl.textContent = "Buka gambar QR untuk dicetak";
      box.append(img, dl);
      section.hidden = false;
    } else if (CONFIG.showDraftNotice) {
      /* Mode pratinjau: tampilkan petunjuk untuk pemilik. */
      text.textContent = "QR code akan dibuat setelah website diterbitkan dan memiliki alamat permanen. Isi siteUrl di script.js, lalu ikuti langkah QR code di README.";
      const p = document.createElement("p");
      p.textContent = "QR code belum tersedia.";
      box.appendChild(p);
      section.hidden = false;
    } else {
      section.hidden = true;
    }
  }

  /* ---------- Navigasi mobile ---------- */
  function setupNav() {
    const toggle = $("#navToggle");
    const nav = $("#mainNav");

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
    });
  }

  /* ---------- Dialog foto menu ---------- */
  function setupPhotoDialog() {
    const dlg = $("#menuPhotoDialog");
    $("#openMenuPhoto").addEventListener("click", () => {
      if (typeof dlg.showModal === "function") dlg.showModal();
      else window.open("assets/menu-asli.webp", "_blank", "noopener");
    });
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  }

  /* ---------- Mulai ---------- */
  function init() {
    $("#year").textContent = new Date().getFullYear();
    $("#aboutText").textContent = CONFIG.aboutText;
    $("#draftNotice").hidden = !CONFIG.showDraftNotice;

    document.querySelectorAll(".js-wa").forEach((el) => setupWaLink(el, generalMessage()));

    renderHeroFacts();
    renderChips();
    renderCatalog();
    setupCatalogEvents();
    renderLocation();
    renderQr();
    setupNav();
    setupPhotoDialog();
  }

  init();
})();
