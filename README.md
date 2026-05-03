# gwind-v2 (Design Tokens)

Design token berbasis Tailwind CSS v4 untuk ekosistem aplikasi PT Pegadaian. Library ini menyediakan nilai desain yang konsisten seperti warna, tipografi, dan tema yang dioptimalkan untuk performa tinggi dan kemudahan integrasi.

## Fitur Utama
- **Tailwind CSS v4 Native**: Menggunakan engine Oxide terbaru tanpa ketergantungan PostCSS.
- **Micro Frontend Ready**: Ekspor variabel CSS murni untuk konsumsi runtime antar aplikasi.
- **shadcn/ui Compatible**: Penamaan token selaras dengan standar industri.

---

## Getting Started

### Instalasi

```bash
npm install gwind-v2 -D
# atau
pnpm add gwind-v2 -D
```

### Penggunaan (Tailwind v4)

Pada Tailwind v4, Anda cukup mengimpor file CSS yang disediakan langsung ke dalam entry point CSS Anda:

```css
/* app.css */
@import "tailwindcss";
@import "gwind-v2/gwind.css";
```

Atau jika Anda hanya ingin mengimpor variabel CSS dan memetakan tema sendiri:

```css
@import "tailwindcss";
@import "gwind-v2/base.css";
@import "gwind-v2/theme.css";
```

### Penggunaan (Legacy / Tailwind v3)

Jika Anda masih menggunakan `tailwind.config.js`:

```javascript
import { gwindTheme } from "gwind-v2";

export default {
  theme: {
    ...gwindTheme
  }
}
```

---

## Pengembangan

### Build
Untuk melakukan build ulang token (menghasilkan JS dan CSS):
```bash
npm run build
```

---

### ♡ Pegadaian Design ♡
### Love 🫰, Regard 🤝 and Cheers 🍻