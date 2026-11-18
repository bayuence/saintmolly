# Saint Molly (saintmolly.com) — Coming Soon Landing Page

Website resmi brand **Saint Molly** (Fase 1: Pre-Launch / Teaser Page).
Mengusung prinsip desain **Ultra-Minimalist**, **Pure Dark (#000000)**, dan **Modern High-Contrast Typography**.

---

## 🎯 Spesifikasi & Fitur Fase 1
- **Zero-Bloat Performance**: Bundle ultra-ringan, First Contentful Paint (FCP) $< 0.8\text{s}$, skor Google Lighthouse target 98–100.
- **Ultra-Minimalist Layout**: Background murni `#000000` dengan elemen terpusat vertikal & horizontal (*centered flexbox*).
- **Hierarki Tipografi**:
  - Pre-title: `WELCOME` (`#A3A3A3`, uppercase, wide tracking)
  - Brand Headline: `SAINTMOLLY.COM` (`#FFFFFF`, uppercase, responsive 30px–72px)
  - Status Subtitle: `COMING SOON` (`#737373`, uppercase, extra wide tracking)
- **Presets Karakter Tipografi**: Konfigurasi modular di `src/constants/typography.js` (*Avant-Garde (Syne)*, *Editorial Luxury (Cinzel)*, *Bold Industrial (Oswald)*).
- **SEO & Social Share Ready**: Lengkap dengan Open Graph tags, Twitter Card, & metadata.

---

## 📂 Struktur Folder
```text
saintmolly-web/
├── public/                        # Aset statis publik
│   ├── favicon.ico                # Ikon browser Saint Molly
│   └── og-image.jpg               # Pratinjau link media sosial (Open Graph)
├── src/
│   ├── components/                # Komponen modular
│   │   └── landing/               # Komponen landing page
│   │       └── ComingSoonHero.jsx # Hero terpusat
│   ├── styles/                    # Konfigurasi style
│   │   └── globals.css            # Direktif Tailwind CSS
│   ├── constants/                 # Konfigurasi tipografi & tema
│   │   └── typography.js          # Preset font (Avant-Garde, Editorial, Industrial)
│   ├── App.jsx                    # Root app
│   └── main.jsx                   # Entry point React
├── index.html                     # HTML template, Google Fonts & Meta SEO
├── tailwind.config.js             # Konfigurasi tema warna & typography
├── package.json                   # Dependensi minimal
└── README.md                      # Panduan proyek
```

---

## 🚀 Panduan Instalasi & Menjalankan Lokal

1. **Install dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Akses di browser: `http://localhost:5173`

3. **Build produksi**:
   ```bash
   npm run build
   ```
   Output file produksi akan berada di folder `dist/` dengan ukuran bundle sangat kecil ($< 150\text{ KB}$).

4. **Preview build produksi**:
   ```bash
   npm run preview
   ```

---

## 🌐 Panduan Deployment

### Vercel
1. Hubungkan repository GitHub ke [Vercel](https://vercel.com).
2. Framework preset akan terdeteksi otomatis sebagai **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Sambungkan custom domain `saintmolly.com` pada pengaturan domain Vercel.

### Cloudflare Pages
1. Hubungkan repository ke Cloudflare Pages.
2. Build preset: **Vite** (`npm run build`, folder `dist`).
3. Tambahkan custom domain `saintmolly.com` dengan SSL otomatis.
