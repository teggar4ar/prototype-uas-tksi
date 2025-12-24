# 📋 Daftar Tugas Proyek
## AI-Based Plant Disease Early Detection System (Prototype)

---

## 📁 Struktur File yang Akan Dibuat

```
prototype-uas/
├── index.html              # Halaman utama (entry point)
├── css/
│   └── styles.css          # File styling utama
├── js/
│   └── app.js              # Logic dan interaksi JavaScript
├── pages/
│   ├── homepage.html       # Halaman beranda
│   ├── detection.html      # Halaman fitur deteksi
│   ├── upload.html         # Halaman upload gambar
│   ├── loading.html        # Halaman loading/proses
│   ├── result.html         # Halaman hasil analisis
│   └── recommendation.html # Halaman rekomendasi pengobatan
├── data/
│   └── diseases.js         # Data dummy penyakit tanaman
├── assets/
│   └── images/             # Folder untuk gambar (placeholder)
├── project-description.txt
└── TASKS.md
```

---

## 🎨 Konfigurasi Design

| Elemen | Nilai |
|--------|-------|
| Primary Color | `#2E7D32` (hijau tua) |
| Secondary Color | `#A5D6A7` (hijau muda) |
| Background Color | `#F9FAF7` (putih keabuan) |
| Max Width Container | `390px` |
| Layout | Mobile-first, single column |
| Icon Library | Font Awesome (CDN) |
| Bahasa | Indonesia |

---

## ✅ Daftar Tugas

### Fase 1: Setup Proyek
- [DONE] 1.1 Membuat struktur folder (css, js, pages, data, assets)
- [DONE] 1.2 Membuat file CSS utama dengan variabel warna dan base styling
- [DONE] 1.3 Membuat file JavaScript utama dengan fungsi navigasi
- [DONE] 1.4 Membuat file data dummy penyakit tanaman

### Fase 2: Halaman Landing/Splash (index.html)
- [DONE] 2.1 Membuat layout halaman splash
- [DONE] 2.2 Menambahkan headline dan deskripsi singkat
- [DONE] 2.3 Membuat tombol CTA "Mulai Deteksi"
- [DONE] 2.4 Styling responsive mobile-first

### Fase 3: Halaman Homepage (homepage.html)
- [DONE] 3.1 Membuat layout halaman beranda
- [DONE] 3.2 Menambahkan teks selamat datang
- [DONE] 3.3 Membuat kartu fitur (feature cards)
- [DONE] 3.4 Menambahkan tombol navigasi

### Fase 4: Halaman Deteksi Penyakit (detection.html)
- [DONE] 4.1 Membuat layout halaman deteksi
- [DONE] 4.2 Menambahkan instruksi penggunaan
- [DONE] 4.3 Menjelaskan langkah-langkah proses
- [DONE] 4.4 Menambahkan tombol untuk lanjut ke upload

### Fase 5: Halaman Upload Gambar (upload.html)
- [DONE] 5.1 Membuat layout halaman upload
- [DONE] 5.2 Membuat area upload gambar (drag & drop style)
- [DONE] 5.3 Menambahkan preview gambar yang diupload
- [DONE] 5.4 Membuat tombol "Analisis Sekarang"
- [DONE] 5.5 Implementasi fungsi upload dan preview JavaScript

### Fase 6: Halaman Loading/Proses (loading.html)
- [DONE] 6.1 Membuat layout halaman loading
- [DONE] 6.2 Membuat animasi spinner/loading
- [DONE] 6.3 Menambahkan teks status proses
- [DONE] 6.4 Implementasi simulasi delay dan redirect otomatis

### Fase 7: Halaman Hasil Analisis (result.html)
- [DONE] 7.1 Membuat layout halaman hasil
- [DONE] 7.2 Menampilkan preview gambar yang diupload
- [DONE] 7.3 Menampilkan nama penyakit (dari data dummy)
- [DONE] 7.4 Menampilkan persentase kepercayaan (confidence)
- [DONE] 7.5 Menambahkan tombol ke halaman rekomendasi

### Fase 8: Halaman Rekomendasi (recommendation.html)
- [DONE] 8.1 Membuat layout halaman rekomendasi
- [DONE] 8.2 Menampilkan langkah-langkah pengobatan
- [DONE] 8.3 Menambahkan catatan/disclaimer
- [DONE] 8.4 Membuat tombol "Kembali ke Beranda"

### Fase 9: Data Dummy Penyakit
- [DONE] 9.1 Membuat minimal 5 data penyakit tanaman
- [DONE] 9.2 Setiap penyakit memiliki: nama, deskripsi, confidence, rekomendasi
- [DONE] 9.3 Implementasi fungsi random selection

### Fase 10: Integrasi & Pengujian
- [DONE] 10.1 Menghubungkan semua halaman (navigasi)
- [DONE] 10.2 Memastikan flow user berjalan lancar
- [DONE] 10.3 Testing responsive di berbagai ukuran layar
- [DONE] 10.4 Final review dan perbaikan bug

---

## 📝 Data Dummy Penyakit (Contoh)

| No | Nama Penyakit | Confidence | 
|----|---------------|------------|
| 1 | Bercak Daun (Leaf Spot) | 85-95% |
| 2 | Embun Tepung (Powdery Mildew) | 80-92% |
| 3 | Hawar Daun (Leaf Blight) | 78-90% |
| 4 | Busuk Daun (Leaf Rot) | 82-94% |
| 5 | Karat Daun (Leaf Rust) | 75-88% |

---

## 🚀 Prioritas Pengerjaan

1. **Tinggi**: Fase 1-2 (Setup & Landing Page)
2. **Tinggi**: Fase 5-7 (Upload, Loading, Result - core feature)
3. **Sedang**: Fase 3-4 (Homepage & Detection)
4. **Sedang**: Fase 8-9 (Recommendation & Data)
5. **Rendah**: Fase 10 (Testing & Polish)

---

## 📌 Catatan Penting

- Semua halaman harus menggunakan pendekatan **mobile-first**
- Container utama dibatasi maksimal **390px**
- Tombol harus **touch-friendly** (minimal tinggi 44px)
- Prototype ini untuk keperluan **akademis** (simulasi, bukan AI nyata)
- Gambar placeholder akan diganti manual oleh user

---

*Terakhir diperbarui: 24 Desember 2024*
