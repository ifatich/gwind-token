# Gwind - Pegadaian Design System

## Tentang Gwind
Gwind adalah design token berbasis pada Tailwind yang mendukung pengembangan proyek Digital pada Pegadaian. Design Token ini menggunakan teknologi:
- **Tailwind CSS**: Library CSS.
- **Sass**: Preprocessor CSS untuk mempermudah styling.

Gwind bertujuan menyediakan solusi desain yang konsisten dan efisien, mendukung pengembangan aplikasi Pegadaian dengan standar desain modern.

---

## Getting started

### Instalasi
Pastikan Anda sudah menginstal *prerequisite* berikut:
- **Node.js**: Versi 18 atau lebih baru.
- **npm**: Versi 8 atau lebih baru.
atau Anda bisa menggunakan
- **pnpm**: Versi 9 atau lebih baru.

```bash
npm config set registry https://artifactory.pegadaian.co.id/repository/npm-group-1/
```

Setelah berhasil Anda bisa langsung instalasi dengan cara : 

```bash
npm install @pegadaian/gwind -D

```

## Langkah Konfigurasi untuk Proyek Vue

### Konfigurasi tailwind.config.js

```bash
import { gwindTwBase, gwindTheme } from "@pegadaian/gwind";  
  
const config = {  
  content: ['./public/index.html', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: 'class',  
  theme: {  
    ...gwindTheme
  },  
  plugins: [gwindTwBase],  
};

export default config;  
```

### Perhatikan pada baris kode dibawah
```bash
  theme: {  
    ...gwindTheme
  },  
  plugins: [gwindTwBase]
```

## Struktur Branch untuk Pengembangan Gwind
- `master`: Branch yang berisi versi stabil dari Gwind. Branch ini digunakan untuk merilis package ke Artifactory Pegadaian.
- `dev/gwind`: Branch pengembangan utama. Semua fitur baru atau perbaikan akan di-review di branch ini sebelum di-merge ke master.

## Cara Berkontribusi pada Gwind
Kami sangat mengapresiasi kontribusi dari developer lain untuk menambahkan komponen baru, memperbaiki styling, atau memperbaiki bug pada komponen yang ada.

### Langkah-Langkah Kontribusi

1. **Fork dan Clone Repository**
   - Fork repository `Gwind` ke akun git kamu.
   - Clone repository fork kamu:
     ```bash
     git clone https://repo.pegadaian.co.id/client/pegadaian-ui-kit-vue.git

     cd gwind
     ```

2. **Checkout Branch Pengembangan**
   - Pastikan kamu selalu bekerja dari branch pengembangan, `dev/gwind`:
     ```bash
     git checkout dev/gwind
     ```

3. **Buat Branch Baru dari `dev/gwind`**
   - **Untuk Penambahan Design Token Baru:**
     - Buat branch baru dengan penamaan `dev/gwind/add-(nama-token)`:
     - Contoh jika kamu melakukan penambahan komponen button : 
       ```bash
       git checkout -b dev/gwind/add-radius-token
       ```

   - **Untuk Update atau Bug Fixing Token yang Ada:**
     - Buat branch baru dengan penamaan `dev/gwind/update-(nama-token)`:
     - Contoh jika kamu melakukan penambahan komponen button : 
       ```bash
       git checkout -b dev/gwind/update-radius-token
       ```

4. **Mulai Pengembangan**
   - **Penambahan Design Token Baru:**
     - Tambahkan komponen baru sesuai dengan standar kode yang telah disepakati.
     - Pastikan untuk menulis komentar dan menambahkan dokumentasi yang relevan.
  
   - **Update atau Bug Fixing:**
     - Perbaiki bug atau update styling komponen yang ada.
     - Tambahkan komentar untuk memastikan perubahan tersebut.

5. **Commit dan Push**
   - Buat commit yang jelas dan deskriptif:
     ```bash
     git commit -m "Add Design Token radius (sm, md, lg, xl, and 2xl)"
     git push origin dev-add-button
     ```

6. **Buka Merge Request (MR)**
   - Setelah selesai, buka Merge Request ke branch `dev/gwind`.
   - Tambahkan deskripsi lengkap mengenai perubahan dan penambahan yang kamu lakukan.

7. **Code Review**
   - Merge Request kamu akan di-review oleh maintainer proyek dari **Pegadaian Design**.
   - Jika ada catatan, lakukan perbaikan berdasarkan umpan balik yang diberikan.

8. **Merge ke `dev/gwind`**
   - Setelah review selesai, request akan di-merge ke `gwind`.

# Penting Diperhatikan 
### Penamaan Branch

- **Penambahan Komponen Baru:**
  - Branch name: `dev/gwind/add-(nama-token)`
  - Contoh: `dev/gwind/add-radius-token`, `dev/gwind/add-container-token`

- **Perbaikan atau Update Komponen yang Ada:**
  - Branch name: `dev/gwind/update-(nama-token)`
  - Contoh: `dev/gwind/update-radius-token`, `dev/gwind/update-container-token`

### Praktik Terbaik

- **Coding Style:** Ikuti pedoman coding style yang ada dalam proyek ini.
- **Test:** Selalu tambahkan atau perbarui unit tests untuk memastikan kode yang kamu tambahkan atau ubah berfungsi dengan baik.
- **Dokumentasi:** Jangan lupa untuk menambahkan atau memperbarui dokumentasi jika kamu menambahkan fitur baru atau mengubah yang sudah ada.
- **Jaga Kualitas:** Semua kode harus melalui proses review dan testing sebelum di-merge ke branch `gwind`.

---

Terima kasih telah berkontribusi ke `Gwind!` Kami sangat menghargai usaha dan waktu yang kamu luangkan untuk membuat proyek ini menjadi lebih baik.
### ♡ Pegadaian Design ♡
### Love 🫰, Regard 🤝 and Cheers 🍻 