# Mehmet Furkan Güngör — Portfolyo

Next.js App Router, React, TypeScript, Tailwind CSS, GSAP ve Lenis ile hazırlanmış kişisel portfolyo.

## Yerel geliştirme

Node.js 20.9+ ve pnpm gerektirir. Bağımlılık sürümleri `pnpm-lock.yaml` içinde sabitlenmiştir.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm test
pnpm build
pnpm start
```

## İçerik

- Üç yatay kaydırmalı çalışma satırı: 13 dikey Reels, 1 yatay tanıtım, 3 belgesel.
- Hakkımda, iş deneyimi, programlar, dijital pazarlama, ekipman ve eğitim.
- Instagram, YouTube ve e-posta bağlantıları.
- Mobil ve masaüstüne uyarlanan giriş; yerel portre ve proje kapakları.

## Dosyalar

- `data/work-videos.ts`: Google Drive videoları ve kapakları.
- `data/projects.ts`: Belgeseller, proje tipleri ve video koleksiyonları.
- `data/profile.ts`: Portre ve profil bilgileri.
- `data/software.ts`, `data/experience.ts`: Programlar, markalar, ekipman ve pazarlama içerikleri.
- `components/sections/`: Sayfa bölümleri ve video satırı.
- `components/media/ProjectMedia.tsx`: Kullanıcı tıklayınca yüklenen oynatıcı.
- `lib/media.ts`: Google Drive, YouTube, Vimeo ve yerel video bağlantıları.
- `app/globals.css`, `styles/tokens.css`: Duyarlı tasarım ve görsel kimlik.

Video dosyaları depoda tutulmaz; oynatma Drive ve YouTube üzerinden yapılır. Ekrandan çıkan oynatıcılar kaldırılır. Hareket azaltma tercihi desteklenir.

## Vercel

Depoyu Vercel'e aktarırken framework olarak **Next.js**, kök dizin olarak **.** kullanın. Derleme komutu `pnpm build`; çıktı dizini Next.js varsayılanıdır. Site için ortam değişkeni gerekmez.

Mevcut önizlemede arama motoru indekslemesi kapalıdır (`app/layout.tsx`). Canlı yayın hazırlanırken bu tercih değerlendirilmelidir. Beştaş ve Beyaz Gelinlik, YouTube'un gömülü oynatıcısında hata vermektedir; doğrudan YouTube bağlantısı bulunur ve videonun YouTube hesap ayarlarının kontrol edilmesi gerekir.

`docs/` önceki uygulama kararlarını ve kontrol notlarını içerir; eski notlar tarihsel kayıt niteliğindedir. `artifacts/`, `.next/`, `node_modules/` ve yerel ortam dosyaları Git'e dahil edilmez.
