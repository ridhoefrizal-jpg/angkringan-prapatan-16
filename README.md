# Website Menu Digital — Angkringan Prapatan 16

Website statis (HTML, CSS, JavaScript biasa). Tanpa server, tanpa database, tanpa instalasi apa pun.

## Isi folder

```
angkringan-prapatan-16/
├── index.html     ← kerangka halaman
├── style.css      ← tampilan dan warna
├── script.js      ← data menu + pengaturan (file yang paling sering diedit)
├── README.md      ← panduan ini
└── assets/
    ├── hero-gerobak.webp        ← foto utama (gerobak)
    ├── suasana-angkringan.webp  ← foto bagian "Tentang"
    ├── menu-asli.webp           ← foto daftar menu cetak
    └── favicon.png              ← ikon sementara (ganti dengan logo asli)
```

> **Penting sebelum dipublikasikan:** semua harga adalah data awal yang disalin dari foto menu. Minta pemilik memeriksanya, lalu ubah `showDraftNotice` menjadi `false` (lihat langkah 3).

---

## 1. Membuat file dan folder dari HP

Cara termudah: pakai aplikasi **Acode** (Android) atau **Textastic** (iPhone) untuk mengedit file, atau edit langsung di situs GitHub (langkah 6).

1. Buat folder `angkringan-prapatan-16`.
2. Di dalamnya buat `index.html`, `style.css`, `script.js`, `README.md`.
3. Buat folder `assets` dan masukkan foto-fotonya.
4. Nama file harus persis sama, huruf kecil semua, tanpa spasi.

## 2. Mengedit data menu

Buka `script.js`, cari bagian **`const PRODUCTS`**. Setiap menu satu baris:

```js
{ id: "nasi-kucing", name: "Nasi Kucing", category: "makanan", price: 3000, image: "", imageAlt: "", description: "" },
```

- **Ubah harga:** ganti angka `price` (tanpa titik, mis. `3500`).
- **Tambah menu:** salin satu baris, ganti `id` (harus unik, huruf kecil, pakai tanda `-`), `name`, `category`, dan `price`.
- **Hapus menu:** hapus satu baris penuh.
- **Kategori yang valid:** `sate`, `makanan`, `mie`, `minuman`.
- **Harga bervariasi:** jangan isi `price`, pakai `priceMin`, `priceMax`, dan `priceNote` (contoh ada di Sate Frozen).
- Jangan hapus tanda kutip `"` dan koma `,` di ujung baris.

## 3. Mengatur nomor WhatsApp, alamat, jam, dan Maps

Di `script.js`, bagian paling atas **`const CONFIG`**:

| Isian | Contoh | Catatan |
|---|---|---|
| `whatsappNumber` | `"081234567890"` | Angka saja. Awalan 0 otomatis jadi 62. Kosong = tombol menampilkan "nomor belum diatur". |
| `address` | `"Jl. ... No. ..."` | Kosong = tampil "Informasi alamat akan segera tersedia". |
| `hours` | `"Setiap hari\n17.00 – 23.00"` | `\n` = baris baru. |
| `mapsUrl` | `"https://maps.app.goo.gl/..."` | Buka Google Maps → cari lokasi → Bagikan → Salin tautan. Kosong = tombol petunjuk arah disembunyikan. |
| `siteUrl` | `"https://..."` | Isi setelah website terbit (untuk QR code). |
| `showDraftNotice` | `false` | Ubah ke `false` setelah semua harga dikonfirmasi pemilik. |

Hanya isi data yang sudah dipastikan benar oleh pemilik.

## 4. Mengganti foto

1. Siapkan foto, sebaiknya lebar maksimal 1000 px dan format **WebP** atau JPG agar ringan (aplikasi gratis seperti Squoosh bisa mengecilkan foto).
2. Beri nama sederhana, mis. `nasi-kucing.webp`, lalu masukkan ke folder `assets`.
3. Di `script.js`, pada baris menu tersebut isi:
   `image: "assets/nasi-kucing.webp", imageAlt: "Seporsi nasi kucing"`
4. Jika `image` kosong atau fotonya gagal dimuat, otomatis tampil kotak "Foto menu menyusul".
5. Hanya pakai foto milik sendiri atau gambar yang boleh dipakai secara legal. Jangan memakai foto ilustrasi dan menyebutnya foto asli produk.

Ganti foto utama dengan menimpa file di `assets` memakai nama yang sama.

## 5. Mengganti favicon dan teks "Tentang"

- Favicon: timpa `assets/favicon.png` dengan logo persegi (64×64 px atau lebih).
- Teks Tentang: ubah `aboutText` di `CONFIG`. Jangan menulis tahun berdiri, penghargaan, atau klaim lain yang belum dibuktikan.

## 6. Mengunggah ke GitHub (dari HP)

1. Buat akun di github.com, lalu buka tab **Repositories → New**.
2. Nama repositori: `angkringan-prapatan-16`. Pilih **Public**. Klik **Create repository**.
3. Klik **uploading an existing file**, pilih semua file dan folder `assets` (di HP, unggah file satu per satu atau kelompok; folder `assets` bisa dibuat dengan mengetik `assets/nama-file.webp` pada kolom nama file saat membuat file baru).
4. Klik **Commit changes**.

## 7. Menerbitkan gratis

### Opsi A — GitHub Pages
1. Di repositori: **Settings → Pages**.
2. **Source:** Deploy from a branch. **Branch:** `main`, folder `/ (root)`. Klik **Save**.
3. Tunggu 1–3 menit. Alamat permanen muncul di halaman yang sama, bentuknya `https://NAMAANDA.github.io/angkringan-prapatan-16/`.

### Opsi B — Netlify
1. Buka netlify.com, daftar gratis.
2. **Add new site → Import an existing project** → pilih GitHub → pilih repositori.
3. Biarkan kolom build kosong, klik **Deploy**.
4. Alamat permanen berbentuk `https://nama-situs.netlify.app` (nama bisa diubah di **Site configuration**).

**Catatan biaya:** alamat gratis memakai subdomain penyedia (`github.io` atau `netlify.app`). Domain sendiri seperti `angkringanprapatan16.com` perlu dibeli dan berbayar per tahun.

## 8. Membuat QR code

1. Setelah punya alamat permanen (langkah 7), buka `script.js` dan isi `siteUrl` dengan alamat itu, mis. `"https://namaanda.github.io/angkringan-prapatan-16/"`. Simpan dan unggah ulang.
2. Muat ulang website. Bagian **Buka Menu dari QR Code** akan menampilkan QR yang berfungsi.
3. **Ketergantungan eksternal:** gambar QR dibuat oleh layanan gratis `api.qrserver.com`. Yang dikirim hanya alamat website yang memang publik, tanpa data pribadi. Jika layanan itu tidak tersedia, QR tidak muncul. Alternatifnya, buat QR sendiri di generator QR gratis lain dengan memasukkan alamat yang sama, lalu simpan gambarnya.
4. **Mencetak untuk meja:**
   - Tekan **Buka gambar QR untuk dicetak**, simpan gambarnya.
   - Cetak minimal ukuran 4×4 cm (idealnya 5×5 cm) di kertas putih, tinta gelap.
   - Beri tulisan seperti "Pindai untuk lihat menu", lalu laminating agar tahan air.
   - Uji pindai dengan 2 HP berbeda sebelum dipasang.
5. Jangan membuat QR sebelum alamat permanen ada. QR untuk alamat sementara akan rusak.

## 9. Memperbarui website saat menu berubah

1. Buka repositori di GitHub → klik `script.js` → ikon pensil (Edit).
2. Ubah harga atau menu → **Commit changes**.
3. Tunggu 1–3 menit, lalu muat ulang website (tarik layar ke bawah, atau buka tab pribadi bila tampilan lama masih muncul).

## 10. Pengujian cepat dari HP

- Buka alamat website. Cek tidak ada geser ke samping.
- Ketik "mie" di pencarian: harus muncul 4 menu mie.
- Pilih tiap kategori: jumlahnya Sate & Bakaran 10, Makanan 3, Mie 4, Minuman 13.
- Tekan "Pesan via WhatsApp": WhatsApp terbuka dengan pesan berisi nama menu dan harga.
- Cek alamat, jam, dan tombol petunjuk arah sudah sesuai data pemilik.

## Catatan penting

- Tombol WhatsApp hanya membuka chat dengan pesan siap kirim. Website tidak mencatat pesanan, pembayaran, atau stok.
- Foto menu cetak menampilkan beberapa item lain (mis. bakso bakar, udang bakar, aneka gorengan) yang tidak ada di daftar harga. Tanyakan pemilik apakah perlu ditambahkan.
- Foto hero sudah dipotong agar spanduk toko lain tidak ikut, tetapi masih ada dua orang di tepi foto. Pastikan pemilik dan orang yang tampak setuju fotonya dipakai.
